import React, {Component} from 'react';
import Hero from '../layout/Hero';
import MatchCalculator from '../match-calculator/MatchCalculator';
import Features from '../layout/Features';
//import ListJodoh from '../jodoh/ListJodoh';
import { connect } from 'react-redux'

class Home extends Component{
    render(){
        console.log(this.props)
        //const { jodohs } = this.props;
        return(
            <div>
                <Hero/>
                <div className="tresnan-body">
                    <div className="container">
                        <MatchCalculator/>
                        <Features/>
                        {/* <ListJodoh jodohs={jodohs}/> */}
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        jodohs: state.jodoh.jodohs
    }
}

export default connect(mapStateToProps)(Home)