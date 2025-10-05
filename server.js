const express = require('express');
const path = require('path');

const app = express();
const PORT = 666;

// 靜態文件服務
app.use(express.static(__dirname));

// 路由：/demo-ui 對應到 PhoneMockupReport.html
app.get('/demo-ui', (req, res) => {
    res.sendFile(path.join(__dirname, 'PhoneMockupReport.html'));
});

// 首頁也導向到 PhoneMockupReport.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'PhoneMockupReport.html'));
});

app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
    console.log(`📱 Demo UI: http://localhost:${PORT}/demo-ui`);
});
