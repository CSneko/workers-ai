//添加所有消息到页面上
addAllMsgChange();

function addAllMsgChange() {
    const messages = JSON.parse(localStorage.getItem('messages'));
    if (!messages || !Array.isArray(messages.contents)) {
        console.error('Invalid messages data.');
        return;
    }

    let i = 0;
    while (i + 1 < messages.contents.length) {
        const userPart = messages.contents[i];
        const modelPart = messages.contents[i + 1];

        if (userPart.role === "user") {
            const userInput = userPart.parts[0].text;
            const modelResponse = modelPart.parts[0].text;

            // 创建消息元素及修改按钮
            const messageDiv = createMessageElement(userInput, modelResponse);
            document.getElementById("messages").appendChild(messageDiv);

            // 使用闭包保存当前i值
            (function(currentIndex) {
                const editButton = messageDiv.querySelector('.edit-button');
                editButton.addEventListener('click', () => {
                    const newInput = prompt('请输入新的用户消息：', userInput);
                    const newResponse = prompt('请输入新的AI响应：', modelResponse);

                    // 更新本地存储中的消息数据
                    updateLocalStorage(newInput, newResponse, currentIndex);
                    // 更新页面显示
                    messageDiv.querySelector('.user-msg').innerHTML = marked.parse(newInput);
                    messageDiv.querySelector('.ai-msg').innerHTML = marked.parse(newResponse);
                });
            })(Math.floor(i / 2)); // 将当前的i值传入闭包
        }
        i += 2; // 每次迭代增加2以处理成对的消息
    }
}
// 创建包含用户和AI消息以及修改按钮的消息元素
function createMessageElement(input, response) {
    let inputHtml = input;
    let responseHtml = response;
    if (localStorage.getItem("md_enable") === "y") {
        inputHtml = marked.parse(input);
        responseHtml = marked.parse(response);
    }

    const messageDiv = document.createElement('div');
    messageDiv.innerHTML = `
        <font>You:</font> <span class="user-msg">${inputHtml}</span>
        <button class="edit-button">编辑</button>
        <hr>
        <font>AI:</font> <span class="ai-msg">${responseHtml}</span>
        <hr>
    `;
    return messageDiv;
}

// 更新本地存储中的指定消息
function updateLocalStorage(newInput, newResponse, index) {
    console.log(index);
    const messages = JSON.parse(localStorage.getItem('messages'));
    messages.contents[index * 2].parts[0].text = newInput;
    messages.contents[index * 2 + 1].parts[0].text = newResponse;
    localStorage.setItem('messages', JSON.stringify(messages));
}