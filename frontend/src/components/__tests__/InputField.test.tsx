import {render, screen, cleanup} from "@testing-library/react";
import InputField from "../InputField";

//Clean up the component after each test
afterEach(() => {
    cleanup();
})

test('should render field container', () => {
    render(<InputField/>);
    const fieldElement = screen.getByTestId("field-container");

    expect(fieldElement).toBeInTheDocument();
})

test('should render input fields and buttons', () => {
    render(<InputField/>);
    const fieldElement1 = screen.getByTestId("source-field");
    const fieldElement2 = screen.getByTestId("destination-field");
    const fieldElement3 = screen.getByTestId("arrival-field");
    const buttonElement = screen.getByTestId("submit-button");

    expect(fieldElement1).toBeInTheDocument();
    expect(fieldElement2).toBeInTheDocument();
    expect(fieldElement3).toBeInTheDocument();
    expect(buttonElement).toBeInTheDocument();
})

