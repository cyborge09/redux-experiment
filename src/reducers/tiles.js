import { MARK_SYMBOL, RESET_GAME } from '../actions/ticTacToeActions';

const INITIAL_STATE = [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined];

const tiles = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case MARK_SYMBOL:
            // return state.map((item, tile) => {
            //     return (tile === action.tile ? action.player : item);
            //  });

            var state = [...state.slice(0, action.tile),
                         ...action.player,
                         ...state.slice(action.tile + 1, INITIAL_STATE.length)
            ]
            return state;
        case RESET_GAME:
            return INITIAL_STATE;
        default:
            return state;
    }
};

export default tiles;