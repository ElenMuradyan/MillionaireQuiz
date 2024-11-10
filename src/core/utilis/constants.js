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
    REGISTER_USERS: 'registered_users',
    QUIZZES: 'quizzes'
};

export const langFlags = {
    'en':'https://th.bing.com/th/id/OIP.PEu9HEP4_RHTSOOJLelLfwHaEA?rs=1&pid=ImgDetMain',
    'hy':'https://wallpapercave.com/wp/wp4204808.jpg'
};

export const MY_SERVICE_ID = 'service_3k4xqbc';
export const MY_TEMPLATE_ID = 'template_6hjz4l6';
export const MY_USER_ID = 'WUwPCeisjgZaQAV_0';

export const moneyArray = [
    {value:'1,000$', state: false },
    {value:'3,000$', state: false },
    {value:'5,000$', state: true, money: 5000 },
    {value:'15,000$', state: false },
    {value:'20,000$', state: false },
    {value:'25,000$', state: false },
    {value:'50,000$', state: true, money: 50000 },
    {value:'100,000$', state: false },
    {value:'250,000$', state: false },
    {value:'500,000$', state: false },
    {value:'$1 MILLION', state: true, money: 1000000 },
]

export const millionaireQuiz = {
    en: [{
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
    }],
    hy: [
        {
            "question": "Ո՞րն է Ֆրանսիայի մայրաքաղաքը։",
            "answers": [
                { "answer": "Լոնդոն", "isCorrect": false },
                { "answer": "Բեռլին", "isCorrect": false },
                { "answer": "Փարիզ", "isCorrect": true },
                { "answer": "Մադրիդ", "isCorrect": false }
            ]
        },
        {
            "question": "Ո՞ր մոլորակն է հայտնի Կարմիր մոլորակ անունով։",
            "answers": [
                { "answer": "Յուպիտեր", "isCorrect": false },
                { "answer": "Սատուրն", "isCorrect": false },
                { "answer": "Վեներա", "isCorrect": false },
                { "answer": "Մարս", "isCorrect": true }
            ]
        },
        {
            "question": "Ո՞րն է աշխարհի ամենամեծ օվկիանոսը։",
            "answers": [
                { "answer": "Ատլանտյան օվկիանոս", "isCorrect": false },
                { "answer": "Խաղաղ օվկիանոս", "isCorrect": true },
                { "answer": "Հնդկական օվկիանոս", "isCorrect": false },
                { "answer": "Արտիկյան օվկիանոս", "isCorrect": false }
            ]
        },
        {
            "question": "Ո՞վ է գրել 'Ռոմեո և Ջուլիետը։",
            "answers": [
                { "answer": "Չարլզ Դիկենս", "isCorrect": false },
                { "answer": "Մարկ Թվեն", "isCorrect": false },
                { "answer": "Վիլյամ Շեքսպիր", "isCorrect": true },
                { "answer": "Ջեյն Օսթեն", "isCorrect": false }
            ]
        },
        {
            "question": "Ո՞րն է ամենափոքր բնական թիվը։",
            "answers": [
                { "answer": "2", "isCorrect": false },
                { "answer": "1", "isCorrect": true },
                { "answer": "3", "isCorrect": false },
                { "answer": "4", "isCorrect": false }
            ]
        },
        {
            "question": "Ո՞րն է ոսկու քիմիական նշանը։",
            "answers": [
                { "answer": "Ag", "isCorrect": false },
                { "answer": "Fe", "isCorrect": false },
                { "answer": "Au", "isCorrect": true },
                { "answer": "Pb", "isCorrect": false }
            ]
        },
        {
            "question": "Ո՞ր երկիրն է հայտնի որպես Ծագող արևի երկիր։",
            "answers": [
                { "answer": "Չինաստան", "isCorrect": false },
                { "answer": "Թայվան", "isCorrect": false },
                { "answer": "Ճապոնիա", "isCorrect": true },
                { "answer": "Հարավային Կորեա", "isCorrect": false }
            ]
        },
        {
            "question": "Ո՞րն է աշխարհի ամենամեծ կաթնասունը։",
            "answers": [
                { "answer": "Աֆրիկյան փիղ", "isCorrect": false },
                { "answer": "Ընձուղտ", "isCorrect": false },
                { "answer": "Սպիտակ շնաձուկ", "isCorrect": false },
                { "answer": "Կապույտ կետ", "isCorrect": true }
            ]
        },
        {
        "question": "Որ տարրը ունի ատոմային 1 համարը?",
        "answers": [
            { "answer": "Հելիում", "isCorrect": false },
            { "answer": "Թթվածին", "isCorrect": false },
            { "answer": "Ջրածին", "isCorrect": true },
            { "answer": "Ածխածին", "isCorrect": false }
        ]
    },
    {
        "question": "Ինչն է գուակամոլի հիմնական բաղադրիչը?",
        "answers": [
            { "answer": "Տոմատ", "isCorrect": false },
            { "answer": "Ավոկադո", "isCorrect": true },
            { "answer": "Սոխ", "isCorrect": false },
            { "answer": "Պղպեղ", "isCorrect": false }
        ]
    },
    {
        "question": "Որն է Երկրի ամենաամուր նյութը?",
        "answers": [
            { "answer": "Ռուբին", "isCorrect": false },
            { "answer": "Սապֆիր", "isCorrect": false },
            { "answer": "Ադամանդ", "isCorrect": true },
            { "answer": "Էմերալդ", "isCorrect": false }
        ]
    },
    {
        "question": "Ով է նկարել Մոնա Լիզան?",
        "answers": [
            { "answer": "Լեոնարդո դա Վինչի", "isCorrect": true },
            { "answer": "Պաբլո Պիկասո", "isCorrect": false },
            { "answer": "Վինսենտ վան Գոգ", "isCorrect": false },
            { "answer": "Կլոդ Մոնե", "isCorrect": false }
        ]
    },
    {
        "question": "Որ թվականին է Տիտանիկը խորտակվել?",
        "answers": [
            { "answer": "1905", "isCorrect": false },
            { "answer": "1918", "isCorrect": false },
            { "answer": "1912", "isCorrect": true },
            { "answer": "1920", "isCorrect": false }
        ]
    },
    {
        "question": "Որն է աշխարհի ամենափոքր մայրցամաքը ըստ տարածքի?",
        "answers": [
            { "answer": "Եվրոպա", "isCorrect": false },
            { "answer": "Ավստրալիա", "isCorrect": true },
            { "answer": "Անտարկտիդա", "isCorrect": false },
            { "answer": "Հարավային Ամերիկա", "isCorrect": false }
        ]
    },
    {
        "question": "Որ թվականին է Բեռլինի պատը քանդվել?",
        "answers": [
            { "answer": "1991", "isCorrect": false },
            { "answer": "1985", "isCorrect": false },
            { "answer": "1990", "isCorrect": false },
            { "answer": "1989", "isCorrect": true }
        ]
    },
    {
        "question": "Որն է արեգակնային համակարգի ամենամեծ մոլորակը?",
        "answers": [
            { "answer": "Երկիր", "isCorrect": false },
            { "answer": "Մարս", "isCorrect": false },
            { "answer": "Սատուրն", "isCorrect": false },
            { "answer": "Յուպիտեր", "isCorrect": true }
        ]
    },
    {
        "question": "Որ գործիքով է չափվում մթնոլորտային ճնշումը?",
        "answers": [
            { "answer": "Թերմոմետր", "isCorrect": false },
            { "answer": "Անեմոմետր", "isCorrect": false },
            { "answer": "Բարոմետր", "isCorrect": true },
            { "answer": "Հիգրոմետր", "isCorrect": false }
        ]
    },
    {
        "question": "Որն է Ճապոնիայի մայրաքաղաքը?",
        "answers": [
            { "answer": "Կիոտո", "isCorrect": false },
            { "answer": "Օսակա", "isCorrect": false },
            { "answer": "Հիրոշիմա", "isCorrect": false },
            { "answer": "Տոկիո", "isCorrect": true }
        ]
    },
    {
        "question": "Որ վիտամինն է հայտնի որպես արևի վիտամին?",
        "answers": [
            { "answer": "Վիտամին C", "isCorrect": false },
            { "answer": "Վիտամին A", "isCorrect": false },
            { "answer": "Վիտամին D", "isCorrect": true },
            { "answer": "Վիտամին B12", "isCorrect": false }
        ]
    },
    {
        "question": "Ինչ գազ են բույսերը ներծծում մթնոլորտից?",
        "answers": [
            { "answer": "Ածխաթթու գազ", "isCorrect": true },
            { "answer": "Թթվածին", "isCorrect": false },
            { "answer": "Նիտրոգեն", "isCorrect": false },
            { "answer": "Ջրածին", "isCorrect": false }
        ]
    },
    {
        "question": "Որ հնագույն քաղաքակրթությունը կառուցեց բուրգերը?",
        "answers": [
            { "answer": "Հռոմեացիներ", "isCorrect": false },
            { "answer": "Հույները", "isCorrect": false },
            { "answer": "Մայաններ", "isCorrect": false },
            { "answer": "Եգիպտացիներ", "isCorrect": true }
        ]
    },
    {
        "question": "Որն է մարդու մարմնի ամենամեծ օրգանը?",
        "answers": [
            { "answer": "Մաշկ", "isCorrect": true },
            { "answer": "Լյարդ", "isCorrect": false },
            { "answer": "Սիրտ", "isCorrect": false },
            { "answer": "Թոքեր", "isCorrect": false }
        ]
    },
    {
        "question": "Որ հայտնի գիտնականն է մշակել հարաբերականության տեսությունը?",
        "answers": [
            { "answer": "Իսահակ Նյուտոն", "isCorrect": false },
            { "answer": "Գալիլեո Գալիլեյ", "isCorrect": false },
            { "answer": "Ալբերտ Այնշտայն", "isCorrect": true },
            { "answer": "Սթիվեն Հոքինգ", "isCorrect": false }
        ]
    },
    {
        "question": "Որն է ջրի եռման ջերմաստիճանը:",
        "answers": [
            { "answer": "90", "isCorrect": false },
            { "answer": "80", "isCorrect": false },
            { "answer": "110", "isCorrect": false },
            { "answer": "100", "isCorrect": true }
        ]
    },
    {
        "question": "Ինչ է չափվում թերմոմետրով?",
        "answers": [
            { "answer": "Մթնոլորտի ճնշումը", "isCorrect": false },
            { "answer": "Օդի խոնավությունը", "isCorrect": false },
            { "answer": "Ջերմաստիճան", "isCorrect": true },
            { "answer": "Քամու արագությունը", "isCorrect": false }
        ]
    },
    {
        "question": "Ով է գրել 'Հարի Փոթերը'?",
        "answers": [
            { "answer": "Ջ.Ռ.Ռ. Տոլկին", "isCorrect": false },
            { "answer": "Սթիվեն Քինգ", "isCorrect": false },
            { "answer": "Սի.Էս. Լյուիս", "isCorrect": false },
            { "answer": "Ջ.Կ. Ռոուլինգ", "isCorrect": true }
        ]
    },
    {
        "question": "Ո՞ր մոլորակն է Արևին ամենամոտը:",
        "answers": [
            { "answer": "Վեներա", "isCorrect": false },
            { "answer": "Մերկուրի", "isCorrect": true },
            { "answer": "Երկիր", "isCorrect": false },
            { "answer": "Մարս", "isCorrect": false }
        ]
    },
    {
        "question": "Ո՞րն է Բրազիլիայում պետական լեզուն:",
        "answers": [
            { "answer": "Իսպաներեն", "isCorrect": false },
            { "answer": "Անգլերեն", "isCorrect": false },
            { "answer": "Ֆրանսերեն", "isCorrect": false },
            { "answer": "Պորտուգալերեն", "isCorrect": true }
        ]
    },
    {
        "question": "Ո՞ր հայտնի հուշարձանն է գտնվում Հնդկաստանում:",
        "answers": [
            { "answer": "Էֆելյան աշտարակ", "isCorrect": false },
            { "answer": "Մեծ Պարիսպ", "isCorrect": false },
            { "answer": "Կոլիզեյ", "isCorrect": false },
            { "answer": "Թաջ Մահալ", "isCorrect": true }
        ]
    },
    {
        "question": "Ո՞ր մայրցամաքում է գտնվում Սահարա անապատը:",
        "answers": [
            { "answer": "Ասիա", "isCorrect": false },
            { "answer": "Աֆրիկա", "isCorrect": true },
            { "answer": "Ավստրալիա", "isCorrect": false },
            { "answer": "Հարավային Ամերիկա", "isCorrect": false }
        ]
    },
    {
        "question": "Ո՞ր լեզուն է աշխարհում ամենաշատը տարածվածը:",
        "answers": [
            { "answer": "Իսպաներեն", "isCorrect": false },
            { "answer": "Անգլերեն", "isCorrect": false },
            { "answer": "Չինական մանդարին", "isCorrect": true },
            { "answer": "Հինդի", "isCorrect": false }
        ]
    },
    {
        "question": "Ո՞ր երկիրն է հայտնի Մեծ Պարիսպով:",
        "answers": [
            { "answer": "ԱՄՆ", "isCorrect": false },
            { "answer": "Մեքսիկա", "isCorrect": false },
            { "answer": "Բրազիլիա", "isCorrect": false },
            { "answer": "Ավստրալիա", "isCorrect": true }
        ]
    },
    {
        "question": "Ինչ կենդանին է Կոմոդո վիշապը:",
        "answers": [
            { "answer": "Մողես", "isCorrect": true },
            { "answer": "Սողուն", "isCorrect": false },
            { "answer": "Գորտ", "isCorrect": false },
            { "answer": "Կրիա", "isCorrect": false }
        ]
    },
    {
        "question": "ՆԱՍԱ-ի հապավումը ի՞նչ է նշանակում:",
        "answers": [
            { "answer": "Համաշխարհային գիտության և արվեստի ակադեմիա", "isCorrect": false },
            { "answer": "Աերո-նավիգացիայի և տիեզերքի գործակալություն", "isCorrect": false },
            { "answer": "Աերո-նավիգացիայի և տիեզերական վարչություն", "isCorrect": true },
            { "answer": "Տիեզերական նորարարական վարչություն", "isCorrect": false }
        ]
    },
    {
        "question": "Ո՞րն է աշխարհի ամենաերկար գետը:",
        "answers": [
            { "answer": "Նեղոս գետը", "isCorrect": false },
            { "answer": "Յանցզի գետը", "isCorrect": false },
            { "answer": "Միսիսիպի գետը", "isCorrect": false },
            { "answer": "Ամազոն գետը", "isCorrect": true }
        ]
    },
    {
        "question": "Ո՞վ է հայտնի ժամանակակից ֆիզիկայի հայր:",
        "answers": [
            { "answer": "Իզակ Նյուտոն", "isCorrect": false },
            { "answer": "Նիլս Բոհր", "isCorrect": false },
            { "answer": "Ալբերտ Այնշտայն", "isCorrect": true },
            { "answer": "Գալիլեո Գալիլեյ", "isCorrect": false }
        ]
    },
    {
        "question": "Ո՞ր երկիրն է ստեղծել առաջին օդանավը:",
        "answers": [
            { "answer": "Գերմանիա", "isCorrect": false },
            { "answer": "Միացյալ Նահանգներ", "isCorrect": true },
            { "answer": "Ֆրանսիա", "isCorrect": false },
            { "answer": "Միացյալ Թագավորություն", "isCorrect": false }
        ]
    },
    {
        "question": "Ո՞րն է մարդու մարմնի ամենափոքր ոսկորը:",
        "answers": [
            { "answer": "Ստապես", "isCorrect": true },
            { "answer": "Ֆեմուր", "isCorrect": false },
            { "answer": "Տիբիա", "isCorrect": false },
            { "answer": "Ռադիուս", "isCorrect": false }
        ]
    },
    {
        "question": "Ո՞րը չի հանդիսանում հիմնական գույն:",
        "answers": [
            { "answer": "Նարնջագույն", "isCorrect": true },
            { "answer": "Դեղին", "isCorrect": false },
            { "answer": "Կարմիր", "isCorrect": false },
            { "answer": "Կապույտ", "isCorrect": false }
        ]
    },
    {
        "question": "Ո՞րն է աշխարհի ամենաերկար լեռնաշղթան:",
        "answers": [
            { "answer": "Հիմալայներ", "isCorrect": false },
            { "answer": "Ռոկի լեռներ", "isCorrect": false },
            { "answer": "Անդեր", "isCorrect": true },
            { "answer": "Ալպեր", "isCorrect": false }
        ]
    },
    {
        "question": "Ո՞վ էր առաջին կինը, ով նվաճեց Նոբելյան մրցանակ?",
        "answers": [
            { "answer": "Մարի Կյուրի", "isCorrect": true },
            { "answer": "Դորոթի Հոջկին", "isCorrect": false },
            { "answer": "Ռոզալինդ Ֆրանկլին", "isCorrect": false },
            { "answer": "Ադա Լովլես", "isCorrect": false }
        ]
    },
    {
        "question": "Ո՞րն է Միացյալ Նահանգների ամենաերկար գետը?",
        "answers": [
            { "answer": "Միսուրի գետը", "isCorrect": true },
            { "answer": "Միսիսիպի գետը", "isCorrect": false },
            { "answer": "Օհայո գետը", "isCorrect": false },
            { "answer": "Կոլորադո գետը", "isCorrect": false }
        ]
    },
    {
        "question": "Ո՞րն է աշխարհի ամենամեծ անապատը?",
        "answers": [
            { "answer": "Սահարա անապատը", "isCorrect": false },
            { "answer": "Գոբի անապատը", "isCorrect": false },
            { "answer": "Կալահարի անապատը", "isCorrect": false },
            { "answer": "Անտարկտիկ անապատը", "isCorrect": true }
        ]
    },
    {
        "question": "Ո՞վ է հայտնագործել լամպը?",
        "answers": [
            { "answer": "Նիկոլա Տեսլա", "isCorrect": false },
            { "answer": "Թոմաս Էդիսոն", "isCorrect": true },
            { "answer": "Ալեքսանդր Գրեհեմ Բելլ", "isCorrect": false },
            { "answer": "Բենջամին Ֆրանկլին", "isCorrect": false }
        ]
    },
    {
        "question": "Ո՞ր գիտնականը բացահայտեց շարժման օրենքները?",
        "answers": [
            { "answer": "Իսահակ Նյուտոն", "isCorrect": true },
            { "answer": "Գալիլեո Գալիլեյ", "isCorrect": false },
            { "answer": "Ալբերտ Այենշտայն", "isCorrect": false },
            { "answer": "Մայքլ Ֆարադեյ", "isCorrect": false }
        ]
    },
    {
        "question": "Ո՞ր երկրում է ծնվել հայտնի ֆիզիկոս Ալբերտ Այենշտայնը?",
        "answers": [
            { "answer": "Գերմանիա", "isCorrect": true },
            { "answer": "Շվեյցարիա", "isCorrect": false },
            { "answer": "Ավստրիա", "isCorrect": false },
            { "answer": "Միացյալ Նահանգներ", "isCorrect": false }
        ]
    },
    {
        "question": "Ո՞ր տարրը ունի Օ նշանը:",
        "answers": [
            { "answer": "Թթվածին", "isCorrect": true },
            { "answer": "Օսմիում", "isCorrect": false },
            { "answer": "Օգանեսոն", "isCorrect": false },
            { "answer": "Օպիում", "isCorrect": false }
        ]
    },
    {
        "question": "Ո՞րն է Կանադայի մայրաքաղաքը:",
        "answers": [
            { "answer": "Վանկուվեր", "isCorrect": false },
            { "answer": "Տորոնտո", "isCorrect": false },
            { "answer": "Օտավա", "isCorrect": true },
            { "answer": "Մոնրեալ", "isCorrect": false }
        ]
    },
    {
        "question": "Ո՞ր տարրն է ամենաշատը հանդիպում Երկրի ընդերքում:",
        "answers": [
            { "answer": "Երկաթ", "isCorrect": false },
            { "answer": "Թթվածին", "isCorrect": true },
            { "answer": "Սիլիցիում", "isCorrect": false },
            { "answer": "Ալյումին", "isCorrect": false }
        ]
    },
    {
        "question": "Ո՞ր թվականին սկսվեց Առաջին համաշխարհային պատերազմը:",
        "answers": [
            { "answer": "1912", "isCorrect": false },
            { "answer": "1914", "isCorrect": true },
            { "answer": "1916", "isCorrect": false },
            { "answer": "1918", "isCorrect": false }
        ]
    },
    {
        "question": "Ո՞ր մոլորակն է հայտնի որպես Կապույտ մոլորակ:",
        "answers": [
            { "answer": "Երկիր", "isCorrect": true },
            { "answer": "Նեպտուն", "isCorrect": false },
            { "answer": "Ուրան", "isCorrect": false },
            { "answer": "Սատուրն", "isCorrect": false }
        ]
    },
    {
        "question": "Ո՞ր կենդանին է ամենաարագը ցամաքում:",
        "answers": [
            { "answer": "Չիտա", "isCorrect": true },
            { "answer": "Առյուծ", "isCorrect": false },
            { "answer": "Փիղ", "isCorrect": false },
            { "answer": "Ձի", "isCorrect": false }
        ]
    },
    {
        "question": "Ինչ է կոչվում Երկրին ամենամոտ աստղը:",
        "answers": [
            { "answer": "Պրոքսիմա Սենտաուրի", "isCorrect": true },
            { "answer": "Ալֆա Սենտաուրի", "isCorrect": false },
            { "answer": "Սիրիուս", "isCorrect": false },
            { "answer": "Բետելգեուզ", "isCorrect": false }
        ]
    },
    {
        "question": "Ո՞րն է ամենաերկար գետը Աֆրիկայում:",
        "answers": [
            { "answer": "Նեղոս գետը", "isCorrect": true },
            { "answer": "Կոնգո գետը", "isCorrect": false },
            { "answer": "Զամբեզի գետը", "isCorrect": false },
            { "answer": "Լիմպոպո գետը", "isCorrect": false }
        ]
    },
    {
        "question": "Ինչ է կոչվում Իսպանիայի մայրաքաղաքը:",
        "answers": [
            { "answer": "Բարսելոնա", "isCorrect": false },
            { "answer": "Մադրիդ", "isCorrect": true },
            { "answer": "Սևիլիա", "isCorrect": false },
            { "answer": "Վալենսիա", "isCorrect": false }
        ]
    },
    {
        "question": "Ո՞վ է նկարել Սիսթինյան Կապելայի առաստաղը:",
        "answers": [
            { "answer": "Վինսենտ վան Գոգ", "isCorrect": false },
            { "answer": "Պաբլո Պիկասո", "isCorrect": false },
            { "answer": "Միքելանջելո", "isCorrect": true },
            { "answer": "Կլոդ Մոնե", "isCorrect": false }
        ]
    },
    {
        "question": "Ո՞ր տարրն է ամենաշատը Երկրի մթնոլորտում:",
        "answers": [
            { "answer": "Թթվածին", "isCorrect": false },
            { "answer": "Ածխաթթու գազ", "isCorrect": false },
            { "answer": "Նիտրոգեն", "isCorrect": true },
            { "answer": "Ջրածին", "isCorrect": false }
        ]
    },
    {
        "question": "Ո՞րն է Բրազիլիայի պաշտոնական լեզուն:",
        "answers": [
            { "answer": "Իսպաներեն", "isCorrect": false },
            { "answer": "Պորտուգալերեն", "isCorrect": true },
            { "answer": "Ֆրանսերեն", "isCorrect": false },
            { "answer": "Անգլերեն", "isCorrect": false }
        ]
    },
    {
        "question": "Ո՞ր թվականին ավարտվեց Երկրորդ համաշխարհային պատերազմը:",
        "answers": [
            { "answer": "1941", "isCorrect": false },
            { "answer": "1943", "isCorrect": false },
            { "answer": "1945", "isCorrect": true },
            { "answer": "1950", "isCorrect": false }
        ]
    },
    {
        "question": "Ո՞րն է 144-ի քառակուսի արմատը:",
        "answers": [
            { "answer": "12", "isCorrect": true },
            { "answer": "14", "isCorrect": false },
            { "answer": "16", "isCorrect": false },
            { "answer": "10", "isCorrect": false }
        ]
    },
    {
        "question": "Ո՞ր երկիրը հայտնի է Մեծ պարսպով:",
        "answers": [
            { "answer": "Ճապոնիա", "isCorrect": false },
            { "answer": "Չինաստան", "isCorrect": true },
            { "answer": "Հնդկաստան", "isCorrect": false },
            { "answer": "Ռուսաստան", "isCorrect": false }
        ]
    },
    {
        "question": "Ինչի քիմիական նշանն է H2O:",
        "answers": [
            { "answer": "Ածխաթթու գազ", "isCorrect": false },
            { "answer": "Ջրածին", "isCorrect": false },
            { "answer": "Թթվածին", "isCorrect": false },
            { "answer": "Ջուր", "isCorrect": true }
        ]
    },
    {
        "question": "Ինչպես է կոչվում առաջին միսիան Լուսնի վրա:",
        "answers": [
            { "answer": "Ապոլոն 11", "isCorrect": true },
            { "answer": "Ապոլոն 12", "isCorrect": false },
            { "answer": "Ապոլոն 13", "isCorrect": false },
            { "answer": "Գեմինի 8", "isCorrect": false }
        ]
    },
    {
        "question": "Ո՞վ է հայտնի որպես Էվոլյուցիայի տեսության հեղինակը:",
        "answers": [
            { "answer": "Իսահակ Նյուտոն", "isCorrect": false },
            { "answer": "Ալբերտ Այենշտայն", "isCorrect": false },
            { "answer": "Չարլզ Դարվին", "isCorrect": true },
            { "answer": "Նիկոլա Տեսլա", "isCorrect": false }
        ]
    },
    {
        "question": "Ո՞րն է ամենամեծ ցամաքային կենդանին:",
        "answers": [
            { "answer": "Փիղ", "isCorrect": true },
            { "answer": "Ընձուղտ", "isCorrect": false },
            { "answer": "Արջ", "isCorrect": false },
            { "answer": "Կոկորդիլոս", "isCorrect": false }
        ]
    },
    {
        "question": "Ո՞ր երկիրն է հայտնի որպես Կեսգիշերային Արևի երկիր:",
        "answers": [
            { "answer": "Շվեդիա", "isCorrect": false },
            { "answer": "Ֆինլանդիա", "isCorrect": false },
            { "answer": "Նորվեգիա", "isCorrect": true },
            { "answer": "Ռուսաստան", "isCorrect": false }
        ]
    },
    {
        "question": "Ո՞րն է ամենաերկար օվկիանոսը աշխարհում:",
        "answers": [
            { "answer": "Ատլանտյան օվկիանոս", "isCorrect": false },
            { "answer": "Հնդկական օվկիանոս", "isCorrect": false },
            { "answer": "Խաղաղ օվկիանոս", "isCorrect": true },
            { "answer": "Արկտիկ օվկիանոս", "isCorrect": false }
        ]
    },
    {
        "question": "Ո՞ր մրգում են սերմերը կեղևի վրա:",
        "answers": [
            { "answer": "Ելակ", "isCorrect": true },
            { "answer": "Ռամբուտան", "isCorrect": false },
            { "answer": "Կիվանո", "isCorrect": false },
            { "answer": "Կարամբոլա", "isCorrect": false }
        ]
    },
    {
        "question": "Ո՞րն է աշխարհի ամենաբարձր լեռը?",
        "answers": [
            { "answer": "Կիլիմանջարո լեռը", "isCorrect": false },
            { "answer": "Էվերեստ լեռը", "isCorrect": true },
            { "answer": "Արարատ լեռը", "isCorrect": false },
            { "answer": "Կ2 լեռը", "isCorrect": false }
        ]
    },
    {
        "question": "Ո՞ր տարում մարդը առաջին անգամ իջավ Լուսին?",
        "answers": [
            { "answer": "1967", "isCorrect": false },
            { "answer": "1969", "isCorrect": true },
            { "answer": "1971", "isCorrect": false },
            { "answer": "1973", "isCorrect": false }
        ]
    },
    {
        "question": "Ո՞ր կենդանին է ամենաարագը ցամաքում:",
        "answers": [
            { "answer": "Չիտա", "isCorrect": true },
            { "answer": "Առյուծ", "isCorrect": false },
            { "answer": "Փիղ", "isCorrect": false },
            { "answer": "Ձի", "isCorrect": false }
        ]
    },
    {
        "question": "Ինչ է կոչվում Երկրին ամենամոտ աստղը:",
        "answers": [
            { "answer": "Պրոքսիմա Սենտաուրի", "isCorrect": true },
            { "answer": "Ալֆա Սենտաուրի", "isCorrect": false },
            { "answer": "Սիրիուս", "isCorrect": false },
            { "answer": "Բետելգեուզ", "isCorrect": false }
        ]
    },
    {
        "question": "Ո՞րն է ամենաերկար գետը Աֆրիկայում:",
        "answers": [
            { "answer": "Նեղոս գետը", "isCorrect": true },
            { "answer": "Կոնգո գետը", "isCorrect": false },
            { "answer": "Զամբեզի գետը", "isCorrect": false },
            { "answer": "Լիմպոպո գետը", "isCorrect": false }
        ]
    },
    {
        "question": "Ինչ է կոչվում Իսպանիայի մայրաքաղաքը:",
        "answers": [
            { "answer": "Բարսելոնա", "isCorrect": false },
            { "answer": "Մադրիդ", "isCorrect": true },
            { "answer": "Սևիլիա", "isCorrect": false },
            { "answer": "Վալենսիա", "isCorrect": false }
        ]
    },
    {
        "question": "Ո՞վ է նկարել Սիսթինյան Կապելայի առաստաղը:",
        "answers": [
            { "answer": "Վինսենտ վան Գոգ", "isCorrect": false },
            { "answer": "Պաբլո Պիկասո", "isCorrect": false },
            { "answer": "Միքելանջելո", "isCorrect": true },
            { "answer": "Կլոդ Մոնե", "isCorrect": false }
        ]
    }
    ]
};

