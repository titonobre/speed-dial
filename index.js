import tilesData from "./tiles.json";

function createTiles(container, tiles) {
  const links = tiles.map((tile) => {
    // link
    const link = document.createElement("a");
    link.classList.add("tile");
    link.setAttribute("href", tile.href);
    link.style.background = tile.background;

    // image
    const img = document.createElement("img");
    img.classList.add("icon");
    img.setAttribute("src", tile.img);
    img.setAttribute("width", "55");
    img.setAttribute("height", "55");

    // title
    const title = document.createElement("span");
    title.classList.add("title");
    title.innerText = tile.title;

    link.append(img, title);

    return link;
  });

  container.append(...links);
}


document.addEventListener("DOMContentLoaded", () => {
  const tilesContainer = document.querySelector(".tiles");

  createTiles(tilesContainer, tilesData);
});
