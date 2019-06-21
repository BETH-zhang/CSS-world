export const createRandomColors = (num) => {
  const colors = []
  Array(num).fill(0).forEach(() => {
    const r = parseInt(Math.random() * 256);
    const g = parseInt(Math.random() * 256);
    const b = parseInt(Math.random() * 256);
    const rgb = randomColor()
    const hex = rgbPToHex(r, g, b)
    const hex1 = rgbStrToHex(rgb)
    const hsl = rgbToHsl(r, g, b)
    colors.push(rgb)
    colors.push(hex)
    colors.push(hex1)
    colors.push(hsl)
    // hsl
    // rgb -> hsl
    // hex -> rgb -> hsl
  })
  return colors
}

export const randomColor = () => {
  const r = parseInt(Math.random() * 256);
  const g = parseInt(Math.random() * 256);
  const b = parseInt(Math.random() * 256);
  const rgb = `rgb(${r}, ${g}, ${b})`
  return rgb;
}

export const rgbToHex = (r, g, b, a) => {
  if (r <= 255 && g <= 255 && b <=255) {
    rgbPToHex(r, g, b, a)
  } else if (r.indexOf('rgb') > -1 && r.indexOf('%')) {
    rgbPerToHex(r)
  } else if (r.indexOf('rgb') > -1) {
    rgbStrToHex(r)
  }
}

// 255, 25, 2
// ok
export const rgbPToHex = (r, g, b, a) => {
  let red = r.toString(16)
  let green = g.toString(16)
  let blue = b.toString(16)
  let opacity = a ? Math.round(a * 255).toString(16) : ''

  if (red.length === 1) {
    red = `0${red}`
  }
  if (green.length === 1) {
    green = `0${green}`
  }
  if (blue.length === 1) {
    blue = `0${blue}`
  }
  if (opacity && opacity.length === 1) {
    opacity = `0${opacity}`
  }
  const hex = `#${red}${green}${blue}${opacity}`
  return hex
}

// rgba(255, 25, 2)
// ok
export const rgbStrToHex = (rgb) => {
  // Choose correct separator
  let sep = rgb.indexOf(",") > -1 ? "," : " ";
  // Turn "rgb(r,g,b)" into [r,g,b]
  rgb = rgb.substr(4).split(")")[0].split(sep);

  let r = (+rgb[0]).toString(16),
      g = (+rgb[1]).toString(16),
      b = (+rgb[2]).toString(16);

  if (r.length == 1)
    r = "0" + r;
  if (g.length == 1)
    g = "0" + g;
  if (b.length == 1)
    b = "0" + b;

  return "#" + r + g + b;
}

// rgba(50%, 30%, 10%)
// rgba(50% 30% 10%)
export const rgbPerToHex = (rgba) => {
  let sep = rgb.indexOf(",") > -1 ? "," : " ";
  rgb = rgb.substr(4).split(")")[0].split(sep);

  // Convert %s to 0–255
  for (let R in rgb) {
    let r = rgb[R];
    if (r.indexOf("%") > -1)
      rgb[R] = Math.round(r.substr(0,r.length - 1) / 100 * 255);
      /* Example:
      75% -> 191
      75/100 = 0.75, * 255 = 191.25 -> 191
      */
  }
}

// ok
export const hexToRGB = (h, pct) => {
  let r = 0, g = 0, b = 0;
  let isPct = pct === true;

  if (h.length == 4) {
    r = "0x" + h[1] + h[1];
    g = "0x" + h[2] + h[2];
    b = "0x" + h[3] + h[3];
    
  } else if (h.length == 7) {
    r = "0x" + h[1] + h[2];
    g = "0x" + h[3] + h[4];
    b = "0x" + h[5] + h[6];
  }
    
  if (isPct) {
    r = +(r / 255 * 100).toFixed(1);
    g = +(g / 255 * 100).toFixed(1);
    b = +(b / 255 * 100).toFixed(1);
  }
  
  return "rgb(" + (isPct ? r + "%," + g + "%," + b + "%" : +r + "," + +g + "," + +b) + ")";
}

