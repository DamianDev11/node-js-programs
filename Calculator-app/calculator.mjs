export function add(a, b) {
  return a + b;
}

export function subt(a, b) {
  if (a > b) {
    return a - b;
  }
  return b - a;
}

export function mul(a, b) {
  return a * b;
}

export function div(a, b) {
  if (a > b) {
    return a / b;
  }
  return b / a;
}
