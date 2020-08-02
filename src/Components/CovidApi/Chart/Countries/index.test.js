import React from "react";
import ReactDOM from "react-dom";
import Country from "../../../Export";

test("should ", () => {
    //render
    const root = document.createElement("div");
    ReactDOM.render(<Country />, root);

    expect(root.querySelector("h1").textContent).toBe(" Loading...");
});