export const hexAToRGBA = (h) => {
  let r = 0, g = 0, b = 0, a = 1;

  if (h.length == 7) {
    r = "0x" + h[1] + h[1];
    g = "0x" + h[2] + h[2];
    b = "0x" + h[3] + h[3];
    a = "0x" + h[4] + h[4];

  } else if (h.length == 9) {
    r = "0x" + h[1] + h[2];
    g = "0x" + h[3] + h[4];
    b = "0x" + h[5] + h[6];
    a = "0x" + h[7] + h[8];
  }
  a = +(a / 255).toFixed(3);

  return "rgba(" + +r + "," + +g + "," + +b + "," + a + ")";
}

// export const hexAToRGBA = (h,isPct) => {
//   let r = 0, g = 0, b = 0, a = 1;
//   isPct = isPct === true;
    
//   // Handling of digits

//   if (isPct) {
//     r = +(r / 255 * 100).toFixed(1);
//     g = +(g / 255 * 100).toFixed(1);
//     b = +(b / 255 * 100).toFixed(1);
//   }
//   a = +(a / 255).toFixed(3);

//   return "rgba(" + (isPct ? r + "%," + g + "%," + b + "%," + a : +r + "," + +g + "," + +b + "," + a) + ")";
// }

// export const hexAToRGBA = (h,isPct) => {
//   ...
    
//   a = +(a / 255).toFixed(3);
//   if (isPct) {
//     r = +(r / 255 * 100).toFixed(1);
//     g = +(g / 255 * 100).toFixed(1);
//     b = +(b / 255 * 100).toFixed(1);
//     a = +(a * 100).toFixed(1);
//   }

//   return "rgba(" + (isPct ? r + "%," + g + "%," + b + "%," + a + "%" : +r + "," + +g + "," + +b + "," + a) + ")";
// }

// ok
export const rgbToHsl = (r, g, b) => {
  const red = r / 255
  const green = g / 255
  const blue = b / 255

  const cmin = Math.min(red, green, blue)
  const cmax = Math.max(red, green, blue)
  const delta = cmax - cmin;
  let h = 0;
  let s = 0;
  let l = 0;

  // Calculate hue
  if (delta === 0) {
    h = 0
  } else if (cmax === red) {
    h = ((green - blue) / delta) % 6
  } else if (cmax === g) {
    h = (blue - red) / delta + 2
  } else {
    h = (red - green) / delta + 4
  }

  h = Math.round(h * 60)
  if (h < 0) {
    h += 360
  }

  // Calculat lightness
  l = (cmax + cmin) / 2

  // Calculate saturation
  s = delta === 0 ? 0 : delta / (1 - Math.abs(2 * l - 1))

  // Multiply l and s by 100
  s = +(s * 100).toFixed(1)
  l = +(l * 100).toFixed(1)

  return `hsl(${h}, ${s}%, ${l}%)`
}

/**
 * HSL颜色值转换为RGB.
 * 换算公式改编自 http://en.wikipedia.org/wiki/HSL_color_space. 
 * h, s, 和 l 设定在 [0, 1] 之间
 * 返回的 r, g, 和 b 在 [0, 255]之间
 * @param   Number  h       色相
 * @param   Number  s       饱和度
 * @param   Number  l       亮度
 * @return  Array           RGB色值数值
*/

export const hslToRgb = (h, s, l) => {
  let r, g, b;
  if(s == 0) {
    r = g = b = l; // achromatic
  } else {
    const hue2rgb = function hue2rgb(p, q, t){
      if(t < 0) t += 1;
      if(t > 1) t -= 1;
      if(t < 1/6) return p + (q - p) * 6 * t;
      if(t < 1/2) return q;
      if(t < 2/3) return p + (q - p) * (2/3 - t) * 6;
      return p;
    }
    
    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    r = hue2rgb(p, q, h + 1/3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1/3);
  }
  return `rgba(${Math.round(r * 255)}, ${Math.round(g * 255)}, ${Math.round(b * 255)})`;
}
