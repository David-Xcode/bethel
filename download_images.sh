#!/bin/bash

# 创建临时文件
mkdir -p temp_images

# 下载portfolio图片
curl -o images/portfolio/modern-kitchen.jpg https://images.pexels.com/photos/3016430/pexels-photo-3016430.jpeg
curl -o images/portfolio/traditional-kitchen.jpg https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg
curl -o images/portfolio/design-kitchen.jpg https://images.pexels.com/photos/3214064/pexels-photo-3214064.jpeg
curl -o images/portfolio/material-sample.jpg https://images.pexels.com/photos/129731/pexels-photo-129731.jpeg
curl -o images/portfolio/construction.jpg https://images.pexels.com/photos/5824530/pexels-photo-5824530.jpeg

# 下载背景图片
curl -o images/backgrounds/cta-background.jpg https://images.pexels.com/photos/2724748/pexels-photo-2724748.jpeg

# 下载社交媒体图标
curl -o images/icons/facebook.png https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Facebook_colored_svg_copy-512.png
curl -o images/icons/instagram.png https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Instagram_colored_svg_1-512.png
curl -o images/icons/pinterest.png https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Pinterest_colored_svg-512.png
curl -o images/icons/houzz.png https://cdn0.iconfinder.com/data/icons/social-media-2092/100/social-56-512.png

# 下载logo
curl -o images/logo/logo.png https://示例链接/logo.png

echo "所有图片下载完成！"
