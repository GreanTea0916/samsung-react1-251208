import { create } from 'zustand'
import {
  combine,
  subscribeWithSelector,
  persist,
  devtools
} from 'zustand/middleware'

export const useCountStore = create(
  devtools(
    persist(
      subscribeWithSelector(
        combine(
          {
            count: 0,
            double: 0 // count * 2
          },
          (set, get) => {
            return {
              increase: () => {
                const { count } = get()
                set({
                  count: count + 1
                })
              }
            }
          }
        )
      ),
      {
        name: 'countStore',
        version: 1,
        partialize: state => {
          return {
            count: state.count
          }
        }
      }
    )
  )
)

// useCountStore.subscribe(선택자, 실행함수)
useCountStore.subscribe(
  state => state.count, // 선택자
  count => {
    useCountStore.setState({
      double: count * 2
    })
  } // 실행함수
)
