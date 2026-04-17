const startBtn = document.getElementById('start-portal');
const flash = document.getElementById('time-portal-flash');
const modernScene = document.getElementById('modern-scene');
const throneScene = document.getElementById('throne-scene');
const speechText = document.getElementById('speech-text');
const continueBtn = document.getElementById('continue-btn');

const storyLines = [
    "ماذا يحدث؟ الهاتف... إنه يمتص طاقتي!",
    "(تفتح عينيك ببطء لتجد نفسك في قاعة مهيبة)",
    "الوزير الأكبر: لقد صدقت النبوءة.. انشق نسيج الزمن واستجاب القدر لندائنا.",
    "الوزير الأكبر: انهض يا مولاي، فعرش نيلوفرا كان بانتظارك منذ ألف عام!",
    "الآن، لنبدأ في بناء أعظم إمبراطورية شهدها التاريخ."
];

let currentStep = 0;

startBtn.addEventListener('click', () => {
    // تشغيل الفلاش
    flash.classList.add('flash-trigger');
    
    setTimeout(() => {
        modernScene.classList.remove('active');
        throneScene.classList.add('active');
        nextDialogue();
    }, 800);
});

function nextDialogue() {
    if (currentStep < storyLines.length) {
        typeWriter(storyLines[currentStep]);
        currentStep++;
    } else {
        speechText.innerText = "جاهز للمعركة القادمة؟";
        continueBtn.innerText = "ابدأ بناء المملكة";
    }
}

function typeWriter(text) {
    speechText.innerText = "";
    continueBtn.classList.add('hidden');
    let i = 0;
    let timer = setInterval(() => {
        if (i < text.length) {
            speechText.innerText += text.charAt(i);
            i++;
        } else {
            clearInterval(timer);
            continueBtn.classList.remove('hidden');
        }
    }, 50);
}

continueBtn.addEventListener('click', nextDialogue);
