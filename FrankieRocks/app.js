// Create and configure the head
document.title = "Rock & Mineral Shop";
const style = document.createElement("style");
style.textContent = `
    body {
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        margin: 0;
        padding: 20px;
        color: #fff;
    }
    h1 {
        text-align: center;
        color: #f39c12;
        margin-bottom: 40px;
    }
    #inventory {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 20px;
        max-width: 1000px;
        margin: 0 auto;
    }
    .item {
        background: rgba(255, 255, 255, 0.8);
        padding: 20px;
        border-radius: 16px;
        box-shadow: 0 4px 10px rgba(0,0,0,0.1);
        transition: transform 0.2s ease, box-shadow 0.2s ease;
    }
    .item:hover {
        transform: translateY(-5px);
        box-shadow: 0 6px 20px rgba(0,0,0,0.2);
    }
    .item h2 {
        margin-top: 0;
        font-size: 1.5em;
        color: #d35400;
    }
    .item p {
        margin: 8px 0;
        font-size: 0.95em;
    }
    .price {
        font-size: 1.1em;
        font-weight: bold;
        color: #e67e22;
    }
    .iholder {
        width: 100%;
        height: 300vh;
        background-image: url('https://wallpapercrafter.com/desktop7/1836974-california-clouds-Death-Valley-Desert-Dune-landscape.jpg');
        background-size: cover;
        background-position: center center;
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
    }
    footer {
        text-align: center;
        padding: 10px;
        background-color: #333;
        color: #fff;
        margin-top: auto;
        width: 100%;
    }
`;
document.head.appendChild(style);

// Create background image holder
const background = document.createElement("div");
background.className = "iholder";
document.body.appendChild(background);

// Add header
const mainTitle = document.createElement("h1");
mainTitle.style.cssText = "font-size: 3em; font-weight: bold; text-align: center; color: #f39c12;";
mainTitle.textContent = "Running Rock -- Rough cut rocks and fine jewelry";
document.body.appendChild(mainTitle);

// Add mission statement
const mission = document.createElement("p");
mission.style.cssText = `
    font-size: 1.2em; line-height: 1.6; color: #f5deb3; margin: 20px auto; max-width: 800px;
    padding: 10px; background-color: rgba(0, 0, 0, 0.5); border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3); text-align: center;
`;
mission.textContent = `As a proud Coast Guard veteran who served from 1978 to 1984, life recently took an unexpected turn with a diagnosis of metastatic cancer. Doctors estimate I may have 10 months to three years, but rather than focus on the clock, the focus now is on meaning. Sharing the natural beauty of the Earth through gems, minerals, and crystals has become more than a business — it is a purpose. Each stone is a reminder of resilience, wonder, and the time we are given to connect with something deeper. Currently, I draw inspiration from the stunning Anza Borrego Desert in California, where the power and beauty of nature constantly remind me of the importance of each moment.`;
document.body.appendChild(mission);

// Add welcome header
const welcome = document.createElement("h1");
welcome.textContent = "Welcome to Our Rock & Mineral Shop!";
document.body.appendChild(welcome);

// Inventory section
const inventory = document.createElement("div");
inventory.id = "inventory";
document.body.appendChild(inventory);

// Items
const items = [
    { name: "Petrified Wood", img: "images.jpg/petrified_wood.jpg", desc: "", price: "$12.99" },
    { name: "Opalized Coral", img: "images.jpg/opalized_coral.jpg", desc: "", price: "$12.99" },
    { name: "Fossils", img: "images.jpg/fossils.jpg", desc: "", price: "$19.99" },
    { name: "Collection", img: "images.jpg/collection.jpg", desc: "B", price: "$19.99" },
    { name: "Amethyst", img: "", desc: "A beautiful purple quartz known for its calming properties.", price: "$14.99" },
    { name: "Rose Quartz", img: "", desc: "A gentle pink crystal symbolizing love and peace.", price: "$9.99" },
    { name: "Obsidian", img: "", desc: "Black volcanic glass known for its protective properties.", price: "$19.99" },
    { name: "Jasper", img: "", desc: "Known as the 'supreme nurturer,' a stone of stability.", price: "$12.99" },
    { name: "Turquoise", img: "", desc: "A beautiful blue-green stone valued for its spiritual properties.", price: "$24.99" },
];

items.forEach(({ name, img, desc, price }) => {
    const item = document.createElement("div");
    item.className = "item";

    const title = document.createElement("h2");
    title.textContent = name;
    item.appendChild(title);

    const image = document.createElement("img");
    image.src = img || "https://via.placeholder.com/250x200?text=No+Image";
    image.alt = name;
    image.style.cssText = "width: 100%; height: auto; border-radius: 8px;";
    item.appendChild(image);

    if (desc) {
        const description = document.createElement("p");
        description.textContent = desc;
        item.appendChild(description);
    }

    const priceTag = document.createElement("p");
    priceTag.className = "price";
    priceTag.textContent = price;
    item.appendChild(priceTag);

    inventory.appendChild(item);
});

// Footer
const footer = document.createElement("footer");

const contact = document.createElement("div");
contact.style.textAlign = "left";
contact.innerHTML = `
    <p style="margin: 0; font-weight: bold;">John Frankovich</p>
    <p style="margin: 0;">Email: <a href="mailto:Johnfranko2112@yahoo.com">Johnfranko2112@yahoo.com</a></p>
    <p style="margin: 0;">Phone: (704) 223-1403</p>
`;
footer.appendChild(contact);

const youtubeLink = document.createElement("a");
youtubeLink.href = "https://www.youtube.com/shorts/uoenfJSo3wg";
youtubeLink.target = "_blank";

const youtubeLogo = document.createElement("img");
youtubeLogo.src = "images.jpg/youtube-logo-png-46026.png";
youtubeLogo.alt = "YouTube Logo";
youtubeLogo.style.cssText = "width: 100px; height: auto; border-radius: 5px;";
youtubeLink.appendChild(youtubeLogo);
footer.appendChild(youtubeLink);

const facebookContainer = document.createElement("div");
facebookContainer.style.cssText = "display: flex; align-items: center;";
const facebookLogo = document.createElement("img");
facebookLogo.src = "https://static.vecteezy.com/system/resources/previews/018/930/698/original/facebook-logo-facebook-icon-transparent-free-png.png";
facebookLogo.alt = "Facebook Logo";
facebookLogo.style.cssText = "width: 100px; height: auto; border-radius: 5px; margin-right: 20px;";
facebookContainer.appendChild(facebookLogo);
footer.appendChild(facebookContainer);

const copyright = document.createElement("p");
copyright.innerHTML = "&copy; 2025 Melissa Ann Tanksley. All rights reserved.";
footer.appendChild(copyright);

document.body.appendChild(footer);
