// let btn = document.querySelector("#btn")

// function bajar(a) {
//     let btntarget = a.target.textContet
//     if (btntarget === "ligh") {
//         a.target.textContet = "dark"
//         document.body.style.backgroundColor ="#fff"
//     }else{
//          a.target.textContet = "ligh"
//          document.body.style.backgroundColor ="black"
//     }
// }


// btn.addEventListener("click", bajar)

const input = document.querySelector("#input")
const text = document.getElementById("#text")

input.addEventListener("input", (e) => {
  text.textContent = e.target.value
  document.body.style.backgroundColor = e.target.value
})

