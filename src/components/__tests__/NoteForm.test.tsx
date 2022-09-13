import React from "react";
import { render, screen } from "@testing-library/react";
import { NoteForm } from "../NoteForm";

describe("NoteForm component", function () {
  test("can update a note", () => {
    const saveCallback = jest.fn();
    const cancelCallback = jest.fn();

    const component = render(
      <NoteForm onSave={saveCallback} onCancel={cancelCallback} note="Some text" />,
    );

    component.getByText("Save").click();

    expect(saveCallback.mock.calls.length).toEqual(1);
    expect(cancelCallback.mock.calls.length).toEqual(0);
  });

  test("can cancel editing", () => {
    const saveCallback = jest.fn();
    const cancelCallback = jest.fn();

    const component = render(
      <NoteForm onSave={saveCallback} onCancel={cancelCallback} note="Some text" />,
    );

    component.getByText("Cancel").click();

    expect(saveCallback.mock.calls.length).toEqual(0);
    expect(cancelCallback.mock.calls.length).toEqual(1);
  });
});
