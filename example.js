'use strict';
const ccxt = require ('ccxt');
 
(async function () {
    //let kraken    = new ccxt.kraken ()
    let bitfinex  = new ccxt.bitfinex ({ verbose: false })
    let binance = new ccxt.binance ()
    //let huobi     = new ccxt.huobi ()
 
    //console.log (kraken.id,    await kraken.loadMarkets ())
    //console.log (bitfinex.id,  await bitfinex.loadMarkets  ())
    //console.log (huobi.id,     await huobi.loadMarkets ())
 
    //console.log (kraken.id,    await kraken.fetchOrderBook (kraken.symbols[0]))
    //console.log (bitfinex.id,  await bitfinex.fetchTicker ('BTC/USD'))
    //console.log (huobi.id,     await huobi.fetchTrades ('ETH/CNY'))
    //console.log (binance.id,  await binance.fetchTicker ('BTC/USDT'))

    console.log (binance.id,  await binance.fetchOHLCV('ETH/BTC', '5m', binance.parse8601 ('2021-02-05T00:00:00')) )
 
    // sell 1 BTC/USD for market price, sell a bitcoin for dollars immediately
    //console.log (okcoinusd.id, await okcoinusd.createMarketSellOrder ('BTC/USD', 1))
 
    // buy 1 BTC/USD for $2500, you pay $2500 and receive ฿1 when the order is closed
    //console.log (okcoinusd.id, await okcoinusd.createLimitBuyOrder ('BTC/USD', 1, 2500.00))
 
    // pass/redefine custom exchange-specific order params: type, amount, price or whatever
    // use a custom order type
    //bitfinex.createLimitSellOrder ('BTC/USD', 1, 10, { 'type': 'trailing-stop' })
}) ();
