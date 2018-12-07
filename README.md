# 玩Android-小程序版

关注[wanandroid](http://www.wanandroid.com)有些时日了，一直以来也是鸿洋大神的粉丝，一直都有用他开放的[api](http://www.wanandroid.com/blog/show/2)此前是使用kotlin完成了一个版本【[wanandroid](https://github.com/leiyun1993/WanAndroid)】，这次我们使用微信小程序完成一个版本。

没有申请公众号并且小程序只支持https所以不能发体验，仅作为交流之用，希望大家看的开心、玩的愉快~

## 简介
开发工具：小程序开发工具1.02.1811290---[下载地址](https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html)

调试基础版本：2.4.1
 
## 项目截图

![image](https://github.com/leiyun1993/wanandroid-mini/raw/master/screenshot/1.jpg)
![image](https://github.com/leiyun1993/wanandroid-mini/raw/master/screenshot/2.jpg)
![image](https://github.com/leiyun1993/wanandroid-mini/raw/master/screenshot/3.jpg)
![image](https://github.com/leiyun1993/wanandroid-mini/raw/master/screenshot/4.jpg)
![image](https://github.com/leiyun1993/wanandroid-mini/raw/master/screenshot/5.jpg)
![image](https://github.com/leiyun1993/wanandroid-mini/raw/master/screenshot/6.jpg)
![image](https://github.com/leiyun1993/wanandroid-mini/raw/master/screenshot/7.jpg)
![image](https://github.com/leiyun1993/wanandroid-mini/raw/master/screenshot/8.jpg)
![image](https://github.com/leiyun1993/wanandroid-mini/raw/master/screenshot/9.jpg)
![image](https://github.com/leiyun1993/wanandroid-mini/raw/master/screenshot/10.jpg)
![image](https://github.com/leiyun1993/wanandroid-mini/raw/master/screenshot/11.jpg)
![image](https://github.com/leiyun1993/wanandroid-mini/raw/master/screenshot/12.jpg)
![image](https://github.com/leiyun1993/wanandroid-mini/raw/master/screenshot/13.jpg)

## 部分功能解析

### 1、网络请求
加入ES6 Promise 封装网络请求，同时处理登录时候的cookie保存，并持久化
``` JavaScript 
let request = (url, data, type) => new Promise((resolve, reject) => {
  wx.request({
    url: 'http://www.wanandroid.com' + url,
    data: data,
    method: type, // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
    header: {
      'content-type': 'application/x-www-form-urlencoded', // 默认值
      "cookie": wx.getStorageSync("cookie")
    },
    success: function(res) {
      // success
      if (res.data.errorCode === 0) {
        if (url == interfaces.INTERFACE_USER_LOGIN){
          wx.setStorageSync("cookie", res.header['Set-Cookie'])
        }
        resolve(res.data);
      } else {
        reject(res.data)
      }
    },
    fail: function(err) {
      // fail
      reject(err)
    },
    complete: function() {
      // complete
    }
  })
})
```
这样处理回调的时候就可以很简单的如下处理：
```JavaScript
import api from "../../api/api.js";
api.IPostCollect(id)
  .then(res => {
    //success
  })
  .catch(e => {
    //fail
  })
```

## 版本信息
### TODO
- [ ] 注册
### v1.0.0
- [x] 首页文章与Banner
- [x] 微信文章
- [x] 项目
- [x] 登录
- [x] 我的收藏
- [x] 知识体系
- [x] TODO工具
- [x] 搜索功能
- [x] 优化项目页瀑布流显示

## TKS
* 感谢鸿洋大神创建了这么好的学习网站[WanAndroid](http://www.wanandroid.com)

## License
```text
Copyright 2018 YunLei

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
```
