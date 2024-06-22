var maxProfit = function(prices) {
  let profit = 0;
  for(let i = 1; i<=prices.length; i++)
  {
      var prev = prices[i-1];
      var cur = prices[i];
      if(prev < cur)
      {
          profit += cur-prev;
      }
  }
  return profit;
};