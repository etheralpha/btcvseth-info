import fetch from 'node-fetch';
const {ETHERSCAN} = process.env;
const API_ENDPOINT = 'https://api.etherscan.io/api?module=account&action=balance&address=0x165CD37b4C644C2921454429E7F9358d18A45e14&tag=latest&apikey=' + ETHERSCAN;
let data;
let lastUpdate = 0;


// {
//   "status":"1",
//   "message":"OK",
//   "result":"1364198762369796135639"
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









