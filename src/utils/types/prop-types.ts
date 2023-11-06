export interface ElProps {
    width: string;
    background: string;
}

export interface InputProps {
    label: string;
    type: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    errors?: string[];
}

export interface CheckboxProps {
    label: string;
    name: string;
}

export interface ButtonProps {
    name: string;
    email: string;
}
