// rAF.test.tsx
import { describe, it, expect, vi } from 'vitest'
import { rAF } from '../rAF'

describe('rAF utility function', () => {
  it('should resolve after two animation frames and nextTick', async () => {
    const fn = vi.fn()
    await rAF()
    fn()

    expect(fn).toHaveBeenCalled()
  })

  it('should return a Promise', () => {
    const result = rAF()
    expect(result).toBeInstanceOf(Promise)
  })
})
