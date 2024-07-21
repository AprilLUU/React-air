import type { TimeoutHandle, ThrottleFn } from "./types"

function throttle(fn: ThrottleFn, interval: number, optinons = { leading: true, trailing: false }) {
  let lastTime = 0
  let timer: TimeoutHandle | null = null
  const { leading, trailing } = optinons

  const execFunWithError = function(fun: ThrottleFn, thisArg: any, args: any[], resolve: any, reject: any) {
    try {
      const result = fun.apply(thisArg, args)
      resolve(result)
    } catch(err) {
      reject(err)
    }
  }

  const _throttle = function(this: any, ...args: any[]) {
    
    return new Promise((resolve, reject) => {
      const nowTime = new Date().getTime()
      if (!lastTime && !leading) lastTime = nowTime
      const remainTime = interval - (nowTime - lastTime)

      if (remainTime <= 0) {
        if (timer) {
          clearTimeout(timer)
          timer = null
        }
        execFunWithError(fn, this, args, resolve, reject)
        lastTime = nowTime
        return
      }
  
      if (trailing && !timer) {
        timer = setTimeout(() => {
          execFunWithError(fn, this, args, resolve, reject)
          lastTime = !leading ? 0 : new Date().getTime()
          timer = null
        }, remainTime)
      }
    })
  }

  _throttle.cancel = function() {
    if (timer) clearTimeout(timer)
    timer = null
    lastTime = 0
  }

  return _throttle
}

export default throttle