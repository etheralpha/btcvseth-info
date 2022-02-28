# btcvseth-info

This is the repo for <https://btcvseth.info>, a site to monitor BTC vs ETH donations to Ukraine.


## Local Development

### Using Netlify + Jekyll (required for serverless function testing)

1. Clone the repo (or fork the repo to your account)
1. Install dependencies: `bundle install`
1. Install dependencies: `npm install`
	- Note: Use Node v16 (Netlify has issues with Node v17)
1. Install Netlify CLI: `npm install netlify-cli -g`
1. Authenticate Netlify account: `netlify login`
1. Create a feature branch off of the `dev` branch
1. Start the local server: `netlify dev`
1. The local server should open automatically


### Just Using Jekyll

1. Clone the repo (or fork the repo to your account)
1. Install dependencies: `bundle install`
1. Create a feature branch off of the `dev` branch
1. Start the local server: `bundle exec jekyll serve`
1. Go to <http://localhost:4000/> to view changes

To build the site use `bundle exec jekyll build`.


Resources:

- [Netlify Setup](https://docs.netlify.com/cli/get-started/)
- [Netlify Functions](https://docs.netlify.com/functions/build-with-javascript/)
- [Jekyll Docs](https://jekyllrb.com/docs/)
- [Liquid Syntax](https://shopify.github.io/liquid/basics/introduction/)

