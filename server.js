const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(cors());

// app.use(bodyParser.urlencoded({ extended: false }));

app.get("/hindiVocab", (req, res) => {
    const data = {
        data: [
            {
                id: 1,
                question: 'सपना का अर्थ क्या है?',
                options: ['Reality', 'Dream', 'Hope', 'Desire'],
                correctAnswer: 'Dream'
            },
            {
                id: 2,
                question: 'मित्र का अर्थ क्या है?',
                options: ['Enemy', 'Stranger', 'Friend', 'Relative'],
                correctAnswer: 'Friend'
            },
            {
                id: 3,
                question: 'प्यार का अर्थ क्या है?',
                options: ['Love', 'Hate', 'Anger', 'Jealousy'],
                correctAnswer: 'Love'
            },
            {
                id: 4,
                question: 'खुशी का अर्थ क्या है?',
                options: ['Sadness', 'Anger', 'Fear', 'Happiness'],
                correctAnswer: 'Happiness'
            },
            {
                id: 5,
                question: 'बचपन का अर्थ क्या है?',
                options: ['Childhood', 'Adulthood', 'Old age', 'Teenage'],
                correctAnswer: 'Childhood'
            }
        ]
    };
    return res.json(data);
});

app.get("/englishVocab", (req, res) => {
    const data = {
        data: [
            {
                id: 1,
                question: 'What is the synonym of "abundant"?',
                options: ['Scarce', 'Plentiful', 'Sparse', 'Limited'],
                correctAnswer: 'Plentiful'
            },
            {
                id: 2,
                question: 'What is the antonym of "vague"?',
                options: ['Unclear', 'Precise', 'Ambiguous', 'Indistinct'],
                correctAnswer: 'Precise'
            },
            {
                id: 3,
                question: 'What does "pinnacle" mean?',
                options: ['Peak', 'Trough', 'Valley', 'Slope'],
                correctAnswer: 'Peak'
            },
            {
                id: 4,
                question: 'What is the synonym of "magnificent"?',
                options: ['Ordinary', 'Impressive', 'Mediocre', 'Unremarkable'],
                correctAnswer: 'Impressive'
            },
            {
                id: 5,
                question: 'What does "ennui" mean?',
                options: ['Boredom', 'Excitement', 'Thrill', 'Amusement'],
                correctAnswer: 'Boredom'
            }
        ]
    };
    return res.json(data);
});

app.get("/japaneseVocab", (req, res) => {
    const data = {
        data: [
            {
                id: 1,
                question: 'What does 「花」 (hana) mean?',
                options: ['Tree', 'River', 'Flower', 'Mountain'],
                correctAnswer: 'Flower'
            },
            {
                id: 2,
                question: 'What does 「猫」 (neko) mean?',
                options: ['Dog', 'Cat', 'Fish', 'Bird'],
                correctAnswer: 'Cat'
            },
            {
                id: 3,
                question: 'What does 「食べる」 (taberu) mean?',
                options: ['Sleep', 'Run', 'Play', 'Eat'],
                correctAnswer: 'Eat'
            },
            {
                id: 4,
                question: 'What does 「水」 (mizu) mean?',
                options: ['Fire', 'Air', 'Earth', 'Water'],
                correctAnswer: 'Water'
            },
            {
                id: 5,
                question: 'What does 「笑顔」 (egao) mean?',
                options: ['Anger', 'Sadness', 'Laughter', 'Fear'],
                correctAnswer: 'Laughter'
            }
        ]
    };
    
    return res.json(data);
});

app.get("/frenchVocab", (req, res) => {
    const data = {
        data: [
            {
                id: 1,
                question: 'What does "chat" (sha) mean?',
                options: ['Dog', 'Cat', 'Fish', 'Bird'],
                correctAnswer: 'Cat'
            },
            {
                id: 2,
                question: 'What does "arbre" (arbr) mean?',
                options: ['Tree', 'River', 'Flower', 'Mountain'],
                correctAnswer: 'Tree'
            },
            {
                id: 3,
                question: 'What does "manger" (monzhay) mean?',
                options: ['Sleep', 'Run', 'Play', 'Eat'],
                correctAnswer: 'Eat'
            },
            {
                id: 4,
                question: 'What does "eau" (oh) mean?',
                options: ['Fire', 'Air', 'Earth', 'Water'],
                correctAnswer: 'Water'
            },
            {
                id: 5,
                question: 'What does "rire" (reer) mean?',
                options: ['Anger', 'Sadness', 'Laughter', 'Fear'],
                correctAnswer: 'Laughter'
            }
        ]
    };
    
    return res.json(data);
});

