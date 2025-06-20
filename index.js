const giftBox = document.getElementById('giftBox');
const message = document.getElementById('message');
const birthdayText = document.getElementById("birthdayText");
const birthdayMusic = document.getElementById("birthdayMusic");

const texts = [
  "Hôm nay là ngày rất đặc biệt... vì có một thiên thần nhỏ ra đời cách đây 20 năm rưỡi (ừm tầm đó đó 😚)",
  "Chúc bé tuổi mới đáng yêu hơn, ăn gì cũng ngon, ngủ gì cũng say, học gì cũng vô, deadline nào cũng né 🥳",
  "À còn điều quan trọng nhất... là tuổi mới hãy để anh bên cạnh nhiều hơn một chút nhaaaa ☺️"
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
        }, 1500);
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
