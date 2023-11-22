"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registerSchema = exports.loginSchema = void 0;
var _zod = require("zod");
var registerSchema = exports.registerSchema = _zod.z.object({
  nombre: _zod.z.string({
    required_error: 'nombre es requerido   '
  }),
  apellido: _zod.z.string({
    required_error: 'apellido es requerido  '
  }),
  email: _zod.z.string({
    required_error: 'correo es requerido  '
  }).email({
    required_error: 'ivalid email  '
  }),
  telefono: _zod.z.string({
    required_error: 'telefono es requerido  '
  }),
  contraseña: _zod.z.string({
    required_error: 'username es requerido  '
  }).min(8, {
    required_error: 'minimo 6 caracteres  '
  })
});
var loginSchema = exports.loginSchema = _zod.z.object({
  email: _zod.z.string({
    required_error: ' correo es requerido'
  }).email({
    required_error: 'ivalid email'
  }),
  contraseña: _zod.z.string({
    required_error: 'password es requerido'
  }).min(8, {
    required_error: 'minimo 6 caracteres'
  })
});