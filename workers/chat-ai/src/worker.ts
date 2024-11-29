// src/worker.ts

interface Env {
  MODEL_NAME: string;
  API_KEY: string;
  PROMPT: string;
}

const src_default = {
  async fetch(request: Request, env: Env): Promise<Response> {
    const oheaders = new Headers({
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,POST,PUT,PATCH,TRACE,DELETE,HEAD,OPTIONS",
      "Access-Control-Max-Age": "86400",
      "Access-Control-Allow-Headers": "*",
      "Content-Type": "application/json",
    });

    if (request.method === "OPTIONS") {
      return new Response("", { status: 200, headers: oheaders });
    }

    const url = new URL(request.url);
    if (url.searchParams.get("ver") === "v1") {
      // 处理 v1 逻辑
      const model = url.searchParams.get("model") ?? env.MODEL_NAME;
      const key = url.searchParams.get("key") ?? env.API_KEY;
      const userPrompt = url.searchParams.get("p") ?? env.PROMPT;
      const userText = url.searchParams.get("t") ?? "";
      const headers = request.headers;
      let pastMsgs: any = headers.get("msg");
      const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${key}`;
      let requestData = {
        contents: [
        {
          role: "user",
          parts: [{ text: userPrompt }],
        },
        {
          role: "model",
          parts: [{ text: "OK，我全部接受" }],
        }
        ]
      };
      if (pastMsgs) {
        // 确保 `pastMsgs` 的格式与 `requestData` 一致
        if (!pastMsgs.contents || !Array.isArray(pastMsgs.contents)) {
          throw new Error("Invalid format of pastMsgs JSON.");
        }
        // 合并 `pastMsgs` 的内容到 `requestData` 的 `contents` 后
        requestData.contents.push(...pastMsgs.contents);
      }
      // 将 `userText` 添加到 `requestData.contents` 中
      requestData.contents.push({
        role: "user",
        parts: [{ text: userText }],
      });
      let text:String
      try {
        const response = await fetch(apiUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(requestData),
        });
    
        if (!response.ok) {
          text = await response.text();
        }
    
        const data = await response.json();
        text = data.candidates[0].content.parts[0].text;
      } catch (error) {
        console.error("Fetch error:", error);
        throw error;
      }

      text = text
        .replace(/"/g, '\\"')
        .replace(/\n/g, "\\n")
        .replace("\\n\\n", "\\n")
      
      const responseJson = {
        response: text,
        source_response: text,
        input: userText,
        prompt: userPrompt,
        model: model,
        status: 200,
        headers,
      };

      return new Response(JSON.stringify(responseJson), { status: 200, headers: oheaders });

    } else {
      // 处理 v0 逻辑
      const modelName = url.searchParams.get("model") ?? env.MODEL_NAME;
      const apiKey = url.searchParams.get("key") ?? env.API_KEY;
      const userPrompt = url.searchParams.get("p") ?? env.PROMPT;
      const userText = url.searchParams.get("t") ?? "";
      const headers = request.headers;
      let pastMsgs = headers.get("msg");

      if (pastMsgs) {
        pastMsgs = decodeURIComponent(pastMsgs);
      }

      const reText = await run(modelName, apiKey, userPrompt, userText, pastMsgs ? JSON.parse(pastMsgs) : null);
      const sanitizedText = reText
        .replace(/"/g, '\\"')
        .replace(/\n/g, "\\n")
        .replace("\\n\\n", "\\n");

      const responseJson = {
        response: sanitizedText,
        source_response: sanitizedText,
        input: userText,
        prompt: userPrompt,
        model: modelName,
        status: 200,
        headers,
      };

      return new Response(JSON.stringify(responseJson), { status: 200, headers: oheaders });
    }
  },
};

async function run(
  model: string,
  key: string,
  userPrompt: string,
  userText: string,
  pastMsgs: any | null
): Promise<string> {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${key}`;
  let requestData = {
    contents: [
      {
        role: "user",
        parts: [{ text: userPrompt }],
      },
      {
        role: "model",
        parts: [{ text: "OK，我全部接受" }],
      },
      {
        role: "user",
        parts: [{ text: userText }],
      },
    ],
  };

  if (pastMsgs) {
    requestData = mergeAndReorderJSON(requestData, transformJson(pastMsgs));
  }

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(requestData),
    });

    if (!response.ok) {
      return await response.text();
    }

    const data = await response.json();
    return data.candidates[0].content.parts[0].text;
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
}

function transformJson(inputJson: any): any {
  const { contents } = inputJson;
  return {
    contents: contents.map((item: any) => ({
      role: item.role,
      parts: [{ text: item.parts[0].text }],
    })),
  };
}

function mergeAndReorderJSON(json1: any, json2: any): any {
  if (!json1.contents || !json2.contents) {
    throw new Error("Invalid JSON format for merging");
  }

  json1.contents.splice(2, 0, ...json2.contents);

  const seen = new Set();
  json1.contents = json1.contents.filter((item: any) => {
    const text = item.parts[0].text;
    if (seen.has(text)) {
      return false;
    }
    seen.add(text);
    return true;
  });

  return json1;
}

export default src_default;
//# sourceMappingURL=worker.js.map
