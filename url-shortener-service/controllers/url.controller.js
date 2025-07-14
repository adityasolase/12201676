const db = require('../services/db.service');
const codegen = require('../utils/codegen');
const Log = require('../../logging-middleware/logMiddleware');

exports.createShortUrl = async (req, res) => {
  const { url, validity = 30, shortcode } = req.body;

  if (!url) {
    await Log('backend', 'error', 'handler', 'URL missing');
    return res.status(400).json({ error: 'URL required' });
  }

  let code = shortcode || codegen();
  if (db[code]) {
    await Log('backend', 'warn', 'handler', 'Code already in use');
    return res.status(409).json({ error: 'Code in use' });
  }

  const expiry = new Date(Date.now() + validity * 60000);
  db[code] = { url, expiry, createdAt: new Date(), clicks: [] };

  await Log('backend', 'info', 'controller', `Short URL created with code: ${code}`);
  res.status(201).json({
    shortLink: `http://localhost:3000/${code}`,
    expiry: expiry.toISOString()
  });
};

exports.getUrlStats = async (req, res) => {
  const { shortcode } = req.params;
  const entry = db[shortcode];

  if (!entry) {
    await Log('backend', 'error', 'repository', 'Shortcode not found for stats');
    return res.status(404).json({ error: 'Shortcode not found' });
  }

  res.status(200).json({
    originalURL: entry.url,
    createdAt: entry.createdAt,
    expiry: entry.expiry,
    totalClicks: entry.clicks.length,
    clicks: entry.clicks
  });
};
