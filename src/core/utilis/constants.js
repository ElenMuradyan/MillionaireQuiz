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

export const MY_SERVICE_ID = 'service_3k4xqbc';
export const MY_TEMPLATE_ID = 'template_6hjz4l6';
export const MY_USER_ID = 'WUwPCeisjgZaQAV_0';

export const moneyArray = [
    {value:'1,000$', state: false },
    {value:'3,000$', state: false },
    {value:'5,000$', state: true },
    {value:'15,000$', state: false },
    {value:'20,000$', state: false },
    {value:'25,000$', state: false },
    {value:'50,000$', state: true },
    {value:'100,000$', state: false },
    {value:'250,000$', state: false },
    {value:'500,000$', state: false },
    {value:'$1 MILLION', state: true },
]

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
    {
        question: "Which country invented the first airplane?",
        answers: [
            { answer: "Germany", isCorrect: false },
            { answer: "United States", isCorrect: true },
            { answer: "France", isCorrect: false },
            { answer: "United Kingdom", isCorrect: false },
        ]
    },
    {
        question: "What is the smallest bone in the human body?",
        answers: [
            { answer: "Stapes", isCorrect: true },
            { answer: "Femur", isCorrect: false },
            { answer: "Tibia", isCorrect: false },
            { answer: "Radius", isCorrect: false },
        ]
    },
    {
        question: "Which of these is not a primary color?",
        answers: [
            { answer: "Blue", isCorrect: false },
            { answer: "Yellow", isCorrect: false },
            { answer: "Green", isCorrect: true },
            { answer: "Red", isCorrect: false },
        ]
    },
    {
        question: "What is the longest mountain range in the world?",
        answers: [
            { answer: "Himalayas", isCorrect: false },
            { answer: "Rocky Mountains", isCorrect: false },
            { answer: "Andes", isCorrect: true },
            { answer: "Alps", isCorrect: false },
        ]
    },
    {
        question: "What is the hardest known material on Earth?",
        answers: [
            { answer: "Diamond", isCorrect: true },
            { answer: "Graphene", isCorrect: false },
            { answer: "Platinum", isCorrect: false },
            { answer: "Carbon Fiber", isCorrect: false },
        ]
    },
    {
        question: "Who was the first woman to win a Nobel Prize?",
        answers: [
            { answer: "Marie Curie", isCorrect: true },
            { answer: "Dorothy Hodgkin", isCorrect: false },
            { answer: "Rosalind Franklin", isCorrect: false },
            { answer: "Ada Lovelace", isCorrect: false },
        ]
    },
    {
        question: "Which of the following is the longest river in the United States?",
        answers: [
            { answer: "Missouri River", isCorrect: true },
            { answer: "Mississippi River", isCorrect: false },
            { answer: "Ohio River", isCorrect: false },
            { answer: "Colorado River", isCorrect: false },
        ]
    },
    {
        question: "What is the largest desert in the world?",
        answers: [
            { answer: "Sahara Desert", isCorrect: false },
            { answer: "Gobi Desert", isCorrect: false },
            { answer: "Kalahari Desert", isCorrect: false },
            { answer: "Antarctic Desert", isCorrect: true },
        ]
    },
    {
        question: "Who invented the light bulb?",
        answers: [
            { answer: "Nikola Tesla", isCorrect: false },
            { answer: "Thomas Edison", isCorrect: true },
            { answer: "Alexander Graham Bell", isCorrect: false },
            { answer: "Benjamin Franklin", isCorrect: false },
        ]
    },
    {
        question: "Which famous scientist discovered the laws of motion?",
        answers: [
            { answer: "Isaac Newton", isCorrect: true },
            { answer: "Galileo Galilei", isCorrect: false },
            { answer: "Albert Einstein", isCorrect: false },
            { answer: "Michael Faraday", isCorrect: false },
        ]
    },
    {
        question: "In which country was the famous physicist Albert Einstein born?",
        answers: [
            { answer: "Germany", isCorrect: true },
            { answer: "Switzerland", isCorrect: false },
            { answer: "Austria", isCorrect: false },
            { answer: "United States", isCorrect: false },
        ]
    },
    {
        question: "Which element has the chemical symbol O?",
        answers: [
            { answer: "Oxygen", isCorrect: true },
            { answer: "Osmium", isCorrect: false },
            { answer: "Oganesson", isCorrect: false },
            { answer: "Opium", isCorrect: false },
        ]
    },
    {
        question: "What is the capital of Canada?",
        answers: [
            { answer: "Vancouver", isCorrect: false },
            { answer: "Toronto", isCorrect: false },
            { answer: "Ottawa", isCorrect: true },
            { answer: "Montreal", isCorrect: false },
        ]
    },
    {
        question: "Which element is the most abundant in the Earth's crust?",
        answers: [
            { answer: "Iron", isCorrect: false },
            { answer: "Oxygen", isCorrect: true },
            { answer: "Silicon", isCorrect: false },
            { answer: "Aluminum", isCorrect: false },
        ]
    },
    {
        question: "What year did World War I begin?",
        answers: [
            { answer: "1912", isCorrect: false },
            { answer: "1914", isCorrect: true },
            { answer: "1916", isCorrect: false },
            { answer: "1918", isCorrect: false },
        ]
    },
    {
        question: "Which planet is known as the Blue Planet?",
        answers: [
            { answer: "Earth", isCorrect: true },
            { answer: "Neptune", isCorrect: false },
            { answer: "Uranus", isCorrect: false },
            { answer: "Saturn", isCorrect: false },
        ]
    },
    {
        question: "Which of these animals is the fastest on land?",
        answers: [
            { answer: "Cheetah", isCorrect: true },
            { answer: "Lion", isCorrect: false },
            { answer: "Elephant", isCorrect: false },
            { answer: "Horse", isCorrect: false },
        ]
    },
    {
        question: "What is the name of the closest star to Earth?",
        answers: [
            { answer: "Proxima Centauri", isCorrect: true },
            { answer: "Alpha Centauri", isCorrect: false },
            { answer: "Sirius", isCorrect: false },
            { answer: "Betelgeuse", isCorrect: false },
        ]
    },
    {
        question: "What is the longest river in Africa?",
        answers: [
            { answer: "Nile River", isCorrect: true },
            { answer: "Congo River", isCorrect: false },
            { answer: "Zambezi River", isCorrect: false },
            { answer: "Limpopo River", isCorrect: false },
        ]
    },
    {
        question: "What is the capital of Spain?",
        answers: [
            { answer: "Barcelona", isCorrect: false },
            { answer: "Madrid", isCorrect: true },
            { answer: "Seville", isCorrect: false },
            { answer: "Valencia", isCorrect: false },
        ]
    },
    {
        question: "Who painted the ceiling of the Sistine Chapel?",
        answers: [
            { answer: "Vincent van Gogh", isCorrect: false },
            { answer: "Pablo Picasso", isCorrect: false },
            { answer: "Michelangelo", isCorrect: true },
            { answer: "Claude Monet", isCorrect: false },
        ]
    },
    {
        question: "What is the most common element in the Earth's atmosphere?",
        answers: [
            { answer: "Oxygen", isCorrect: false },
            { answer: "Carbon Dioxide", isCorrect: false },
            { answer: "Nitrogen", isCorrect: true },
            { answer: "Hydrogen", isCorrect: false },
        ]
    },
    {
        question: "What is the official language of Brazil?",
        answers: [
            { answer: "Spanish", isCorrect: false },
            { answer: "Portuguese", isCorrect: true },
            { answer: "French", isCorrect: false },
            { answer: "English", isCorrect: false },
        ]
    },
    {
        question: "In which year did World War II end?",
        answers: [
            { answer: "1941", isCorrect: false },
            { answer: "1943", isCorrect: false },
            { answer: "1945", isCorrect: true },
            { answer: "1950", isCorrect: false },
        ]
    },
    {
        question: "What is the square root of 144?",
        answers: [
            { answer: "12", isCorrect: true },
            { answer: "14", isCorrect: false },
            { answer: "16", isCorrect: false },
            { answer: "10", isCorrect: false },
        ]
    },
    {
        question: "Which country is famous for the Great Wall?",
        answers: [
            { answer: "Japan", isCorrect: false },
            { answer: "China", isCorrect: true },
            { answer: "India", isCorrect: false },
            { answer: "Russia", isCorrect: false },
        ]
    },
    {
        question: "What is the chemical symbol for water?",
        answers: [
            { answer: "H2O", isCorrect: true },
            { answer: "CO2", isCorrect: false },
            { answer: "O2", isCorrect: false },
            { answer: "H2", isCorrect: false },
        ]
    },
    {
        question: "What is the name of the first manned mission to the Moon?",
        answers: [
            { answer: "Apollo 11", isCorrect: true },
            { answer: "Apollo 12", isCorrect: false },
            { answer: "Apollo 13", isCorrect: false },
            { answer: "Gemini 8", isCorrect: false },
        ]
    },
    {
        question: "Which famous scientist is known for his theory of evolution?",
        answers: [
            { answer: "Isaac Newton", isCorrect: false },
            { answer: "Albert Einstein", isCorrect: false },
            { answer: "Charles Darwin", isCorrect: true },
            { answer: "Nikola Tesla", isCorrect: false },
        ]
    },
    {
        question: "What is the symbol for the element Gold?",
        answers: [
            { answer: "Ag", isCorrect: false },
            { answer: "Au", isCorrect: true },
            { answer: "Fe", isCorrect: false },
            { answer: "Pb", isCorrect: false },
        ]
    },
    {
        question: "What is the national animal of Canada?",
        answers: [
            { answer: "Bald Eagle", isCorrect: false },
            { answer: "Moose", isCorrect: true },
            { answer: "Bear", isCorrect: false },
            { answer: "Beaver", isCorrect: false },
        ]
    },
    {
        question: "What is the largest land animal?",
        answers: [
            { answer: "Elephant", isCorrect: true },
            { answer: "Giraffe", isCorrect: false },
            { answer: "Rhinoceros", isCorrect: false },
            { answer: "Hippo", isCorrect: false },
        ]
    },
    {
        question: "What does 'HTTP' stand for?",
        answers: [
            { answer: "HyperText Transfer Protocol", isCorrect: true },
            { answer: "HyperTool Transfer Protocol", isCorrect: false },
            { answer: "HyperText Technical Protocol", isCorrect: false },
            { answer: "High-Tech Transfer Protocol", isCorrect: false },
        ]
    },
    {
        question: "Which country is known as the Land of the Midnight Sun?",
        answers: [
            { answer: "Sweden", isCorrect: false },
            { answer: "Finland", isCorrect: false },
            { answer: "Norway", isCorrect: true },
            { answer: "Russia", isCorrect: false },
        ]
    },
    {
        question: "What is the name of the longest ocean in the world?",
        answers: [
            { answer: "Atlantic Ocean", isCorrect: false },
            { answer: "Indian Ocean", isCorrect: false },
            { answer: "Pacific Ocean", isCorrect: true },
            { answer: "Arctic Ocean", isCorrect: false },
        ]
    },
    {
        question: "Which fruit has its seeds on the outside?",
        answers: [
            { answer: "Strawberry", isCorrect: true },
            { answer: "Apple", isCorrect: false },
            { answer: "Peach", isCorrect: false },
            { answer: "Banana", isCorrect: false },
        ]
    },
    {
        question: "Which is the largest continent by area?",
        answers: [
            { answer: "Africa", isCorrect: false },
            { answer: "Asia", isCorrect: true },
            { answer: "Europe", isCorrect: false },
            { answer: "Australia", isCorrect: false },
        ]
    },
    {
        question: "What is the tallest mountain in the world?",
        answers: [
            { answer: "Mount Kilimanjaro", isCorrect: false },
            { answer: "Mount Everest", isCorrect: true },
            { answer: "Mount Fuji", isCorrect: false },
            { answer: "K2", isCorrect: false },
        ]
    },
    {
        question: "Which element is commonly known as 'laughing gas'?",
        answers: [
            { answer: "Nitrogen", isCorrect: false },
            { answer: "Oxygen", isCorrect: false },
            { answer: "Nitrous Oxide", isCorrect: true },
            { answer: "Carbon Dioxide", isCorrect: false },
        ]
    },
    {
        question: "In which year did the first man land on the Moon?",
        answers: [
            { answer: "1967", isCorrect: false },
            { answer: "1969", isCorrect: true },
            { answer: "1971", isCorrect: false },
            { answer: "1973", isCorrect: false },
        ]
    }
];

