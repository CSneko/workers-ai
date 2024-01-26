import { Ai } from './vendor/@cloudflare/ai';


var src_default = {
  async fetch(request, env) {
  // 基本信息获取
  const url = new URL(request.url);
  const params = url.searchParams;
  var prompt = params.get('p'); // 提示词
  var text = params.get('t'); // 文本内容
  // 获取请求头部信息
  const headers = request.headers
  // 获取聊天记录的值
  const past_msgs = headers.get('msg')
  
  if (prompt !== null && prompt !== undefined) {
    prompt = prompt.replaceAll(`"`, "");
  }
  if (text !== null && text !== undefined) {
    text = text.replaceAll(`"`, "");
  }
  
  var reText = "喵";
  reText = await getRes(prompt, text, env, past_msgs);
  
  
  // 组建 JSON
  var requestJson = `{
    "response": "${reText}",
    "source_response": "${reText}",
    "input": "${text}",
    "prompt": "${prompt}"
  }`;
  
  return new Response(requestJson, {
    headers: { 'Content-Type': 'application/json' }
  });

  }
};

async function getRes(prompt, text, env, past_msgs) {
  try{
  const API_KEY = "Your API Key";
  var msg_json = {
    contents: [{
      role: "user",
      parts: [{ text: text }]
    }]
  };
  
  var post_body = {
    contents: [{
      role: "user",
      parts: [
        { text: `系统提示词:${prompt}` }
      ]
    },
    {
      role: "model",
      parts: [
        { text: "OK" }
      ]
    }]
  };
  
  if (past_msgs != null) {
    // 解析 JSON 字符串并将其添加到 post_body.contents 中
    post_body.contents = post_body.contents.concat(JSON.parse(past_msgs).contents);
  }
  
  // 将 msg_json 中的 contents 添加到 post_body.contents 中
  post_body.contents = post_body.contents.concat(msg_json.contents);
  
  // 发送请求
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(post_body)  // 需要将对象转换为 JSON 字符串
  };
  
  /*
  {
    "contents": [{
      role: "model",
        parts: [
          {  text: `消息1` }
        ]},
      {role: "user",
        parts: [
          {  text: `消息2` }
        ]},
      {role: "model",
        parts: [
          {  text: `消息3` }
        ]},
    }]
  } 
   */
  
  const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${API_KEY}`, requestOptions);
  
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  
  const data = await response.json();
  let reText = data.candidates[0].content.parts[0].text;
  // 替换掉不合法的字符
  reText = reText.replaceAll(`"`, "");
  reText = reText.replaceAll(/\n/g,"\\n");
  reText = reText.replaceAll("\\n\\n","\\n")
  return reText;
}catch{
  const ai = new Ai(env.AI);
  const messages = [
    { role: 'system', content: `${prompt}` },
    { role: 'user', content: `${text}` }
  ];
  const ai_rep = await ai.run('@cf/meta/llama-2-7b-chat-fp16',{
    messages
  });
  const tran_type_json =  JSON.parse(await Response.json(ai_rep).text()) //获取要翻译的文本JSON
  const tran_type = tran_type_json.response //获取翻译文本
  const tran_rep = await ai.run('@cf/meta/m2m100-1.2b',{
    text: `${tran_type}`,
    source_lang: "english", // defaults to english
    target_lang: "chinese"
  });
  const tran_rep_json = JSON.parse(await Response.json(tran_rep).text()) //获取翻译后的文本JSON
  const tran_rep_text = tran_rep_json.translated_text
  return tran_rep_text.replaceAll(`"`,"");
}
  
}
export {
  src_default as default
};
//# sourceMappingURL=index.js.map
