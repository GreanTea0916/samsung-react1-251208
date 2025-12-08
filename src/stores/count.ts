import { create } from 'zustand'
import { combine } from 'zustand/middleware'

export const useCountStore = create(
  combine({
    count: 0
  }, (set, get) => {
    return {
      increase: () => {
        const { count } = get()
        set({
          count: count + 1
        })
      }
    }
  })
)