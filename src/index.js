const IMAGES = [
  "calm.webp",
  "click.webp",
  "computer.webp",
  "corn.webp",
  "crazy.webp",
  "dance.webp",
  "flop.webp",
  "hoverboard.webp",
  "pingpong.webp",
  "selfie.webp",
  "skateboard.webp",
  "stare.webp",
  "stare2.webp",
  "stare3.webp",
  "water.webp"
];

const COLORS = [
  "FBF8CC",
  "FDE4CF",
  "FFCFD2",
  "F1C0E8",
  "CFBAF0",
  "A3C4F3",
  "90DBF4",
  "8EECF5",
  "98F5E1",
  "B9FBC0"
];

const TITLES = [
  "You look lost",
  "Uh oh, a 404",
  "This page doesn't exist",
  "Could not find that page",
  "How'd you get here?"
];

function rand(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function $(id) {
  return document.getElementById(id);
}

// image
$("image").src = "/assets/" + rand(IMAGES);

// title
$("title").innerText = rand(TITLES);

// color
document.body.style.backgroundColor = "#" + rand(COLORS);