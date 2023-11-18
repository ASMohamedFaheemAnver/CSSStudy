const navRight = document.getElementsByClassName("nav-right")[0];
// const data = [1, 2, 3];
// data.forEach((e) => {
//   console.log(e);
// });

navRight.childNodes.forEach((child) => {
  if (child.nodeName === "UL") {
    const li = document.createElement("li");
    const a = document.createElement("a");
    // a.setAttribute("href", "#demo");
    a.href = "#demo";
    a.style.textTransform = "uppercase";
    a.innerHTML = "Java Script Injection";
    li.appendChild(a);
    child.appendChild(li);
    a.parentElement.parentElement.parentElement.style.flex = 2;
  }
});

const links = document.getElementsByTagName("a");

for (let i = 0; i < links.length; i++) {
  console.log(i);
  links[i].onclick = () => {
    // location.hash = links[i].hash;
    console.log(location.hash);
    // links[i].setAttribute("style", `color: lightblue;`);
    links[i].style.color = "lightblue";
    for (let j = 0; j < links.length; j++) {
      console.log(j);
      if (j === i) {
        continue;
      }
      // links[j].setAttribute("style", `color: white;`);
      links[j].style.color = "white";
    }
  };
}

// links[0].onclick = async () => {
//   // const res = await fetch("https://jsonplaceholder.typicode.com/todos/1", {
//   //   method: "GET",
//   // });

//   // const json = await res.json();
//   // console.log(json);

//   const xmlh = new XMLHttpRequest();
//   xmlh.open("POST", "https://jsonplaceholder.typicode.com/posts", true);
//   xmlh.setRequestHeader("Content-Type", "application/json");
//   xmlh.send(JSON.stringify({ title: "faheem", body: "*74362@?", userId: 1 }));
//   xmlh.onload = () => {
//     console.log(xmlh.response);
//   };
// };
