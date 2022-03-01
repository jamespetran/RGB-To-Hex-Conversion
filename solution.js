function rgb(r, g, b){
  r < 0 ? r = 0 : null;
  r > 255 ? r = 255 : null;
  g < 0 ? g = 0 : null;
  g > 255 ? g = 255 : null;
  b < 0 ? b = 0 : null;
  b > 255 ? b = 255 : null;

  
  hexR = ('00'+r.toString(16)).slice(-2).toUpperCase();
  hexG = ('00'+g.toString(16)).slice(-2).toUpperCase();
  hexB = ('00'+b.toString(16)).slice(-2).toUpperCase();
  console.log(hexR, hexG, hexB)
  return hexR + hexG + hexB;
}
