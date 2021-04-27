const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const { window } = new JSDOM();
const { document } = new JSDOM("<h1>test passes</h1>").window;
global.document = document;

const $ = require("jquery")(window);

module.exports = $;
