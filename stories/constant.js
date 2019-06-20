import React from 'react'
// https://www.sohu.com/a/126253548_544887
// Instagram 滤镜大全
// https://blog.csdn.net/ws1352864983/article/details/74188512

/**
 (function(){var c = ["_1977","aden","brannan","brooklyn","clarendon","earlybird","gingham","hudson","inkwell","kelvin","lark","lofi","maven","mayfair","moon","nashville","perpetua","reyes","rise","slumber","stinson","toaster",
 "valencia","walden","willow","xpro2"];document.head.insertAdjacentHTML("beforeend",'');var
 b=document.createElement("select");b.style.padding="5px";b.innerHTML=c.map(function(d){return '<option value="' + d + '">' + d + '</option>'}).join('');var a=document.createElement("label");a.style.margin="0 5px 0 20px";a.innerHTML="后期效果：";document.querySelector('.bilibili-player-video-control-bottom-left').appendChild(a);document.querySelector('.bilibili-player-video-control-bottom-left').appendChild(b);b.addEventListener("change",function()
 {document.querySelector(".bilibili-player-video").className="bilibili-player-video "+this.value})})();
 */

export const filterArray = [
  {
    type: 'blur',
    name: '模糊',
    description: `filter:blur(5px)`,
  }, {
    type: 'brightness',
    name: '亮度',
    description: 'filter:brightness(1.4)',
  }, {
    type: 'contrast',
    name: '对比度',
    description: 'filter:contrast(200%)',
  }, {
    type: 'dropShadow',
    name: '投影',
    description: 'filter:drop-shadow(4px 4px 8px blue)',
  }, {
    type: 'grayscale',
    name: '灰度',
    description: 'filter:grayscale(50%)',
  }, {
    type: 'hueRotate',
    name: '色调变化',
    description: 'filter:hue-rotate(90deg)',
  }, {
    type: 'invert',
    name: '反相',
    description: 'filter:invert(75%)',
  }, {
    type: 'opacity',
    name: '透明度',
    description: 'filter:opacity(25%)',
  }, {
    type: 'saturate',
    name: '饱和度',
    description: 'filter:saturate(230%)',
  }, {
    type: 'sepia',
    name: '褐色',
    description: 'filter:sepia(60%)',
  }
]

