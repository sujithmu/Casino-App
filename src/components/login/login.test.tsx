import { describe, expect, it} from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import { BrowserRouter } from 'react-router-dom';
import Login from "./";

describe('Login Component tests', () => {
    it("Checking if the components exists", async () => {
        render(<BrowserRouter>
            <Login />
        </BrowserRouter>);
        
        const userName = screen.getByPlaceholderText('Username');
        const pswd = screen.getByPlaceholderText("Password");
        const submitBtn = screen.getByRole("button");
        expect(userName).toBeInTheDocument();
        expect(pswd).toBeInTheDocument();
        expect(submitBtn).toBeInTheDocument();
    });
});