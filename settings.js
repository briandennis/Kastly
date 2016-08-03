const settings = {};

// Domain
settings.HOST = process.env.HOST || 'http://localhost:8000/';

// DB
settings.DB_NAME = process.env.DB_NAME || 'kastly';
settings.DB_LINK = process.env.DB_LINK || 'mongodb://localhost';

// Twitter API keys
settings.TWITTER_KEY = process.env.TWITTER_KEY || '';
settings.TWITTER_SECRET = process.env.TWITTER_SECRET || '';

module.exports = settings;
