NOA-Player
=========

HTML5 无广告播放器


非常重要的说明
==========

支持的浏览器:  支持video标签的浏览器，推荐Safari, Chrome

支持的网站:    优酷, 搜狐


因为搜狐的m3u8流的加载速度实在是不快，在高峰时段经常卡出翔，因此全部换成mp4流，搜狐的mp4流是分段式的，播放速度比m3u8快很多，目测达到他flash播放器得速度，只不过现在每次加载不同段落时会有停顿感。优酷和是搜狐现在统一都使用了mp4流。


使用说明
=========

访问http://luo.today，查看使用说明



TODO Wish List
==========

1. 搜狐分段采用多段预加载形式，无缝衔接每段mp4，我尝试了2个video来回切换，但在全屏模式下会有问题。暂时换回了一个video。对video标签还不是很熟悉，待更多的研究后再来修改。
2. 支持更多的视频


感谢
=========

做这个东西是因为一直用一个叫 ‘妈妈计划’ 的无广告播放器看视频，心血来潮自己也弄着玩，是因为看了妈妈计划的代码才让我非常快速的找到优酷的视频地址算法，节约了很多时间，，谢谢。我的播放器和妈妈计划的区别目前在于多了选集列表，全采用mp4流(m3u8有时候实在卡)。




