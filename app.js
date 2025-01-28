const emojiContainer = document.getElementById('emoji-container');
const emojis = ['😊', '🚀', '🌟', '🎉', '❤️', '🔥', '🌈', '🍕', '🐱‍👤', '🎸'];

function getRandomEmoji() {
  const randomIndex = Math.floor(Math.random() * emojis.length);
  return emojis[randomIndex];
}

function updateEmoji() {
  emojiContainer.textContent = getRandomEmoji();
}

setInterval(updateEmoji, 1000); // Change emoji every second