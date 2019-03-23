export function FunctionX (x, y, K, t, a) {
  return ((-K * x)/ Math.sqrt(Math.pow(x, 2) + Math.pow(y,2))) * t + a;
}

export function FunctionY (x, y, K, t, b) {
  return ((-K * y)/ Math.sqrt(Math.pow(x,2) + Math.pow(y,2))) * t + b;
}