app.get("/spanishVocab", (req, res) => {
    const data = {
        data: [
            {
                id: 1,
                question: 'What does "perro" (peh-roh) mean?',
                options: ['Dog', 'Cat', 'Fish', 'Bird'],
                correctAnswer: 'Dog'
            },
            {
                id: 2,
                question: 'What does "árbol" (ahr-bohl) mean?',
                options: ['Tree', 'River', 'Flower', 'Mountain'],
                correctAnswer: 'Tree'
            },
            {
                id: 3,
                question: 'What does "comer" (koh-mehr) mean?',
                options: ['Sleep', 'Run', 'Play', 'Eat'],
                correctAnswer: 'Eat'
            },
            {
                id: 4,
                question: 'What does "agua" (ah-gwah) mean?',
                options: ['Fire', 'Air', 'Earth', 'Water'],
                correctAnswer: 'Water'
            },
            {
                id: 5,
                question: 'What does "risa" (ree-sah) mean?',
                options: ['Anger', 'Sadness', 'Laughter', 'Fear'],
                correctAnswer: 'Laughter'
            }
        ]
    };
    
    return res.json(data);
});

app.get("/tamilVocab", (req, res) => {
    const data = {
        data: [
            {
                id: 1,
                question: 'What does "நாய்" (nāy) mean?',
                options: ['Dog', 'Cat', 'Fish', 'Bird'],
                correctAnswer: 'Dog'
            },
            {
                id: 2,
                question: 'What does "மரம்" (maram) mean?',
                options: ['Tree', 'River', 'Flower', 'Mountain'],
                correctAnswer: 'Tree'
            },
            {
                id: 3,
                question: 'What does "சாப்பிடு" (sāppiṭu) mean?',
                options: ['Sleep', 'Run', 'Play', 'Eat'],
                correctAnswer: 'Eat'
            },
            {
                id: 4,
                question: 'What does "நீர்" (nīr) mean?',
                options: ['Fire', 'Air', 'Earth', 'Water'],
                correctAnswer: 'Water'
            },
            {
                id: 5,
                question: 'What does "சிரிப்பு" (sirippu) mean?',
                options: ['Anger', 'Sadness', 'Laughter', 'Fear'],
                correctAnswer: 'Laughter'
            }
        ]
    };
    
    return res.json(data);
});

app.get("/hindiSentenceUnderstanding", (req, res) => {
    const data = {
        data: [
            {
                id: 1,
                question: "बच्चे पार्क में खेल रहे थे। : What were the children doing in the park?",
                options: ["Eating", "Running", "Playing", "Studying"],
                correctAnswer: "Playing"
            },
            {
                id: 2,
                question: "महिला रसोई में खाना बना रही है। : What is the woman doing in the kitchen?",
                options: ["Eating", "Sleeping", "Cooking", "Studying"],
                correctAnswer: "Cooking"
            },
            {
                id: 3,
                question: "छात्र अपनी किताबें बहुत ध्यान से पढ़ रहे हैं। : What are the students doing with their books?",
                options: ["Eating", "Running", "Playing", "Studying"],
                correctAnswer: "Studying"
            },
            {
                id: 4,
                question: "कार्यालय में सभी अपने काम में लगे हुए हैं। : What are all the people doing in the office?",
                options: ["Sleeping", "Eating", "Working", "Reading"],
                correctAnswer: "Working"
            },
            {
                id: 5,
                question: "शहर में अच्छी तरह से संगठित ट्राफिक है। : What is there in the city that is well-organized?",
                options: ["Weather", "Traffic", "Pollution", "Rains"],
                correctAnswer: "Traffic"
            }
        ]
    };
    return res.json(data);
});

