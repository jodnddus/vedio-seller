import React from 'react';

const Input = (props) => {
    return (
        <div id="labels">
            <label>{props.labelName}</label>
            <br />
            <input type={props.inputType} placeholder={props.inputPlaceholder}/>
        </div>
    );
}

export default Input;