import {render, screen, cleanup} from "@testing-library/react";
import InputField from "../InputField";

//Clean up the component after each test
afterEach(() => {
    cleanup();
})

test('should render field container', () => {
    render(<InputField/>);
    const fieldElement = screen.getByTestId("container");

    expect(fieldElement).toBeInTheDocument();
})

test('should render input fields and buttons', () => {
    render(<InputField/>);
    const fieldElement1 = screen.getByTestId("field-1");
    const fieldElement2 = screen.getByTestId("field-2");
    const fieldElement3 = screen.getByTestId("field-3");
    const buttonElement = screen.getByTestId("button-1");

    expect(fieldElement1).toBeInTheDocument();
    expect(fieldElement2).toBeInTheDocument();
    expect(fieldElement3).toBeInTheDocument();
    expect(buttonElement).toBeInTheDocument();
})