app.get("/englishSentenceUnderstanding", (req, res) => {
    const data = {
        data: [
            {
                "id": 1,
                "question": "The orchestra performed a symphony in the concert hall. : What did the orchestra do in the concert hall?",
                "options": ["Played a play", "Performed a symphony", "Sang a song", "Danced a dance"],
                "correctAnswer": "Performed a symphony"
            },
            {
                "id": 2,
                "question": "The biologist dissected the specimen under the microscope. : What did the biologist do under the microscope?",
                "options": ["Took photographs", "Performed surgery", "Dissected the specimen", "Wrote a report"],
                "correctAnswer": "Dissected the specimen"
            },
            {
                "id": 3,
                "question": "The architect designed a futuristic skyscraper for the city skyline. : What did the architect design for the city skyline?",
                "options": ["Bridge", "Park", "Skyscraper", "House"],
                "correctAnswer": "Skyscraper"
            },
            {
                "id": 4,
                "question": "The astronomer observed celestial bodies through the telescope. : What did the astronomer observe through the telescope?",
                "options": ["Mountains", "Animals", "Celestial bodies", "Buildings"],
                "correctAnswer": "Celestial bodies"
            },
            {
                "id": 5,
                "question": "The detective uncovered a conspiracy in the criminal underworld. : What did the detective uncover in the criminal underworld?",
                "options": ["Secret treasure", "Conspiracy", "Fairy tale", "Myth"],
                "correctAnswer": "Conspiracy"
            }
        ]
    };
    return res.json(data);
});

app.get("/japaneseSentenceUnderstanding", (req, res) => {
    const data = {
        data: [
            {
                "id": 1,
                "question": "オーケストラはコンサートホールで交響曲を演奏しました。 : What did the orchestra do in the concert hall?",
                "options": [
                    "Played",
                    "Sang",
                    "Danced",
                    "Spoke"
                ],
                "correctAnswer": "Played"
            },
            {
                "id": 2,
                "question": "生物学者は顕微鏡の下で標本を解剖しました。 : What did the biologist do under the microscope?",
                "options": [
                    "Took photographs",
                    "Performed surgery",
                    "Dissected the specimen",
                    "Wrote a report"
                ],
                "correctAnswer": "Dissected the specimen"
            },
            {
                "id": 3,
                "question": "建築家は都市の空に未来的な超高層ビルを設計しました。 : What did the architect design for the city skyline?",
                "options": [
                    "Bridge",
                    "Park",
                    "Skyscraper",
                    "House"
                ],
                "correctAnswer": "Skyscraper"
            },
            {
                "id": 4,
                "question": "天文学者は望遠鏡を通して天体を観察しました。 : What did the astronomer observe through the telescope?",
                "options": [
                    "Mountains",
                    "Animals",
                    "Celestial bodies",
                    "Buildings"
                ],
                "correctAnswer": "Celestial bodies"
            },
            {
                "id": 5,
                "question": "刑事は犯罪の裏社会で陰謀を暴きました。 : What did the detective uncover in the criminal underworld?",
                "options": [
                    "Secret treasure",
                    "Conspiracy",
                    "Fairy tale",
                    "Myth"
                ],
                "correctAnswer": "Conspiracy"
            }
        ]
    };
    return res.json(data);
});

app.get("/frenchSentenceUnderstanding", (req, res) => {
    const data = {
        data: [
            {
                "id": 1,
                "question": "L'orchestre a joué une symphonie dans la salle de concert. : What did the orchestra do in the concert hall?",
                "options": [
                    "Played",
                    "Sang",
                    "Danced",
                    "Spoke"
                ],
                "correctAnswer": "Played"
            },
            {
                "id": 2,
                "question": "Le biologiste a disséqué l'échantillon sous le microscope. : What did the biologist do under the microscope?",
                "options": [
                    "Took photographs",
                    "Performed surgery",
                    "Dissected the specimen",
                    "Wrote a report"
                ],
                "correctAnswer": "Dissected the specimen"
            },
            {
                "id": 3,
                "question": "L'architecte a conçu un gratte-ciel futuriste pour la ligne d'horizon de la ville. : What did the architect design for the city skyline?",
                "options": [
                    "Bridge",
                    "Park",
                    "Skyscraper",
                    "House"
                ],
                "correctAnswer": "Skyscraper"
            },
            {
                "id": 4,
                "question": "L'astronome a observé des corps célestes à travers le télescope. : What did the astronomer observe through the telescope?",
                "options": [
                    "Mountains",
                    "Animals",
                    "Celestial bodies",
                    "Buildings"
                ],
                "correctAnswer": "Celestial bodies"
            },
            {
                "id": 5,
                "question": "Le détective a découvert un complot dans le monde criminel. : What did the detective uncover in the criminal underworld?",
                "options": [
                    "Secret treasure",
                    "Conspiracy",
                    "Fairy tale",
                    "Myth"
                ],
                "correctAnswer": "Conspiracy"
            }
        ]
    };
    return res.json(data);
});

