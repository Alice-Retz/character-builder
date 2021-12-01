import { render } from "@testing-library/react";
import Display from "./Display";

it("should render our display component", () => {
	const { container } = render(
		<Display catchphrases={["tweet", "neigh", "bark"]} />
	);

	expect(container).toMatchSnapshot();
});
