window.onload = function() {
    // 背景链接
    var background_img = localStorage.getItem("background");
    var background_input = document.getElementById("background_input");
    background_input.value = background_img;
    // 提示词
    var prompt = localStorage.getItem("prompt");
    var prompt_input = document.getElementById("prompt_input");
    prompt_input.value = prompt;
    // 自定义css
    var custom_css = localStorage.getItem("custom_css");
    var custom_css_input = document.getElementById("custom_css_input");
    custom_css_input.value = custom_css;
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
function set_font(){
    // 获取输入框的值
    var input_box = document.getElementById("font_input");
    var input = input_box.value;
    // 修改本地记录
    localStorage.setItem("font",input)
}
function set_font_size(){
    // 获取输入框的值
    var input_box = document.getElementById("font_size_input");
    var input = input_box.value;
    // 修改本地记录
    localStorage.setItem("font_size",input)
}
function set_md_enable(){
    // 获取输入框的值
    var input_box = document.getElementById("md_input");
    var input = input_box.value;
    // 修改本地记录
    localStorage.setItem("md_enable",input)
}
function set_button_size(){
    // 获取输入框的值
    var input_box = document.getElementById("button_size_input");
    var input = input_box.value;
    // 修改本地记录
    localStorage.setItem("button_size",input)
}
function set_custom_css(){
    // 获取输入框的值
    var input_box = document.getElementById("custom_css_input");
    var input = input_box.value;
    // 修改本地记录
    localStorage.setItem("custom_css",input)
}