app.get("/spanishSentenceUnderstanding", (req, res) => {
    const data = {
        data: [
            {
                "id": 1,
                "question": "La orquesta tocó una sinfonía en la sala de conciertos. : What did the orchestra do in the concert hall?",
                "options": [
                    "Played",
                    "Sang",
                    "Danced",
                    "Spoke"
                ],
                "correctAnswer": "Played"
            },
            {
                "id": 2,
                "question": "El biólogo diseccionó la muestra bajo el microscopio. : What did the biologist do under the microscope?",
                "options": [
                    "Took photographs",
                    "Performed surgery",
                    "Dissected the specimen",
                    "Wrote a report"
                ],
                "correctAnswer": "Dissected the specimen"
            },
            {
                "id": 3,
                "question": "El arquitecto diseñó un rascacielos futurista para el horizonte de la ciudad. : What did the architect design for the city skyline?",
                "options": [
                    "Bridge",
                    "Park",
                    "Skyscraper",
                    "House"
                ],
                "correctAnswer": "Skyscraper"
            },
            {
                "id": 4,
                "question": "El astrónomo observó cuerpos celestes a través del telescopio. : What did the astronomer observe through the telescope?",
                "options": [
                    "Mountains",
                    "Animals",
                    "Celestial bodies",
                    "Buildings"
                ],
                "correctAnswer": "Celestial bodies"
            },
            {
                "id": 5,
                "question": "El detective descubrió una conspiración en el mundo criminal. : What did the detective uncover in the criminal underworld?",
                "options": [
                    "Secret treasure",
                    "Conspiracy",
                    "Fairy tale",
                    "Myth"
                ],
                "correctAnswer": "Conspiracy"
            }
        ]
    };
    return res.json(data);
});

app.get("/tamilSentenceUnderstanding", (req, res) => {
    const data = {
        data: [
            {
                "id": 1,
                "question": "அரையர்கள் கானாடி நாடகம் நடத்தினர். : What did the orchestra do in the concert hall?",
                "options": [
                    "Played",
                    "Sang",
                    "Danced",
                    "Spoke"
                ],
                "correctAnswer": "Played"
            },
            {
                "id": 2,
                "question": "உயிரியலாளி அமைப்புக்களை கட்டினார். : What did the biologist do under the microscope?",
                "options": [
                    "Took photographs",
                    "Performed surgery",
                    "Dissected the specimen",
                    "Wrote a report"
                ],
                "correctAnswer": "Dissected the specimen"
            },
            {
                "id": 3,
                "question": "கட்டிக்கொள்ளும் கட்டிகோளில் ஒரு நிலம் வடிகட்டப்பட்டது. : What did the architect design for the city skyline?",
                "options": [
                    "Bridge",
                    "Park",
                    "Skyscraper",
                    "House"
                ],
                "correctAnswer": "Skyscraper"
            },
            {
                "id": 4,
                "question": "நாட்டின் ஆச்சரியத்தில் வானத்தின் அருகிலுள்ள தேர்வுகளை கண்டுபிடித்தன. : What did the astronomer observe through the telescope?",
                "options": [
                    "Mountains",
                    "Animals",
                    "Celestial bodies",
                    "Buildings"
                ],
                "correctAnswer": "Celestial bodies"
            },
            {
                "id": 5,
                "question": "கொலையாளி புலிகளை உலையாது கண்டுபிடித்தார். : What did the detective uncover in the criminal underworld?",
                "options": [
                    "Secret treasure",
                    "Conspiracy",
                    "Fairy tale",
                    "Myth"
                ],
                "correctAnswer": "Conspiracy"
            }
        ]
    };
    return res.json(data);
});

app.get("/hindiSentenceCompletion", (req, res) => {
    const data = {
        data: [
            {
                id: 1,
                question: "पानी का रंग _____ होता है?",
                options: ["हरा", "नीला", "लाल", "पीला"],
                correctAnswer: "नीला"
            },
            {
                id: 2,
                question: "सूर्य हमेशा _____ दिशा की ओर से उगता है?",
                options: ["पश्चिम", "उत्तर", "पूर्व", "दक्षिण"],
                correctAnswer: "पूर्व"
            },
            {
                id: 3,
                question: "बाघ _____ जंगल में घूम रहा था।",
                options: ["आसमान", "नदी", "जंगल ", "अँधेरे"],
                correctAnswer: "जंगल"
            },
            {
                id: 4,
                question: "पेड़-पौधों को _____ की आवश्यकता है।",
                options: ["रंग", "सूर्य की किरणों", "खाने", "चाँद"],
                correctAnswer: "सूर्य की किरणों"
            },
            {
                id: 5,
                question: "कौआ का रंग _____ होता है।",
                options: ["सफेद", "काला", "नीला", "भूरा"],
                correctAnswer: "काला"
            }
        ]
    };
    return res.json(data);
});

