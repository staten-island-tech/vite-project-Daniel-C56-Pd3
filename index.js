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

const container = document.querySelector(".container");

music.forEach((song) => {
  container.insertAdjacentHTML(
    "beforeend",
    `<div class="card" data-brand="${song.Genre}">
      <h2>${song.Name}</h2>
      <img src="${song.Image}"/>
      <p>genre: ${song.Genre}</p>
      <button class="btn_music" data-name="${song.Name}">Add To Playlist</button>
    </div>`
  );
});

const themeToggle = document.getElementById("toggleMode");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light");
  document.body.classList.toggle("dark");
});
const searchInput = document.getElementById("searchInput");
const genreButtons = document.querySelectorAll(".genre-buttons button");
const addSongBtn = document.getElementById("addSongBtn");

function displaySongs(songList) {
  container.innerHTML = "";

  songList.forEach((song) => {
    container.insertAdjacentHTML(
      "beforeend",
      `<div class="card">
        <h2>${song.Name}</h2>
        <img src="${song.Image}" />
        <p>${song.Artist}</p>
        <p>${song.Genre}</p>
        <button class="btn-add">Add To Playlist</button>
      </div>`
    );
  });
}

displaySongs(music);

searchInput.addEventListener("input", () => {
  const searchValue = searchInput.value.toLowerCase();

  const filtered = music.filter(song =>
    song.Name.toLowerCase().includes(searchValue) ||
    song.Artist.toLowerCase().includes(searchValue)
  );

  displaySongs(filtered);
});

genreButtons.forEach(button => {
  button.addEventListener("click", () => {
    const genre = button.dataset.genre;

    if (genre === "All") {
      displaySongs(music);
    } else {
      const filtered = music.filter(song =>
        song.Genre.includes(genre)
      );
      displaySongs(filtered);
    }
  });
});

addSongBtn.addEventListener("click", () => {
  const title = document.getElementById("newTitle").value;
  const artist = document.getElementById("newArtist").value;
  const genre = document.getElementById("newGenre").value;
  const image = document.getElementById("newImage").value;

  if (!title || !artist || !genre || !image) {
    alert("Please fill out all fields");
    return;
  }

  const newSong = {
    Name: title,
    Artist: artist,
    Genre: genre,
    Image: image,
  };

  music.push(newSong);
  displaySongs(music);

  document.getElementById("newTitle").value = "";
  document.getElementById("newArtist").value = "";
  document.getElementById("newGenre").value = "";
  document.getElementById("newImage").value = "";
});