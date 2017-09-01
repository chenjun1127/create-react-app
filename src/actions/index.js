import * as actionTypes from '../constants/index';
const userLogin = (data) => {
    return {
        type: actionTypes.USERINFO_LOGIN,
        data
    }
};

export {userLogin};
