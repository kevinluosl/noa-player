NOA-Player
=========

HTML5 无广告播放器

![搜狐播放截图](http://luo.today/style/images/sh.png?raw=true "搜狐播放截图")

使用说明
=========

访问http://luo.today 查看使用说明。

支持的浏览器:  支持video标签的浏览器，推荐Safari, Chrome

支持的网站:    优酷, 搜狐

因为优酷和搜狐的m3u8流的加载速度实在是不快，在高峰时段经常卡出翔，因此全部换成mp4流，mp4流是分段式的，播放速度比m3u8快很多，目测已达到flash播放版的速度，只不过现在每次加载不同段落时会有停顿感，以后我希望可以做到无缝衔接。


TODO List
==========

1. 继续修复bugs。
2. mp4分段采用后台预加载形式，无缝衔接每段mp4，我尝试了2个video来回切换，但在全屏模式下会有问题。暂时换回了一个video。对video标签还不是很熟悉，待更多的研究后再来修改。
2. 支持更多的网站。
3. 更多的贡献者参与项目。


其他
=========

做这个东西是因为一直用一个叫 ‘妈妈计划’ 的无广告播放器看视频，心血来潮自己也弄着玩，也是因为看了妈妈计划的代码才让我非常快速的找到优酷的视频地址算法，节约了很多时间，谢谢。

我的播放器和妈妈计划的区别目前在于多了选集列表，全采用分段mp4流(m3u8有时候实在卡)，自动播放分段，手动选择分。




