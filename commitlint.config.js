// .commitlintrc.js
/** @type {import('cz-git').UserConfig} */
module.exports = { 
  extends: [
    "@commitlint/config-conventional"
  ],
  rules: {
    // @see: https://commitlint.js.org/#/reference-rules
    'type-enum': [
      2,
      'always',
      [
        'bug', // 此项特别针对bug号，用于向测试反馈bug列表的bug修改情况
        'feat', // 新功能（feature）
        'fix', // 修补bug
        'docs', // 文档（documentation）
        'style', // 格式（不影响代码运行的变动）
        'refactor', // 重构（即不是新增功能，也不是修改bug的代码变动）
        'test', // 增加测试
        'chore', // 构建过程或辅助工具的变动
        'revert', // feat(pencil): add ‘graphiteWidth’ option (撤销之前的commit)
        'merge' // 合并分支， 例如： merge（前端页面）： feature-xxxx修改线程地址
      ]
    ]
  },
  prompt: {
    messages: {
      type: "选择你要提交的类型 :",
      scope: "选择一个提交范围（可选）:",
      // customScope: "请输入自定义的提交范围 :",
      // subject: "填写简短精炼的变更描述 :\n",
      // body: '填写更加详细的变更描述（可选）。使用 "|" 换行 :\n',
      // breaking: '列举非兼容性重大的变更（可选）。使用 "|" 换行 :\n',
      // footerPrefixsSelect: "选择关联issue前缀（可选）:",
      // customFooterPrefixs: "输入自定义issue前缀 :",
      // footer: "列举关联issue (可选) 例如: #31, #I3244 :\n",
      confirmCommit: "是否提交或修改commit ?"
    },
    types: [
      {value: 'feat',     name: 'feat:     新增功能 | A new feature'},
      {value: 'fix',      name: 'fix:      修复缺陷 | A bug fix'},
      {value: 'docs',     name: 'docs:     文档更新 | Documentation only changes'},
      {value: 'style',    name: 'style:    代码格式 | Changes that do not affect the meaning of the code'},
      {value: 'refactor', name: 'refactor: 代码重构 | A code change that neither fixes a bug nor adds a feature'},
      {value: 'perf',     name: 'perf:     性能提升 | A code change that improves performance'},
      {value: 'test',     name: 'test:     测试相关 | Adding missing tests or correcting existing tests'},
      {value: 'build',    name: 'build:    构建相关 | Changes that affect the build system or external dependencies'},
      {value: 'ci',       name: 'ci:       持续集成 | Changes to our CI configuration files and scripts'},
      {value: 'revert',   name: 'revert:   回退代码 | Revert to a commit'},
      {value: 'chore',    name: 'chore:    其他修改 | Other changes that do not modify src or test files'},
    ],
    useEmoji: false,
    themeColorCode: "",
    scopes: [],
    allowCustomScopes: true,
    allowEmptyScopes: true,
    customScopesAlign: "bottom",
    customScopesAlias: "custom",
    emptyScopesAlias: "empty",
    upperCaseSubject: false,
    markBreakingChangeMode: false,
    allowBreakingChanges: ['feat', 'fix'],
    breaklineNumber: 100,
    breaklineChar: "|",
    skipQuestions: [],
    issuePrefixs: [
      // 如果使用 gitee 作为开发管理
      { value: "link", name: "link:     链接 ISSUES 进行中"},
      { value: "closed", name: "closed:   标记 ISSUES 已完成" }
      ],
    customIssuePrefixsAlign: "top",
    emptyIssuePrefixsAlias: "skip",
    customIssuePrefixsAlias: "custom",
    allowCustomIssuePrefixs: true,
    allowEmptyIssuePrefixs: true,
    confirmColorize: true,
    maxHeaderLength: Infinity,
    maxSubjectLength: Infinity,
    minSubjectLength: 0,
    scopeOverrides: undefined,
    defaultBody: "",
    defaultIssues: "",
    defaultScope: "",
    defaultSubject: ""
  }
};
