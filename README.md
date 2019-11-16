# 知乎日报
- 抓取知乎日报接口

## API分析
- https://github.com/izzyleung/ZhihuDailyPurify/wiki/知乎日报-API-分析

## 设置跨域请求
- 配置config index.js
```
    env: require('./dev.env'),
    port: 8086,
    autoOpenBrowser: true,
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {
    	'/api': {
    		target: 'http://news-at.zhihu.com',
    		changeOrigin: true,
    		pathRewrite: {
          '^/api': '/api/4'
        }
    	}
    },
```

## 图片防盗链,参考链接
- http://www.cnblogs.com/dongcanliang/archive/2017/04/01/6655061.html

## other
> 知乎日报接口api