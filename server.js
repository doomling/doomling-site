const express = require("express");
const next = require("next");

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
const urls = require("./config/urls.json");
const compression = require("compression");
const cookieParser = require("cookie-parser");

app.prepare().then(() => {
  const server = express();

  server.use(cookieParser());
  server.use(compression());

  Object.keys(urls).map(function(url, index) {
    const href = urls[url];

    server.get(url, (req, res) => {
      const hasParams = Object.keys(req.params).length;
      const hasQuery = Object.keys(req.query).length;

      return app.render(req, res, href, hasParams ? req.params : req.query);
    });
  });

  server.get("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(port, err => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
