// Menu data for English and Amharic
const menuData = {
    en: {
        product1: {
            name: "Scrambled Egg",
            description: "Egg, Onion, green butter chilli served with Enjera & bread.",
            price: "ETB 210.00"
        }
    },
    am: {
        product1: {
            name: "እንቁላል ፍርፍር",
            description: "እንቁላል, ሽንኩርት, አረንጓዴ ቃሪይ ከ እንጀራ ጋር ያገለገሉ።",
            price: "በር 210.00"
        }
    },
    en: {
        product2: {
            name: "Egg with Meat.",
            description: "Egg, minced meat,onion, Ethiopian butter, with enjera & bread.",
            price: "ETB 210.00"
        }
    },
    am: {
        product2: {
            name: "ዕንቁላል በሥጋ",
            description: "እንቁላል፣ የተፈጨ ሥጋ፣ ሽንኩርት፣ የኢትዮጵያ ቅቤና ዳቦ።",
            price: "በር 210.00"
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
    text: "https://my-qr-menu.vercel.app", // Replace with your actual URL
    width: 128,
    height: 128,
    colorDark: "#000000",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H
});
