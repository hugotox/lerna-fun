import { sayHello } from '../src'

describe('sayHello', () => {
  it('returns the greeting', () => {
    expect(sayHello('World')).toEqual('Hello, World - 2')
  })
})
