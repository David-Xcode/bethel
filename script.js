// 简单的页面交互脚本
document.addEventListener('DOMContentLoaded', function() {
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