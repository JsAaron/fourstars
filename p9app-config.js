/**
 * 统一配置文件
 * @author Jie.
 */
const as_config = {
	// 平台版本
	platform: 'p9',
	// 版本号
	cloudVersion: '6.6.7',
	// 后端地址 
	rootPath: 'http://im.p9cloud.cn',
	loginSetting: {
		// 登录模式：0-无需登录、1-登录后才能跳转首页、2-按需打开登录页面进行登录、3-子应用模式
		loginModel: 0,
	},
	// 在线预览地址
	docPath: 'http://view.yunagile.com',
	// 附件组件图标地址
	fileIconUrl: 'http://www.yunagile.cn:10000/p9app/static/file/',
	// 颜色设置
	color: {
		// 默认主题，light-浅色模式、dark-深色模式
		theme: 'light',
		// 主题色
		mainColor: '#2999FB',
		mainActiveColor: '#288AE0',
		redColor: '#e03636',
		// 顶部导航栏颜色
		navBackColor: '#ffffff',
		navTextColor: '#000000'
	},
	// 底部导航栏文字多语言设置，无需适配多语言，请删除
	tabBar: ['tabbar.msg', 'tabbar.apps', 'tabbar.contacts', 'tabbar.my'],
	// 消息推送配置
	push: {
		appId: '',
		appKey: '',
		enable: false
	},
	// 开发设置
	devSetting: {
		// 是否打印请求日志
		printRequestLog: false,
		// bessionid通过header方式传入
		bidByHeader: true,
		// 登录超时操作，0-自动重新登录，1-提示用户并跳转至登录页面
		sessionTimeout: 0,
		// 系统默认语言，auto-跟随系统，zh_CN-简体中文，en_US-英文
		language: 'auto',
		// 系统默认字体大小，0.9-小、1.0-标准、1.1-大、1.2-最大
		fontSize: 1.0,
	}
}

export default as_config