export const filterMixArray = [
  {
    type: 'night',
    name: '模拟黑夜',
    description: '适用范围：复古风格',
  }, {
    type: 'girl',
    name: '模拟梦幻'
  }, {
    type: '1977',
    name: '1977',
    description: '在Instagram的众多滤镜中，1997和Kelvin一样，所存在的意义并不大。\n适用范围：复古滤镜。'
  }, {
    type: 'aden',
    name: 'Aden风格',
    description: '奢华复古、英伦风格，引导潮流前线\n让阴影无处容身的Aden',
  }, {
    type: 'brannan',
    name: 'brannan',
    description: 'Brannan 有点像大学时跟你约会的男孩，虽然很漂亮，但总有一种猜不透的感觉。\n适用范围：充满艺术家气质的作品，营造一种难以接近的距离感',
  }, {
    type: 'brooklyn',
    name: 'Brooklyn是美国城市布鲁克林区',
    description: '布鲁克林在十九世纪时有树之城，家之城和教堂之城等昵称，比起对岸的世界之都曼哈顿来，这里有些乡土气息，环境更适宜居住',
  }, {
    type: 'clarendon',
    name: 'Clarendon风格',
    description: 'Clarendon 作为Ins一度最受欢迎的滤镜，可用于强化阴影及调亮（ 这里为突出效果还加了一点光影 ）',
  }, {
    type: 'earlybird',
    name: 'Earlybird滤镜',
    description: 'Earlybird 是 Instagram 最讨喜的一款滤镜，深受大众欢迎。\n适用范围：光线不理想的情况'
  }, {
    type: 'gingham',
    name: 'gingham',
  }, {
    type: 'hudson',
    name: 'hudson',
    description: '透过 Hudson 看世界，即便是阳光明媚的海滩也会瞬间变得冰冷透心.\n适用范围：适用于室外环境，如现代化的建筑物，时髦的跑车等',
  }, {
    type: 'inkwell',
    name: 'inkwell',
    description: '我们已经淮备好进入 Inkwell 黑与白的世界。\n适用范围：要营造出光影明暗带来的历史感',
  }, {
    type: 'kelvin',
    name: 'kelvin',
    description: '适用范围：带有挖苦，讽刺意味的情况',
  }, {
    type: 'lark',
    name: 'lark',
  }, {
    type: 'lofi',
    name: 'lofi',
    description: 'Lo-Fi 像是天使与魔鬼同在的一款滤镜，既能把照片处理得明艳照人，也能摧毁糟蹋至不堪入目。\n适用范围：拍摄食物。但自拍时请慎用',
  }, {
    type: 'maven',
    name: 'maven',
  }, {
    type: 'mayfair',
    name: 'mayfair',
    description: '如果你对滤镜完全一窍不通，但又想通过它们美化照片，这时使用Mayfair就最为稳妥。\n适用范围：任何照片',
  }, {
    type: 'moon',
    name: 'moon',
  }, {
    type: 'nashville',
    name: 'nashville',
    description: 'Nashville 是 Instagram 众多滤镜中最惊豔的一款，独特的奶昔色调赋予照片童话般的唯美感觉。\n适用范围：营造浪漫唯美的感觉',
  }, {
    type: 'perpetua',
    name: 'perpetua',
    description: '平淡但永久的Perpetua',
  }, {
    type: 'reyes',
    name: 'reyes',
  }, {
    type: 'rise',
    name: 'rise',
    description: 'Rise 彷如初升的太阳，让万物覆盖上柔和的光芒。\n适用范围：让皮肤看起来平滑且充满光泽'
  }, {
    type: 'slumber',
    name: 'slumber',
    description: '没睡醒的Slumber',
  }, {
    type: 'stinson',
    name: 'stinson',
  }, {
    type: 'toaster',
    name: 'toaster',
    description: 'Toaster 能营造出阳光照射下金灿灿的感觉。\n适用范围：营造朝气蓬勃的感觉',
  }, {
    type: 'valencia',
    name: 'valencia',
    description: 'Valencia 能让淡雅的色彩更加突出，让整张照片充满活力。\n适用范围：色调沉闷的照片，如暗淡的粉色系',
  }, {
    type: 'walden',
    name: 'walden',
    description: '适用范围：室外的人物或景像，尤其适用于小孩和宠物',
  }, {
    type: 'willow',
    name: 'willow',
    description: 'Willow 与黑白色调相似，却更为柔和。\n适用范围：自拍照，能在一定程度上遮掩瑕疵'
  }, {
    type: 'xpro2',
    name: 'xpro2',
    description: 'X Pro II 色调最为和谐的增亮滤镜，不会造成刺眼感。\n适用范围：色彩突出鲜明的照片，例如烈焰红唇，灰暗天空下的一块绿草地',
  }, {
    type: 'sketch',
    name: '素描效果',
    description: '该效果使用与风景',
    img: 'https://www.zhangxinxu.com/study/201903/css-idea/example.jpg',
    style: (img) => ({ background: `url(${img}) -2px -2px, url(${img})`, backgroundSize: 'contain' }),
  }, {
    type: 'watercolor',
    name: '水彩效果',
  // }, {
  //   type: 'pencil',
  //   name: '彩铅效果'
  }
]

export const filterApplyArray = [
  {
    type: 'blur',
    name: '封面图模糊处理',
  }, {
    type: 'blur',
    name: '弹窗聚焦，页面元素模糊',
  }, {
    type: 'dropShadow',
    name: '任意图形区域，产生投影效果',
  }, {
    type: 'grayscale',
    name: '徽章点亮',
    style: () => ({ filter: 'grayscale(100%)' })
  }, {
    type: 'brightness',
    name: '图标变色',
    style: () => ({ filter: 'brightness(2)' })
  }, {
    type: 'radialBlur',
    name: '镜像模糊',
    children: (img) => (<div style={{ width: '400px', height: '400px', position: 'relative', overflow: 'hidden' }}>
      <img src={img} className="radial-blur" />
      <img src={img} />
    </div>)
  }, {
    type: 'partBlur',
    name: '局部模糊',
    children: (img) => (<div style={{ width: '400px', height: '400px', position: 'relative', overflow: 'hidden' }}>
      <img src={img} className="radial-blur" />
      <img src={img} />
    </div>) 
  }, {
    type: 'pulse',
    name: '色相旋转',
  }
]

