// 读取背景链接
var background_img = localStorage.getItem("background");
// 设置背景图片
document.body.style.backgroundImage = `url('${background_img}')`;
// 设置字体颜色
document.body.style.color = localStorage.getItem("font_color");