'use strict';

function chooseBestSum(t, k, ls) {
    if (ls.length < 3)
      return null;
    let res = 0;
    function dfs(t, k, ls, start, order)
    console.log('t', t);
    console.log('k', k);
    console.log('ls', ls);
    console.log('start', start);
    console.log('order', order);
    {
      if (order.length == k)
      {
        let sum = order.reduce(function(a, b) {
          return a + b;
        }, 0);
        if (sum <= t)
          res = Math.max(res, sum);
        return;
      }
      for (let i = start; i < ls.length; i++)
      {
        order.push(ls[i]);
        dfs(t, k, ls, i+1, order);
        order.pop();
      }
    }
    dfs(t, k, ls, 0, []);
    return res === 0 ? null : res;
}
