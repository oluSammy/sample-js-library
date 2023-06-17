import { pluck, showModal, hideModal } from "olusammy-simple-package";

console.log(pluck([{ name: "sam", age: "23" }, { name: "ola" }], "name")); // [3, 4, 5]

const btn = document.querySelector("#showmodal");
const closeBtn = document.querySelector("#closemodal");
//

btn.addEventListener("click", () => {
  showModal();
});

closeBtn.addEventListener("click", () => {
  hideModal();
});
