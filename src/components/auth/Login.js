import React, { Component } from 'react'

class Login extends Component {
    state ={
        email: '',
        password: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col s12 l6">
                        <form onSubmit={this.handleSubmit} className="white">
                            <h5 className="grey-text text-darken-3">Login</h5>
                            <div className="input-field">
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" onChange={this.handleChange} />
                            </div>
                            <div className="input-field">
                                <label htmlFor="password">Password</label>
                                <input type="password" id="password" onChange={this.handleChange} />
                            </div>
                            <div className="input-field">
                                <button className="btn pink lighten-1 z-depth-0">Login</button>
                            </div>
                        </form>
                        <p>Belum punya akun? <a href="/daftar">Daftar disini</a></p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login
