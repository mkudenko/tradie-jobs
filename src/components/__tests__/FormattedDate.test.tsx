import React from "react";
import { render, screen } from "@testing-library/react";
import { FormattedDate } from "../FormattedDate";
import dayjs from "dayjs";

describe("FormattedDate component", function () {
  test("renders full date", () => {
    const dateString = "2022-10-25 17:05:01";
    const date = dayjs(dateString).toDate();

    render(<FormattedDate date={date} className="foo" />);

    expect(document.querySelector(".foo")?.innerHTML).toEqual(dateString);
  });

  test("renders short date", () => {
    const date = dayjs("2022-10-25 17:05:01").toDate();

    render(<FormattedDate date={date} className="foo" useShortFormat={true} />);

    expect(document.querySelector(".foo")?.innerHTML).toEqual("2022-10-25");
  });
});
