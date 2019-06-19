export const randomColor = () => {
  const r = parseInt(Math.random() * 256);
  const g = parseInt(Math.random() * 256);
  const b = parseInt(Math.random() * 256);
  const rgb = "rgb("+r+","+g+","+b+")";
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

export const hexToRGB = (h) => {
  let r = 0, g = 0, b = 0;
  isPct = isPct === true;

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

  if (h.length == 5) {
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