function getValue() {
    //获取输入的值
    var inputBox = document.getElementById("input_box");
    var userInput = inputBox.value;
    //获取提示词
    var prompt = localStorage.getItem("prompt");
    get_msg(userInput,prompt)
}
function get_msg(input, prompt) {
    var url = new URL("http://chat.ai.crystalneko.online");
    url.searchParams.append("t", input);
    url.searchParams.append("p", prompt);
  
    var msgs = localStorage.getItem("messages");
    var encodeMsgs = encodeURIComponent(msgs);
    var options = {
      method: msgs != null ? "POST" : "GET",
      headers: msgs != null ? {
        "Content-Type": "application/json; charset=utf-8",
        "msg": encodeMsgs
      } : {}
    };
  
    fetch(url, options)
      .then(function(response) {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then(function(data) {
        // 添加消息
        addMessage(data);
      })
      .catch(function(error) {
        console.error("Error:", error);
      });
  }
  
  
  
  
  function addMessage(data) {
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
  
  
function removeData(){
    //清除显示的对话数据
    var msgDiv = document.getElementById("messages");
    msgDiv.innerHTML = ``;
    //清除存储的数据
    localStorage.removeItem('messages');
}