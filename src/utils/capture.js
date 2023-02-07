//拦截冒泡， 判断点击元素在不固定范围内;
export function capture(type, dom, callback) {
  window.addEventListener(type, (e) => {
    let flg = false;
    for (let i = 0; !flg && e.path && i < e.path.length; i++) {
      for (
        let x = 0;
        !flg && e.path[i].classList && x < e.path[i].classList.length;
        x++
      ) {
        const el = e.path[i].classList[x];
        if (el === dom) {
          flg = true;
          break;
        }
      }
    }
    callback(flg);
  });
}
