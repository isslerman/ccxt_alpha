// JavaScript
const ccxt = require ('ccxt');

////// LISTING ALL EXCHANGES 
//console.log (ccxt.exchanges)

////// LOAD EXCHANGE WITH DEFAULT ID
let exchange = new ccxt.binance (); // default id

if (exchange.has.fetchOHLCV) {
    console.log ('FetchOHLCV found.');

    (async () => {
        const close_idx = 4 // [ timestamp, open, high, low, close, volume ]
        const timestamp_idx = 0 // [ timestamp, open, high, low, close, volume ]
        let ohlcv = await exchange.fetchOHLCV ('LUNA/USDT', '15m');
        const timestamp = ohlcv[ohlcv.length - 2][timestamp_idx] // closing price
        const lastPrice = ohlcv[ohlcv.length - 2][close_idx] // closing price
        console.log (exchange.iso8601 (timestamp),lastPrice);
    }) ()
}else{
    console.log ( 'No FetchOHLCV found.');
}




