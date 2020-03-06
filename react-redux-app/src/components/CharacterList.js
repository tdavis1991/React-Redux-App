import React from 'react';
import Character from './Character';
import { connect } from 'react-redux';
import { getCharacters } from '../store/actions';
import '../App.css'

const CharacterList = (props) => {

 
    if(props.isLoading) {
        return (
            <div>
                <h2>Getting Characters now :)</h2>

            </div>
        )
    }

    if(props.error) {
        return <h2>{props.error}</h2>
    }
    
    return (
        <div className='character-container'>
            <button onClick={() => props.getCharacters()} className='btn'>
                Get Characters
            </button>
            <div className='character-list'>
                {props.characters.map(list => (
                    <Character 
                        id={list.id}
                        image={list.image}
                        name={list.name}
                        species={list.species}
                        status={list.status}
                    />
                ))}
            </div>
        {console.log('character data', props.characters)}
        </div>
    )
}

const mapStateToProps = state => {
    console.log('mapStateToProps state:', state)

    return {
        characters: state.characters,
        isLoading: state.isLoading,
        error: state.error
    }
}

export default connect(
    mapStateToProps,
    { getCharacters }
)(CharacterList);