import './style.css'

document.addEventListener('DOMContentLoaded', () => {
  const yesBtn = document.getElementById('yes-btn');
  const noBtn = document.getElementById('no-btn');
  const questionContainer = document.getElementById('question-container');
  const successContainer = document.getElementById('success-container');
  const heartsContainer = document.getElementById('hearts-container');

  let noClickCount = 0;
  const noTexts = [
    "No",
    "Are you sure?",
    "Really sure?",
    "Think again!",
    "Last chance!",
    "Surely not?",
    "You might regret this!",
    "Give it another thought!",
    "Are you absolutely certain?",
    "This could be a mistake!",
    "Have a heart!",
    "Don't be so cold!",
    "Change of heart?",
    "Wouldn't you reconsider?",
    "Is that your final answer?",
    "You're breaking my heart ;(",
  ];

  // Helper to generate floating background hearts
  const createFloatingHearts = () => {
    const heart = document.createElement('div');
    heart.classList.add('floating-heart');
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 3 + 7 + 's'; // 7-10s
    heart.style.fontSize = Math.random() * 1.5 + 1 + 'rem'; // 1-2.5rem

    heartsContainer.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 10000);
  };

  // Start floating hearts
  setInterval(createFloatingHearts, 500);

  const stickers = ['🐱', '🐻', '💋', '🍬', '💍', '🧸', '💝', '💖', '💐'];

  const createSticker = () => {
    const sticker = document.createElement('div');
    sticker.classList.add('sticker');
    sticker.textContent = stickers[Math.floor(Math.random() * stickers.length)];
    sticker.style.left = Math.random() * 100 + 'vw';
    sticker.style.animationDuration = Math.random() * 3 + 2 + 's'; // 2-5s (faster fall)
    sticker.style.fontSize = Math.random() * 2 + 2 + 'rem'; // 2-4rem

    document.body.appendChild(sticker);

    setTimeout(() => {
      sticker.remove();
    }, 5000);
  };

  const startRainingStickers = () => {
    setInterval(createSticker, 100); // Heavy rain
  };

  noBtn.addEventListener('click', () => {
    noClickCount++;

    // Change "No" button text
    const textIndex = Math.min(noClickCount, noTexts.length - 1);
    noBtn.textContent = noTexts[textIndex];

    // Grow "Yes" button
    const currentSize = parseFloat(window.getComputedStyle(yesBtn).fontSize);
    yesBtn.style.fontSize = `${currentSize * 1.5}px`;
    yesBtn.style.padding = `${parseFloat(window.getComputedStyle(yesBtn).paddingTop) * 1.2}px ${parseFloat(window.getComputedStyle(yesBtn).paddingRight) * 1.2}px`;

    // Make "No" button move randomly to annoy user (optional playful touch)
    /*
    const randomX = Math.random() * 200 - 100;
    const randomY = Math.random() * 200 - 100;
    noBtn.style.transform = `translate(${randomX}px, ${randomY}px)`;
    */
  });

  yesBtn.addEventListener('click', () => {
    questionContainer.classList.add('hidden');
    successContainer.classList.remove('hidden');

    // Improve the "I Love You" animation with more intense hearts
    for (let i = 0; i < 50; i++) {
      setTimeout(createFloatingHearts, i * 50);
    }

    // Start raining stickers
    startRainingStickers();

    // Love Bombs
    for (let i = 0; i < 20; i++) {
      setTimeout(() => {
        const bomb = document.createElement('div');
        bomb.classList.add('love-bomb');
        bomb.textContent = '💥💖';
        bomb.style.left = Math.random() * 90 + 'vw';
        bomb.style.top = Math.random() * 90 + 'vh';
        document.body.appendChild(bomb);
        setTimeout(() => bomb.remove(), 1000);
      }, i * 200);
    }
  });
});
