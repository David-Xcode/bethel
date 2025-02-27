// 语言切换功能
function switchToLanguage(lang) {
    // 设置文档语言
    document.documentElement.lang = lang;
    
    // 保存用户语言偏好
    localStorage.setItem('language', lang);
    
    // 控制台输出便于调试
    console.log("语言已切换到: " + lang);
}

// 页面加载时设置默认语言为英文
document.addEventListener('DOMContentLoaded', function() {
    // 获取保存的语言偏好
    const savedLanguage = localStorage.getItem('language');
    
    if (savedLanguage) {
        // 如果有保存的语言偏好，使用它
        document.documentElement.lang = savedLanguage;
        console.log("从存储中加载语言: " + savedLanguage);
    } else {
        // 否则默认使用英文
        document.documentElement.lang = 'en';
        console.log("使用默认语言: en");
    }
    
    // 确保切换按钮正常工作
    document.querySelectorAll('.dropdown-content a').forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const lang = this.getAttribute('onclick').match(/'([^']+)'/)[1];
            switchToLanguage(lang);
        });
    });
    
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