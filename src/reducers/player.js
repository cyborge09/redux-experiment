import { CHANGE_PLAYER, RESET_GAME } from '../actions/ticTacToeActions';

const INITIAL_STATE = 'X';

const player = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CHANGE_PLAYER:
            return (state === 'X') ? 'O' : 'X';
        case RESET_GAME:
            return INITIAL_STATE;

        default:
            return state;
    }
};

export default player;