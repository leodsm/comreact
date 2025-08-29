export const BLUR_SVG = (w = 8, h = 8) => {
  const id = Math.random().toString(36).slice(2);
  return `data:image/svg+xml;charset=utf-8,` + encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' width='${w}' height='${h}' viewBox='0 0 ${w} ${h}'><defs><linearGradient id='g${id}' x1='0' y1='0' x2='1' y2='1'><stop stop-color='#0E3AAF' offset='0'/><stop stop-color='#FF7A1A' offset='1'/></linearGradient></defs><rect fill='url(%23g${id})' width='${w}' height='${h}'/></svg>`
  );
};
