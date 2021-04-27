const render = require("../src/render");

describe("test", () => {
  it("x", async () => {
    const dom = await render(`C:/Poc and Personal/Mocha/src/index.html`);
    dom;
    const btn = dom.window.document.getElementById("btn");
    btn;
    dom.window.document
      .querySelector("button")
      .dispatchEvent(new dom.window.Event("click"));

    const h1 = dom.window.document.querySelector("h1");

    console.log("Contents of h1", h1.innerHTML);
  });
});
