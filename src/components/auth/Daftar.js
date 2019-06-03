import React, { Component } from 'react'

class Daftar extends Component {
    state ={
        email: '',
        password: '',
        name:'',
        tgl_lahir:'',
        bln_lahir:'',
        thn_lahir:'',
        sex:'',
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
        const tanggal = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,28,30,31]
        const bulan = ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Des"]
        const tahun = [1970,1971,1972,1973,1974,1975,1976,1977,1978,1979,1980,1981,1982,1983,1984,1985,1986,1987,1988,1989,1990,1991,1992,1993,1994,1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,]
        return (
            <div className="container">
                <div className="row">
                    <div className="col s12 m8 l6">
                        <form onSubmit={this.handleSubmit} className="white">
                            <h5 className="grey-text text-darken-3">Daftar</h5>
                            <div className="input-field">
                                <label htmlFor="name">Nama kamu</label>
                                <input type="text" id="name" onChange={this.handleChange} />
                            </div>
                            <div className="input-field">
                                <select id="sex" onChange={this.handleChange} >
                                    <option value="" disabled selected>Choose your option</option>
                                    <option value="1">Laki-laki</option>
                                    <option value="2">Perempuan</option>
                                </select>
                                <label htmlFor="sex">Jenis Kelamin</label>
                            </div>
                            <br/>
                            <div className="input-field row">
                                <div className="col s4">
                                <select id="tgl_lahir" onChange={this.handleChange} >
                                    <option value="" disabled selected>Tanggal</option>
                                    {tanggal.map((value) => {
                                        return (
                                            <option value={value}>{value}</option>
                                        )
                                    })}
                                </select>
                                <label htmlFor="tgl_lahir">Tanggal Lahir Kamu</label>
                                </div>

                                <div className="col s4">
                                <select id="bln_lahir" onChange={this.handleChange} >
                                    <option value="" disabled selected>Bulan</option>
                                    {bulan.map((value) => {
                                        return (
                                            <option value={value}>{value}</option>
                                        )
                                    })}
                                </select>
                                </div>
 
                                <div className="col s4">
                                <select id="thn_lahir" onChange={this.handleChange} >
                                    <option value="" disabled selected>Tahun</option>
                                    {tahun.map((value) => {
                                        return (
                                            <option value={value}>{value}</option>
                                        )
                                    })}
                                </select>
                                </div>
                                
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
