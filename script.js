const questions = [
    {
        question: "Егер барлық мысықтар жануар болса, ал кейбір жануарлар үй жануарлары болса, онда барлық мысықтар үй жануарлары ма?",
        options: ["Иә", "Жоқ"],
        answer: 1
    },
    {
        question: "2 + 2 = 4. Бұл дұрыс па?",
        options: ["Иә", "Жоқ"],
        answer: 0
    },
    {
        question: "Егер А > Б және Б > С болса, онда А > С ма?",
        options: ["Иә", "Жоқ"],
        answer: 0
    },
    {
        question: "Қандай бүтін сан 1-ден үлкен және 2-ден кіші?",
        options: ["1", "2", "Мұндай сан жоқ"],
        answer: 2
    },
    {
        question: "Егер бүгін жұма болса, ертең сенбі. Бүгін дүйсенбі болса, ертең неше?",
        options: ["Сейсенбі", "Жексенбі", "Дүйсенбі"],
        answer: 0
    }
];

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    document.getElementById('intro').style.display = 'none';
    document.getElementById('quiz').style.display = 'block';
    showQuestion();
}

function showQuestion() {
    const question = questions[currentQuestionIndex];
    document.getElementById('question').textContent = question.question;
    const optionsContainer = document.getElementById('options');
    optionsContainer.innerHTML = '';
    question.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.textContent = option;
        button.onclick = () => selectAnswer(index);
        optionsContainer.appendChild(button);
    });
    document.getElementById('next-btn').style.display = 'none';
    document.getElementById('result').textContent = '';
}

function selectAnswer(selectedIndex) {
    const question = questions[currentQuestionIndex];
    if (selectedIndex === question.answer) {
        score++;
        document.getElementById('result').textContent = 'Дұрыс!';
    } else {
        document.getElementById('result').textContent = 'Қате!';
    }
    // Отключить все кнопки после выбора
    const optionsContainer = document.getElementById('options');
    const buttons = optionsContainer.querySelectorAll('button');
    buttons.forEach(btn => btn.disabled = true);
    document.getElementById('next-btn').style.display = 'block';
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    document.getElementById('quiz').style.display = 'none';
    document.getElementById('congratulation').style.display = 'block';
    // Можно добавить score, но пользователь не просил
}