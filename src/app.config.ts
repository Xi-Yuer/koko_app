export default defineAppConfig({
  pages: [
    'pages/shop/index',
    'pages/menu/index',
    'pages/car/index',
    'pages/mine/index',
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: '龙山生态甲鱼',
    navigationBarTextStyle: 'black',
  },
  tabBar: {
    selectedColor: '#61b9e7',
    list: [
      {
        pagePath: 'pages/shop/index',
        text: '首页',
        iconPath: 'assets/img/tabar/shop.png',
        selectedIconPath: 'assets/img/tabar/shop-s.png',
      },
      {
        pagePath: 'pages/menu/index',
        text: '点餐',
        iconPath: 'assets/img/tabar/menu.png',
        selectedIconPath: 'assets/img/tabar/menu-s.png',
      },
      {
        pagePath: 'pages/car/index',
        text: '购物车',
        iconPath: 'assets/img/tabar/car.png',
        selectedIconPath: 'assets/img/tabar/car-s.png',
      },
      {
        pagePath: 'pages/mine/index',
        text: '我的',
        iconPath: 'assets/img/tabar/mine.png',
        selectedIconPath: 'assets/img/tabar/mine-s.png',
      },
    ],
  },
});
