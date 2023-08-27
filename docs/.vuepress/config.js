module.exports = {
    title: '《泥与草》',
    description: '。',
    base: '/ni-yu-cao/', //项目文件夹设置目录
    head:[
      ['link', {rel:'icon', href:'favicon.ico'}]
    ],
    plugins: [
      // https://vuepress.github.io/zh/plugins 插件下载
      ['@vuepress/plugin-back-to-top'],//安装不了插件,建议非全局安装vue
      ['@vuepress/google-analytics',
      {
        'ga': 'UA-157837686-3' // UA-00000000-0
      }],
      // ['copyright', {
      //   noSelect: false,
      //   authorName:{
      //     "zh-CN": "hoochanlon",
      //     "en-US": "hoochanlon"
      //   }
      // }]
    ],
    themeConfig: {
      repo: 'https://github.com/hoochanlon/helpdesk-guide/',
      search: false,
      nav: [
        // { text: '跳转首页', link: '/' },
        { text: '本作品采用by-nc4.0知识协议进行许可', link: 'http://creativecommons.org/licenses/by-nc/4.0/' },
      ],
      editLinks: false,
      // 自定义编辑链接的文本。默认是 "Edit this page"
      editLinkText: '帮助我们改善内容',
        sidebar: [
          // 我的计划是从边缘桌面走向内部业务IT维护

              {
                title: '求职历程',   // 必要的
                collapsable: false, // 可选的, 默认值是 true,
                sidebarDepth: 1,    // 可选的, 默认值是 1
                children: [
                  ['/hr/diyici-qiuzhi','低学历往届生求职历程（2019）'],
                  ['/hr/ti-analysis','培训机构分析报告（2019）'],
                  ['/hr/hr-and-candidate','人力资源与应聘者（2020）'],
                  ['/hr/qizha','高校毕业生就业形势分析及对策（2023）']
                ]
              },
              {
                title: '回顾所在公司经历',   // 必要的
                collapsable: false, // 可选的, 默认值是 true,
                sidebarDepth: 1,    // 可选的, 默认值是 1
                children: [
                  ['/companyofchina/the-factory-trap','流水线工厂陷阱（2019）'],
                  ['/companyofchina/jiegou-it-waibao','解构非规范型服务企业（2020）']
                ]
              },
              {
                title: '租房日记',   // 必要的
                collapsable: false, // 可选的, 默认值是 true,
                sidebarDepth: 1,    // 可选的, 默认值是 1
                children: [
                    ['/zufang-note/fxxkzf','租房防坑记录（2019）'],
                      ['/zufang-note/zufangxinzhi','龙岗坂田租房新知（2022）'],
                ]
              }
            ]
          }
  }
