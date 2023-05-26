"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CompositeRule = void 0;
class CompositeRule {
  constructor(rules) {
    this.rules = rules;
  }
  handle(data) {
    this.rules.forEach(rule => {
      rule.handle(data);
    });
  }
}
exports.CompositeRule = CompositeRule;