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
  img.src = "https://cdn.discordapp.com/attachments/1198949087140126871/1336609430225158195/image.png?ex=67a46e09&is=67a31c89&hm=ed7ce7a029787a5f122e1709a6a478223b2c659452daf980ff7fcf6afcfea4f5&";
  img.alt = "Playlist Image";
  img.classList.add("playlist-image");

  playlistDiv.appendChild(img);
});
