import './style.css'


const music = [
{
  Name:"Do I Wanna Know ?",
  Artist: "Arctic Monkeys",
  Genre: "Indie Rock",
  Image: "/DoIWannaKnow.png",
},
{
  Name:"I Wanna Be Yours",
  Artist:"Arctic Monkeys",
  Genre:"Indie Rock",
  Image: "/IWannaBeYours.png",
},
{
  Name:"Arabella",
  Artist:"Arctic Monkeys",
  Genre:"Indie Rock",
  Image: "/Picture/Arabella.png",
},
{
  Name:"Believer",
  Artist:"Imagine Dragons",
  Genre:"Pop Rock",
  Image: "/Believer.png",
},
{
  Name:"Thunder",
  Artist:"Imagine Dragons",
  Genre:"Pop Rock",
  Image: "/Thunder.png",
},
{
  Name:"Radioactive",
  Artist:"Imagine Dragons",
  Genre:"Pop Rock",
  Image: "/RadioActive.png",
},
{
  Name:"Shake It Off",
  Artist:"Taylor Swift",
  Genre:"Pop Rock",
  Image: "/ShakeItOff.png",
},
{
  Name:"Love Story",
  Artist:"Taylor Swift",
  Genre:"Pop Rock",
  Image: "/LoveStory.png",
},
{
  Name:"Cruel Summer",
  Artist:"Taylor Swift",
  Genre:"Pop Rock",
  Image: "/CruelSummer.png",
},
{
  Name:"Viva La Vida",
  Artist:"Coldplay",
  Genre:"Alternative Rock",
  Image:"/VivalaVida.png",
},
{
  Name:"Yellow",
  Artist:"Coldplay",
  Genre:"Alternative Rock",
  Image:"/Yellow.png",
},
{
  Name:"Paradise",
  Artist:"Coldplay",
  Genre:"Alternative Rock",
  Image:"/Paradise.png",
},
{
  Name:"Sugar",
  Artist:"Maroon 5",
  Genre:"Pop",
  Image:"/Sugar.png",
},
{
  Name:"Animals",
  Artist:"Maroon 5",
  Genre:"Pop",
  Image:"/Animals.png",
},
{
  Name:"Memories",
  Artist:"Maroon 5",
  Genre:"Pop",
  Image:"/Memories.png",
},
{
  Name:"Blinding Lights",
  Artist:"The Weeknd",
  Genre:"R&B / Synthwave",
  Image:"/BlindingLights.png",
},
{
  Name:"Starboy",
  Artist:"The Weeknd",
  Genre:"R&B / Pop",
  Image:"/Starboy.png",
},
{
  Name:"The Hills",
  Artist:"The Weeknd",
  Genre:"R&B / Alternative",
  Image:"/TheHills.png",
},
{
  Name:"Diamonds",
  Artist:"Rihanna",
  Genre:"Pop",
  Image:"/Diamonds.png",
},
{
  Name:"Umbrella",
  Artist:"Rihanna",
  Genre:"Pop",
  Image:"/Umbrella.png",
},
{
  Name:"Where Have You Been",
  Artist:"Rihanna",
  Genre:"Pop",
  Image:"/WhereHaveYouBeen.png",
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
