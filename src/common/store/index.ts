import initStore1 from '@/common/store/store1'
import initStore2 from '@/common/store/store2'

const appStore: any = {}

/**
 * 注册app状态库
 */
export const registerStore = () => {
  appStore.module1 = initStore1()
  appStore.module2 = initStore2()
}

export default appStore
