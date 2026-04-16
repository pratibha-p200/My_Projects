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
];

const gallery = document.getElementById("gallery");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let currentSlide = 0;
const cardsPerPage = 6;

function renderCards() {
    gallery.innerHTML = "";
    const start = currentSlide * cardsPerPage;
    const end = start + cardsPerPage;
    const visibleCards = cardsData.slice(start, end);

    visibleCards.forEach(card => {
        const galleryItem = document.createElement("div");
        galleryItem.className = "gallery-item";
        galleryItem.innerHTML = `
            <img src="${card.image}" alt="${card.title}">
            <h2>${card.title}</h2>
            <p>${card.description}</p>
        `;
        gallery.appendChild(galleryItem);
    });

    prevBtn.disabled = currentSlide === 0;
    nextBtn.disabled = end >= cardsData.length;
}

prevBtn.addEventListener("click", () => {
    if (currentSlide > 0) {
        currentSlide--;
        renderCards();
    }
});

nextBtn.addEventListener("click", () => {
    if ((currentSlide + 1) * cardsPerPage < cardsData.length) {
        currentSlide++;
        renderCards();
    }
});

renderCards();