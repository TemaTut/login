import { ErrorMessages } from "../types/types";

export const hasSpaces = (someString: string) => (someString.indexOf(" ") === -1 ? false : true);

export function validateEmail(email: string) {
    const emErrors: string[] = [];
    const emailTemplate = /^\w+@\w+\.[a-z]{2,3}$/;
    const domainTemplate = /.\.[a-z]{2,3}$/;
    if (email.match(emailTemplate) === null) emErrors.push(ErrorMessages.emailFormat);
    if (email.match(domainTemplate) === null) emErrors.push(ErrorMessages.emailDomain);
    if (email.match("@") === null) emErrors.push(ErrorMessages.emailDelimiter);
    if (hasSpaces(email)) emErrors.push(ErrorMessages.hasSpaces);
    return emErrors;
}

export function validateName(name: string): string[] {
    const errors: string[] = [];
    const minLength = 2;
    const maxLength = 50;

    if (!name.trim()) {
        errors.push(ErrorMessages.nameEmpty);
    }
    if (name.length < minLength) {
        errors.push(ErrorMessages.nameTooShort);
    }
    if (name.length > maxLength) {
        errors.push(ErrorMessages.nameTooLong);
    }
    if (!/^[а-яА-ЯёЁa-zA-Z- ]+$/.test(name)) {
        errors.push(ErrorMessages.nameInvalidCharacters);
    }

    return errors;
}
