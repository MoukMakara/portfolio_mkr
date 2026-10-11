// Compatibility shim for Node.js 27 nightlies, where `req.headers` is a null-prototype
// object. Next.js 16.4 calls `headers.hasOwnProperty(...)`, which then throws and every
// request returns 500. This restores the normal prototype on each incoming request.
// It does nothing on Node <= 26. Safe to delete once Next.js supports Node 27.
const major = Number(process.versions.node.split(".")[0]);

if (major >= 27) {
  const http = require("node:http");

  const withPrototype = (value) => {
    if (value && typeof value === "object" && Object.getPrototypeOf(value) === null) {
      Object.setPrototypeOf(value, Object.prototype);
    }
    return value;
  };

  const originalEmit = http.Server.prototype.emit;
  http.Server.prototype.emit = function emit(event, req, ...rest) {
    if ((event === "request" || event === "upgrade") && req) {
      withPrototype(req.headers);
      withPrototype(req.trailers);
    }
    return originalEmit.call(this, event, req, ...rest);
  };
}
