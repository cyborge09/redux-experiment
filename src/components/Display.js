import React from 'react';
//statefull
// class Display extends React.Component {
//     render() {
//         return (
//             <div className="display">{this.props.message}</div>
//         )
//     }
// }

//stateless
const Display = ({ message }) => {
    return (
        <div className="display">{message}</div>
    )
}
export default Display;