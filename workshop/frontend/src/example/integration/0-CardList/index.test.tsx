import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("CardList", () => {
  const mockInitialCards = [
    { text: "card1", description: "desc1" },
    { text: "card2", description: "desc2" },
    { text: "card3", description: "desc3" },
  ];

  it("should render only input field if no initialCard", async () => {
    const { default: CardList } = await import(".");
    render(<CardList />);

    const ColorPicker = screen.getByLabelText("card-color-picker");
    expect(ColorPicker).toBeInTheDocument();
    const addCardBotton = screen.getByText("Add Card");
    expect(addCardBotton).toBeInTheDocument();

    expect(screen.queryByRole("card1")).not.toBeInTheDocument();
    expect(screen.queryByRole("card2")).not.toBeInTheDocument();
    expect(screen.queryByRole("card3")).not.toBeInTheDocument();
  });

  it("should render initialCards", async () => {
    const { default: CardList } = await import(".");
    render(<CardList initialCards={mockInitialCards} />);

    const ColorPicker = screen.getByLabelText("card-color-picker");
    expect(ColorPicker).toBeInTheDocument();
    const addCardBotton = screen.getByText("Add Card");
    expect(addCardBotton).toBeInTheDocument();

    expect(screen.getByText("desc1")).toBeInTheDocument();
    expect(screen.getByText("desc2")).toBeInTheDocument();
    expect(screen.getByText("desc3")).toBeInTheDocument();

    const headingCards = screen.getAllByRole("heading");
    expect(headingCards.length).toBe(3);
    expect(headingCards[0].textContent).toMatch("card1");
    expect(headingCards[1].textContent).toMatch("card2");
    expect(headingCards[2].textContent).toMatch("card3");
  });

  it("should render more CardItem if click button", async () => {
    const { default: CardList } = await import(".");
    render(<CardList initialCards={mockInitialCards} />);

    const headingCards = screen.getAllByRole("heading");
    expect(headingCards.length).toBe(3);

    const addCardBotton = screen.getByText("Add Card");

    fireEvent.click(addCardBotton);

    const headingCards2 = screen.getAllByRole("heading");
    expect(headingCards2.length).toBe(4);
  });

  it("should change CardItem color if change color", async () => {
    const { default: CardList } = await import(".");
    render(<CardList initialCards={mockInitialCards} />);

    const headingCards = screen.getAllByRole("heading");

    expect(headingCards[headingCards.length - 1].parentElement).toHaveStyle(
      "background: green"
    );

    const ColorPicker = screen.getByLabelText("card-color-picker");
    fireEvent.input(ColorPicker, { target: { value: "#000000" } });

    expect(headingCards[headingCards.length - 1].parentElement).toHaveStyle(
      "background: #000000"
    );
  });
});

export {};
