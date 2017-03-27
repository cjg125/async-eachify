function asyncEachify(queue = [], callback = () => {}, options = {}) {
  if (!(this instanceof asyncEachify)) {
    return new asyncEachify(queue, callback, options)
  }

  Object.assign(this, {
    queue,
    callback,
    index: 0,
    len: queue.length,
    async: false,
    interval: 0
  }, options)

  this.next()
}

asyncEachify.prototype.next = function () {
  let {
    index,
    len
  } = this

  if (index >= len) {
    return
  }

  let loop = {
    index,
    len,
    value: this.queue[index],
    first: index === 0,
    last: index === len - 1,
  }

  this.index += 1
  if (this.async) {
    setTimeout(() => this.callback(loop, () => this.next()), this.interval)
    return
  }
  this.callback(loop, () => this.next())
}

export default asyncEachify