app.get("/englishSentenceCompletion", (req, res) => {
    const data = {
        data: [
            {
                id: 1,
                question: "The color of water is _____?",
                options: ["Green", "Blue", "Red", "Yellow"],
                correctAnswer: "Blue"
            },
            {
                id: 2,
                question: "The sun always rises from the _____ direction?",
                options: ["West", "North", "East", "South"],
                correctAnswer: "East"
            },
            {
                id: 3,
                question: "The tiger was roaming in the _____?",
                options: ["Sky", "River", "Jungle", "Dark"],
                correctAnswer: "Jungle"
            },
            {
                id: 4,
                question: "Plants need _____ for their survival.",
                options: ["Color", "Sunlight", "Food", "Moonlight"],
                correctAnswer: "Sunlight"
            },
            {
                id: 5,
                question: "The color of a crow is _____?",
                options: ["White", "Black", "Blue", "Brown"],
                correctAnswer: "Black"
            }
        ]
    };
    return res.json(data);
});

app.get("/japaneseSentenceCompletion", (req, res) => {
    const data = {
        data: [
            {
                id: 1,
                question: "水の色は_____ですか？",
                options: ["緑 (Green)", "青 (Blue)", "赤 (Red)", "黄色 (Yellow)"],
                correctAnswer: "青 (Blue)"
            },
            {
                id: 2,
                question: "太陽はいつも_____の方角から昇りますか？",
                options: ["西 (West)", "北 (North)", "東 (East)", "南 (South)"],
                correctAnswer: "東 (East)"
            },
            {
                id: 3,
                question: "トラは_____でうろついていました。",
                options: ["空 (Sky)", "川 (River)", "ジャングル (Jungle)", "暗闇 (Dark)"],
                correctAnswer: "ジャングル (Jungle)"
            },
            {
                id: 4,
                question: "植物は_____が必要です。",
                options: ["色 (Color)", "日光 (Sunlight)", "食べ物 (Food)", "月光 (Moonlight)"],
                correctAnswer: "日光 (Sunlight)"
            },
            {
                id: 5,
                question: "カラスの色は_____ですか？",
                options: ["白 (White)", "黒 (Black)", "青 (Blue)", "茶色 (Brown)"],
                correctAnswer: "黒 (Black)"
            }
        ]
    };
    return res.json(data);
});

app.get("/frenchSentenceCompletion", (req, res) => {
    const data = {
        data: [
            {
                id: 1,
                question: "Quelle est la couleur de l'eau ?",
                options: ["Vert (Green)", "Bleu (Blue)", "Rouge (Red)", "Jaune (Yellow)"],
                correctAnswer: "Bleu (Blue)"
            },
            {
                id: 2,
                question: "Le soleil se lève toujours de quelle direction ?",
                options: ["Ouest (West)", "Nord (North)", "Est (East)", "Sud (South)"],
                correctAnswer: "Est (East)"
            },
            {
                id: 3,
                question: "Le tigre se promenait dans _____ ?",
                options: ["Ciel (Sky)", "Rivière (River)", "Jungle (Jungle)", "Obscurité (Dark)"],
                correctAnswer: "Jungle (Jungle)"
            },
            {
                id: 4,
                question: "Les plantes ont besoin de _____ pour leur survie.",
                options: ["Couleur (Color)", "Lumière du soleil (Sunlight)", "Nourriture (Food)", "Lumière de la lune (Moonlight)"],
                correctAnswer: "Lumière du soleil (Sunlight)"
            },
            {
                id: 5,
                question: "Quelle est la couleur d'un corbeau ?",
                options: ["Blanc (White)", "Noir (Black)", "Bleu (Blue)", "Marron (Brown)"],
                correctAnswer: "Noir (Black)"
            }
        ]
    };
    return res.json(data);
});

