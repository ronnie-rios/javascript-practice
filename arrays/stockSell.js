
function buySellStock(prices) {
  //initialize pointers
  let left = 0;
  let right = 0;
  //keep track of the max profit
  let max = 0;
  //loop while the right is less than the arr len
  while(right < prices.length) {
    //if left price is less than right price, can find a profit
    if(prices[left] < prices[right]) {
      let profit = prices[right] - prices[left] //subtract
      //now check and find if that profit is > maxProfit, override
      max = Math.max(max, profit)
    } else {
      //not true, than instead of incrementing by 1, we set the left to the right, cause we want the lowest left
      left = right
    }
  }
  return max
}

const stocks = [7,1,5,3,6,4] //output profit = 5, cause 6 -1 = 5, have to buy first before can sell, so 7-1 does not work since 
const profit = buySellStock(prices);
console.log(profit);