import maskImg1 from '../src/components/BlendMode/mask/bright.jpg'
import maskImg2 from '../src/components/BlendMode/mask/diffuse.jpg'
import maskImg3 from '../src/components/BlendMode/mask/rains.jpg'
import maskImg4 from '../src/components/BlendMode/mask/snow.jpg'

export const blendModeArray = [
  {
    type: 'screen',
    name: '滤色模式',
    maskImg: maskImg1,
    children: () => (<div><img src={maskImg1} /></div>),
    description: 'sreen滤色的计算公式：C = 255 - ((255 - A) * (255 - B)) / 255 \n mix-blend-mode: screen;\n 适合黑色背景图片的点缀效果',
  }, {
    type: 'normal',
    name: '正常',
    children: () => (<div><img src={maskImg1} /></div>),
    description: '',
  }, {
    type: 'multiply',
    name: '正片叠底',
    children: () => (<div><img src={maskImg1} /></div>),
    description: '',
  }, {
    type: 'overlay',
    name: '叠加',
    children: () => (<div><img src={maskImg1} /></div>),
    description: '',
  }, {
    type: 'darken',
    name: '变暗',
    children: () => (<div><img src={maskImg1} /></div>),
    description: '',
  }, {
    type: 'lighten',
    name: '变亮',
    children: () => (<div><img src={maskImg1} /></div>),
    description: '',
  }, {
    type: 'color-dodge',
    name: '颜色减淡',
    children: () => (<div><img src={maskImg1} /></div>),
    description: '',
  }, {
    type: 'color-burn',
    name: '颜色加深',
    children: () => (<div><img src={maskImg1} /></div>),
    description: '',
  }, {
    type: 'hard-ligh',
    name: '强光',
    children: () => (<div><img src={maskImg1} /></div>),
    description: '',
  }, {
    type: 'soft-light',
    name: '柔光',
    children: () => (<div><img src={maskImg1} /></div>),
    description: '',
  }, {
    type: 'difference',
    name: '差值',
    children: () => (<div><img src={maskImg1} /></div>),
    description: '',
  }, {
    type: 'exclusion',
    name: '排除',
    children: () => (<div><img src={maskImg1} /></div>),
    description: '',
  }, {
    type: 'hue',
    name: '色相',
    children: () => (<div><img src={maskImg1} /></div>),
    description: '',
  }, {
    type: 'saturation',
    name: '饱和度',
    children: () => (<div><img src={maskImg1} /></div>),
    description: '',
  }, {
    type: 'color',
    name: '颜色',
    children: () => (<div><img src={maskImg1} /></div>),
    description: '',
  }, {
    type: 'luminosity',
    name: '亮度',
    children: () => (<div><img src={maskImg1} /></div>),
    description: '',
  }
]

const carouselData = [{
  img: 'https://hq-static.smartstudy.com/web/garden/jx321ijy_8BWgeqdMyEtOzkVN3Prje5dI.jpg',
}, {
  img: 'https://hq-static.smartstudy.com/web/garden/jx3216dp_OlFWWH1ViKSlU8oa77cUddz5.jpg',
}, {
  img: 'https://hq-static.smartstudy.com/web/garden/jx31zhi2_5v3U0XRlUlngs3ffOBcuCKFz.jpg',
}, {
  img: 'https://hq-static.smartstudy.com/web/garden/jx31uvu2_ikqw9l6z9RXgUSv1tXbMTCg0.JPG',
}]

export const carouselArray = [
  {
    type: '',
    name: '没有效果',
    data: carouselData,
  }, {
    type: 'clipCircle',
    name: '单个圆形扩展动效',
    data: carouselData,
    description: 'circle(半径 at 圆心坐标)',
  }, {
    type: 'clipTriangle',
    name: '三角效果扩展',
    data: carouselData,
  }, {
    type: 'clipRect',
    name: '带圆角的矩形',
    data: carouselData,
  }, {
    type: 'clipDiamond',
    name: '菱形效果扩展',
    data: carouselData,
  }, {
    type: 'clipRectSp',
    name: '十字星到矩形效果',
    data: carouselData,
  }, {
    type: 'clipSector',
    name: '扇形效果扩展',
    data: carouselData,
  }, {
    type: 'svgMask',
    name: 'Svg 图形遮罩',
    data: carouselData,
  }, {
    type: 'filter',
    name: '配合滤镜效果',
    data: carouselData,
  }
]

