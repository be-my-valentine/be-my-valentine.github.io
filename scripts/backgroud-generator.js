function createEmojiBackground() {
    const emojiBackground = document.createElement('div');
    emojiBackground.classList.add('emoji-background');
    document.body.appendChild(emojiBackground);

    const emojiSize = 10;
    const numEmojis = Math.floor(window.innerWidth / emojiSize);
    const flowerEmojis = ['💖','🫶','🩵','🧡','💚','💛','💐','🌸','🌺','🌷','🌼','🌹']; // Add more flower emojis as needed

    for (let i = 0; i < numEmojis; i++) {
      const emoji = document.createElement('span');
      const randomFlower = flowerEmojis[Math.floor(Math.random() * flowerEmojis.length)];
      emoji.innerHTML = randomFlower;
      emoji.style.position = 'absolute';
      emoji.style.fontSize = '20px'; // Adjust the size as needed
      emoji.style.left = `${i * emojiSize}px`;
      emoji.style.top = `${Math.random() * window.innerHeight}px`;
      emojiBackground.appendChild(emoji);
    }

    animateEmojis();
  }

  function animateEmojis() {
    const emojis = document.querySelectorAll('.emoji-background span');

    emojis.forEach((emoji) => {
      const rotation = Math.random() * 360;
      const animationDuration = 5 + Math.random() * 5; // Adjust duration as needed


      emoji.animate(
        [{ transform: 'translateY(0)' }, { transform: 'translateY(100vh)' }],
        {
          duration: animationDuration * 1000,
          iterations: Infinity,
          easing: 'linear',
        }
      );
    });
  }

  createEmojiBackground();