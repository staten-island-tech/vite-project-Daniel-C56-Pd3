import './style.css'
const music = [
    {
    Name:"Do I Wanna Know ?",
    Artist: "Arctic Monkeys",
    Genre: "Indie Rock",
    Image: "Picture/DoIWannaKnow",
  },
    {
    Name:"I Wanna Be Yours",
    Artist:"Arctic Monkeys",
    Genre:"Indie Rock",
    Image: "",
  },
    {
    Name:"Anabella",
    Artist:"Arctic Monkeys",
    Genre:"Indie Rock",
    Image: "",
  },
    {
    Name:"Believer",
    Artist:"Imagine Dragons",
    Genre:"Pop Rock",
    Image: "",
  },
    {
    Name:"Thunder",
    Artist:"Imagine Dragons",
    Genre:"Pop Rock",
    Image: "",
  },
    {
    Name:"Radioactive",
    Artist:"Imagine Dragons",
    Genre:"",
    Image: "",
  },
    {
    Name:"Shake It Off",
    Artist:"Taylor Swift",
    Genre:"Pop Rock",
    Image: "",
  },
    {
    Name:"Love Story",
    Artist:"Taylor Swift",
    Genre:"Pop Rock",
    Image: "",
  },
    {
    Name:"Cruel Summer",
    Artist:"Taylor Swift",
    Genre:"Pop Rock",
    Image: "",
  },
]
music.forEach((music) =>{
    document.querySelector(".container").insertAdjacentHTML(
        "afterbegin",
        `<div class="card" data-brand="${music.Genre}" >
        <h2>${music.Name}</h2>
        <img src="${music.Image}"/>
        <p>genre: ${music.Genre} </p>
        <button class = "btn_water" data-name="${waters.name}"|>Add To Cart</button>
        </div>`
    );
}
)