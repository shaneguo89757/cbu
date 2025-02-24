// 當網頁載入完成時執行
document.addEventListener('DOMContentLoaded', function() {
    // 添加一個簡單的歡迎訊息
    console.log('歡迎來到我的網頁！');
    
    // 為標題添加點擊事件
    const header = document.querySelector('header');
    header.addEventListener('click', function() {
        alert('謝謝您的訪問！');
    });

    const findTeacherButton = document.getElementById('findTeacher');
    
    if (findTeacherButton) {
        findTeacherButton.addEventListener('click', function() {
            window.location.href = '404.html';
        });
    }
}); 