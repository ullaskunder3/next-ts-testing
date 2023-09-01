import Home from "@/app/page";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Home Page - Rendering", () => {
  it("should render Home Page text", () => {
    render(<Home />);
    const h1ELement = screen.getByRole("heading");
    expect(h1ELement.textContent).toBe("Home Page");
  });
  it("should render home page para", () => {
    render(<Home />);
    const h1ELement = screen.getByText("This is a paragraph");
    expect(h1ELement).toBeInTheDocument();
  });
  it("should have button with text click me", () => {
    render(<Home />);
    const clickMeBtn = screen.getByRole("button", {
      name: "Click Me",
    });
    expect(clickMeBtn).toBeInTheDocument();
  });
  it("should render input and label", () => {
    render(<Home />);
    const inputElm = screen.getByLabelText("username:");
    const labelElm = screen.getByText("username:");

    expect(inputElm).toBeInTheDocument();
    expect(labelElm).toBeInTheDocument();
  });
  it("should handle user input", () => {
    render(<Home />);

    const inputElm = screen.getByLabelText("username:");

    fireEvent.change(inputElm, { target: { value: "ullas" } });
    expect(inputElm).toHaveValue("ullas");
  });
  it("should initially hide the text", () => {
    render(<Home />);

    const textContainer = screen.queryByTestId("greet-user");

    expect(textContainer).not.toBeInTheDocument();
  });
  it("should show the text when the button is clicked", ()=>{
    render(<Home />)
    const buttonElm = screen.getByText("show text");
    fireEvent.click(buttonElm);
    const textPara = screen.queryByTestId("greet-user");
    expect(textPara).toBeInTheDocument()
    expect(textPara).toHaveTextContent(/hello ullas/i)
  })
  it("should hide the text when the button is clicked twice", ()=>{
    render(<Home />)
    const buttonElm = screen.getByText("show text");
    fireEvent.click(buttonElm);
    fireEvent.click(buttonElm);
    const textPara = screen.queryByTestId("greet-user");
    expect(textPara).not.toBeInTheDocument()
  })
});
