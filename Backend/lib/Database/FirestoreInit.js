"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = void 0;

var _admin = _interopRequireDefault(require("../Config/Firebase/admin"));

var dbConnection = _admin["default"].firestore();

var _default = dbConnection;
exports["default"] = _default;