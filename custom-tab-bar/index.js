
Component({
  data: {
    value: 0,
    tabBar: [
      {url: '/pages/home/home', icon: 'home', ariaLabel: '首页' },
      {url: '/pages/topic/topic', icon: 'layers', ariaLabel: '专题' },
      {url: '/pages/history/history', icon: 'history', ariaLabel: '历史' },
      {url: '/pages/mine/mine', icon: 'user', ariaLabel: '我的' },
    ],
  },

  methods: {
    onChange(e) {
      this.setData({
        value: e.detail.value,
      });
      wx.switchTab({
        url: this.data.tabBar[e.detail.value].url
      });
    },
    init() {
      const page = getCurrentPages().pop();
      this.setData({
        value: this.data.tabBar.findIndex(item => item.url === `/${page.route}`)
      });
    }
  },
});
