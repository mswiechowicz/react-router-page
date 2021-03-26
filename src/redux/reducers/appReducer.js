import {ADD, DELETE, EDIT} from "../actions/appActions";

const appReducer = (state = [], action) => {
    switch (action.type) {
        case ADD:
            return [...state, action.payload];
        case EDIT:
            return state.map(currentStateElement => {
                if (currentStateElement.id !== action.payload.id) {
                    return currentStateElement;
                }

                const {author, comment, rate} = action.payload;
                return ({
                    author: author,
                    comment: comment,
                    id: rate.id,
                    rate:rate
                })
            });
        case DELETE:
            return state.filter(currentStateElement => currentStateElement.id !== action.payload.id);
        default:
            console.warn(`Nie mamy akcji typu ${action.type}`)
            return state;
    }
}
export default appReducer;