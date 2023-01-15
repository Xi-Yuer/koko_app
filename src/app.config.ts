export default defineAppConfig({
  lazyCodeLoading: "requiredComponents",
  pages: [
    "pages/shop/index",
    "pages/menu/index",
    "pages/car/index",
    "pages/mine/index",
  ],
  subpackages: [
    {
      root: "subPages",
      pages: [
        "pages/goods-detail/index",
        "pages/mine/about/index",
        "pages/mine/detail/index",
        "pages/mine/order/index",
        "pages/mine/setting/index",
        "pages/place-order/index",
      ],
    },
  ],
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "龙山生态甲鱼",
    navigationBarTextStyle: "black",
  },
  tabBar: {
    selectedColor: "#fe6d11",
    list: [
      {
        pagePath: "pages/shop/index",
        text: "首页",
        iconPath: "assets/img/tabar/shop.png",
        selectedIconPath: "assets/img/tabar/shop-s.png",
      },
      // {
      //   pagePath: "pages/menu/index",
      //   text: "点餐",
      //   iconPath: "assets/img/tabar/menu.png",
      //   selectedIconPath: "assets/img/tabar/menu-s.png",
      // },
      {
        pagePath: "pages/car/index",
        text: "购物车",
        iconPath: "assets/img/tabar/car.png",
        selectedIconPath: "assets/img/tabar/car-s.png",
      },
      {
        pagePath: "pages/mine/index",
        text: "我的",
        iconPath: "assets/img/tabar/mine.png",
        selectedIconPath: "assets/img/tabar/mine-s.png",
      },
    ],
  },
  requiredPrivateInfos: ["chooseAddress"],
});
