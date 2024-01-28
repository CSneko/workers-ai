function getValue() {
    //获取输入的值
    var inputBox = document.getElementById("input_box");
    var userInput = inputBox.value;
    //获取提示词
    var promptBox = document.getElementById("prompt");
    var prompt = promptBox.value;
    get(userInput,prompt)
}
function get(input,prompt){
var url = new URL("http://chat.ai.crystalneko.online");
url.searchParams.append("t", input);
url.searchParams.append("p", prompt);
const options = {
    method: "HEAD",
    headers: {
      "msg": localStorage.getItem("messagess")
    }
  };
fetch(url,options) 
  .then(function(response) {
    if (response.ok) {
      return response.json();
    }
    throw new Error("Network response was not ok.");
  })
  .then(function(data) {
    //添加消息
    addMessage(data);
  })
  .catch(function(error) {
    alert("Error:", error);
  });
}
function addMessage(data){
    //获取用户输入
    input = data.input;
    //获取响应
    response = data.response;
    //追加内容
    var msgDiv = document.getElementById("messages");
    msgDiv.innerHTML += `<p>You: ${input}</p><hr><p>AI: ${response}</p><hr>`;
    //构建json
    var msg_json = JSON.parse(`{
        "contents": [{
          role: "user",
            parts: 
              {  text: "${input}" }
            ]},
          {role: "model",
            parts: [
              {  text: "${response}" }
            ]}
        }]
      } `)
    // 获取存储的消息
    var data = localStorage.getItem('messages');
    if(data !=null){
        msg_json = {
            "contents": [...msg_json.contents, ...data.contents]
        };
    }
    localStorage.setItem("messages",msg_json);
}
function removeData(){
    //清除显示的对话数据
    var msgDiv = document.getElementById("messages");
    msgDiv.innerHTML += ``;
    //清除存储的数据
    localStorage.removeItem('messages');
}