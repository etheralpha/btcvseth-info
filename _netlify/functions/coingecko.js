import fetch from 'node-fetch';
const API_ENDPOINT = 'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum&vs_currencies=usd'
let data;
let lastUpdate = 0;


// {
//   "bitcoin": {
//     "usd": 39090
//   },
//   "ethereum": {
//     "usd": 2780.88
//   }
// }


exports.handler = async (event, context) => {
  const fetchData = async () => {
    try {
      const response = await fetch(API_ENDPOINT).then( response => response.json() );
      console.log(response);
      return response;
    } catch (err) {
      return {
        statusCode: err.statusCode || 500,
        body: JSON.stringify({
          error: err.message
        })
      }
    }
  }

  const currentTime = new Date().getTime();
  const noData = (data === undefined || data === null);
  if (noData || ( currentTime - lastUpdate > 120000 )) { // 120000 = 2min
    const response = await fetchData();
    data = response;
    lastUpdate = new Date().getTime();
    return {
      statusCode: 200,
      body: JSON.stringify(data)
    }
  } else {
    return {
      statusCode: 200,
      body: JSON.stringify(data)
    }
  }
}















