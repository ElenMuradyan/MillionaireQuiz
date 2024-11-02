export const regexpValidation = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

export const ROUTE_CONSTANTS={
    LOGIN:'/login',
    REGISTER:'/register',
    CABINET:'/cabinet',
    MAINGAME:'/cabinet/maingame',
    GAMESTART:'/cabinet/gamestart',
    GAMEEND:'/cabinet/gameend'
};

export const FIRESTORE_PATH_NAMES = {
    REGISTER_USERS: 'registered_users'
};

export const millionaireQuiz = [
    {
        question: "What is the capital of France?",
        answers: [
            { answer: "London", isCorrect: false },
            { answer: "Berlin", isCorrect: false },
            { answer: "Paris", isCorrect: true },
            { answer: "Madrid", isCorrect: false },
        ]
    },
    {
        question: "Which planet is known as the Red Planet?",
        answers: [
            { answer: "Jupiter", isCorrect: false },
            { answer: "Saturn", isCorrect: false },
            { answer: "Venus", isCorrect: false },
            { answer: "Mars", isCorrect: true },
        ]
    },
    {
        question: "What is the largest ocean on Earth?",
        answers: [
            { answer: "Atlantic Ocean", isCorrect: false },
            { answer: "Pacific Ocean", isCorrect: true },
            { answer: "Indian Ocean", isCorrect: false },
            { answer: "Arctic Ocean", isCorrect: false },
        ]
    },
    {
        question: "Who wrote 'Romeo and Juliet'?",
        answers: [
            { answer: "Charles Dickens", isCorrect: false },
            { answer: "Mark Twain", isCorrect: false },
            { answer: "William Shakespeare", isCorrect: true },
            { answer: "Jane Austen", isCorrect: false },
        ]
    },
    {
        question: "What is the smallest prime number?",
        answers: [
            { answer: "2", isCorrect: false },
            { answer: "1", isCorrect: true },
            { answer: "3", isCorrect: false },
            { answer: "4", isCorrect: false },
        ]
    },
    {
        question: "What is the chemical symbol for gold?",
        answers: [
            { answer: "Ag", isCorrect: false },
            { answer: "Fe", isCorrect: false },
            { answer: "Au", isCorrect: true },
            { answer: "Pb", isCorrect: false },
        ]
    },
    {
        question: "Which country is known as the Land of the Rising Sun?",
        answers: [
            { answer: "China", isCorrect: false },
            { answer: "Thailand", isCorrect: false },
            { answer: "Japan", isCorrect: true },
            { answer: "South Korea", isCorrect: false },
        ]
    },
    {
        question: "What is the largest mammal in the world?",
        answers: [
            { answer: "African Elephant", isCorrect: false },
            { answer: "Giraffe", isCorrect: false },
            { answer: "Great White Shark", isCorrect: false },
            { answer: "Blue Whale", isCorrect: true },
        ]
    },
    {
        question: "Which element has the atomic number 1?",
        answers: [
            { answer: "Helium", isCorrect: false },
            { answer: "Oxygen", isCorrect: false },
            { answer: "Hydrogen", isCorrect: true },
            { answer: "Carbon", isCorrect: false },
        ]
    },
    {
        question: "What is the main ingredient in guacamole?",
        answers: [
            { answer: "Tomato", isCorrect: false },
            { answer: "Avocado", isCorrect: true },
            { answer: "Onion", isCorrect: false },
            { answer: "Pepper", isCorrect: false },
        ]
    },
    {
        question: "What is the hardest natural substance on Earth?",
        answers: [
            { answer: "Ruby", isCorrect: false },
            { answer: "Sapphire", isCorrect: false },
            { answer: "Diamond", isCorrect: true },
            { answer: "Emerald", isCorrect: false },
        ]
    },
    {
        question: "Who painted the Mona Lisa?",
        answers: [
            { answer: "Leonardo da Vinci", isCorrect: true },
            { answer: "Pablo Picasso", isCorrect: false },
            { answer: "Vincent van Gogh", isCorrect: false },
            { answer: "Claude Monet", isCorrect: false },
        ]
    },
    {
        question: "What year did the Titanic sink?",
        answers: [
            { answer: "1905", isCorrect: false },
            { answer: "1918", isCorrect: false },
            { answer: "1912", isCorrect: true },
            { answer: "1920", isCorrect: false },
        ]
    },
    {
        question: "Which is the smallest continent by land area?",
        answers: [
            { answer: "Europe", isCorrect: false },
            { answer: "Australia", isCorrect: true },
            { answer: "Antarctica", isCorrect: false },
            { answer: "South America", isCorrect: false },
        ]
    },
    {
        question: "In which year did the Berlin Wall fall?",
        answers: [
            { answer: "1991", isCorrect: false },
            { answer: "1985", isCorrect: false },
            { answer: "1990", isCorrect: false },
            { answer: "1989", isCorrect: true },
        ]
    },
    {
        question: "What is the largest planet in our solar system?",
        answers: [
            { answer: "Earth", isCorrect: false },
            { answer: "Mars", isCorrect: false },
            { answer: "Saturn", isCorrect: false },
            { answer: "Jupiter", isCorrect: true },
        ]
    },
    {
        question: "Which instrument measures atmospheric pressure?",
        answers: [
            { answer: "Thermometer", isCorrect: false },
            { answer: "Anemometer", isCorrect: false },
            { answer: "Barometer", isCorrect: true },
            { answer: "Hygrometer", isCorrect: false },
        ]
    },
    {
        question: "What is the capital of Japan?",
        answers: [
            { answer: "Kyoto", isCorrect: false },
            { answer: "Osaka", isCorrect: false },
            { answer: "Hiroshima", isCorrect: false },
            { answer: "Tokyo", isCorrect: true },
        ]
    },
    {
        question: "Which vitamin is known as the sunshine vitamin?",
        answers: [
            { answer: "Vitamin C", isCorrect: false },
            { answer: "Vitamin A", isCorrect: false },
            { answer: "Vitamin D", isCorrect: true },
            { answer: "Vitamin B12", isCorrect: false },
        ]
    },
    {
        question: "What gas do plants absorb from the atmosphere?",
        answers: [
            { answer: "Carbon Dioxide", isCorrect: true },
            { answer: "Oxygen", isCorrect: false },
            { answer: "Nitrogen", isCorrect: false },
            { answer: "Hydrogen", isCorrect: false },
        ]
    },
    {
        question: "Which ancient civilization built the pyramids?",
        answers: [
            { answer: "Romans", isCorrect: false },
            { answer: "Greeks", isCorrect: false },
            { answer: "Mayans", isCorrect: false },
            { answer: "Egyptians", isCorrect: true },
        ]
    },
    {
        question: "What is the largest organ in the human body?",
        answers: [
            { answer: "Liver", isCorrect: false },
            { answer: "Skin", isCorrect: true },
            { answer: "Heart", isCorrect: false },
            { answer: "Lungs", isCorrect: false },
        ]
    },
    {
        question: "Which famous scientist developed the theory of relativity?",
        answers: [
            { answer: "Isaac Newton", isCorrect: false },
            { answer: "Galileo Galilei", isCorrect: false },
            { answer: "Albert Einstein", isCorrect: true },
            { answer: "Stephen Hawking", isCorrect: false },
        ]
    },
    {
        question: "What is the boiling point of water in degrees Celsius?",
        answers: [
            { answer: "90", isCorrect: false },
            { answer: "80", isCorrect: false },
            { answer: "110", isCorrect: false },
            { answer: "100", isCorrect: true },
        ]
    },
    {
        question: "What does a thermometer measure?",
        answers: [
            { answer: "Pressure", isCorrect: false },
            { answer: "Humidity", isCorrect: false },
            { answer: "Temperature", isCorrect: true },
            { answer: "Wind Speed", isCorrect: false },
        ]
    },
    {
        question: "Who is the author of 'Harry Potter'?",
        answers: [
            { answer: "J.R.R. Tolkien", isCorrect: false },
            { answer: "Stephen King", isCorrect: false },
            { answer: "C.S. Lewis", isCorrect: false },
            { answer: "J.K. Rowling", isCorrect: true },
        ]
    },
    {
        question: "Which planet is closest to the Sun?",
        answers: [
            { answer: "Venus", isCorrect: false },
            { answer: "Mercury", isCorrect: true },
            { answer: "Earth", isCorrect: false },
            { answer: "Mars", isCorrect: false },
        ]
    },
    {
        question: "What is the primary language spoken in Brazil?",
        answers: [
            { answer: "Spanish", isCorrect: false },
            { answer: "English", isCorrect: false },
            { answer: "French", isCorrect: false },
            { answer: "Portuguese", isCorrect: true },
        ]
    },
    {
        question: "Which famous landmark is located in India?",
        answers: [
            { answer: "Eiffel Tower", isCorrect: false },
            { answer: "Great Wall", isCorrect: false },
            { answer: "Colosseum", isCorrect: false },
            { answer: "Taj Mahal", isCorrect: true },
        ]
    },
    {
        question: "In which continent is the Sahara Desert located?",
        answers: [
            { answer: "Asia", isCorrect: false },
            { answer: "Africa", isCorrect: true },
            { answer: "Australia", isCorrect: false },
            { answer: "South America", isCorrect: false },
        ]
    },
    {
        question: "What is the most spoken language in the world?",
        answers: [
            { answer: "Spanish", isCorrect: false },
            { answer: "English", isCorrect: false },
            { answer: "Mandarin Chinese", isCorrect: true },
            { answer: "Hindi", isCorrect: false },
        ]
    },
    {
        question: "Which country is known for the Great Barrier Reef?",
        answers: [
            { answer: "USA", isCorrect: false },
            { answer: "Mexico", isCorrect: false },
            { answer: "Brazil", isCorrect: false },
            { answer: "Australia", isCorrect: true },
        ]
    },
    {
        question: "What type of animal is a Komodo dragon?",
        answers: [
            { answer: "Lizard", isCorrect: true },
            { answer: "Snake", isCorrect: false },
            { answer: "Frog", isCorrect: false },
            { answer: "Turtle", isCorrect: false },
        ]
    },
    {
        question: "What does NASA stand for?",
        answers: [
            { answer: "National Academy of Sciences and Arts", isCorrect: false },
            { answer: "National Aeronautics and Space Agency", isCorrect: false },
            { answer: "National Aeronautics and Space Administration", isCorrect: true },
            { answer: "National Aerospace and Space Administration", isCorrect: false },
        ]
    },
    {
        question: "Which is the longest river in the world?",
        answers: [
            { answer: "Nile River", isCorrect: false },
            { answer: "Yangtze River", isCorrect: false },
            { answer: "Mississippi River", isCorrect: false },
            { answer: "Amazon River", isCorrect: true },
        ]
    },
    {
        question: "Who is known as the Father of Modern Physics?",
        answers: [
            { answer: "Isaac Newton", isCorrect: false },
            { answer: "Niels Bohr", isCorrect: false },
            { answer: "Albert Einstein", isCorrect: true },
            { answer: "Galileo Galilei", isCorrect: false },
        ]
    },
];

