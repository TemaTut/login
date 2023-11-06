import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { submitUserData } from "../../../utils/requests/api";
import { ButtonProps } from "../../../utils/types/prop-types";
import "./Button.css";
import axios from "axios";

const Button: React.FC<ButtonProps> = ({ name, email }) => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async () => {
        setIsSubmitting(true);
        try {
            const response = await submitUserData({ name, email });
            console.log(response.status);
            if (response.status === 200) {
                console.log(response.status);
                navigate("/home");
            }
        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.log(error);
            }
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <button className="start" onClick={handleSubmit} disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Start the course"}
        </button>
    );
};

export default Button;
