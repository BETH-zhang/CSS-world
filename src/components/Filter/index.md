<table class="reference"> <tbody><tr> <th style="width:20%">Filter</th> <th style="width:68%">描述</th> </tr> <tr> <td>none</td> <td>默认值，没有效果。</td> </tr> <tr> <td>blur(<em>px</em>)</td> <td>给图像设置高斯模糊。"radius"一值设定高斯函数的标准差，或者是屏幕上以多少像素融在一起， 所以值越大越模糊；<br><br>如果没有设定值，则默认是0；这个参数可设置css长度值，但不接受百分比值。</td> </tr> <tr> <td>brightness(<em>%</em>)</td> <td>给图片应用一种线性乘法，使其看起来更亮或更暗。如果值是0%，图像会全黑。值是100%，则图像无变化。其他的值对应线性乘数效果。值超过100%也是可以的，图像会比原来更亮。如果没有设定值，默认是1。</td> </tr> <tr> <td>contrast(<em>%</em>)</td> <td>调整图像的对比度。值是0%的话，图像会全黑。值是100%，图像不变。值可以超过100%，意味着会运用更低的对比。若没有设置值，默认是1。</td> </tr> <tr> <td>drop-shadow(<em>h-shadow v-shadow blur spread color</em>)</td> <td><p>给图像设置一个阴影效果。阴影是合成在图像下面，可以有模糊度的，可以以特定颜色画出的遮罩图的偏移版本。 函数接受&lt;shadow&gt;(在CSS3背景中定义)类型的值，除了"inset"关键字是不允许的。该函数与已有的box-shadow box-shadow属性很相似；不同之处在于，通过滤镜，一些浏览器为了更好的性能会提供硬件加速。<code style="font-style: normal;line-height: 1.5">&lt;shadow&gt;参数如下：</code></p><code style="font-style: normal;line-height: 1.5"> <dl> <dt><strong>&lt;offset-x&gt;</strong> <strong>&lt;offset-y&gt;</strong> <small>(必须)</small></dt> <dd>这是设置阴影偏移量的两个 &lt;length&gt;值. <strong>&lt;offset-x&gt;</strong>&nbsp;设定水平方向距离. 负值会使阴影出现在元素左边. <strong>&lt;offset-y&gt;</strong>设定垂直距离.负值会使阴影出现在元素上方。查看<strong>&lt;length&gt;</strong>可能的单位.<br> <strong><font face="Open Sans, sans-serif">如果两个值都是</font>0</strong>, 则阴影出现在元素正后面 (如果设置了<span style="line-height: 1.5">&nbsp;</span><code style="font-style: normal;line-height: 1.5">&lt;blur-radius&gt;<span style="line-height: 1.5">&nbsp;and/or&nbsp;</span><code style="font-style: normal;line-height: 1.5">&lt;spread-radius&gt;，<span style="line-height: 1.5">会有模糊效果</span><span style="line-height: 1.5">).</span></code></code></dd><code style="font-style: normal;line-height: 1.5"><code style="font-style: normal;line-height: 1.5"> <dt><strong>&lt;blur-radius&gt;</strong> <small>(可选)</small></dt> <dd>这是第三个code&gt;&lt;length&gt;值. 值越大，越模糊，则阴影会变得更大更淡.不允许负值 若未设定，默认是0&nbsp;(则阴影的边界很锐利).</dd> <dt><strong>&lt;spread-radius&gt;</strong> <small>(可选)</small></dt> <dd>这是第四个 &lt;length&gt;值. 正值会使阴影扩张和变大，负值会是阴影缩小.若未设定，默认是0&nbsp;(阴影会与元素一样大小).&nbsp;<br> 注意: Webkit, 以及一些其他浏览器 不支持第四个长度，如果加了也不会渲染。</dd> <dt>&nbsp;</dt> <dt><strong>&lt;color&gt;</strong> <small>(可选)</small></dt> <dd>查看 &lt;color&gt;该值可能的关键字和标记。若未设定，颜色值基于浏览器。在Gecko&nbsp;(Firefox), Presto (Opera)和Trident (Internet Explorer)中， 会应用color<strong>color</strong>属性的值。另外, 如果颜色值省略，WebKit中阴影是透明的。</dd> </code></code></dl><code style="font-style: normal;line-height: 1.5"><code style="font-style: normal;line-height: 1.5"> </code></code></code></td> </tr> <tr> <td>grayscale(<em>%</em>)</td> <td><p>将图像转换为灰度图像。值定义转换的比例。值为100%则完全转为灰度图像，值为0%图像无变化。值在0%到100%之间，则是效果的线性乘子。若未设置，值默认是0；</p></td> </tr> <tr> <td>hue-rotate(<em>deg</em>)</td> <td><p>给图像应用色相旋转。"angle"一值设定图像会被调整的色环角度值。值为0deg，则图像无变化。若值未设置，默认值是0deg。该值虽然没有最大值，超过360deg的值相当于又绕一圈。</p></td> </tr> <tr> <td>invert(<em>%</em>)</td> <td><p>反转输入图像。值定义转换的比例。100%的价值是完全反转。值为0%则图像无变化。值在0%和100%之间，则是效果的线性乘子。 若值未设置，值默认是0。</p></td> </tr> <tr> <td>opacity(<em>%</em>)</td> <td><p>转化图像的透明程度。值定义转换的比例。值为0%则是完全透明，值为100%则图像无变化。值在0%和100%之间，则是效果的线性乘子，也相当于图像样本乘以数量。 若值未设置，值默认是1。该函数与已有的opacity属性很相似，不同之处在于通过filter，一些浏览器为了提升性能会提供硬件加速。</p></td> </tr> <tr> <td>saturate(<em>%</em>)</td> <td><p>转换图像饱和度。值定义转换的比例。值为0%则是完全不饱和，值为100%则图像无变化。其他值，则是效果的线性乘子。超过100%的值是允许的，则有更高的饱和度。 若值未设置，值默认是1。</p></td> </tr> <tr> <td>sepia(<em>%</em>)</td> <td><p>将图像转换为深褐色。值定义转换的比例。值为100%则完全是深褐色的，值为0%图像无变化。值在0%到100%之间，则是效果的线性乘子。若未设置，值默认是0；</p></td> </tr> <tr> <td>url()</td> <td><p>URL函数接受一个XML文件，该文件设置了 一个SVG滤镜，且可以包含一个锚点来指定一个具体的滤镜元素。</p> <p>例如：</p> <pre class="prettyprint prettyprinted" style=""><span class="pln">filter</span><span class="pun">:</span><span class="pln"> url</span><span class="pun">(</span><span class="pln">svg</span><span class="pun">-</span><span class="pln">url</span><span class="com">#element-id)</span></pre></td> </tr> <tr> <td>initial</td> <td><p>设置属性为默认值，可参阅： <a href="css-initial.html">CSS initial 关键字</a></p></td> </tr> <tr> <td>inherit</td> <td>从父元素继承该属性，可参阅：<a href="css-inherit.html">CSS inherit 关键字</a></td> </tr> </tbody></table>


# 滤色模式的特性
任何颜色和黑色执行滤色，还是呈现原来的颜色；
任何颜色和白色执行滤色得到的是白色；
任何颜色和其他颜色执行滤色模式混合后的颜色会更浅，有点类似漂白的效果。