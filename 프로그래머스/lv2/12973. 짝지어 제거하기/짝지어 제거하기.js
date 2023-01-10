function solution(s) {
  const stack = [];
  const arr = [...s];
  arr.forEach((c) => {
    if (stack.length === 0) {
      stack.push(c);
    } else if (stack[stack.length - 1] == c) {
      stack.pop();
    } else {
      stack.push(c);
    }
  });
  return stack.length === 0 ? 1 : 0;
}
