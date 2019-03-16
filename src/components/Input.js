import React from 'react';

const Input = (props) => {
    return (
        <div className="inputs">
            <label>{props.labelName}</label>
            <br />
            <input type={props.inputType} placeholder={props.inputPlaceholder} className="inputlabels"/>
        </div>
    );
}

export default Input;