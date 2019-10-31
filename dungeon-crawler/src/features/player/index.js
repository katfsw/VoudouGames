import React from 'react'
import {connect} from 'react-redux'
import walkSprite from './walkSprite.png'
import handleMovement from './movement'

const Player=(props)=>{
    return(
        <div 
        style={{
            position: 'absolute',
            top: props.position[1], //y-axis
            left: props.position[0], //x-axis
            backgroundImage: `url(${walkSprite})`,
            backgroundPosition: '0 0',
            width: '40px',
            height: '40px',

        }}
        />
    )
}

const mapStateToProps = state => {
    return {
        ...state.player,
        
    }
}

export default connect(mapStateToProps)(handleMovement(Player));