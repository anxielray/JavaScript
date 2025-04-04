/* Create two functions that will work like _.throttle from lodash.

    throttle: don't worry about the options.
    opThrottle: implement the trailing and leading options.
*/
function throttle(func, limit) {
  let lastCall = 0;

  return function (...args) {
    const context = this;
    const now = Date.now();

    if (now - lastCall >= limit) {
      lastCall = now;
      func.apply(context, args);
    }
  };
}

function opThrottle(fn, delay, { leading = false, trailing = true } = {}) {
  let last = 0;
  let timer = null;
  return function () {
    const now = +new Date();
    if (!last && leading === false) {
      last = now;
    }
    if (now - last > delay) {
      if (timer) {
        clearTimeout(timer);
        timer = null;
      }
      fn.apply(this, arguments);
      last = now;
    } else if (!timer && trailing !== false) {
      timer = setTimeout(() => {
        fn.apply(this, arguments);
        last = +new Date();
        timer = null;
      }, delay);
    }
  };
}
