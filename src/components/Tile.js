import React from 'react';
//statefull
// class Tile extends React.Component {
//     render() {
//         return (
//             <div onClick={this.props.onClick} className="tile">
//                 {this.props.state}
//             </div>
//         )
//     }
// }


//stateless
const Tile = ({index, state, onClick, winningTile }) => {
    console.log(winningTile);
    let className = (index===winningTile[0]||index===winningTile[1]||index===winningTile[2])? 'wintile' : 'tile';
    return (

        <div onClick={ onClick } className={className}>
            {state}
        </div>
    )
}

export default Tile;