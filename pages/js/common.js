// 读取背景链接
var background_img = localStorage.getItem("background");
// 设置背景图片
document.body.style.backgroundImage = `url('${background_img}')`;
// 设置字体颜色
document.body.style.color = localStorage.getItem("font_color");
// 设置字体
document.body.style.fontFamily = localStorage.getItem("font");
// 设置字体大小
document.body.style.fontSize = localStorage.getItem("font_size");
// 设置按钮大小
// 获取所有按钮元素
var buttons = document.querySelectorAll('button');
/*/ 遍历所有按钮并修改大小
buttons.forEach(function(button) {
    // 设置宽度和高度
    button.style.width = localStorage.getItem("button_size");; 
    button.style.height = localStorage.getItem("button_size");; 
});*/

// 设置自定义css
document.head.innerHTML += `<style>${localStorage.getItem("custom_css")}</style>`;
//添加所有消息到页面
function addAllMsg(){
    var jsonData = JSON.parse(localStorage.getItem('messages'));
    for (let i = 0; i < jsonData.contents.length; i += 2) {
       const userPart = jsonData.contents[i];
       const modelPart = jsonData.contents[i + 1];
     
        if (userPart.role === "user") {
            const input = userPart.parts[0].text;
            const response = modelPart.parts[0].text;
     
            // 调用addMsgInHTML函数显示到页面上
            addMsgInHTML({
                input,
                response,
            });
        }
    }
}

function addMessage(data) {
    //获取用户输入
    var input = data.input;
    //获取响应
    var response = data.response;
    addMsgInHTML(data);
    //构建json
    const msg_json = {
      contents: [
        {
          role: "user",
          parts: [{ text: `${input}` }]
        },
        {
          role: "model",
          parts: [{ text: `${response}` }]
        }
      ]
    };
    // 获取存储的消息
    const storedData = localStorage.getItem('messages');
    if (storedData != null) {
      const storedJson = JSON.parse(storedData);
      msg_json.contents = [...storedJson.contents, ...msg_json.contents];
    }
    localStorage.setItem("messages", JSON.stringify(msg_json));
}
function addMsgInHTML(data){
    //获取用户输入
    var input = data.input;
    //获取响应
    var response = data.response;
    //追加内容
    const msgDiv = document.getElementById("messages");
    var inputHtml = input;
    var responseHtml = response;
    //解析markdown
    if(localStorage.getItem("md_enable") == "y"){
        inputHtml = marked.parse(input);
        responseHtml = marked.parse(response);
    }
    msgDiv.innerHTML += `<font>You:</font> ${inputHtml}<hr><font>AI:</font> ${responseHtml}<hr>`;
}