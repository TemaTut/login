// Checkbox.js
import React, { useState } from "react";
import "./Checkbox.css"; // Предполагается, что стили для Checkbox вынесены в отдельный файл
import { CheckboxProps } from "../../../utils/types/prop-types";

const Checkbox: React.FC<CheckboxProps> = ({ label, name }) => {
    const [isPressed, setPressed] = useState(false);

    // Обработчики событий для мыши
    const handleMouseDown = () => setPressed(true);
    const handleMouseUp = () => setPressed(false);

    return (
        <div className="custom-elements">
            <div
                className={`checkbox-custom ${isPressed ? "pressed" : ""}`}
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp} // Если курсор покинул checkbox во время нажатия
            >
                <input
                    type="checkbox"
                    id={name}
                    className="checkbox"
                    name={name}
                    onMouseDown={handleMouseDown}
                    onMouseUp={handleMouseUp}
                />
                <span></span>
                <label htmlFor={name} className="checkbox-text">
                    {label}
                </label>
            </div>
        </div>
    );
};

export default Checkbox;
