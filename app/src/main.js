import './style.css'
const music = [
    {
    Name:"Do I Wanna Know ?",
    Artist: "Arctic Monkeys",
    Genre: "Indie Rock",
    Image: "src/Picture/DoIWannaKnow.png",
  },
    {
    Name:"I Wanna Be Yours",
    Artist:"Arctic Monkeys",
    Genre:"Indie Rock",
    Image: "src/Picture/IWannaBeYours.png",
  },
    {
    Name:"Arabella",
    Artist:"Arctic Monkeys",
    Genre:"Indie Rock",
    Image: "src/Picture/Arabella.png",
  },
    {
    Name:"Believer",
    Artist:"Imagine Dragons",
    Genre:"Pop Rock",
    Image: "src/Picture/Believer.png",
  },
    {
    Name:"Thunder",
    Artist:"Imagine Dragons",
    Genre:"Pop Rock",
    Image: "src/Picture/Thunder.png",
  },
    {
    Name:"Radioactive",
    Artist:"Imagine Dragons",
    Genre:"Pop Rock",
    Image: "src/Picture/Radioactive.png",
  },
    {
    Name:"Shake It Off",
    Artist:"Taylor Swift",
    Genre:"Pop Rock",
    Image: "src/Picture/ShakeItOff.png",
  },
    {
    Name:"Love Story",
    Artist:"Taylor Swift",
    Genre:"Pop Rock",
    Image: "src/Picture/LoveStory.png",
  },
    { 
    Name:"Cruel Summer",
    Artist:"Taylor Swift",
    Genre:"Pop Rock",
    Image: "src/Picture/CruelSummer.png",
  },
    {
    Name:"Viva La Vida",
    Artist:"Coldplay",
    Genre:"Alternative Rock",
    Image:"src/Picture/VivaLaVida.png",
  },
  {
    Name:"Yellow",
    Artist:"Coldplay",
    Genre:"Alternative Rock",
    Image:"src/Picture/Yellow.png",
  },
  {
    Name:"Paradise",
    Artist:"Coldplay",
    Genre:"Alternative Rock",
    Image:"src/Picture/Paradise.png",
  },
  {
    Name:"Sugar",
    Artist:"Maroon 5",
    Genre:"Pop",
    Image:"src/Picture/Sugar.png",
  },
  {
    Name:"Animals",
    Artist:"Maroon 5",
    Genre:"Pop",
    Image:"src/Picture/Animals.png",
  },
  {
    Name:"Memories",
    Artist:"Maroon 5",
    Genre:"Pop",
    Image:"src/Picture/Memories.png",
  },
  {
    Name:"Blinding Lights",
    Artist:"The Weeknd",
    Genre:"R&B / Synthwave",
    Image:"src/Picture/BlindingLights.png",
  },
  {
    Name:"Starboy",
    Artist:"The Weeknd",
    Genre:"R&B / Pop",
    Image:"src/Picture/Starboy.png",
  },
  {
    Name:"The Hills",
    Artist:"The Weeknd",
    Genre:"R&B / Alternative",
    Image:"src/Picture/TheHills.png",
  },
  {
    Name:"Diamonds",
    Artist:"Rihanna",
    Genre:"Pop",
    Image:"src/Picture/Diamonds.png",
  },
  {
    Name:"Umbrella",
    Artist:"Rihanna",
    Genre:"Pop",
    Image:"src/Picture/Umbrella.png",
  },
  {
    Name:"Where Have You Been",
    Artist:"Rihanna",
    Genre:"Pop",
    Image:"src/Picture/WhereHaveYouBeen.png",
  },
];
music.forEach((music) =>{
    document.querySelector(".container").insertAdjacentHTML(
        "afterbegin",
        `<div class="card" data-brand="${music.Genre}" >
        <h2>${music.Name}</h2>
        <img src="${music.Image}"/>
        <p>genre: ${music.Genre} </p>
        <button class = "btn_music" data-name="${music.Name}"|>Add To Playlist</button>
        </div>`
    );
}
)
document.querySelector(".btn_music").addEventListener("click", function () {
  if (document.body.classList.contains("Indie Rock")) {
  } else {
    document.body.classList.contains("Pop Rock");
  }
});