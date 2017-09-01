import * as actionTypes from '../constants/index';
const initialState = {
    id: 0,
    name: '',
    password: '',
};
const userinfo = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.USERINFO_LOGIN:
            return Object.assign({}, action.data, {
                id: state.id + 1
            });
            break;
        default:
            return state
    }
};

export default userinfo;
