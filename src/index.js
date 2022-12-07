// constants
const IMAGES = [
  "arrival.webp",
  "baguette.webp",
  "betrayal.webp",
  "box.webp",
  "bunger.webp",
  "calm.webp",
  "chip.webp",
  "click.webp",
  "climber.webp",
  "cocaine.webp",
  "computer.webp",
  "confused.webp",
  "corn.webp",
  "crazy.webp",
  "dance.webp",
  "dog.webp",
  "explode.webp",
  "fistbump.webp",
  "flop.webp",
  "funky.webp",
  "hoverboard.webp",
  "insane.webp",
  "insane2.webp",
  "insane3.webp",
  "jump.webp",
  "jumpscare.webp",
  "karaoke.webp",
  "kicker.webp",
  "kiss.webp",
  "laser.webp",
  "paint.webp",
  "ping_pong.webp",
  "pizzer.webp",
  "puter.webp",
  "sandwich.webp",
  "selfie.webp",
  "shake.webp",
  "shimmy.webp",
  "shower.webp",
  "skateboard.webp",
  "smiley.webp",
  "stand.webp",
  "stare.webp",
  "stare2.webp",
  "stare3.webp",
  "unauthorized.webp",
  "video_call.webp",
  "vroom.webp",
  "water.webp"
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
$("image").src = "/404/assets/" + rand(IMAGES);
$("title").innerText = rand(TITLES);
document.body.style.backgroundColor = "#" + rand(COLORS);
