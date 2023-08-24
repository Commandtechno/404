// constants
const IMAGES = [
  "arrival",
  "baguette",
  "betrayal",
  "box",
  "bunger",
  "calm",
  "chip",
  "click",
  "climber",
  "cocaine",
  "computer",
  "confused",
  "corn",
  "crazy",
  "dance",
  "dog",
  "explode",
  "fistbump",
  "flop",
  "funky",
  "hoverboard",
  "insane",
  "insane2",
  "insane3",
  "jump",
  "jumpscare",
  "karaoke",
  "kicker",
  "kiss",
  "laser",
  "paint",
  "ping_pong",
  "pizzer",
  "puter",
  "sandwich",
  "selfie",
  "shake",
  "shimmy",
  "shower",
  "skateboard",
  "smiley",
  "stand",
  "stare",
  "stare2",
  "stare3",
  "unauthorized",
  "video_call",
  "vroom",
  "water"
];

const TITLES = [
  "You look lost",
  "Uh oh, a 404",
  "This page doesn't exist",
  "Could not find that page",
  "How'd you get here?"
];

const COLORS = ["FBF8CC", "FDE4CF", "FFCFD2", "F1C0E8", "CFBAF0", "A3C4F3", "90DBF4", "8EECF5", "98F5E1", "B9FBC0"];

// helpers
const rand = arr => arr[Math.floor(Math.random() * arr.length)];
const $ = id => document.getElementById(id);

// actual rendering
$("image").src = "assets/" + rand(IMAGES) + ".webp";
$("title").innerText = rand(TITLES);
document.body.style.backgroundColor = "#" + rand(COLORS);
