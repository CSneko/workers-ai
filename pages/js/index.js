function getValue() {
    //获取输入的值
    var inputBox = document.getElementById("input_box");
    var userInput = inputBox.value;
    //获取提示词
    var promptBox = document.getElementById("prompt");
    var prompt = promptBox.value;
    get(userInput.prompt,null)
}
function get(input,prompt,head){
fetch(`http://chat.ai.crystalneko.online?t=${input}&&p=${prompt}`) 
  .then(function(response) {
    if (response.ok) {
      return response.json();
    }
    throw new Error("Network response was not ok.");
  })
  .then(function(data) {
    console.log(data);
  })
  .catch(function(error) {
    console.log("Error:", error);
  });

}