document.getElementById("spinButton").addEventListener("click", function() {
    const categories = ['保溫用品', '文具用品', '家用小物', '收納用品', '零食飲品', '健康小物', '旅行配件', '日常配件', '家居布置', '休閒用品', '廚房小物', '生活工具', '隨身小物', '衛浴用品', '飲具組'];
    const randomCategory = categories[Math.floor(Math.random() * categories.length)];

    document.getElementById("result").innerText = `今天的幸運禮物類別是：${randomCategory}`;
});
