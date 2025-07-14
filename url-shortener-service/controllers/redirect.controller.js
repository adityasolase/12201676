const db = require('../services/db.service');
const Log = require('../../logging-middleware');

module.exports = async (req, res) => {
  const code = req.params.code;
  const entry = db[code];

  if (!entry) {
    await Log('backend', 'error', 'route', 'Code not found');
    return res.status(404).send('Not found');
  }

  if (new Date() > entry.expiry) {
    await Log('backend', 'warn', 'route', 'Expired');
    return res.status(410).send('Expired');
  }

  entry.clicks.push({
    timestamp: new Date(),
    referrer: req.get('Referrer') || 'direct',
    location: 'India'
  });

  await Log('backend', 'info', 'route', `Redirected to ${entry.url}`);
  res.redirect(entry.url);
};
