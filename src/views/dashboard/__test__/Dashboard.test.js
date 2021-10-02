import {render, screen} from "@testing-library/react";
import Dashboard from "../Dashboard";
import "@testing-library/jest-dom/extend-expect";
import {BrowserRouter} from "react-router-dom";


describe("Dashboard card test", ()=>{
    it("should appear in DOM", function () {
        render( <Dashboard/>);
        const headingElement = screen.getByText(/Dashboard/i);
        expect(headingElement).toBeInTheDocument();
    });

    it("should render 'Dashboard' when added to DOM", function () {
        render(<Dashboard/>);
        const headingElement = screen.getByText(/dashboard/i);
        expect(headingElement.textContent).toBe("Dashboard");
    });

    it('should render card with "$1500"', function () {
        render(<Dashboard/>);
        const firstCard = screen.getByText(/1500/i);
        const secondCard = screen.getByText(/5000/i);
        const thirdCard = screen.getByText(/800/i);

        expect(firstCard.textContent).toBe("$1500");
        expect(secondCard.textContent).toBe("$5000");
        expect(thirdCard.textContent).toBe("$800");
    });

    it('should render all dashboard card', function () {
        render(<Dashboard/>);
        const amountSavedElements  = screen.getAllByRole("heading");
        expect(amountSavedElements.length).toBe(5);
    });

    it('should display icon on card when rendered', function () {
        render(<Dashboard/>);
        const iconElements  = screen.getByAltText(/icon/i);
        expect(iconElements).toHaveAttribute("src", "/home/whalewalker/Whalewalker/Portfolio/Safiri-frontend/safiri/src/assets/redit-card.png")
    });

})

describe("Dashboard chart test", () =>{
    it('should display chart heading "Spending analytics"', function () {
        render(<Dashboard/>)
        const chartHeadingElement = screen.getByRole("heading", {name: /Spending analytics/i})
        expect(chartHeadingElement).toBeInTheDocument();
        expect(chartHeadingElement.textContent).toBe("Spending analytics");
    });

    it('should display chart paragraph "Amount spent so far: $180,000"', function () {
        render(<Dashboard/>)
        const chartParagraphElement = screen.getByText(/Amount spent/i);
        expect(chartParagraphElement).toBeInTheDocument();
        expect(chartParagraphElement.textContent).toBe("Amount spent so far: $180,000");
    });
})