import { screen, render } from "@testing-library/react";
import Picker from "./Picker";

it("should render our picker component", () => {
	const { container } = render(<Picker />);
	const selectHead = screen.getByLabelText(/Head/);
	const selectMiddle = screen.getByLabelText(/Middle/);
	const input = screen.getAllByLabelText(/New Catchphrase:/);

	expect(selectHead).toBeInTheDocument();
	expect(selectMiddle).toBeInTheDocument();
	expect(input).toBeInTheDocument();
	expect(container).toMatchSnapshot();
});
