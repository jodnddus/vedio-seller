import React from 'react';

const Input = (props) => {
    return (
        <div className="inputs">
            <label>{props.labelName}</label>
            <br />
            <input type={props.inputType} placeholder={props.inputPlaceholder} onChange={props.onChange} className="inputlabels"/>
        </div>
    );
}

export default Input;