import React from "react";
import "./Input.css";
import { InputProps } from "../../../utils/types/prop-types";

const Input: React.FC<InputProps> = ({ label, type, value, onChange, errors }) => {
    return (
        <div className="form">
            <label className="form__label">{label}</label>
            <input
                type={type}
                className={`form__input ${errors && errors.length > 0 ? "form__input--error" : ""}`}
                value={value}
                onChange={onChange}
            />
            {errors &&
                errors.map((error, index) => (
                    <div key={index} className="error-message">
                        {error}
                    </div>
                ))}
        </div>
    );
};

export default Input;
