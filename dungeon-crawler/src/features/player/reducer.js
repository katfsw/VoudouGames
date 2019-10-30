//This file deals w/ the state that our Player component needs.

const initialState = {
    position: [0, 0], //x=0, y=0

}

const playerReducer = ( state=initialState, action) => {
    switch(action.type){
        default:
            return state
    }
}

export default playerReducer