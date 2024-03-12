const path = require("path");

// Gives the directory name of the main module's filename (app.js)
module.exports = path.dirname(require.main.filename);
