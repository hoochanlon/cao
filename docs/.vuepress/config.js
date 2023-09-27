// .vuepress/config.js
import { defineUserConfig } from "@vuepress/cli";
import { defaultTheme } from "@vuepress/theme-default";
import { cut } from "nodejs-jieba";
import { searchProPlugin } from "vuepress-plugin-search-pro";

const base = <"/" | `/${string}/`>process.env["BASE"] || "/";

export default defineUserConfig({
  base,
  title: "Search Pro",
  description: "VuePress Client Search plugin",

  plugins: [
    searchProPlugin({
      indexContent: true,
      hotReload: true,
      customFields: [
        {
          getter: ({ frontmatter }) => frontmatter.tag as string[],
          formatter: `Tag: $content`,
        },
      ],
      indexOptions: {
        tokenize: (text, fieldName) =>
          fieldName === "id" ? [text] : cut(text, true),
      },
    }),
  ],
});

module.exports = {
    title: '《草》',
    description: '。',
    base: '/resume/', //项目文件夹设置目录
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
      repo: 'https://github.com/hoochanlon',
      search: false,
      nav: [
        // { text: '跳转首页', link: '/' },
        { text: 'CC-BY-NC 4.0', link: 'http://creativecommons.org/licenses/by-nc/4.0/' },
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
                  ['/hr/qizha','高校毕业生就业形势分析及对策（2023）'],
                  ['/hr/mianshixijie','面试过程中需要关注的（2023）'],
                ['/hr/sannian-hou-mianshi','工作三年脱离人才市场的教训（2023）'],
                ['/hr/jhrzcwdszz','在企业三年被辞退的经历（2023）']
                ]
              },
              {
                title: '回顾所在公司经历',   // 必要的
                collapsable: false, // 可选的, 默认值是 true,
                sidebarDepth: 1,    // 可选的, 默认值是 1
                children: [
                  ['/companyofchina/the-factory-trap','流水线工厂陷阱（2019）'],
                  ['/companyofchina/jiegou-it-waibao','解构非规范型服务企业（2020）'],
                  ['/companyofchina/caiyuan','企业裁员研究（2023）'],
                 ['/companyofchina/fxxkchina','公司概况·老员工·我个人境遇（2023）']
                ]
              },
              {
                title: '租房日记',   // 必要的
                collapsable: false, // 可选的, 默认值是 true,
                sidebarDepth: 1,    // 可选的, 默认值是 1
                children: [
                    ['/zufang-note/fxxkzf','租房防坑记录（2019）'],
                    ['/zufang-note/zufangxinzhi','龙岗坂田租房新知（2022）'],
                    ['/zufang-note/shiyouhuigu.md','再租房经历与室友回顾(2023)']
                ]
              }
            ]
          }
  }
