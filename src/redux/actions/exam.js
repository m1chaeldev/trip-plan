export function example(payload) {
    return dispatch => {
        dispatch({
            type: "EXAMPLE",
            payload
        })
    }
}