import test from 'ava'
import each from '../dist/index'


test('test', t => {
  t.plan(5)
  each([1, 2, 3, 4, 5], function (loop, next) {
    t.pass()
    next()
  })
})

test.cb('test async', t => {
  t.plan(5)
  each([1, 2, 3, 4, 5], function (loop, next) {
    t.pass()
    next()
    if (loop.last){
      t.end()
    }
  }, {
    async: true,
    interval: 100
  })
})