async function getMovers() {
  const url =
    "https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/v2/get-movers?region=IN&lang=en-US&start=0&count=10";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "db8101ab84mshe6eddeb0d2525e1p132853jsnf9fd9698bb4b",
      "X-RapidAPI-Host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.text();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

// getMovers();

const data = {
  finance: {
    result: [
      {
        id: "134b914f-e393-4b2e-a824-b4be15517cd8",
        title: "Day Gainers - India",
        description:
          "Stocks ordered in descending order by price percent change greater than 2.5% with respect to the previous close for India",
        canonicalName: "DAY_GAINERS_IN",
        criteriaMeta: {
          size: 6,
          offset: 0,
          sortField: "percentchange",
          sortType: "DESC",
          quoteType: "EQUITY",
          criteria: [
            {
              field: "percentchange",
              operators: ["GT"],
              values: [2.5],
              labelsSelected: [],
              dependentValues: [],
            },
            {
              field: "region",
              operators: ["EQ"],
              values: [],
              labelsSelected: [24],
              dependentValues: [],
            },
          ],
          topOperator: "AND",
        },
        rawCriteria:
          '{"offset":0,"size":6,"sortField":"percentchange","sortType":"desc","quoteType":"equity","query":{"operator":"and","operands":[{"operator":"gt","operands":["percentchange",2.5]},{"operator":"eq","operands":["region","in"]}]}}',
        start: 0,
        count: 6,
        total: 1412,
        quotes: [
          {
            language: "en-US",
            region: "US",
            quoteType: "EQUITY",
            typeDisp: "Equity",
            quoteSourceName: "Delayed Quote",
            triggerable: false,
            customPriceAlertConfidence: "LOW",
            exchange: "NSI",
            hasPrePostMarketData: false,
            priceHint: 2,
            market: "in_market",
            fullExchangeName: "NSE",
            marketState: "CLOSED",
            sourceInterval: 15,
            exchangeDataDelayedBy: 15,
            exchangeTimezoneName: "Asia/Kolkata",
            exchangeTimezoneShortName: "IST",
            gmtOffSetMilliseconds: 19800000,
            esgPopulated: false,
            tradeable: false,
            cryptoTradeable: false,
            symbol: "BALKRI-RE.NS",
          },
          {
            language: "en-US",
            region: "US",
            quoteType: "EQUITY",
            typeDisp: "Equity",
            quoteSourceName: "Delayed Quote",
            triggerable: false,
            customPriceAlertConfidence: "LOW",
            exchange: "NSI",
            hasPrePostMarketData: false,
            firstTradeDateMilliseconds: 1098071100000,
            priceHint: 2,
            market: "in_market",
            fullExchangeName: "NSE",
            marketState: "CLOSED",
            sourceInterval: 15,
            exchangeDataDelayedBy: 15,
            exchangeTimezoneName: "Asia/Kolkata",
            exchangeTimezoneShortName: "IST",
            gmtOffSetMilliseconds: 19800000,
            esgPopulated: false,
            tradeable: false,
            cryptoTradeable: false,
            symbol: "INDSWFTLTD.NS",
          },
          {
            language: "en-US",
            region: "US",
            quoteType: "EQUITY",
            typeDisp: "Equity",
            quoteSourceName: "Delayed Quote",
            triggerable: false,
            customPriceAlertConfidence: "LOW",
            exchange: "BSE",
            hasPrePostMarketData: false,
            firstTradeDateMilliseconds: 1052365500000,
            priceHint: 2,
            market: "in_market",
            fullExchangeName: "BSE",
            marketState: "CLOSED",
            sourceInterval: 10,
            exchangeDataDelayedBy: 15,
            exchangeTimezoneName: "Asia/Kolkata",
            exchangeTimezoneShortName: "IST",
            gmtOffSetMilliseconds: 19800000,
            esgPopulated: false,
            tradeable: false,
            cryptoTradeable: false,
            symbol: "DECNGOLD.BO",
          },
          {
            language: "en-US",
            region: "US",
            quoteType: "EQUITY",
            typeDisp: "Equity",
            quoteSourceName: "Delayed Quote",
            triggerable: false,
            customPriceAlertConfidence: "LOW",
            exchange: "BSE",
            hasPrePostMarketData: false,
            priceHint: 2,
            market: "in_market",
            fullExchangeName: "BSE",
            marketState: "CLOSED",
            sourceInterval: 10,
            exchangeDataDelayedBy: 15,
            exchangeTimezoneName: "Asia/Kolkata",
            exchangeTimezoneShortName: "IST",
            gmtOffSetMilliseconds: 19800000,
            esgPopulated: false,
            tradeable: false,
            cryptoTradeable: false,
            symbol: "VPL.BO",
          },
          {
            language: "en-US",
            region: "US",
            quoteType: "EQUITY",
            typeDisp: "Equity",
            quoteSourceName: "Delayed Quote",
            triggerable: false,
            customPriceAlertConfidence: "LOW",
            exchange: "BSE",
            hasPrePostMarketData: false,
            firstTradeDateMilliseconds: 1005104700000,
            priceHint: 2,
            market: "in_market",
            fullExchangeName: "BSE",
            marketState: "CLOSED",
            sourceInterval: 10,
            exchangeDataDelayedBy: 15,
            exchangeTimezoneName: "Asia/Kolkata",
            exchangeTimezoneShortName: "IST",
            gmtOffSetMilliseconds: 19800000,
            esgPopulated: false,
            tradeable: false,
            cryptoTradeable: false,
            symbol: "PATSPINLTD.BO",
          },
          {
            language: "en-US",
            region: "US",
            quoteType: "EQUITY",
            typeDisp: "Equity",
            quoteSourceName: "Delayed Quote",
            triggerable: false,
            customPriceAlertConfidence: "LOW",
            exchange: "BSE",
            hasPrePostMarketData: false,
            firstTradeDateMilliseconds: 1009770300000,
            priceHint: 2,
            market: "in_market",
            fullExchangeName: "BSE",
            marketState: "CLOSED",
            sourceInterval: 10,
            exchangeDataDelayedBy: 15,
            exchangeTimezoneName: "Asia/Kolkata",
            exchangeTimezoneShortName: "IST",
            gmtOffSetMilliseconds: 19800000,
            esgPopulated: false,
            tradeable: false,
            cryptoTradeable: false,
            symbol: "JUMBO.BO",
          },
        ],
        useRecords: false,
        predefinedScr: true,
        versionId: 0,
        creationDate: 1496791150681,
        lastUpdated: 1496791150681,
        isPremium: false,
        iconUrl:
          "https://s.yimg.com/cv/apiv2/fin/img/assets/predefined_screeners/trendingUp.png",
      },
      {
        id: "d17726f5-6c05-4c80-9cc9-3578febcdb3c",
        title: "Day Losers - India",
        description:
          "Stocks ordered in ascending order by price percent change with respect to the previous close for India",
        canonicalName: "DAY_LOSERS_IN",
        criteriaMeta: {
          size: 6,
          offset: 0,
          sortField: "percentchange",
          sortType: "ASC",
          quoteType: "EQUITY",
          criteria: [
            {
              field: "percentchange",
              operators: ["LT"],
              values: [-2.5],
              labelsSelected: [],
              dependentValues: [],
            },
            {
              field: "region",
              operators: ["EQ"],
              values: [],
              labelsSelected: [24],
              dependentValues: [],
            },
          ],
          topOperator: "AND",
        },
        rawCriteria:
          '{"offset":0,"size":6,"sortField":"percentchange","sortType":"asc","quoteType":"equity","query":{"operator":"and","operands":[{"operator":"lt","operands":["percentchange",-2.5]},{"operator":"eq","operands":["region","in"]}]}}',
        start: 0,
        count: 6,
        total: 399,
        quotes: [
          {
            language: "en-US",
            region: "US",
            quoteType: "EQUITY",
            typeDisp: "Equity",
            quoteSourceName: "Delayed Quote",
            triggerable: false,
            customPriceAlertConfidence: "LOW",
            exchange: "BSE",
            hasPrePostMarketData: false,
            priceHint: 2,
            market: "in_market",
            fullExchangeName: "BSE",
            marketState: "CLOSED",
            sourceInterval: 10,
            exchangeDataDelayedBy: 15,
            exchangeTimezoneName: "Asia/Kolkata",
            exchangeTimezoneShortName: "IST",
            gmtOffSetMilliseconds: 19800000,
            esgPopulated: false,
            tradeable: false,
            cryptoTradeable: false,
            symbol: "SAWACA-RE.BO",
          },
          {
            language: "en-US",
            region: "US",
            quoteType: "EQUITY",
            typeDisp: "Equity",
            quoteSourceName: "Delayed Quote",
            triggerable: false,
            customPriceAlertConfidence: "LOW",
            exchange: "BSE",
            hasPrePostMarketData: false,
            firstTradeDateMilliseconds: 1054611900000,
            priceHint: 2,
            market: "in_market",
            fullExchangeName: "BSE",
            marketState: "CLOSED",
            sourceInterval: 10,
            exchangeDataDelayedBy: 15,
            exchangeTimezoneName: "Asia/Kolkata",
            exchangeTimezoneShortName: "IST",
            gmtOffSetMilliseconds: 19800000,
            esgPopulated: false,
            tradeable: false,
            cryptoTradeable: false,
            symbol: "VIJAYTX.BO",
          },
          {
            language: "en-US",
            region: "US",
            quoteType: "EQUITY",
            typeDisp: "Equity",
            quoteSourceName: "Delayed Quote",
            triggerable: false,
            customPriceAlertConfidence: "LOW",
            exchange: "BSE",
            hasPrePostMarketData: false,
            priceHint: 2,
            market: "in_market",
            fullExchangeName: "BSE",
            marketState: "CLOSED",
            sourceInterval: 10,
            exchangeDataDelayedBy: 15,
            exchangeTimezoneName: "Asia/Kolkata",
            exchangeTimezoneShortName: "IST",
            gmtOffSetMilliseconds: 19800000,
            esgPopulated: false,
            tradeable: false,
            cryptoTradeable: false,
            symbol: "ICL.BO",
          },
          {
            language: "en-US",
            region: "US",
            quoteType: "EQUITY",
            typeDisp: "Equity",
            quoteSourceName: "Delayed Quote",
            triggerable: false,
            customPriceAlertConfidence: "LOW",
            exchange: "BSE",
            hasPrePostMarketData: false,
            priceHint: 2,
            market: "in_market",
            fullExchangeName: "BSE",
            marketState: "CLOSED",
            sourceInterval: 10,
            exchangeDataDelayedBy: 15,
            exchangeTimezoneName: "Asia/Kolkata",
            exchangeTimezoneShortName: "IST",
            gmtOffSetMilliseconds: 19800000,
            esgPopulated: false,
            tradeable: false,
            cryptoTradeable: false,
            symbol: "11AMD.BO",
          },
          {
            language: "en-US",
            region: "US",
            quoteType: "EQUITY",
            typeDisp: "Equity",
            quoteSourceName: "Delayed Quote",
            triggerable: false,
            customPriceAlertConfidence: "LOW",
            exchange: "NSI",
            hasPrePostMarketData: false,
            firstTradeDateMilliseconds: 1249271100000,
            priceHint: 2,
            market: "in_market",
            fullExchangeName: "NSE",
            marketState: "CLOSED",
            sourceInterval: 15,
            exchangeDataDelayedBy: 15,
            exchangeTimezoneName: "Asia/Kolkata",
            exchangeTimezoneShortName: "IST",
            gmtOffSetMilliseconds: 19800000,
            esgPopulated: false,
            tradeable: false,
            cryptoTradeable: false,
            symbol: "EXCEL.NS",
          },
          {
            language: "en-US",
            region: "US",
            quoteType: "EQUITY",
            typeDisp: "Equity",
            quoteSourceName: "Delayed Quote",
            triggerable: false,
            customPriceAlertConfidence: "LOW",
            exchange: "NSI",
            hasPrePostMarketData: false,
            firstTradeDateMilliseconds: 1025495100000,
            priceHint: 2,
            market: "in_market",
            fullExchangeName: "NSE",
            marketState: "CLOSED",
            sourceInterval: 15,
            exchangeDataDelayedBy: 15,
            exchangeTimezoneName: "Asia/Kolkata",
            exchangeTimezoneShortName: "IST",
            gmtOffSetMilliseconds: 19800000,
            esgPopulated: false,
            tradeable: false,
            cryptoTradeable: false,
            symbol: "VISESHINFO.NS",
          },
        ],
        useRecords: false,
        predefinedScr: true,
        versionId: 0,
        creationDate: 1496791478357,
        lastUpdated: 1496791478357,
        isPremium: false,
        iconUrl:
          "https://s.yimg.com/cv/apiv2/fin/img/assets/predefined_screeners/trendingDown.png",
      },
      {
        id: "09a035cc-f535-4249-bfae-ed95e7a9e12e",
        title: "Most Actives - India",
        description:
          "Stocks ordered in descending order by intraday trade volume for India",
        canonicalName: "MOST_ACTIVES_IN",
        criteriaMeta: {
          size: 6,
          offset: 0,
          sortField: "dayvolume",
          sortType: "DESC",
          quoteType: "EQUITY",
          criteria: [
            {
              field: "region",
              operators: ["EQ"],
              values: [],
              labelsSelected: [24],
              dependentValues: [],
            },
          ],
          topOperator: "EQ",
        },
        rawCriteria:
          '{"offset":0,"size":6,"sortField":"dayvolume","sortType":"desc","quoteType":"equity","query":{"operator":"eq","operands":["region","in"]}}',
        start: 0,
        count: 6,
        total: 6765,
        quotes: [
          {
            language: "en-US",
            region: "US",
            quoteType: "EQUITY",
            typeDisp: "Equity",
            quoteSourceName: "Delayed Quote",
            triggerable: false,
            customPriceAlertConfidence: "LOW",
            exchange: "NSI",
            hasPrePostMarketData: false,
            firstTradeDateMilliseconds: 1173411900000,
            priceHint: 2,
            market: "in_market",
            fullExchangeName: "NSE",
            marketState: "CLOSED",
            sourceInterval: 15,
            exchangeDataDelayedBy: 15,
            exchangeTimezoneName: "Asia/Kolkata",
            exchangeTimezoneShortName: "IST",
            gmtOffSetMilliseconds: 19800000,
            esgPopulated: false,
            tradeable: false,
            cryptoTradeable: false,
            symbol: "IDEA.NS",
          },
          {
            language: "en-US",
            region: "US",
            quoteType: "EQUITY",
            typeDisp: "Equity",
            quoteSourceName: "Delayed Quote",
            triggerable: false,
            customPriceAlertConfidence: "LOW",
            exchange: "NSI",
            hasPrePostMarketData: false,
            firstTradeDateMilliseconds: 1121139900000,
            priceHint: 2,
            market: "in_market",
            fullExchangeName: "NSE",
            marketState: "CLOSED",
            sourceInterval: 15,
            exchangeDataDelayedBy: 15,
            exchangeTimezoneName: "Asia/Kolkata",
            exchangeTimezoneShortName: "IST",
            gmtOffSetMilliseconds: 19800000,
            esgPopulated: false,
            tradeable: false,
            cryptoTradeable: false,
            symbol: "YESBANK.NS",
          },
          {
            language: "en-US",
            region: "US",
            quoteType: "EQUITY",
            typeDisp: "Equity",
            quoteSourceName: "Delayed Quote",
            triggerable: false,
            customPriceAlertConfidence: "LOW",
            exchange: "NSI",
            hasPrePostMarketData: false,
            firstTradeDateMilliseconds: 1701229500000,
            priceHint: 2,
            market: "in_market",
            fullExchangeName: "NSE",
            marketState: "CLOSED",
            sourceInterval: 15,
            exchangeDataDelayedBy: 15,
            exchangeTimezoneName: "Asia/Kolkata",
            exchangeTimezoneShortName: "IST",
            gmtOffSetMilliseconds: 19800000,
            esgPopulated: false,
            tradeable: false,
            cryptoTradeable: false,
            symbol: "IREDA.NS",
          },
          {
            language: "en-US",
            region: "US",
            quoteType: "EQUITY",
            typeDisp: "Equity",
            quoteSourceName: "Delayed Quote",
            triggerable: false,
            customPriceAlertConfidence: "LOW",
            exchange: "BSE",
            hasPrePostMarketData: false,
            firstTradeDateMilliseconds: 1173411900000,
            priceHint: 2,
            market: "in_market",
            fullExchangeName: "BSE",
            marketState: "CLOSED",
            sourceInterval: 10,
            exchangeDataDelayedBy: 15,
            exchangeTimezoneName: "Asia/Kolkata",
            exchangeTimezoneShortName: "IST",
            gmtOffSetMilliseconds: 19800000,
            esgPopulated: false,
            tradeable: false,
            cryptoTradeable: false,
            symbol: "IDEA.BO",
          },
          {
            language: "en-US",
            region: "US",
            quoteType: "EQUITY",
            typeDisp: "Equity",
            quoteSourceName: "Delayed Quote",
            triggerable: false,
            customPriceAlertConfidence: "LOW",
            exchange: "BSE",
            hasPrePostMarketData: false,
            firstTradeDateMilliseconds: 1433475900000,
            priceHint: 2,
            market: "in_market",
            fullExchangeName: "BSE",
            marketState: "CLOSED",
            sourceInterval: 10,
            exchangeDataDelayedBy: 15,
            exchangeTimezoneName: "Asia/Kolkata",
            exchangeTimezoneShortName: "IST",
            gmtOffSetMilliseconds: 19800000,
            esgPopulated: false,
            tradeable: false,
            cryptoTradeable: false,
            symbol: "AVANCE.BO",
          },
          {
            language: "en-US",
            region: "US",
            quoteType: "EQUITY",
            typeDisp: "Equity",
            quoteSourceName: "Delayed Quote",
            triggerable: false,
            customPriceAlertConfidence: "LOW",
            exchange: "NSI",
            hasPrePostMarketData: false,
            firstTradeDateMilliseconds: 1029123900000,
            priceHint: 2,
            market: "in_market",
            fullExchangeName: "NSE",
            marketState: "CLOSED",
            sourceInterval: 15,
            exchangeDataDelayedBy: 15,
            exchangeTimezoneName: "Asia/Kolkata",
            exchangeTimezoneShortName: "IST",
            gmtOffSetMilliseconds: 19800000,
            esgPopulated: false,
            tradeable: false,
            cryptoTradeable: false,
            symbol: "GTLINFRA.NS",
          },
        ],
        useRecords: false,
        predefinedScr: true,
        versionId: 0,
        creationDate: 1496791772010,
        lastUpdated: 1496791772010,
        isPremium: false,
        iconUrl:
          "https://s.yimg.com/cv/apiv2/fin/img/assets/predefined_screeners/analytics.png",
      },
    ],
    error: null,
  },
};

console.log(data.finance.result[0].quotes[0].symbol)
var arr=data.finance.result[0].quotes
var gainers=[]
data.finance.result[0].quotes.forEach(quote => {
  gainers.push(quote.symbol)
});

var loosers=[]
data.finance.result[1].quotes.forEach(quote => {
  loosers.push(quote.symbol)
});

var volume=[]
data.finance.result[2].quotes.forEach(quote => {
  volume.push(quote.symbol)
});
console.log("aaaaaa",gainers,loosers,volume)