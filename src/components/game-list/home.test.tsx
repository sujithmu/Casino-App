import { describe, expect, it} from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import { BrowserRouter } from 'react-router-dom';
import Home from ".";

describe('Home Page', () => {
    it("Checking if home elements exists", () => {
        render(<BrowserRouter>
            <Home />
        </BrowserRouter>);
        const gameHeader = screen.getByRole("heading", {
           name: "Games" 
        });
        const categoryHeader = screen.getByRole("heading", {
            name: "Categories"
        });
        expect(gameHeader).toBeInTheDocument();
        expect(categoryHeader).toBeInTheDocument();
    });
});