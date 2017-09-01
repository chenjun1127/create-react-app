import React, {Component} from  'react';
export default class extends Component{
    constructor(props){
        super(props)
        this.userinfoHandle = this.userinfoHandle.bind(this);
    }
    componentDidMount() {
        this.props.userinfoActions.userLogin({
            name:'Jack',
            password:'123'
        })
    }
    userinfoHandle(){
        console.log(this)
        this.props.userinfoActions.userLogin({
            name:'Jone',
            password:'456'
        })
    }
    render(){
        return(
            <div className="container">
                <div className="login">
                    <h1> This is login page width React-Redux !</h1>
                    <p>
                        {this.props.userinfo.name}
                    </p>
                    <p>
                        {this.props.userinfo.password}
                    </p>
                    <input type="button" value="修改" onClick={this.userinfoHandle}/>
                </div>
            </div>
        )
    }
}