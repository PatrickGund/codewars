const nextSmaller = n => {
  const arr = n.toString().split('');
  let i = arr.length-1;
  while(i > 0) {
    if (arr[i]<arr[i-1]) break;
    i--;
  }
  if (i == 0) return -1;
  let suf = arr.splice(i).sort().reverse();
  let t = arr[arr.length-1];
  for (var j = 0; j < suf.length; ++j) {
    if (suf[j] < t) break;
  }
  arr[arr.length-1] = suf[j]
  suf[j] = t;
  let res = arr.concat(suf);
return +res[0] ? +res.join('') : -1
}

console.log(21, nextSmaller(21));
console.log(907, nextSmaller(907));
console.log(531, nextSmaller(531));
console.log(135, nextSmaller(135));
console.log(2071, nextSmaller(2071));
console.log(1027, nextSmaller(1027));
console.log(414, nextSmaller(414));
console.log(10101, nextSmaller(10101));
console.log(5201, nextSmaller(5201));
