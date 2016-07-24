const settings = {};

// DB
settings.DB_NAME = process.env.DB_NAME || 'kastly';
settings.DB_USERNAME = process.env.DB_USERNAME || 'briandennis';
settings.DB_PASSWORD = process.env.DB_PASSWORD || '';


module.exports = settings;
