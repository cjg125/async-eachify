/*!
 * async-eachify.js v1.2.0
 * (c) 2017 cjg
 * Released under the MIT License.
 */
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.asyncEachify = factory());
}(this, (function () { 'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function asyncEachify() {
  var queue = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  if (!(this instanceof asyncEachify)) {
    return new asyncEachify(queue, callback, options);
  }

  _extends(this, {
    queue: queue,
    callback: callback,
    index: 0,
    len: queue.length,
    async: false,
    interval: 0
  }, options);

  this.next();
}

asyncEachify.prototype.next = function () {
  var _this = this;

  var index = this.index,
      len = this.len;


  if (index >= len) {
    return;
  }

  var loop = {
    index: index,
    len: len,
    value: this.queue[index],
    first: index === 0,
    last: index === len - 1
  };

  this.index += 1;
  if (this.async) {
    setTimeout(function () {
      return _this.callback(loop, function () {
        return _this.next();
      });
    }, this.interval);
    return;
  }
  this.callback(loop, function () {
    return _this.next();
  });
};

return asyncEachify;

})));
//# sourceMappingURL=index.js.map
