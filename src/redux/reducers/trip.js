import update from "immutability-helper";

const initialState = {
    data: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case "CREATE_TRIP":
            return update(state, {
                data: { $push: [action.payload] }
            });
        case "UPDATE_TRIP":
            return update(state, {
                data: {
                    [action.payload.index]: {
                        name: { $set: action.payload.name }
                    }
                }
            });
        case "DELETE_TRIP":
            return update(state, {
                data: { $splice: [[action.payload, 1]] }
            });
        case "CREATE_PARTICIPANT":
            return update(state, {
                data: {
                    [action.payload.index]: {
                        participants: { $push: [action.payload.data] }
                    }
                }
            });
        case "UPDATE_PARTICIPANT":
            return update(state, {
                data: {
                    [action.payload.index]: {
                        participants: {
                            [action.payload.itemIndex]: { $set: action.payload.data }
                        }
                    }
                }
            });
        case "DELETE_PARTICIPANT":
            return update(state, {
                data: {
                    [action.payload.index]: {
                        participants: { $splice: [[action.payload.itemIndex, 1]] }
                    }
                }
            });
        case "CREATE_PALACE":
            return update(state, {
                data: {
                    [action.payload.index]: {
                        palaces: { $push: [action.payload.data] }
                    }
                }
            });
        case "UPDATE_PALACE":
            return update(state, {
                data: {
                    [action.payload.index]: {
                        palaces: {
                            [action.payload.itemIndex]: { $set: action.payload.data }
                        }
                    }
                }
            });
        case "DELETE_PALACE":
            return update(state, {
                data: {
                    [action.payload.index]: {
                        palaces: { $splice: [[action.payload.itemIndex, 1]] }
                    }
                }
            });
        case "SAVE_TEAM_BUDGET":
            return update(state, {
                data: {
                    [action.payload.index]: {
                        teamBudget: { $set: action.payload.data.teamBudgetNew },
                        totalCost: { $set: action.payload.totalCost },
                        teamBudgetHistory: { $splice: [[0, 0, action.payload.data]] }
                    }
                }
            });
        default:
            return state;
    }
};
