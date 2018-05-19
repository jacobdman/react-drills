import React, {Component} from 'react';

class Login extends Component {
    constructor () {
        super()

        this.state = {
            user: "",
            pass: "",
        }
    }

    setUser (value) {
        this.setState({ user:value })
    };

    setPass (value) {
        this.setState({ pass:value })
    }

    alert = () => {
        alert( 'Username: ' + this.state.user + ' Password: ' + this.state.pass )
    }
        
    render() {
        return(
            <div>
                <input onChange={ e => this.setUser( e.target.value )} />
                <input onChange={ e => this.setPass( e.target.value )} />
                <button onClick={ this.alert }>Login</button>
            </div>
        )
    }

}

export default Login