app.get("/spanishSentenceCompletion", (req, res) => {
    const data = {
        data: [
            {
                id: 1,
                question: "¿Cuál es el color del agua?",
                options: ["Verde (Green)", "Azul (Blue)", "Rojo (Red)", "Amarillo (Yellow)"],
                correctAnswer: "Azul (Blue)"
            },
            {
                id: 2,
                question: "¿De qué dirección sale siempre el sol?",
                options: ["Oeste (West)", "Norte (North)", "Este (East)", "Sur (South)"],
                correctAnswer: "Este (East)"
            },
            {
                id: 3,
                question: "¿El tigre estaba merodeando en _____?",
                options: ["La cielo (Sky)", "El río (River)", "La montaña (Mountain)", "La selva (Jungle)"],
                correctAnswer: "La selva (Jungle)"
            },
            {
                id: 4,
                question: "Las plantas necesitan _____ para su supervivencia.",
                options: ["Color (Color)", "Luz solar (Sunlight)", "Comida (Food)", "Luz de la luna (Moonlight)"],
                correctAnswer: "Luz solar (Sunlight)"
            },
            {
                id: 5,
                question: "¿Cuál es el color de un cuervo?",
                options: ["Blanco (White)", "Negro (Black)", "Azul (Blue)", "Marrón (Brown)"],
                correctAnswer: "Negro (Black)"
            }
        ]
    };
    return res.json(data);
});

app.get("/tamilSentenceCompletion", (req, res) => {
    const data = {
        data: [
            {
                id: 1,
                question: "நீரின் நிறம் என்ன?",
                options: ["பச்சை (Green)", "நீலம் (Blue)", "சிவப்பு (Red)", "மஞ்சள் (Yellow)"],
                correctAnswer: "நீலம் (Blue)"
            },
            {
                id: 2,
                question: "சூரியன் எப்போதும் எங்கிருந்து உடல் நீட்டம் செலுத்துகிறான்?",
                options: ["மேற்கு (West)", "வடம் (North)", "கிழக்கு (East)", "தெற்கு (South)"],
                correctAnswer: "கிழக்கு (East)"
            },
            {
                id: 3,
                question: "புலி _____ கடலில் ஓடுகின்றது.",
                options: ["வான் (Sky)", "நதி (River)", "காடு (Jungle)", "இருள் (Dark)"],
                correctAnswer: "காடு (Jungle)"
            },
            {
                id: 4,
                question: "தாவரங்களுக்கு _____ தேவை.",
                options: ["நிறம் (Color)", "சூரிய ஒளி (Sunlight)", "உணவு (Food)", "இரவின் ஒளி (Moonlight)"],
                correctAnswer: "சூரிய ஒளி (Sunlight)"
            },
            {
                id: 5,
                question: "காக்கின் நிறம் என்ன?",
                options: ["வெள்ளை (White)", "கருப்பு (Black)", "நீலம் (Blue)", "பழுப்பு (Brown)"],
                correctAnswer: "கருப்பு (Black)"
            }
        ]
    };
    return res.json(data);
});

app.get("/hindiErrorCorrection", (req, res) => {
    const data = {
        data: [
            {
                id: 1,
                question: "वह तीन साल से फ्रेंच पढ़ती हैं।",
                options: [
                    "पढ़ रही हैं",
                    "पढ़ती थी",
                    "पढ़ चुकी हैं",
                    "पढ़ती रहीं"
                ],
                correctAnswer: "पढ़ रही हैं"
            },
            {
                id: 2,
                question: "वह लोग आज रात कॉन्सर्ट जाते हैं।",
                options: [
                    "सोच रहे थे",
                    "जाते",
                    "जा चुके हैं",
                    "जाएंगे"
                ],
                correctAnswer: "जाएंगे"
            },
            {
                id: 3,
                question: "यदि मैं आपकी मदद करू, तो कृपया मुझे बताएं।",
                options: [
                    "कर सकता हूँ",
                    "कर पाता हूँ",
                    "कर सका",
                    "करता"
                ],
                correctAnswer: "कर सकता हूँ"
            },
            {
                id: 4,
                question: "वह कॉफी पसंद नहीं आता है।",
                options: [
                    "पसंद नहीं करता है",
                    "पसंद नहीं",
                    "कॉफी पसंद नहीं आती",
                    "नहीं पसंद"
                ],
                correctAnswer: "पसंद नहीं करता है"
            },
            {
                id: 5,
                question: "हम संग्रहालय जाने की सोचते।",
                options: [
                    "सोच रहे थे",
                    "सोच लिया था",
                    "सोचते हैं",
                    "सोचे"
                ],
                correctAnswer: "सोच रहे थे"
            }
        ]
    };
    return res.json(data);
});

