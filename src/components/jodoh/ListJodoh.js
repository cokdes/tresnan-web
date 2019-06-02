import React from 'react'
import JodohCard from './JodohCard'

const ListJodoh =({jodohs}) => {
    return(
        <div>
            <h5>Mungkin mereka bisa jadi jodoh kamu</h5>
            <div className="row">   
                { jodohs && jodohs.map(jodoh =>{
                    return(
                        <JodohCard jodoh={jodoh} key={jodoh.id}/>
                    )
                })}
            </div>
        </div>
    )
}

export default ListJodoh