import fetch from 'node-fetch';
const API_ENDPOINT = 'https://blockchain.info/rawaddr/357a3So9CbsNfBBgFYACGvxxS6tMaDoa1P?limit=0&cors=true'
let data;
let lastUpdate = 0;


// {
//   "hash160":"258d2c09abd01e512c1be47eb35f556c472070e8",
//   "address":"357a3So9CbsNfBBgFYACGvxxS6tMaDoa1P",
//   "n_tx":2037,
//   "n_unredeemed":2503,
//   "total_received":2448825534,
//   "total_sent":700000000,
//   "final_balance":1748825534,
//   "txs":[]
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















