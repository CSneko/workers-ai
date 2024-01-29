window.onload = function() {
    // 背景链接
    var background_img = localStorage.getItem("background");
    var background_input = document.getElementById("background_input");
    background_input.value = background_img;
    // 提示词
    var prompt = localStorage.getItem("prompt");
    var prompt_input = document.getElementById("prompt_input");
    prompt_input.value = prompt;
};
function set_background_img(){
    // 获取输入框的值
    var background_input = document.getElementById("background_input");
    var input = background_input.value;
    // 修改本地记录
    localStorage.setItem("background",input)
}
function set_prompt(){
    // 获取输入框的值
    var input_box = document.getElementById("prompt_input");
    var input = input_box.value;
    // 修改本地记录
    localStorage.setItem("prompt",input)
}
function set_font_color(){
    // 获取输入框的值
    var input_box = document.getElementById("font_color_input");
    var input = input_box.value;
    // 修改本地记录
    localStorage.setItem("font_color",input)
}
function set_md_enable(){
    // 获取输入框的值
    var input_box = document.getElementById("md_input");
    var input = input_box.value;
    // 修改本地记录
    localStorage.setItem("md_enable",input)
}
