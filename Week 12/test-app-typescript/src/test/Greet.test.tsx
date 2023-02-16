import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import Greet from "../Greet";

describe("test Greeting component", () => {
  test("Greet renders correctly", () => {
    render(<Greet />);
    const textElement = screen.getByText("Hello");
    // coole.log(textElement);
    expect(textElement).toBeInTheDocument();

    //button renders
    const buttonElement = screen.getByTestId("mybutton");
    expect(buttonElement).toBeInTheDocument();
  });
  test("Greet component  renders correctly Hello [name]", () => {
    render(<Greet name="Sarah" />);
    const textElement = screen.getByText("Hello Sarah");
    expect(textElement).toBeInTheDocument();
  });
  test("if user clicks once, isLoggedIn is true", async () => {
    render(<Greet />);
    const buttonElement = screen.getByTestId("mybutton");
    //click on the button once
    // user.setup();
    await user.click(buttonElement);
    await user.click(buttonElement);
    const headingElement = screen.getByRole("heading", {
      level: 1,
    });
    expect(headingElement).toHaveTextContent("false");
  });
});
