# -vue
### [router配置](https://www.cnblogs.com/SamWeb/p/6610733.html)

### src/components/map  
说明：json文件里面，每个地区的cp属性值为一个数组，里面包含两个数字，代表label标签（文字）的位置。  
[地图相关配置说明](https://blog.csdn.net/qq_21386275/article/details/79039024)
### echarts绘制的地图变形问题
aspectScale：这个属性用来控制地图的压缩比例，echarts默认源码中值为0.75，当值为0.75时，画出来的地图被横向压缩，看起来很不好看，调整该值的大小可以得到满意的缩放比例，将值设置为1时，地图将不会压缩。
