"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = exports.default = {
  methods: {
    toast(errors) {
      errors.map(error => {
        this.$toast.error(error.msg);
      });
    }
  }
};