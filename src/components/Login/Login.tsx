import React, { useState } from "react";
// Импортируй функции валидации
import { validateEmail, validateName } from "../../utils/functions/validations";
import Skeleton from "../UI/Skeleton/Skeleton";
import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";
import Checkbox from "../UI/Checkbox/Checkbox";
import "./Login.css";

export default function Login() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [nameErrors, setNameErrors] = useState<string[]>([]); // Состояние для ошибок имени
    const [emailErrors, setEmailErrors] = useState<string[]>([]); // Состояние для ошибок email

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newName = event.target.value;
        setName(newName);
        // Валидация имени и обновление ошибок
        const errors = validateName(newName);
        setNameErrors(errors);
    };

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newEmail = event.target.value;
        setEmail(newEmail);
        // Валидация email и обновление ошибок
        const errors = validateEmail(newEmail);
        setEmailErrors(errors);
    };

    return (
        <div className="wrapper">
            <div className="window">
                <div className="window__header">
                    <Skeleton width="133px" background="#C1D9CD" />
                    <ul className="header__nav">
                        <Skeleton width="81px" background="#DAE8E1" />
                        <Skeleton width="81px" background="#DAE8E1" />
                        <Skeleton width="81px" background="#DAE8E1" />
                    </ul>
                </div>
                <h2 className="window__title">Submit your details</h2>
                <div className="window__body">
                    <div className="window__forms">
                        {/* Передаем ошибки в Input */}
                        <Input label="Name" type="text" value={name} onChange={handleNameChange} errors={nameErrors} />
                        <Input
                            label="Email"
                            type="email"
                            value={email}
                            onChange={handleEmailChange}
                            errors={emailErrors}
                        />
                        <Checkbox label="I want to receive updates via email." name="agreement" />
                    </div>
                    <div className="window__description">
                        <Skeleton width="160px" background="#DAE8E1" />
                        <Skeleton width="349px" background="#DAE8E1" />
                        <Skeleton width="349px" background="#DAE8E1" />
                        <Skeleton width="349px" background="#DAE8E1" />
                        <Skeleton width="160px" background="#DAE8E1" />
                    </div>
                </div>
                <Button name={name} email={email} />
            </div>
        </div>
    );
}
