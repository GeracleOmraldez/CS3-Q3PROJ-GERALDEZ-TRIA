function Creators() {
  alert("Let's Meet The People Behind Our Curated Soundtrack!");
  window.open("creators.html", "_self");
}

function listenNow() {
  window.open("statistics.html", "_self");
}

document.querySelector(".playlistButton").addEventListener("click", function() {
  let playlistDiv = document.getElementById("playlist");

  playlistDiv.innerHTML = ""; // Clear previous content
  let img = document.createElement("img");
  img.src = "images/myPlaylist.png";
  img.alt = "Playlist Image";
  img.classList.add("playlist-image");

  playlistDiv.appendChild(img);
});

