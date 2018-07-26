import tiles from './tiles';
import player from './player'
import { combineReducers } from 'redux';

const reducer = combineReducers({
    player:player,
    tiles:tiles
})

export default reducer;