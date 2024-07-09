var src_default = {
    async fetch(request:Request, env) {
      var oheaders: Headers = new Headers ({
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,POST,PUT,PATCH,TRACE,DELETE,HEAD,OPTIONS",
        "Access-Control-Max-Age": "86400",
        "Access-Control-Allow-Headers": "*",
        'Content-Type':'application/json'
      })
      if (request.method === "OPTIONS") {
        let res: Response = new Response("", {
          status: 200,
          headers: oheaders
        })
        return res
      }
        // -------------------------------用户请求---------------------------------------
        const url: URL = new URL(request.url);
        var model_name: string = url.searchParams.get("model") != null ? url.searchParams.get("model") : env.MODEL_NAME;
        const key: string = url.searchParams.get("key") != null ? url.searchParams.get("key") : env.API_KEY;
        const user_prompt: string = url.searchParams.get("p");
        if(user_prompt == null){
          user_prompt == env.PROMPT;
        }
        const user_text = url.searchParams.get("t");
        const headers:Headers = request.headers;
        // 获取聊天记录的值
        var past_msgs = headers.get('msg');
        // 对消息进行解码
        if(past_msgs != null){
            past_msgs = decodeURIComponent(past_msgs);
        }


        var reText = await run(model_name,key,user_prompt,user_text ?? "",JSON.parse(past_msgs));
        // 替换掉不合法的字符
        reText = reText.replace(`"`, `\\"`);
        reText = reText.replace(/\n/g,"\\n");
        reText = reText.replace("\\n\\n","\\n")
        // 构建返回的json
        var requestJson = {
            "response": reText,
            "source_response": reText,
            "input": user_text,
            "prompt": user_prompt,
            "model": model_name,
            "status": 200,
            "headers": headers
        };
        
        return new Response(JSON.stringify(requestJson), {
          status: 200,
          headers: oheaders
        });
          
    }
};

async function run(model, key, user_prompt, user_text, past_msgs) {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${key}`;

  // 解析历史记录
  if(past_msgs != null){
    past_msgs = transformJson(past_msgs);
  }

  var requestData = {
    contents: [
      {
        role: "user",
        parts: [
          { text: user_prompt}
        ]
      },{
          role: "model",
          parts: [
            {text: "OK,我全部接受" }
          ]
      },{
        role: "user",
        parts: [
        { text: user_text}
        ]
    }]
  };
  
  if(past_msgs != null){
    // 合并
    requestData = mergeAndReorderJSON(requestData, past_msgs)
  }

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestData)
    });

    if (!response.ok) {
      return await response.text();
    }

    const data = await response.json();
    return data.candidates[0].content.parts[0].text;
  } catch (error) {
    console.error('Fetch error:', error);
    throw error;
  }
}

function transformJson(inputJson) {
  // 解构赋值获取 contents 数组
  const { contents } = inputJson;

  // 定义用于存储转换后的结果的数组
  const transformedContents = [];

  // 遍历 contents 数组
  contents.forEach(item => {
    const { role, parts } = item;

    // parts 数组中的每个对象只有一个 text 属性
    const text = parts[0].text;

    // 根据 role 构造新的对象格式
    transformedContents.push({
      role: role,
      parts: [
        { text: text }
      ]
    });
  });

  // 返回转换后的结果
  return { contents: transformedContents };
}

function mergeAndReorderJSON(json1, json2) {
  // 将第二个json插入第一个json的contents[1]后
  json1.contents.splice(2, 0, json2.contents[0]);

  // 将第一个json的contents[2]排到最后
  let movedItem = json1.contents.splice(3, 1)[0];
  json1.contents.push(movedItem);

  return json1;
}


  export {
    src_default as default
  };