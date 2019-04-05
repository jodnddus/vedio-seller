import React from 'react';

const Button = (props) => {
    return (
        <button className="buttons" onClick={props.handleClick}>{props.value}</button>
    );
}

export default Button;