// Enable tooltips
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

function copyText(text, id) {
  navigator.clipboard.writeText(text).then(function() {
    let tooltipElement = document.getElementById(id);
    let tooltip = bootstrap.Tooltip.getInstance(tooltipElement);
    setTimeout(() => { tooltip.hide(); }, 1200);
  }, function(err) {
    console.error('Async: Could not copy text: ', err);
  });
}


var priceBtc = 40974.63;
var priceEth = 2807.79;
var donationsBtc = 153.79528934;
var donationsEth = 2235.1159519977414;

// API example responses
  // https://api.blockcypher.com/v1/eth/main/addrs/0x165CD37b4C644C2921454429E7F9358d18A45e14/balance
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

  // https://blockchain.info/rawaddr/357a3So9CbsNfBBgFYACGvxxS6tMaDoa1P?limit=0&cors=true
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

  // https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum&vs_currencies=usd
    // {
    //   "bitcoin": {
    //     "usd": 39090
    //   },
    //   "ethereum": {
    //     "usd": 2780.88
    //   }
    // }

async function getData() {
  const [blockcypher, blockchaininfo, coingecko] = await Promise.all([
    fetch("/.netlify/functions/blockcypher/"),
    fetch("/.netlify/functions/blockchaininfo/"),
    fetch("/.netlify/functions/coingecko/")
  ]);
  const blockcypherResponse = await blockcypher.json();
  const blockchaininfoResponse = await blockchaininfo.json();
  const coingeckoResponse = await coingecko.json();
  // console.log(blockcypherResponse);
  // console.log(blockchaininfoResponse);
  // console.log(coingeckoResponse);

  priceBtc = coingeckoResponse["bitcoin"]["usd"];
  // console.log(priceBtc);
  priceEth = coingeckoResponse["ethereum"]["usd"];
  // console.log(priceEth);

  donationsBtc = blockchaininfoResponse["total_received"]/100000000;
  // console.log(donationsBtc);
  donationsEth = blockcypherResponse["total_received"]/1000000000000000000;
  // console.log(donationsEth);

  return;
}


function updateData() {
  var amountRawBtc = donationsBtc * priceBtc;
  var amountRawEth = donationsEth * priceEth;
  var amountBtc = Math.round( amountRawBtc/10000 ) / 100;
  var amountEth = Math.round( amountRawEth/10000 ) / 100;

  var totalRaw = amountRawBtc + amountRawEth;
  var total = Math.round( totalRaw/10000 ) / 100;
  var percentBtc = Math.round( amountRawBtc/totalRaw*10000 ) / 100;
  var percentEth = Math.round( amountRawEth/totalRaw*10000 ) / 100;


  var boldBtc = "";
  var boldEth = "";
  var barChart = "";

  if (amountRawBtc > amountRawEth) {
    boldBtc = "fw-bold";
  } else {
    boldEth = "fw-bold";
  }

  let barBtc =  `
    <div class="my-2">
      <label class="form-label my-0 py-0 ${boldBtc}">Bitcoin Donations <span class="mx-2">-</span> $${amountBtc}M &nbsp;<small>(${percentBtc}%)</small></label>
      <div class="progress position-relative" style="height: 1.3rem;">
        <div class="progress-bar position-absolute bg-btc" role="progressbar" style="width: ${percentBtc}%; height: 1.25rem;" aria-valuenow="${percentBtc}" aria-valuemin="0" aria-valuemax="100"></div>
      </div>
    </div>`;
  let barEth =  `
    <div class="my-2">
      <label class="form-label my-0 py-0 ${boldEth}">Ethereum Donations <span class="mx-2">-</span> $${amountEth}M &nbsp;<small>(${percentEth}%)</small></label>
      <div class="progress position-relative" style="height: 1.3rem;">
        <div class="progress-bar position-absolute bg-eth" role="progressbar" style="width: ${percentEth}%; height: 1.25rem;" aria-valuenow="${percentEth}" aria-valuemin="0" aria-valuemax="100"></div>
      </div>
    </div>`;

  if (amountRawBtc > amountRawEth) {
    barChart = barBtc + barEth;
  } else {
    barChart = barEth + barBtc;
  }

  document.getElementById("donationBars").innerHTML = barChart;
  document.getElementById("total").innerHTML = total;
}

window.onload = getData().then(updateData);






























