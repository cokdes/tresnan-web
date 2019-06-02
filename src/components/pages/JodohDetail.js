import React from 'react'

export default function JodohDetail(props) {
    const id = props.match.params.id
    return (
        <div className="container">
            Foto <br/>
            Nama Jodoh - {id} <br/>
            Umur Jodoh <br/>
            Lokasi <br/>
            Detail <br/>
            Ajak Chat
        </div>
    )
}
