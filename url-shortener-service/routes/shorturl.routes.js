const express = require('express');
const router = express.Router();
const { createShortUrl, getUrlStats } = require('../controllers/url.controller');
const Log = require('../../logging-middleware/logMiddleware');

router.post('/', createShortUrl);
router.get('/:shortcode', getUrlStats);


router.use(async (req, res) => {
  await Log('backend', 'warn', 'route', `Unknown route accessed: ${req.originalUrl}`);
  res.status(404).json({ error: 'Route not found' });
});

module.exports = router;
