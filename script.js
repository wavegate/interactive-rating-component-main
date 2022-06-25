const ratingState = document.getElementById("ratingState");
const thankyouState = document.getElementById("thankyouState");
const listItems = document.getElementsByTagName("li");
const submitButton = document.getElementById("submitButton");
const selectionDisplay = document.getElementById("selectionDisplay");

let selectedItem;

for (let listItem of listItems) {
  listItem.addEventListener("click", (event) => {
    selectedItem = event.target.innerHTML;
    for (let listItem of listItems) {
      listItem.classList.remove("selected");
    }
    event.target.classList.add("selected");
  });
}

submitButton.addEventListener("click", () => {
  if (selectedItem != undefined) {
    selectionDisplay.innerHTML = `You selected ${selectedItem || ""} out of 5`;
    ratingState.style.display = "none";
    thankyouState.style.display = "flex";
  } else {
    return;
  }
});
