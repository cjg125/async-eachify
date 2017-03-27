const forEach = require('../dist/index')

forEach(['a', 'b', 'c', 'd', 'e'], (loop, next) => {
  console.log(loop)
  next()
})