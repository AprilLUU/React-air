import throttle from "./throttle.ts"

function isEmptyObj(obj: any) {
  return !!Object.keys(obj).length
}

function forwardProps(props: any, propNames: string[]) {
  let isForwardProp = true

  for (const propName of propNames) {
    isForwardProp = isForwardProp && props !== propName
  }

  return isForwardProp
}

export { throttle, isEmptyObj, forwardProps }
