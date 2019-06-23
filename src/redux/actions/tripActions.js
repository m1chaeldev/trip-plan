export function createTrip(payload) {
    return dispatch => {
        dispatch({
            type: "CREATE_TRIP",
            payload
        })
    }
}

export function deleteTrip(payload) {
    return dispatch => {
        dispatch({
            type: "DELETE_TRIP",
            payload
        })
    }
}

export function updateTrip(payload) {
    return dispatch => {
        dispatch({
            type: "UPDATE_TRIP",
            payload
        })
    }
}

export function createPalace(payload) {
    return dispatch => {
        dispatch({
            type: "CREATE_PALACE",
            payload
        })
    }
}

export function deletePalace(payload) {
    return dispatch => {
        dispatch({
            type: "DELETE_PALACE",
            payload
        })
    }
}

export function updatePalace(payload) {
    return dispatch => {
        dispatch({
            type: "UPDATE_PALACE",
            payload
        })
    }
}

export function createParticipant(payload) {
    return dispatch => {
        dispatch({
            type: "CREATE_PARTICIPANT",
            payload
        })
    }
}

export function deleteParticipant(payload) {
    return dispatch => {
        dispatch({
            type: "DELETE_PARTICIPANT",
            payload
        })
    }
}

export function updateParticipant(payload) {
    return dispatch => {
        dispatch({
            type: "UPDATE_PARTICIPANT",
            payload
        })
    }
}

export function saveModalText(payload) {
    return dispatch => {
        dispatch({
            type: "SAVE_MODAL_TEXT",
            payload
        })
    }
}