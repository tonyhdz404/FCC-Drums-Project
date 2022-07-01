const btnContainer = document.getElementById("display");
const lableSound = document.querySelector(".sound-desc");
const soundRegex = /(?<=clips\/)(.*?)(?=\.wav)/;

function playClickedSound(soundId) {
  const sound = document.getElementById(`${soundId}`);
  const soundDesc = sound.src.match(soundRegex)[0];

  lableSound.innerText =
    soundDesc.slice(0, 1).toUpperCase() + soundDesc.slice(1);
  sound.play();
}

btnContainer.addEventListener("click", function (e) {
  if (!e.target.classList.contains("drum-pad")) return;
  const btnClicked = e.target;
  playClickedSound(btnClicked.innerText);
});

document.addEventListener("keydown", function (e) {
  const { key } = e;
  if (!document.getElementById(`${key.toUpperCase()}`)) return;
  playClickedSound(key.toUpperCase());
});
