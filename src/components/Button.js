import React from 'react';
//State full
// class Button extends React.Component
// {
//     render()
//     {
//         return(
//         <div onClick={this.props.onClick} className="button">
//         RESET
//         </div>

//         )
//     }
// }


//stateless

const Button = ({onClick = f =>f}) =>{

    return(
        <button onClick={onClick} className="button">
        RESET
        </button>

        )

}

export default Button;