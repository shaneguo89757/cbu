// 當網頁載入完成時執行
document.addEventListener('DOMContentLoaded', function() {
    const findTeacherButton = document.getElementById('findTeacher');
    
    if (findTeacherButton) {
        findTeacherButton.addEventListener('click', function() {
            window.location.href = '404.html';
        });
    }

    // 處理404頁面的倒數計時
    const countdownElement = document.getElementById('countdown');
    const shutdownMessage = document.querySelector('.shutdown-message');
    
    if (countdownElement && shutdownMessage) {
        let timeLeft = 10;
        let dotCount = 3;
        
        // 更新點點的動畫
        const updateDots = setInterval(function() {
            dotCount = (dotCount % 3) + 1;
            const dots = '.'.repeat(dotCount);
            shutdownMessage.textContent = `目前正在準備關機 ${timeLeft}sec${dots}`;
        }, 300);
        
        // 倒數計時
        const timer = setInterval(function() {
            timeLeft--;
            countdownElement.textContent = timeLeft;
            
            if (timeLeft <= 0) {
                clearInterval(timer);
                clearInterval(updateDots);
                document.body.style.backgroundColor = '#000';
                document.body.innerHTML = '<div class="center-content"><h1 style="color: white">系統已關機</h1></div>';
            }
        }, 1000);
    }
}); 