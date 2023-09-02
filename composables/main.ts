/* 菜单列表 */
export const useMenuList = () => [
  {
    to: '/',
    label: '博客',
    desc: 'Blog'
  },
  {
    to: '/',
    label: '项目',
    desc: 'Project'
  },
  {
    to: '/login',
    label: '介绍',
    desc: 'Introduction'
  }
]

/* 菜单个人信息列表 */
export const useMenuInfo = () => [
  {
    icon: 'i-game-icons-phone',
    label: '13553984605'
  },
  {
    icon: 'i-game-icons-envelope',
    label: '53842108@qq.com'
  }
]

/* main pinia store */
export const useMainStore = defineStore('main', () => {
  // 切换深色、浅色模式
  const handleMode = useToggle(useDark())

  // 切换菜单显示
  const showMenu = ref(false)

  return { handleMode, showMenu }
})