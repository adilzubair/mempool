const response = await fetch('https://mempool.space/api/v1/prices');
const prices = await response.json();


console.log(prices);