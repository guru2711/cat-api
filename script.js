const btn = document.querySelector(".btn");

btn.addEventListener("click", getcat);

async function getcat() {
  let a = await fetch("https://thatcopy.pw/catapi/rest/");
  let b = await a.json();
  let c = await b.url;
  console.log(c);
  const cat = document.querySelector(".cat");
  cat.innerHTML = `<img src="${c}"/>`;
  cat.appendChild(cat);
}
