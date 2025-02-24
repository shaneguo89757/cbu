// 當網頁載入完成時執行
document.addEventListener('DOMContentLoaded', function() {
    const findTeacherButton = document.getElementById('findTeacher');
    
    if (findTeacherButton) {
        findTeacherButton.addEventListener('click', function() {
            window.location.href = '404.html';
        });
    }
}); 