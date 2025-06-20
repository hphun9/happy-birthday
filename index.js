const giftBox = document.getElementById('giftBox');
const message = document.getElementById('message');
const birthdayText = document.getElementById("birthdayText");
const birthdayMusic = document.getElementById("birthdayMusic");

const texts = [
  "Có một người đặc biệt chào đời vào hôm nay… và khiến cả vũ trụ dịu dàng thêm một chút 🌸",
  "Chúc bé tuổi mới luôn vui, luôn khoẻ, học tốt, deadline né khéo, và mỗi ngày đều có điều đáng nhớ 🥳",
  "Nếu có thể, anh mong năm nay và cả những năm sau nữa... đều được chúc em thế này nhaaaa ☺️" 
];

giftBox.addEventListener('click', () => {
    giftBox.style.display = 'none';
    setTimeout(() => {
        message.style.display = 'block';
    
        for (let i = 0; i < 50; i++) {
            const confetti = document.createElement('div');
            confetti.classList.add('confetti');
            confetti.style.left = Math.random() * 100 + 'vw';
            confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 70%, 60%)`;
            confetti.style.animationDelay = `${Math.random() * 5}s`;
            document.body.appendChild(confetti);
        }
    }, 1000);
    birthdayMusic.play();
});

function typeWriter(texts, element, textIndex = 0, i = 0) {
    if (textIndex < texts.length) {
        const text = texts[textIndex];
        if (i < text.length) {
        element.innerHTML += text.charAt(i);
        setTimeout(() => typeWriter(texts, element, textIndex, i + 1), 40); // Tốc độ gõ
        } else {
        setTimeout(() => {
            element.innerHTML += '<br>'; // Xóa nội dung cũ
            typeWriter(texts, element, textIndex + 1); // Chuyển sang đoạn văn tiếp theo
        }, 2000); // Đợi 2 giây rồi chuyển quan đoạn khác
        }
    } else {
        // Thêm gif
        setTimeout(() => {
        const imgGift = document.createElement('div');
        imgGift.classList.add('img-gift');
        message.appendChild(imgGift);
        }, 500);
        spawnFloatingWords();
    }
}

giftBox.addEventListener("click", () => {
  message.classList.remove("hidden");
  message.classList.add("show");

  setTimeout(() => {
    typeWriter(texts, birthdayText);
  }, 3500);

});

document.addEventListener('click', (e) => {
    const light = document.createElement('div');
    light.classList.add('light-flash');
    light.style.left = `${e.clientX}px`;
    light.style.top = `${e.clientY}px`;
    document.body.appendChild(light);

    setTimeout(() => {
        light.remove();
    }, 500);
});

document.addEventListener('mousemove', (e) => {
    for (let i = 0; i < 2; i++) {
        const sparkle = document.createElement('div');
        sparkle.classList.add('sparkle');
        sparkle.style.left = `${e.clientX + Math.random() * 20 - 10}px`;
        sparkle.style.top = `${e.clientY + Math.random() * 20 - 10}px`;
        sparkle.style.background = getRandomColor();
        document.body.appendChild(sparkle);

        setTimeout(() => {
            sparkle.remove();
        }, 800);
    }
});

function getRandomColor() {
    const colors = ['#FFD700', '#FF69B4', '#00FFFF', '#ADFF2F', '#FFA500', '#FF4500', '#87CEFA', '#EE82EE'];
    return colors[Math.floor(Math.random() * colors.length)];
}

function launchFirework() {
  const firework = document.createElement('div');
  firework.classList.add('firework');
  firework.style.left = `${Math.random() * window.innerWidth}px`;
  firework.style.bottom = '0px';
  document.body.appendChild(firework);

  setTimeout(() => {
    const x = firework.offsetLeft;
    const y = window.innerHeight - 400;

    for (let i = 0; i < 20; i++) {
      const particle = document.createElement('div');
      particle.classList.add('explosion');
      particle.style.left = `${x}px`;
      particle.style.top = `${y}px`;
      particle.style.backgroundColor = getRandomColor();
      const angle = Math.random() * 2 * Math.PI;
      const distance = Math.random() * 80;
      const dx = Math.cos(angle) * distance;
      const dy = Math.sin(angle) * distance;
      particle.style.setProperty('--x', `${dx}px`);
      particle.style.setProperty('--y', `${dy}px`);
      document.body.appendChild(particle);

      setTimeout(() => particle.remove(), 600);
    }

    firework.remove();
  }, 800);
}

function getRandomColor() {
  const colors = ['#FF69B4', '#FFD700', '#87CEFA', '#ADFF2F', '#FF4500', '#00FFFF', '#FFFFFF', '#EE82EE'];
  return colors[Math.floor(Math.random() * colors.length)];
}

let fireworksCount = 10;
for (let i = 0; i < fireworksCount; i++) {
  setTimeout(() => {
    launchFirework();
  }, i * 300);
}

document.addEventListener('click', (e) => {
  const heart = document.createElement('div');
  heart.textContent = '💖';
  heart.style.position = 'absolute';
  heart.style.left = `${e.clientX}px`;
  heart.style.top = `${e.clientY}px`;
  heart.classList.add('floating-heart');
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 8000);
});

function spawnFloatingWords() {
  const words = ["Happy Birthday 💕", "You’re my sunshine ☀️", "Cuteeee 😚", "Love u 💖", "cnmeow 😗"];
  setInterval(() => {
    const word = document.createElement('div');
    word.className = 'floating-word';
    word.textContent = words[Math.floor(Math.random() * words.length)];
    word.style.left = `${Math.random() * 80 + 10}%`;
    word.style.animationDelay = `${Math.random()}s`;
    document.body.appendChild(word);
    setTimeout(() => word.remove(), 6000);
  }, 1000);
}
