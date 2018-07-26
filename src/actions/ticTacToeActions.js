export const MARK_SYMBOL = 'MARK_SYMBOL';
export const RESET_GAME = 'RESET_GAME';
export const CHANGE_PLAYER = 'CHANGE_PLAYER';


export const markSymbol = (tile, player) => {
    return {
        type: MARK_SYMBOL,
        tile:tile,
        player:player
    }
}


export const changePlayer = (tile, player) => {
    return {
        type: CHANGE_PLAYER,
        tile:tile,
        player:player
    }
}
export const resetGame = () =>{
    return{
        type:RESET_GAME
    }
}