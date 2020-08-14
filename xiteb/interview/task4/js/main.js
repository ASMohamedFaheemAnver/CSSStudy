const cards = document.getElementsByClassName("card");
const current = document.getElementById("current");
const popup = document.getElementById("pop-up");
const action = document.getElementById("action");

for (let i = 0; i < cards.length; i++) {
  cards[i].onclick = () => {
    current.style.display = "none";
    popup.style.display = "flex";
    action.style.display = "none";
  };
}

const closer = document.getElementById("closer");
closer.onclick = () => {
  current.style.display = "grid";
  popup.style.display = "none";
  action.style.display = "flex";
};
