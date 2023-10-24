async function getData() {
  try {
    const response = await fetch("http://localhost:4000");
    const data = await response.json();
    console.log(data, "data");
    sayHello(data.message);
  } catch (error) {
    console.error(error);
  }
}

const sayHello = (data) => {
  const h1 = document.querySelector("h1");

  // Assuming data is a string for simplicity. If it's an object, you need to handle it accordingly.
  h1.innerText = data;
};
window.onload = function () {
  console.log("loaded");
  getData();
};
