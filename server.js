const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Static fayllarni xizmat qilish
app.use(express.static(path.join(__dirname, 'public')));

// Asosiy sahifa
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Barcha boshqa yo'nalishlarni index.html ga yo'naltirish
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`🌹 Gul Box CRM ishlayapti: http://localhost:${PORT}`);
});
