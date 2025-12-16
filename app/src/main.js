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
  Image: "src/Picture/RadioActive.png",
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
  Image:"src/Picture/VivalaVida.png",
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


const musicCardContainer = document.querySelector(".container");


music.forEach((song) => {
musicCardContainer.insertAdjacentHTML(
  "afterbegin",
  `<div class="card" data-brand="${song.Genre}" data-artist="${song.Artist}">
    <h2>${song.Name}</h2>
    <img src="${song.Image}"/>
    <p>genre: ${song.Genre}</p>
    <button class="btn_music">Add To Album</button>
  </div>`
);
});


const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
document.body.classList.toggle("light");
document.body.classList.toggle("dark");
});


const genreButtons = document.querySelectorAll(".Genre");
genreButtons.forEach(button => {
button.addEventListener("click", () => {
  const selectedGenre = button.textContent;
  document.querySelectorAll(".card").forEach(card => {
    if (selectedGenre === "All" || card.dataset.brand === selectedGenre) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});
});


let album = [];


function addToAlbum() {
 const addButtons = document.querySelectorAll(".btn_music");
   addButtons.forEach(btn => {
       btn.onclick = null;
   });


 addButtons.forEach((btn) => {
   btn.addEventListener("click", function (event) {
     const card = event.target.closest(".card");
     const songName = card.querySelector("h2").textContent;
     const songArtist = card.dataset.artist;
     const songGenre = card.querySelector("p").textContent.replace("genre: ", "");


     album.push([songName, songArtist, songGenre]);


     document.querySelector(".Album").innerHTML = '<h2 class="Title">Your Album Songs</h2>';
     album.forEach((song) => {
       document.querySelector(".Album").insertAdjacentHTML(
         "beforeend",
         `<p>${song[0]} - ${song[1]} (${song[2]})</p>`
       );
     });
   });
 });
}


const addSongForm = document.getElementById("addSongForm");
addSongForm.addEventListener("submit", (e) => {
e.preventDefault();
const name = document.getElementById("songName").value;
const artist = document.getElementById("songArtist").value;
const genre = document.getElementById("songGenre").value;
const image = document.getElementById("songImage").value;


musicCardContainer.insertAdjacentHTML(
  "afterbegin",
  `<div class="card" data-brand="${genre}" data-artist="${artist}">
    <h2>${name}</h2>
    <img src="${image}">
    <p>genre: ${genre}</p>
    <button class="btn_music">Add To Album</button>
  </div>`
);


addSongForm.reset();


addToAlbum();
});


addToAlbum();
