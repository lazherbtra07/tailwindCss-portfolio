// mobile menu 
const Humbergar = document.querySelector("#hamberger");
const Menu = document.querySelector("#menu");
const Hlink = document.querySelector("#hlink ");
const FaSolid = document.querySelector(".fa-solid  ");
const booto = document.getElementById("buttt ");
const Hover = document.getElementById("whilhover ");
const Card = document.getElementById("card")

Humbergar.addEventListener("click", () => {
  Menu.classList.toggle("hidden");
  FaSolid.classList.toggle("fa-xmark")
})
Hlink.forEach(Link => {
  Link.addEventListener("click", () => {
    Menu.classList.toggle("hidden");
    FaSolid.classList.toggle("fa-xmark")
  })
});

let item, h1, p, i;
Card.addEventListener('click', () => {

  item = document.createElement('div')
  h1 = document.createElement('h1')
  p = document.createElement('p')
  i = document.createElement('i')

  item.classList.add('item')
  h1.classList.add('title')
  p.classList.add('para')
  i.classList.add('icon')

  item.appendChild(h1)
  item.appendChild(p)
  item.appendChild(i)

  Card.appendChild(item)

})