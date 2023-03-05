import { render, screen } from "@testing-library/react";
import { Users } from "../Users";
import { server } from "../mocks/server";
import { rest } from "msw";

describe("Users", () => {
  test("renders correctly", () => {
    render(<Users />);
    const textElement = screen.getByText("Users");
    expect(textElement).toBeInTheDocument();
  });

  test("renders App and fetch data", async () => {
    await render(<Users />);
    const loading = await screen.findByText("loading...");
    expect(loading).toBeInTheDocument();
    const listNode = await screen.findByTestId("posts");
    expect(loading).not.toBeInTheDocument();
    expect(listNode.childNodes).toHaveLength(1);
  });
  test("renders a list of users", async () => {
    render(<Users />);
    const users = await screen.findAllByRole("listitem");
    expect(users).toHaveLength(5);
  });
  test("renders errors", async () => {
    server.use(
      rest.get(
        "https://jsonplaceholder.typicode.com/users",
        (req, res, ctx) => {
          return res(ctx.status(500));
        }
      )
    );
    render(<Users />);
    const error = await screen.findByText("Error fetching users");
    expect(error).toBeInTheDocument();
  });
});
