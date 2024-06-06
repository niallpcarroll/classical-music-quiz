const startButton = document.getElementById("start-btn")
const questionContainerElement = document.getElementsByClassName("container")

startButton.addEventListener("click", startGame)

    function startGame() {
console.log("Started")
startButton.classList.add("hide")

    }

    function setNextQuestion() {

    }

    function selectAnswer () {

    }
    
    
   
    

const questions = [{
    question: "Where was Johann Sebastian Bach born?",
    choices: ["Eisenach", "Leipzig", "Köthen", "Arnstadt"],
    correct: 0
}, 
{
    question: "Which Baroque composer was known as 'The Red Priest'?",
    choices: ["Telemann", "Purcell", "Scarlatti", "Vivaldi"],
    correct: 3
},
{
    question: "Which of these is an opera by W.A. Mozart?",
    choices: ["Cosi fan tutte", "Dialogues des Carmélites", "Madama Butterfly", "La traviata"],
    correct: 0
},
{
    question: "If a piece of music is marked 'legato', how should it be played?",
    choices: ["Quickly", "Smoothly", "Loudly", "Detached"],
    correct: 1
},
{
    question: "A string quartet requires how many players?",
    choices: ["3", "4", "5", "6"],
    correct: 1
},
{
    question: "Irish composer John Field is widely credited as the creator of which musical form?",
    choices: ["Sonata", "Minuet", "Nocturne", "Symphony"],
    correct: 2
},
{
    question: "Ludwig van Beethoven only wrote one opera. What is it called?",
    choices: ["The Magic Flute", "Scipione", "Fidelio", "Rigoletto"],
    correct: 2
},
{
    question: "Which of these was NOT a French composer?",
    choices: ["Charpentier", "Berlioz", "Poulenc", "Liszt"],
    correct: 3
},
{
    question: "Who composed a symphony nicknamed 'Surprise'?",
    choices: ["Schubert", "Schumann", "Haydn", "Wagner"],
    correct: 2
},
{
    question: "How many keys are there on a standard piano?",
    choices: ["87", "88", "89", "90"],
    correct: 1
},
{
    question: "In which city was Charles Villiers Stanford born?",
    choices: ["Dublin", "London", "Bordeaux", "Edinburgh"],
    correct: 0
},
{
    question: "The famous organist and composer Charles-Marie Widor was organist of which Parisian church?",
    choices: ["Notre Dame Cathedral", "La Madeleine", "Sainte-Clotilde", "Saint-Sulpice"],
    correct: 3
},
{
    question: "Which of these musical periods came first?",
    choices: ["Baroque", "Renaissance", "Romantic", "Classical"],
    correct: 1
},
{
    question: "Which English composer is best known for his suite 'The Planets'?",
    choices: ["Edward Elgar", "John Ireland",  "Hubert Parry", "Gustav Holst"],
    correct: 3
},
{
    question: "Niccolò Paganini was considered a master of which instrument?",
    choices: ["Violin", "Piano", "Oboe", "Trumpet"],
    correct: 0
},
{
    question: "Which composer's works include the 'Slavonic Dances'?",
    choices: ["Brahms", "Rachmaninoff", "Stravinsky", "Dvořák"],
    correct: 3
},
{
    question: "One of Mozart's last compositions, a concerto in A major, features which solo instrument?",
    choices: ["French horn", "Clarinet", "Cello", "Piano"],
    correct: 2
},
{
    question: "Which tempo indication means that the music should be played at a 'walking pace'?",
    choices: ["Allegro", "Andante", "Presto", "Adagio"],
    correct: 1
},
{
    question: "The thirteenth movement of 'Carnival of the Animals' by Saint-Saëns represents which bird?",
    choices: ["Eagle", "Cuckoo", "Swan", "Robin"],
    correct: 2
},
{
    question: "Schubert's 'Piano Quintet in A major' is nicknamed after which fish?",
    choices: ["Salmon", "Eel", "Pike", "Trout"],
    correct: 3
},
{
    question: "What nationality was the composer Edvard Grieg?",
    choices: ["Norwegian", "Swiss", "German", "Danish"],
    correct: 0
},
{
    question: "Chopin's music was composed chiefly for which instrument?",
    choices: ["Violin", "Piano", "Organ", "Cello"],
    correct: 1
},
{
    question: "Which Beethoven symphony is known as the 'Choral Symphony'?",
    choices: ["Sixth", "Seventh", "Eighth", "Ninth"],
    correct: 3
},
]