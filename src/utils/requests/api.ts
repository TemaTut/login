import axios, { AxiosResponse } from "axios";
import MockAdapter from "axios-mock-adapter";

interface UserData {
    name: string;
    email: string;
}

interface ResponseData {
    status: number;
    message: string;
}

const mock = new MockAdapter(axios);

mock.onPost("/submit-form").reply((config) => {
    const userData: UserData = JSON.parse(config.data);
    if (userData.name === "name" && userData.email === "test@gmail.com") {
        return [200, { message: "Data submitted successfully!" }];
    } else {
        return [400, { message: "Invalid name or email" }];
    }
});

export const submitUserData = async (userData: UserData): Promise<AxiosResponse<ResponseData>> => {
    try {
        const response = await axios.post<ResponseData>("/submit-form", userData);
        console.log(response.status);
        return response;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            const serverError = error.response?.data as ResponseData | undefined;
            console.error(serverError?.message || error.message);
            throw serverError ?? new Error("An unexpected error occurred");
        } else {
            console.error("An unexpected error occurred");
            throw new Error("An unexpected error occurred");
        }
    }
};
