import { describe, expect, it} from "vitest";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe('App', () => {
    it("Checking if the compoents exists", () => {
        render(<App/>);
        // expect(screen.getByRole("button"));
    });
});