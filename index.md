---
layout: default
---


<header class="pb-md-3 ppb-lg-5">
 <div class="px-4 pt-5 my-5 text-center">
    <h1 class="display-1 fw-bold mt-5">Bitcoin vs Ethereum</h1>
    <div class="col-lg-7 mx-auto">
      <p class="h4 fw-normal mb-4">Support Ukraine while taking part in friendly competition</p>
      <a href="#donate" class="btn btn-ukraine btn-lg px-4 m-1">Donate</a>
    </div>
  </div>
</header>


<section class="">
  <div class="container mb-5 pb-5">
    <div class="row justify-content-center">
      <div id="donationBars" class="col col-lg-6 col-md-8">
        <div class="my-2">
          <label class="form-label my-0 py-0 fw-bold">Bitcoin Donations</label>
          <div class="progress position-relative" style="height: 1.3rem;">
            <div class="progress-bar position-absolute bg-btc" role="progressbar" style="width: 50%; height: 1.25rem;" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        </div>
        <div class="my-2">
          <label class="form-label my-0 py-0">Ethereum Donations</label>
          <div class="progress position-relative" style="height: 1.3rem;">
            <div class="progress-bar position-absolute bg-eth" role="progressbar" style="width: 50%; height: 1.25rem;" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        </div>
      </div>
      <div class="text-center fw-bold mt-3">
        Total Donated: $<span id="total"></span>M
      </div>
      <div class="text-center small mt-3">
        Note: Ethereum donations exclude L2 and tokens.
      </div>
    </div>
  </div>
</section>



<section id="donate" class="">
  <div class="container py-5 my-5">
    <h2 class="h1 fw-bold mb-3 text-center">Donate Now</h2>
    <div class="text-center">
      <a href="https://unchain.fund/" target="_blank" class="btn btn-outline-ukraine btn-sm px-4 m-1">Donate With Alt L1s</a>
      <!-- https://twitter.com/Unchainfund/status/1497380711288152067 -->
    </div>
    <div class="row justify-content-center my-4">
      <div class="col-12 col-md-9 col-lg-7 col-xl-6 col-xxl-5" style="max-width: 33rem;">
        <div class="mb-2 d-flex">
          <img src="/assets/img/btc.svg" class="mx-2" style="max-height: 2rem; min-width: 2rem;">
          <a href="https://www.blockchain.com/btc/address/357a3So9CbsNfBBgFYACGvxxS6tMaDoa1P" target="_blank" class="link-dark text-truncate flex-grow-1">357a3So9CbsNfBBgFYACGvxxS6tMaDoa1P</a>
          <svg xmlns="http://www.w3.org/2000/svg" style="min-width: 1.2rem;" width="1.2rem" height="1.2rem" fill="currentColor" class="bi bi-clipboard mx-2" viewBox="0 0 16 16">
            <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/>
            <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/>
          </svg>
        </div>
        <div class="mb-2 d-flex">
          <img src="/assets/img/eth.svg" class="mx-2" style="max-height: 2rem; min-width: 2rem;">
          <a href="https://etherscan.io/address/0x165CD37b4C644C2921454429E7F9358d18A45e14" target="_blank" class="link-dark text-truncate flex-grow-1">0x165CD37b4C644C2921454429E7F9358d18A45e14</a>
          <svg xmlns="http://www.w3.org/2000/svg" style="min-width: 1.2rem;" width="1.2rem" height="1.2rem" fill="currentColor" class="bi bi-clipboard mx-2" viewBox="0 0 16 16">
            <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/>
            <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/>
          </svg>
        </div>
      </div>
    </div>
    <div class="row justify-content-center my-4">
      <blockquote class="twitter-tweet"><p lang="en" dir="ltr">Stand with the people of Ukraine. Now accepting cryptocurrency donations. Bitcoin, Ethereum and USDT.<br><br>BTC - 357a3So9CbsNfBBgFYACGvxxS6tMaDoa1P<br><br>ETH and USDT (ERC-20) - 0x165CD37b4C644C2921454429E7F9358d18A45e14</p>&mdash; Ukraine / Україна (@Ukraine) <a href="https://twitter.com/Ukraine/status/1497594592438497282?ref_src=twsrc%5Etfw">February 26, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
    </div>
  </div>
</section>




