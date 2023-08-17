import React from 'react';

function Input({ type, name, isDisabled, isRequired, isAutoFocus, placeholder, onChange, onKeyUp }) {
    return (
        <div>
            <input type={type}
            name={name} 
            disabled={isDisabled}
            required={isRequired}
            autoFocus={isAutoFocus}
            placeholder={placeholder}
            onChange={onChange}
            onKeyUp={onKeyUp}
            />
        </div>
    );
}

Input.defaultProps = {
    type: "text",
    isDisabled: false,
    isRequired: false,
    isAutoFocus: false,
    placeholder: "",
    onChange: null,
    onKeyUp: null
}

export default Input;
