// JavaScript
var ccxt = require ('ccxt')

let exchange = new ccxt.binance()

let markets = exchange.loadMarkets ()


let symbols = binance.symbols
console.log (binance.id, symbols)
