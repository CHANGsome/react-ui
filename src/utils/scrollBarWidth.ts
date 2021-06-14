export default function ScrollBarWidth() {
  // 在 mac chrome 下默认不显示滚动条，所以不生效
  const div = document.createElement('div');

  div.style.position = 'absolute';
  div.style.top = div.style.left = '-9999px'; // 把div放到屏幕外
  div.style.width = div.style.height = '100px';
  div.style.overflow = 'scroll';

  document.body.appendChild(div);
  const width = div.scrollWidth - div.offsetWidth;
  document.body.removeChild(div);

  return width;
}
