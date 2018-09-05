
# 3d-box

## 介绍

**3d-box** —— 炫酷简单的3d照片盒子。

- 官网：[lilu1814.github.io/3d-box/](https://lilu1814.github.io/3d-box.github.io/)
- 文档：[https://lilu1814.github.io/3d-box.github.io/]
- 源码：(https://github.com/lilu1814/3d-box) （欢迎 star）


## 下载

- 直接下载：[https://github.com/lilu1814/3d-box]
- 使用`npm`下载：`npm install 3d-box` 
- 使用`bower`下载：`bower install 3d-box`
- 使用CDN：[https://unpkg.com/3d-box@0.0.4/dist/module.js]


### 如何使用

```html
<template>

 <div>
     <d3-box :images="images"></d3-box>
 </div>
</template>
<script>
import {d3box} from '3d-box'// import slider components

var images = []
for(var i=0;i<12;i++){
images.push('https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3835697576,1221857629&fm=26&gp=0.jpg')
}
export default {
   el: '#app',
   data () {
      return {
        //Image list
       images
       
      }
    },
    components: {
        d3box
    },
    methods: {
    
    }
}
</script>
```


## 运行 demo

- 下载源码 `git clone git@github.com:lilu1814/3d-box.git`
- 进入目录 `cd 3dBox`
- 打开 `index.html`

## 交流

### QQ 群

以下 QQ 群欢迎加入交流问题（可能有些群已经满员）

### 提问
- 直接在 [github issues](https://github.com/lilu1814/3d-box/issues) 提交问题


## 关于作者

如果你感觉有收获，欢迎给我打赏 ———— 以激励我更多输出优质开源内容
