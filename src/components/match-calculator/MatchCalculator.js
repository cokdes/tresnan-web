import React, {Component} from 'react'
import { connect } from 'react-redux'


class MatchCalculator extends Component{
    state ={
        nama_kamu: '',
        tgl_lahir_kamu:'',
        bln_lahir_kamu:'',
        thn_lahir_kamu:'',
        nama_pasangan:'',
        tgl_lahir_pasangan:'',
        bln_lahir_pasangan:'',
        thn_lahir_pasangan:'',
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

    render(){
        console.log(this.props)
        const { pancawaras, saptawaras, sadwaras, patemon16s } = this.props;
        const tanggal = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,28,30,31]
        const bulan = ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Des"]
        const tahun = [1970,1971,1972,1973,1974,1975,1976,1977,1978,1979,1980,1981,1982,1983,1984,1985,1986,1987,1988,1989,1990,1991,1992,1993,1994,1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,]
        return(
            <div className="match-calculator section">
                <h5><b>Check Kecocokan Jodoh</b></h5>
                <form onSubmit={this.handleSubmit} className="white">
                <div>Data Kamu</div>
                <div className="row">
                    <div className="input-field col s12 m6 l5">
                        <label htmlFor="nama_kamu">Nama kamu</label>
                        <input type="text" id="nama_kamu" onChange={this.handleChange} />
                    </div>
                    <div className="col s12 m6 l5">
                        <div className="input-field row">
                            <div className="col s4">
                                <select id="tgl_lahir_kamu" onChange={this.handleChange} >
                                    <option value="" disabled selected>Tanggal</option>
                                    {tanggal.map((value) => {
                                        return (
                                            <option value={value}>{value}</option>
                                        )
                                    })}
                                </select>
                                <label htmlFor="tgl_lahir_kamu">Tanggal Lahir Kamu</label>
                                </div>

                                <div className="col s4">
                                <select id="bln_lahir_kamu" onChange={this.handleChange} >
                                    <option value="" disabled selected>Bulan</option>
                                    {bulan.map((value) => {
                                        return (
                                            <option value={value}>{value}</option>
                                        )
                                    })}
                                </select>
                                </div>

                                <div className="col s4">
                                <select id="thn_lahir_kamu" onChange={this.handleChange} >
                                    <option value="" disabled selected>Tahun</option>
                                    {tahun.map((value) => {
                                        return (
                                            <option value={value}>{value}</option>
                                        )
                                    })}
                                </select>
                            </div>    
                        </div>
                    </div>
                </div>
                <div>Data Pacar/Gebetan Kamu</div>
                <div className="row">
                    <div className="input-field col s12 m6 l5">
                        <label htmlFor="nama_pasangan">Nama Pacar/Gebetan Kamu</label>
                        <input type="text" id="nama_pasangan" onChange={this.handleChange} />
                    </div>
                    <div className="col s12 m6 l5">
                        <div className="input-field row">
                            <div className="col s4">
                                <select id="tgl_lahir_pasangan" onChange={this.handleChange} >
                                    <option value="" disabled selected>Tanggal</option>
                                    {tanggal.map((value) => {
                                        return (
                                            <option value={value}>{value}</option>
                                        )
                                    })}
                                </select>
                                <label htmlFor="tgl_lahir_pasangan">Tanggal Lahir Pacar/Gebetan</label>
                                </div>

                                <div className="col s4">
                                <select id="bln_lahir_pasangan" onChange={this.handleChange} >
                                    <option value="" disabled selected>Bulan</option>
                                    {bulan.map((value) => {
                                        return (
                                            <option value={value}>{value}</option>
                                        )
                                    })}
                                </select>
                                </div>

                                <div className="col s4">
                                <select id="thn_lahir_pasangan" onChange={this.handleChange} >
                                    <option value="" disabled selected>Tahun</option>
                                    {tahun.map((value) => {
                                        return (
                                            <option value={value}>{value}</option>
                                        )
                                    })}
                                </select>
                            </div>    
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12 m4">
                    <button className="btn pink lighten-1 z-depth-0">Check Kecocokan</button>
                    </div>
                </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        pancawaras: state.match.pancawaras,
        saptawaras: state.match.saptawaras,
        sadwaras: state.match.sadwaras,
        patemon16s: state.match.patemon16s
    }
}

export default connect(mapStateToProps)(MatchCalculator)