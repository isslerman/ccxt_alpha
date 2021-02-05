const ccxws = require("ccxws");
const binance = new ccxws.Binance();

// market could be from CCXT or genearted by the user
const market = {
  id: "BTCUSDT", // remote_id used by the exchange
  base: "BTC", // standardized base symbol for Bitcoin
  quote: "USDT", // standardized quote symbol for Tether
};

// handle trade events
//binance.on("trade", trade => console.log(trade));

// handle level2 orderbook snapshots
//binance.on("l2snapshot", snapshot => console.log(snapshot));

// handle ticker events
binance.on("ticker", ticker => console.log(ticker));

// handle candle events
binance.on("candle", candle => console.log(candle));

// subscribe to candles
binance.subscribeCandles(market);


// subscribe to tickers
//binance.subscribeTicker(market);

// subscribe to trades
//binance.subscribeTrades(market);

// subscribe to level2 orderbook snapshots
//binance.subscribeLevel2Snapshots(market);
