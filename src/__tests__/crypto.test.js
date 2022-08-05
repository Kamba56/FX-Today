import coinsReducer, { loadCoin, searchCoin } from '../redux/crypto/crypto';

const initial = {
  crypto: [],
  search: [],
};

describe('Check if the reducer works properly', () => {
  const loadedCoin = [
    {
      id: 'bitcoin',
      rank: '1',
      symbol: 'BTC',
      name: 'Bitcoin',
      supply: '19112662.0000000000000000',
      maxSupply: '21000000.0000000000000000',
      marketCapUsd: '445180865185.8254211638251988',
      volumeUsd24Hr: '11841956934.6538346800865460',
      priceUsd: '23292.4573869315232574',
      changePercent24Hr: '0.6295951140453583',
      vwap24Hr: '22826.5722017126501557',
      explorer: 'https://blockchain.info/',
    },
    {
      id: 'ethereum',
      rank: '2',
      symbol: 'ETH',
      name: 'Ethereum',
      supply: '121835120.3740000000000000',
      maxSupply: null,
      marketCapUsd: '203437383523.3771949399148894',
      volumeUsd24Hr: '7459665905.1208617551558567',
      priceUsd: '1669.7761934233815225',
      changePercent24Hr: '1.3577660947251823',
      vwap24Hr: '1618.6205349924146983',
      explorer: 'https://etherscan.io/',
    },
    {
      id: 'tether',
      rank: '3',
      symbol: 'USDT',
      name: 'Tether',
      supply: '66476525454.8642300000000000',
      maxSupply: null,
      marketCapUsd: '66467817918.9303148407441894',
      volumeUsd24Hr: '20653519888.8002536350350573',
      priceUsd: '0.9998690133716476',
      changePercent24Hr: '-0.0141945452235292',
      vwap24Hr: '1.0002853662594098',
      explorer: 'https://www.omniexplorer.info/asset/31',
    },
    {
      id: 'usd-coin',
      rank: '4',
      symbol: 'USDC',
      name: 'USD Coin',
      supply: '54199364133.4828950000000000',
      maxSupply: null,
      marketCapUsd: '54120501076.0668238294481782',
      volumeUsd24Hr: '1635220408.8384388188357418',
      priceUsd: '0.9985449449697999',
      changePercent24Hr: '-0.0955211532641779',
      vwap24Hr: '1.0003508009482778',
      explorer: 'https://etherscan.io/token/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
    },
    {
      id: 'binance-coin',
      rank: '5',
      symbol: 'BNB',
      name: 'BNB',
      supply: '166801148.0000000000000000',
      maxSupply: '166801148.0000000000000000',
      marketCapUsd: '52425605826.8226230758091228',
      volumeUsd24Hr: '591371669.9838112001717634',
      priceUsd: '314.3000300382981961',
      changePercent24Hr: '3.2112136798991749',
      vwap24Hr: '306.8679752615906443',
      explorer: 'https://etherscan.io/token/0xB8c77482e45F1F44dE1745F52C74426C631bDD52',
    },
  ];

  const searchedCoin = [
    {
      id: 'binance-coin',
      rank: '5',
      symbol: 'BNB',
      name: 'BNB',
      supply: '166801148.0000000000000000',
      maxSupply: '166801148.0000000000000000',
      marketCapUsd: '52439674534.8611545591519616',
      volumeUsd24Hr: '591217999.6071906117016311',
      priceUsd: '314.3843742302130592',
      changePercent24Hr: '3.1787192708406841',
      vwap24Hr: '306.8679752615906443',
      explorer: 'https://etherscan.io/token/0xB8c77482e45F1F44dE1745F52C74426C631bDD52',
    },
  ];

  test('Test if coins are loaded correctly', () => {
    expect(coinsReducer(initial, loadCoin(loadedCoin)).crypto).toEqual(loadedCoin);
  });

  test('Test if coins are loaded correctly', () => {
    expect(coinsReducer(initial, searchCoin(searchedCoin)).search).toEqual(searchedCoin);
  });
});
