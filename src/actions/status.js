export const SET_LOADED = 'status/set-loaded';

export const setLoaded = loaded => ({
    type: SET_LOADED,
    payload: {
        loaded,
    }
})
