import fetch from 'node-fetch';
const API_ENDPOINT = 'https://api.blockcypher.com/v1/eth/main/addrs/0x165CD37b4C644C2921454429E7F9358d18A45e14/balance';
let data;
let lastUpdate = 0;


// {
//   "address": "0x165CD37b4C644C2921454429E7F9358d18A45e14",
//   "total_received": 2234932100084210295674,
//   "total_sent": 2129973373410475911195,
//   "balance": 105307063648455310636,
//   "unconfirmed_balance": -403720073617670453765,
//   "final_balance": -298413009969215143129,
//   "n_tx": 6936,
//   "unconfirmed_n_tx": 17,
//   "final_n_tx": 6953,
//   "nonce": 7,
//   "pool_nonce": 10
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









