window.addEventListener('DOMContentLoaded', () => { 
    const parser = new DOMParser(); 

    const xmlData = `<?xml version="1.0" encoding="UTF-8"?> 
    <data>
        <drink>
            <src>img/americano.png</src>
            <price>5 byn</price>
        </drink>
        <drink>
            <src>img/kapuchino.png</src>
            <price>5,5/6,5 byn</price>
        </drink>
        <drink>
            <src>img/fresh.png</src>
            <price>7 byn</price>
        </drink>
        <dessert>
            <src>img/mars.png</src>
            <price>Марс 24,99 byn кг</price>
        </dessert>
        <dessert>
            <src>img/macarons.png</src>
            <price>Набор пирожных 12,99 byn 7шт.</price>
        </dessert>
        <dessert>
            <src>img/3chocolate.png</src>
            <price>Три шоколада 3,49 byn 1шт.</price>
        </dessert>
    </data>`;

    const xmlDoc = parser.parseFromString(xmlData, "text/xml"); 
    const MenuItems = xmlDoc.querySelectorAll('drink, dessert'); 

    const drinksContainer = document.getElementById("drinksContainer");
    const dessertsContainer = document.getElementById("dessertsContainer");

    MenuItems.forEach(function (item) { 
        const src = item.querySelector("src").textContent; 
        const title = src.substring(1).split('.')[0]; 
        const price = item.querySelector("price").textContent; 
        
        const container = item.tagName === 'drink' ? drinksContainer : dessertsContainer;

        container.innerHTML += `
            <div class="gallery">
                <div class="img">
                    <img src="${src}" alt="${title}">
                    <div class="caption">
                        <p>${price}</p>
                    </div>
                </div>
            </div>
        `;
    }); 
});