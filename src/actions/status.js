export const SET_LOADED = 'status/set-loaded';
export const TOGGLE_ODDS = 'status/toggle-odds';

export const setLoaded = (loaded) => ({
    type: SET_LOADED,
    payload: {
        loaded,
    },
});

export const toggleOdds = () => ({
    type: TOGGLE_ODDS,
});
