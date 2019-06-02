import React, { Component } from 'react'

class Daftar extends Component {
    state ={
        email: '',
        password: '',
        name:'',
        birthdate:'',
    }

    handleChange = (e) => {
        console.log(e.target.value)
        console.log("change")
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
                            <h5 className="grey-text text-darken-3">Daftar</h5>
                            <div className="input-field">
                                <label htmlFor="name">Nama kamu</label>
                                <input type="text" id="name" onChange={this.handleChange} />
                            </div>
                            <div className="input-field">
                                <label htmlFor="birthdate">Tanggal Lahir *)</label>
                                <input id="birthdate" type="text" className="datepicker" onClick={this.handleChange} />
                            </div>
                            <div className="input-field">
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" onChange={this.handleChange} />
                            </div>
                            <div className="input-field">
                                <label htmlFor="password">Password</label>
                                <input type="password" id="password" onChange={this.handleChange} />
                            </div>
                            <div className="input-field">
                                <button className="btn pink lighten-1 z-depth-0">Daftar</button>
                            </div>
                        </form>
                        <p>Sudah punya akun? <a href="/login">Login disini</a></p>
                        <p><i>*) Tanggal lahir sangat penting untuk perhitungan pencocokan jodoh</i></p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Daftar
