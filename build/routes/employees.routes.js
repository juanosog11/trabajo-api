"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _employessControllers = require("../controllers/employess.controllers.js");
var router = (0, _express.Router)();
router.get('/employees', _employessControllers.getEmployees);
router.get('/employees/:id', _employessControllers.getEmployee);
router.post('/employees', _employessControllers.createEmployees);
router.patch('/employees/:id', _employessControllers.actualizarEmployees);
router["delete"]('/employees/:id', _employessControllers.EliminarEmployees);
var _default = exports["default"] = router;