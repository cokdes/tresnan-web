export const getJodoh = (jodoh) => {
    return (dispatch, getState) => {
        // make async call to database
        dispatch({ type: 'GET_JODOH', jodoh});
    }
};