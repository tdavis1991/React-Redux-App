import React from 'react';


const Character = (props) => {
    return (
        <div key={props.id} className='character'>
            <img src={props.image} alt={props.name}/>
            <h2>Name: {props.name}</h2>
            <h3>Species: {props.species}</h3>
            <h3>Status: {props.status}</h3>
        </div>
    )

}

export default Character;