import React, {useState, useEffect} from 'react'
import useEventListener from '@use-it/event-listener'

const MAX_STEP = 3
const SIZE = 32
const DIRECTION = {
    DOWN: 0, //0px
    LEFT: SIZE * 1, //32px
    RIGHT: SIZE * 2, //62px
    UP: SIZE * 3 //96px
}

export default function Character() {
    const offset = {top: 0, left: 288}
    const [facing, setFacing] = useState({
        current: DIRECTION.DOWN,
        previous: DIRECTION.DOWN
    })
    const [step, setStep] = useState(0)

    useEventListener('keydown', ({ code })=>{
        if(code.indexOf('Arrow')===-1)return
        const direction = DIRECTION[code.replace('Arrow', '').toUpperCase()]
        setFacing(prevState => ({
            current: direction,
            previous: prevState.current
        }))
    })

    useEffect(()=>{
        if( facing.current === facing.previous ){
            setStep(prevState => (prevState < MAX_STEP - 1 ? prevState + 1 : 0))
        } else {
            setStep(0)
        }
    }, [facing])

    return(
    <div
        style = {{
            width: SIZE,
            height: SIZE,
            background: `url(/characters.png) -${offset.left + step * SIZE}px -${offset.top + facing.current}px`
        }}
    />)
}