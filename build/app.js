"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _usuariosRoutes = _interopRequireDefault(require("./routes/usuarios.routes.js"));
var _autenticationRoutes = _interopRequireDefault(require("./routes/autentication.routes.js"));
var _servicioRoutes = _interopRequireDefault(require("./routes/servicio.routes.js"));
var _indexRoutes = _interopRequireDefault(require("./routes/index.routes.js"));
var _morgan = _interopRequireDefault(require("morgan"));
var _cookieParser = _interopRequireDefault(require("cookie-parser"));
var _cors = _interopRequireDefault(require("cors"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// diferrentes accesos por http

var app = (0, _express["default"])();
app.use((0, _cors["default"])({
  origin: 'http://localhost:5173',
  credentials: true
}));
app.use((0, _morgan["default"])('dev'));
app.use(_express["default"].json());
app.use((0, _cookieParser["default"])());
app.use('/api', _indexRoutes["default"]);
app.use('/api', _usuariosRoutes["default"]);
app.use('/api', _autenticationRoutes["default"]);
app.use('/api', _servicioRoutes["default"]);
app.use(function (req, res, next) {
  res.status(404).json({
    message: 'endpoint not found'
  });
});
var _default = exports["default"] = app;