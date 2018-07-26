import React from 'react';
import Tile from '../components/Tile';
import Button from '../components/Button';
import Display from '../components/Display';

//statefull
// class TicTacToe extends React.Component {
//     render() {
//         return (
//             <div>
//                 <div className="grid">
//                     {
//                         this.props.tiles.map((value, tile) => (
//                             <Tile key={tile} state={value}
//                                 onClick={() => {
//                                     this.props.onSetTile(tile, this.props.tiles, this.props.player)
//                                 }}
//                             />
//                         ))
//                     }
//                 </div>

//                 <Display message={this.props.message} />

//                 <div className="panel">
//                     <Button
//                         onClick={() => {
//                             this.props.onReset()
//                         }}
//                     />
//                 </div>
//             </div>
//         )
//     }
// }

//stateless
const TicTacToe = ({ player, tiles = [], message, winnerTile, onSetTile = f => f,onChangeTile = f => f, onReset = f => f }) => {
    
    return (
        <div>
            <div className="grid">
                {
                    tiles.map((value, tile) => (
                        <Tile key={tile}
                            index = {tile}
                            state={value}
                            onClick={() => {
                                onSetTile(tile, tiles, player);
                                onChangeTile(tile, tiles, player);
                            }}
                           

                            winningTile = {winnerTile}
                        />
                    ))
                }
            </div>

            <Display message={message} />

            <div className="panel">
                <Button
                    onClick={() => {
                        onReset()
                    }}
                />
            </div>
        </div>
    )

}

export default TicTacToe