app.get("/englishErrorCorrection", (req, res) => {
    const data = {
        data: [
            {
                id: 1,
                question: "She have been studying French for three years.",
                options: [
                    "has been studying",
                    "study",
                    "studies",
                    "studied"
                ],
                correctAnswer: "has been studying"
            },
            {
                id: 2,
                question: "They is going to the concert tonight.",
                options: [
                    "are going",
                    "go",
                    "goes",
                    "went"
                ],
                correctAnswer: "are going"
            },
            {
                id: 3,
                question: "I am not used to eat spicy food.",
                options: [
                    "to eating",
                    "eat",
                    "eating",
                    "ate"
                ],
                correctAnswer: "to eating"
            },
            {
                id: 4,
                question: "He don't like coffee.",
                options: [
                    "doesn't",
                    "don't",
                    "don't likes",
                    "not"
                ],
                correctAnswer: "doesn't"
            },
            {
                id: 5,
                question: "We was planning to visit the museum, but it was closed.",
                options: [
                    "were planning",
                    "was plan",
                    "are planning",
                    "is planning"
                ],
                correctAnswer: "were planning"
            }
        ]
    };
    return res.json(data);
});

app.get("/japaneseErrorCorrection", (req, res) => {
    const data = {
        data: [
            {
                id: 1,
                question: "彼女は3年間フランス語を勉強しています。",
                options: [
                    "勉強しています",
                    "勉強している",
                    "勉強",
                    "勉強しました"
                ],
                correctAnswer: "勉強しています"
            },
            {
                id: 2,
                question: "彼らは今夜コンサートに行っています。",
                options: [
                    "行っています",
                    "行く",
                    "行きます",
                    "行った"
                ],
                correctAnswer: "行っています"
            },
            {
                id: 3,
                question: "私は辛い食べ物を食べるのに慣れていません。",
                options: [
                    "食べるのに",
                    "食べます",
                    "食べて",
                    "食べました"
                ],
                correctAnswer: "食べるのに"
            },
            {
                id: 4,
                question: "彼はコーヒーが好きではありません。",
                options: [
                    "好きではありません",
                    "好き",
                    "好きじゃない",
                    "好きじゃありません"
                ],
                correctAnswer: "好きではありません"
            },
            {
                id: 5,
                question: "私たちは博物館に行く予定でしたが、閉まっていました。",
                options: [
                    "行く予定でした",
                    "行く",
                    "行っています",
                    "行くつもりでした"
                ],
                correctAnswer: "行く予定でした"
            }
        ]
    };
    return res.json(data);
});

app.get("/frenchErrorCorrection", (req, res) => {
    const data = {
        data: [
            {
                id: 1,
                question: "Elle a étudié le français pendant trois ans.",
                options: [
                    "a étudié",
                    "étudie",
                    "étudie depuis",
                    "étudier"
                ],
                correctAnswer: "a étudié"
            },
            {
                id: 2,
                question: "Ils vont au concert ce soir.",
                options: [
                    "vont",
                    "aller",
                    "va",
                    "allait"
                ],
                correctAnswer: "vont"
            },
            {
                id: 3,
                question: "Je ne suis pas habitué à manger des plats épicés.",
                options: [
                    "à manger",
                    "manger",
                    "mange",
                    "avoir mangé"
                ],
                correctAnswer: "à manger"
            },
            {
                id: 4,
                question: "Il n'aime pas le café.",
                options: [
                    "n'aime pas",
                    "aime",
                    "n'aime",
                    "n'a pas"
                ],
                correctAnswer: "n'aime pas"
            },
            {
                id: 5,
                question: "Nous avions prévu de visiter le musée, mais il était fermé.",
                options: [
                    "avions prévu",
                    "avons prévu",
                    "prévoyons",
                    "prévu"
                ],
                correctAnswer: "avions prévu"
            }
        ]
    };
    return res.json(data);
});

app.get("/spanishErrorCorrection", (req, res) => {
    const data = {
        data: [
            {
                id: 1,
                question: "Ella ha estado estudiando francés durante tres años.",
                options: [
                    "ha estado estudiando",
                    "estudio",
                    "estudia",
                    "estudiaba"
                ],
                correctAnswer: "ha estado estudiando"
            },
            {
                id: 2,
                question: "Ellos van al concierto esta noche.",
                options: [
                    "van",
                    "ir",
                    "va",
                    "iban"
                ],
                correctAnswer: "van"
            },
            {
                id: 3,
                question: "No estoy acostumbrado a comer comida picante.",
                options: [
                    "a comer",
                    "comer",
                    "comiendo",
                    "comí"
                ],
                correctAnswer: "a comer"
            },
            {
                id: 4,
                question: "A él no le gusta el café.",
                options: [
                    "no le gusta",
                    "gusta",
                    "no gusta",
                    "no le gustan"
                ],
                correctAnswer: "no le gusta"
            },
            {
                id: 5,
                question: "Íbamos a visitar el museo, pero estaba cerrado.",
                options: [
                    "Íbamos a visitar",
                    "Vamos a visitar",
                    "Visitamos",
                    "Fuimos a visitar"
                ],
                correctAnswer: "Íbamos a visitar"
            }
        ]
    };
    return res.json(data);
});

