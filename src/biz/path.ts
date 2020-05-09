import router from '@/router'
import { RouterName } from '@/constant/enum'
export const goBack = function () {
  router.back()
}

export const goLogin = function () {
  router.push({ name: RouterName.Login })
}

export const goRegister = function () {
  router.push({ name: RouterName.Register })
}

export const goProtocol = function () {
  router.push({ name: RouterName.Protocol })
}

export const goAbout = function () {
  router.push({ name: RouterName.About })
}

export const goBookcase = function () {
  router.push({ name: RouterName.Bookcase })
}

export const goBoutique = function () {
  router.push({ name: RouterName.Boutique })
}

export const goFind = function () {
  router.push({ name: RouterName.Find })
}

export const goMine = function () {
  router.push({ name: RouterName.Mine })
}
