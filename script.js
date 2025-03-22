// Menu data for English and Amharic
const menuData = {
    en: {
        product1: {
            name: "Product Name",
            description: "Description of product.",
            price: "ETB 50.00"
        }
    },
    am: {
        product1: {
            name: "ምርት ስም",
            description: "የምርት ማብራሪያ.",
            price: "በETB 50.00"
        }
    }
};

// Function to switch languages
function switchLanguage(lang) {
    document.getElementById("product1-name").textContent = menuData[lang].product1.name;
    document.getElementById("product1-desc").textContent = menuData[lang].product1.description;
    document.getElementById("product1-price").textContent = menuData[lang].product1.price;
}

// Generate QR code for the menu URL
const qrcode = new QRCode(document.getElementById("qrcode"), {
    text: "https://my-qr-menu.vercel.app/", // Replace with your actual URL
    width: 128,
    height: 128,
    colorDark: "#000000",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H
});