app.get("/tamilErrorCorrection", (req, res) => {
    const data = {
        data: [
            {
                id: 1,
                question: "அவள் மூன்று ஆண்டுகளாக பிரான்சியம் படித்து வந்துள்ளாள்.",
                options: [
                    "படித்து வந்துள்ளாள்",
                    "படித்து வந்துள்ளாள்",
                    "படித்து வந்துள்ள",
                    "படிந்து வந்துள்ளாள்"
                ],
                correctAnswer: "படித்து வந்துள்ளாள்"
            },
            {
                id: 2,
                question: "அவர்கள் இன்று காலை கான்சர்ட் கேளுவார்கள்.",
                options: [
                    "கேளுவார்கள்",
                    "கேளுகின்றனர்",
                    "கேளவிடுகின்றனர்",
                    "கேளுகின்ற"
                ],
                correctAnswer: "கேளுவார்கள்"
            },
            {
                id: 3,
                question: "நான் கருப்பு உணவை சாப்பிட பழக்கமளிக்கிறேன்.",
                options: [
                    "சாப்பிட பழக்கமளிக்கிறேன்",
                    "சாப்பிடுகிறேன்",
                    "சாப்பிடுவதில்லை",
                    "சாப்பிடவில்லை"
                ],
                correctAnswer: "சாப்பிட பழக்கமளிக்கிறேன்"
            },
            {
                id: 4,
                question: "அவனுக்கு காபி பிடிக்கவில்லை.",
                options: [
                    "பிடிக்கவில்லை",
                    "பிடிக்கிறது",
                    "பிடிக்கும்",
                    "பிடித்துகொள்ளவில்லை"
                ],
                correctAnswer: "பிடிக்கவில்லை"
            },
            {
                id: 5,
                question: "நாம் அருகிலுள்ள அருங்காட்சியை அழைக்க திட்டமிட்டுள்ளோம், ஆனால் அது மூடப்பட்டுள்ளது.",
                options: [
                    "அழைக்க திட்டமிட்டுள்ளோம்",
                    "அழைக்க செய்கின்றோம்",
                    "அழைக்காதே",
                    "அழைக்க அழைக்காதே"
                ],
                correctAnswer: "அழைக்க திட்டமிட்டுள்ளோம்"
            }
        ]
    };    
    return res.json(data);
});


// app.post("/register", (req, res)=>{
//     console.log(req.body);
//     res.json(req.body);
// })





// mongoose.connect("mongodb://127.0.0.1:27017/FluencyTracker", { useNewUrlParser: true, useUnifiedTopology: true });
// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'MongoDB connection error:'));
// const userSchema = new mongoose.Schema({
//     name: {type:String,required:true},
//     username: {type:String,required:true},
//     password: {type:String,required:true}
// });
// const Users = mongoose.model('Users', userSchema, 'Users');
// app.post("/register", async (req, res) => {
//     try {
//         const { name, username, password } = req.body;
//         const users = new Users({ name, username, password });
//         await users.save();
//         console.log('User registered:', users);
//         res.status(200).json({ message: 'User created successfully' });
//     } catch (error) {
//         console.error('Error registering user:', error);
//         res.status(500).json({ error: 'Internal server error' });
//     }
// });

// app.post("/login", async (req, res) => {
//     try {
//         const { username, password } = req.body;
//         const user = await Users.findOne({ username });
//         if (!user) {
//             return res.status(401).json({ error: 'User not found' });
//         }
//         if (user.password !== password) {
//             return res.status(401).json({ error: 'Invalid password' });
//         }
//         console.log('User logged in:', user);
//         res.status(200).json({ message: 'Login successful', user });
//     } catch (error) {
//         console.error('Error logging in:', error);
//         res.status(500).json({ error: 'Internal server error' });
//     }
// });






app.listen(2000, ()=>{
    console.log("Server started on port 2000");
})
