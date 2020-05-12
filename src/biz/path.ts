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

export const goFind = function () {
  router.push({ name: RouterName.Find })
}

export const goMine = function () {
  router.push({ name: RouterName.Mine })
}

export const goBook = function (bookId: string) {
  router.push(`/book/${bookId}`)
}

export const goCatalog = function (bookId: string) {
  router.push(`/book/${bookId}/catalog`)
}

export const goChapter = function (bookId: string, chapterId: string) {
  router.push(`/book/${bookId}/${chapterId}`)
}

export const goUniverse = function (universeId: string) {
  router.push({ name: RouterName.Universe, params: { universeId } })
}

export const goWriter = function (writerId: string) {
  router.push({ name: RouterName.Writer })
}

export const goSettings = function () {
  router.push({ name: RouterName.Settings })
}

export const goBalance = function () {
  router.push({ name: RouterName.Balance })
}
