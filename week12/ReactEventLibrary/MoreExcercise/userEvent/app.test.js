import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe("test stuff", () => {
  test("focus", async () => {
    render(<App />);

    const input = screen.getByRole("textbox", { name: "cool-input" });
    const newValue = "11123";

    // Fails 👇
   // userEvent.type(input, newValue);

    // Works  👇
     fireEvent.change(input, { target: { value: newValue } });

    expect(input).toHaveValue(newValue);
  });
});
