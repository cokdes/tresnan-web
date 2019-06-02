import React from 'react'

const JodohCard = ({jodoh}) => {
    console.log(jodoh)
    return(
        <div className="col s12 m6 l3">
          <div className="card fixed">
            <div className="card-image">
              <img src={jodoh.imgurl} alt="namajodoh" className="tresnan-card-image"/>
              <span className="card-title"><strong>{jodoh.name}</strong></span>
            </div>
            <div className="card-content">
                <p>{jodoh.location}</p>
              <p>{jodoh.profile}</p>
                <p>Kecocokan dengan kamu: Baik</p>
            </div>
            <div className="card-action">
              <a href="/">Ajak ketemuan</a>
            </div>
          </div>
        </div>
    )
}

export default JodohCard