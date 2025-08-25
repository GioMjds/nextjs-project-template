import type { Metadata } from "next";
import RegisterPage from "./register";

export const metadata: Metadata = {
    title: "Register",
    description: "Create a new account"
}

export default function Register() {
    return <RegisterPage />;
}