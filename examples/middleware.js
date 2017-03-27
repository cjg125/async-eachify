const forEach = require('../dist/index')

var app = {
  queue: [],
  use: function (callback) {
    this.queue.push(callback)
  }
}

app.use(function (next) {
  console.log(this)
  setTimeout(() => {
    console.log(1)
    next()
  }, 1000)
})

app.use(function (next) {
  console.log(this)
  setTimeout(() => {
    console.log(2)
    next()
  }, 1000)
})

var ctx = {
  res: {},
  req: {}
}

forEach(app.queue, (loop, next) => {
  loop.value.call(ctx, next)
})