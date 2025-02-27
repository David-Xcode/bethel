// 语言切换功能
function switchToLanguage(lang) {
    document.documentElement.lang = lang;
    localStorage.setItem('language', lang);
}

// 页面加载时设置默认语言为英文
document.addEventListener('DOMContentLoaded', function() {
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage) {
        document.documentElement.lang = savedLanguage;
    } else {
        // 如果没有保存的语言偏好，默认使用英文
        document.documentElement.lang = 'en';
    }
    
    // 平滑滚动效果
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    
    // 在此可以添加更多功能，如：
    // - 图片滑块
    // - 响应式导航菜单
    // - 表单验证
    // - 图片懒加载等
}); 