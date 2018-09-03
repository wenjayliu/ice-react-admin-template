export function getNumb() {
  // var num = new Array()
  let num = []
  for (let i = 0; i < 10; i++) {
    let val = Math.ceil(Math.random() * 30)
    let isEqu = false
    for (let idx in num) {
      if (num[idx] === val) {
        isEqu = true
        break
      }
    }
    if (isEqu) i--
    else num[num.length] = val
  }
  return num
}

// scrollTop animation
export function scrollTop(el, from = 0, to, duration = 500) {
  if (!window.requestAnimationFrame) {
    window.requestAnimationFrame = (
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.msRequestAnimationFrame ||
      function(callback) {
        return window.setTimeout(callback, 1000 / 60)
      }
    )
  }
  const difference = Math.abs(from - to)
  const step = Math.ceil(difference / duration * 50)

  function scroll(start, end, step) {
    if (start === end) return

    let d = (start + step > end) ? end : start + step
    if (start > end) {
      d = (start - step < end) ? end : start - step
    }

    if (el === window) {
      window.scrollTo(d, d)
    } else {
      el.scrollTop = d
    }
    window.requestAnimationFrame(() => scroll(d, end, step))
  }
  scroll(from, to, step)
}

export function assert(condition, msg) {
  if (!condition) throw new Error(`[Apior] ${msg}`)
}

export function transitionH(ele) {
  if (ele) {
    let height = getComputedStyle(ele).height
    // ele.style.transition = 'none'
    ele.style.height = 'auto'
    let fillHeigth = getComputedStyle(ele).height
    ele.style.height = height
    /* eslint-disable */
    ele.offsetWidth
    ele.style.height = fillHeigth
    // setTimeout(() => {
    //   ele.style.height = fillHeigth
    // }, 1)
  }
}