export const timeCount = () => {
  var eleCircles=document.querySelectorAll(".time-count circle");
  var eleTimeSec=document.querySelector(".time-second");
  var perimeter=Math.PI*2*170;
  var circleInit=function(){
    if(eleCircles[1]){
      eleCircles[1].style.strokeDasharray = "1069 1069"
    }
    if(eleCircles[2]){
      eleCircles[2].style.strokeDasharray = perimeter/2+" 1069"
    }
    eleTimeSec.innerHTML="10"
  };
  if (window.timerTimeCount) {
    clearInterval(window.timerTimeCount)
    window.timerTimeCount = null
  }
  var fnTimeCount=function(b){
    if(window.timerTimeCount){return}
    var b=b||10;
    var a=function(){
      var c=b/10;
      if(eleCircles[1]){
        // console.log(perimeter*c)
        eleCircles[1].style.strokeDasharray = perimeter*c+" 1069"
      }
      if(eleCircles[2]&&b<=5){
        eleCircles[2].style.strokeDasharray = perimeter*c+" 1069"
      }
      if(eleTimeSec){
        eleTimeSec.innerHTML=b
      }
      b--;
      if(b<0){
        clearInterval(window.timerTimeCount);
        window.timerTimeCount=null;
        console.log("时间到！");
        circleInit()
      }
    };
  a();
  window.timerTimeCount=setInterval(a,1000)};
  fnTimeCount();
}

export const timeCountCss = () => {
  // 元素
  var eleCircle = document.getElementById('circle');
  var eleSeconds = document.getElementById('seconds');

  // 圆环状态还原
  var circleInit = function () {
    eleCircle.style.clipPath = '';
    
    eleSeconds.innerHTML = '10';
  };

  var timerTimeCount = null;
  var fnTimeCount = function (seconds) {
    if (timerTimeCount) {
      return;	
    }
    // 倒计时方法
    var seconds = seconds || 10;

    var step = function () {
      // 圆环匹配
      var percent = seconds / 10;
      
      // clip-path严格来讲是个扇形
      // 但polygon只能连接直线，因此，这个扇形半径就要处理的足够大，例如，500这样子
      // 于是有公式
      // x=a+rcosθ
          // y=b+rsinθ
      var a = 150, b = 150, r = 500;
      var angle = Math.PI / 180 * (360 * percent - 90);
      var x = a + r * Math.cos(angle);
      var y = b + r * Math.sin(angle);
      
      // 总共7个点
      var p1 = [a, b];
      var p2 = [a, b];
      var p3 = [a, b];
      var p4 = [a, b];
      var p5 = [a, b];
      var p6 = [a, b];
      var p7 = [a, b];
      
      if (x < a) {
        p2 = [a, b - r];
        p3 = [a + r, b - r];
        p4 = [a + r, b + r];
        p5 = [a, b + r];
        p6 = [a - r, b];
        p7 = [x, y];
        if (y > b) {
          p6 = p7;
        }
      } else {
        p2 = [a, b - r];
        p3 = [a + r, b - r];
        p4 = [a + r, b];
        p5 = [x, y];
        p6 = p5;
        p7 = p5;
        if (y < b) {
          p4 = [x, y];
        }
      }
      eleCircle.style.clipPath = 'polygon(' + (function () {
        return [p1, p2, p3, p4, p5, p6, p7].map(function (arr) {
          return arr.map(function (pos) {
            return pos + 'px';
          }).join(' ');
        }).join();	
      })() + ')';
      
      eleSeconds.innerHTML = seconds;

      seconds--;

      if (seconds < 0) {
        clearInterval(timerTimeCount);
        timerTimeCount = null;
        // 显示弹框
        console.log('时间到！');
        // 圆环状态还原
        circleInit();
      }
    };

    step();

    timerTimeCount = setInterval(step, 1000);
  };

  fnTimeCount();
}