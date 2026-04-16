const cardsData = [
    {
        title: "Rose",
        image: "D:\\task03\\flowerImage.jpg",
        description: "The rose is one of the most popular and recognized flowers in the world, often associated with love, beauty, and passion."
    },
    {
        title: "Lotus",
        image: "D:\\task03\\waterLiliImage.jpeg",
        description: "The lotus is a sacred aquatic plant revered for its beauty and symbolic significance."
    },
    {
        title: "Lion",
        image: "D:\\task03\\lionImage.webp",
        description: "The lion is a majestic big cat, often referred to as the 'King of the Jungle.'"
    },
    {
        title: "Tiger",
        image: "D:\\task03\\tigerImage1.jpeg",
        description: "The tiger is the largest species among the big cats and is known for its striking orange coat."
    },
    {
        title: "Fox",
        image: "D:\\task03\\foxImage.jpeg",
        description: "The fox is a cunning and adaptable mammal belonging to the family Canidae."
    },
    {
        title: "Giraffe",
        image: "D:\\task03\\bornWildImage.jpeg",
        description: "The giraffe is the tallest land animal on Earth, known for its long neck and distinctive spotted coat."
    },
    
    {
        title: "Menu",
        image: "D:\\task03\\menuIconImage.png",
        description: "The giraffe is the tallest land animal on Earth, known for its long neck and distinctive spotted coat."
    },
    {
        title: "Profile",
        image: "D:\\task03\\profileIconImage.png",
        description: "The giraffe is the tallest land animal on Earth, known for its long neck and distinctive spotted coat."
    },
    {
        title: "Gmail",
        image: "D:\\task03\\gmailIconImage.jpeg",
        description: "The giraffe is the tallest land animal on Earth, known for its long neck and distinctive spotted coat."
    },
    {
        title: "Amazon",
        image: "D:\\task03\\amazonIconImage.png",
        description: "The giraffe is the tallest land animal on Earth, known for its long neck and distinctive spotted coat."
    },
    {
        title: "Twitter",
        image: "D:\\task03\\twitterIconImage.jpeg",
        description: "The giraffe is the tallest land animal on Earth, known for its long neck and distinctive spotted coat."
    },
    {
        title: "Flifcart",
        image: "D:\\task03\\flifcartIconImage.jpeg",
        description: "The giraffe is the tallest land animal on Earth, known for its long neck and distinctive spotted coat."
    },
    {
        title: "Rose",
        image: "D:\\task03\\flowerImage.jpg",
        description: "The rose is one of the most popular and recognized flowers in the world, often associated with love, beauty, and passion."
    },
    {
        title: "Lotus",
        image: "D:\\task03\\waterLiliImage.jpeg",
        description: "The lotus is a sacred aquatic plant revered for its beauty and symbolic significance."
    },
    {
        title: "Lion",
        image: "D:\\task03\\lionImage.webp",
        description: "The lion is a majestic big cat, often referred to as the 'King of the Jungle.'"
    },
    {
        title: "Tiger",
        image: "D:\\task03\\tigerImage1.jpeg",
        description: "The tiger is the largest species among the big cats and is known for its striking orange coat."
    },
    {
        title: "Fox",
        image: "D:\\task03\\foxImage.jpeg",
        description: "The fox is a cunning and adaptable mammal belonging to the family Canidae."
    },
    {
        title: "Giraffe",
        image: "D:\\task03\\bornWildImage.jpeg",
        description: "The giraffe is the tallest land animal on Earth, known for its long neck and distinctive spotted coat."
    },

    {
        title:"About us",
        description:"The rose is one of the most popular and recognized flowers in the world, often associated with love, beauty, and passion."
    },

    {
        title:"Our Services",
        description:"The rose is one of the most popular and recognized flowers in the world, often associated with love, beauty, and passion."
    },

    {
        title:"Portfolio",
        description:"The rose is one of the most popular and recognized flowers in the world, often associated with love, beauty, and passion."
    },

    {
        title:"Meet the Team",
        description:"The rose is one of the most popular and recognized flowers in the world, often associated with love, beauty, and passion."
    },

    {
        title:"Testimonials",
        description:"The rose is one of the most popular and recognized flowers in the world, often associated with love, beauty, and passion."
    },

    {
        title:"Contact Us",
        description:"The rose is one of the most popular and recognized flowers in the world, often associated with love, beauty, and passion."
    },
    {
        title:"Enquery",
        description:"The rose is one of the most popular and recognized flowers in the world, often associated with love, beauty, and passion."
    },
];

const galleryContainer = document.getElementById('gallery-container');

cardsData.forEach(card => {
    const cardElement = document.createElement('div');
    cardElement.classList.add('card');

    let cardContent = '';
    
    // Check if the image is available and display it
    if (card.image) {
        cardContent += `<img src="${card.image}" alt="${card.title}">`;
    }
    
    // Check if title and description are available and display them
    if (card.title && card.description) {
        cardContent += `<h2>${card.title}</h2><p>${card.description}</p>`;
    }

    // Add the card content to the card element
    cardElement.innerHTML = cardContent;

    // Append the card element to the gallery container
    galleryContainer.appendChild(cardElement);
});