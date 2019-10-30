export const LOAD_MARKET = 'events/load_market';

export const loadMarket = marketData => ({
    type: LOAD_MARKET,
    payload: marketData,
});
