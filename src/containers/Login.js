import {bindActionCreators} from 'redux';
import Login from '../components/Login';
import {connect} from 'react-redux';
import * as userinfoActions from '../actions/index';
let mapStateToProps = (state) => {
    return {
        userinfo: state.userinfo
    }
};
let mapDispatchToProps = (dispatch) => {
    return {
        userinfoActions: bindActionCreators(userinfoActions, dispatch)
    }
};


export default  connect(mapStateToProps, mapDispatchToProps)(Login);