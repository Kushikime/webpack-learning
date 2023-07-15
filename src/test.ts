var globalExpanded = false;
export const testFn = (arg: any) => {
  console.log("ARG: ", arg);
  window.document.getElementById("root").innerHTML = `
  <div>
  <button id='test2' style='background: green; color: white; padding: 10px 15px; font-family: sans-serif;'>${
    !globalExpanded ? "Open" : "Close"
  }!</div>
    <div id='test' style='background: red; min-height: 50px; min-width: 50px; transition: 1s'></div>
    </div>`;

  let button = window.document.getElementById("test2");
  let test = window.document.getElementById("test");

  const animateTest = () => {
    test.style.minHeight = globalExpanded ? "50px" : "500px";
    globalExpanded = !globalExpanded;
  };

  button.addEventListener("click", animateTest);
};
