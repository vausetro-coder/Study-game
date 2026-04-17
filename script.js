const phoneScene = document.getElementById('phone-scene');
const flashOverlay = document.getElementById('flash-overlay');
const kingdomScene = document.getElementById('kingdom-scene');
const dialogueText = document.getElementById('dialogue-text');
const nextBtn = document.getElementById('next-btn');

const story = [
    "لقد صدقت النبوءة... انشق نسيج الزمن، واستجاب القدر لندائنا.",
    "انهض يا مولاي... انهض، فعرش 'نيلوفرا' كان بانتظارك منذ ألف عام!",
    "أنا وزيرك الأكبر، وتحت أمرك كل موارد المملكة. لنبدأ بناء مجدنا."
];

let currentLine = 0;

// بدء الانتقال عند الضغط
phoneScene.addEventListener('click', () => {
    // 1. تفعيل الفلاش
    flashOverlay.classList.add('flash-active');
    
    setTimeout(() => {
        // 2. إخفاء الموبايل وإظهار المملكة
        phoneScene.classList.remove('active');
        kingdomScene.classList.add('active');
        startDialogue();
    }, 1000); // الانتقال بعد ثانية واحدة من الفلاش
});

function startDialogue() {
    typeWriter(story[currentLine]);
}

function typeWriter(text) {
    dialogueText.innerHTML = "";
    let i = 0;
    nextBtn.style.display = "none";
    
    function type() {
        if (i < text.length) {
            dialogueText.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, 50);
        } else {
            nextBtn.style.display = "inline-block";
        }
    }
    type();
}

nextBtn.addEventListener('click', () => {
    currentLine++;
    if (currentLine < story.length) {
        typeWriter(story[currentLine]);
    } else {
        dialogueText.innerHTML = "بدأت اللعبة! (هنا ينتقل اللاعب لواجهة بناء المملكة)";
        nextBtn.style.display = "none";
    }
});
