const memesGrid = document.getElementById("memesGrid");
const loadingText = document.getElementById("loadingText");
const errorMessage = document.getElementById("errorMessage");
const inputTitle = document.getElementById("inputTitle");
const inputCategory = document.getElementById("inputCategory");
const inputRating = document.getElementById("inputRating");
const btnAdd = document.getElementById("btnAdd");
const memesCount = document.getElementById("memesCount");

function updateMemeCount(memesArray) {
  if (memesCount) {
    memesCount.textContent = `Всего мемов: ${memesArray.length}`;
  }
}

function renderMemes(memes) {
  loadingText.style.display = "none";

  updateMemeCount(memes);

  if (memes.length === 0) {
    memes.Grid.innerHTML = <p class="empty-text">Мемов пока нет. Добавьте первый!</p>;
    return;
  }
  memesGrid.innerHTML = memes.map((meme) => createCardHTML(meme)).join("");

  function createCardHTML(meme) {
    const date = new Date(meme.addedAt).toLocalDate;
  }
}
