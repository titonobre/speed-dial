import tiles from "./tiles.json";

function createTiles() {
  const tilesContainer = document.querySelector(".tiles");

  const anchors = tiles.map((tile) => {
    // anchor
    const anchor = document.createElement("a");
    anchor.classList.add("tile");
    anchor.setAttribute("href", tile.href);
    anchor.style.background = tile.background;

    // image
    const img = document.createElement("img");
    img.classList.add("icon");
    img.setAttribute("src", tile.img);

    if (tile.invert) img.classList.add("invert");

    if (tile.width) img.style.width = tile.width;

    // title
    const title = document.createElement("span");
    title.classList.add("title");
    title.innerText = tile.title;

    anchor.append(img, title);

    return anchor;
  });

  tilesContainer.append(...anchors);
}

document.addEventListener("DOMContentLoaded", () => createTiles());
