// Script para manejar las evoluciones de los Pokémon
const evolutions = {
    bulbasaur: [
        {
            name: "Bulbasaur",
            img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
            desc: "Bulbasaur es un Pokémon de tipo planta/veneno. Es conocido por la planta que crece en su espalda, la cual florece con el tiempo."
        },
        {
            name: "Ivysaur",
            img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png",
            desc: "Ivysaur es la evolución de Bulbasaur. Su planta sigue creciendo y se vuelve más poderosa."
        },
        {
            name: "Venusaur",
            img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png",
            desc: "Venusaur es la evolución final de Bulbasaur. Su planta florece completamente y puede usar ataques poderosos."
        }
    ],
    charmander: [
        {
            name: "Charmander",
            img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
            desc: "Charmander es un Pokémon de tipo fuego. Tiene una llama en la punta de su cola que indica su salud y estado emocional."
        },
        {
            name: "Charmeleon",
            img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/5.png",
            desc: "Charmeleon es la evolución de Charmander. Su llama se intensifica cuando se enfurece."
        },
        {
            name: "Charizard",
            img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png",
            desc: "Charizard es la evolución final de Charmander. Tiene alas poderosas y es capaz de volar y usar ataques de fuego devastadores."
        }
    ],
    squirtle: [
        {
            name: "Squirtle",
            img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
            desc: "Squirtle es un Pokémon de tipo agua. Es conocido por su habilidad para disparar agua a alta presión desde su boca."
        },
        {
            name: "Wartortle",
            img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/8.png",
            desc: "Wartortle es la evolución de Squirtle. Su caparazón se endurece y sus habilidades de lucha mejoran."
        },
        {
            name: "Blastoise",
            img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/9.png",
            desc: "Blastoise es la evolución final de Squirtle. Tiene cañones de agua en sus hombros que puede usar para atacar con gran fuerza."
        }
    ]
};

// Función para mostrar la evolución del Pokémon
function showEvolution(pokemon, direction) {
    const pokemonImages = evolutions[pokemon];
    const imageElement = document.getElementById(pokemon + '-img');
    const nameElement = document.getElementById(pokemon + '-name');
    const descElement = document.getElementById(pokemon + '-desc');
    
    let currentIndex = pokemonImages.findIndex(p => p.img === imageElement.src);
    currentIndex += direction;
    
    // Asegurarse de que los índices estén dentro de rango
    if (currentIndex < 0) {
        currentIndex = pokemonImages.length - 1;  // Va al final
    } else if (currentIndex >= pokemonImages.length) {
        currentIndex = 0;  // Vuelve al inicio
    }
    
    // Actualiza la imagen, nombre y descripción
    imageElement.src = pokemonImages[currentIndex].img;
    nameElement.textContent = pokemonImages[currentIndex].name;
    descElement.textContent = pokemonImages[currentIndex].desc;
}

// Variables para manejar el tamaño del texto y el espaciado entre líneas
let fontSize = 16;  // Tamaño de texto inicial
let lineHeight = 1.6;  // Espaciado entre líneas inicial

// Función para aumentar o disminuir el tamaño del texto
function changeFontSize(action) {
    const descElement = document.getElementById('description');
    
    if (action === 'increase') {
        fontSize += 2; // Aumenta el tamaño del texto
    } else if (action === 'decrease') {
        fontSize = Math.max(12, fontSize - 2); // Evita que el tamaño sea menor a 12px
    }
    
    descElement.style.fontSize = fontSize + 'px';
}

// Función para cambiar el espaciado entre líneas
function changeLineHeight(value) {
    const descElement = document.getElementById('description');
    
    lineHeight = value;
    descElement.style.lineHeight = lineHeight;
}

function changeFontSize(size) {
    // Obtener todos los elementos que contienen texto y cambiar su tamaño
    const textElements = document.querySelectorAll('#textContainer, #textContainer p, #textContainer h2');
    
    // Cambiar el tamaño de la fuente
    textElements.forEach(element => {
        element.style.fontSize = `${size}px`;
    });
}



