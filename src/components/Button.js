import React from 'react';

const Button = (props) => {
    return (
        <button className="buttons">{props.value}</button>
    );
}

export default Button;