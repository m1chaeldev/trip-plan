import update from "immutability-helper";

const initialState = {
    data: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case "POST_TICKET":
            return update(state, {
                data: { $splice: [[0, 0, action.payload]] }
            });

        case "DELETE_TICKET":
            return update(state, {
                data: { $splice: [[action.payload, 1]] }
            });
        default:
            return state;
    }
};
