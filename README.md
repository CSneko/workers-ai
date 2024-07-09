# workers AI
使用cloudflare workers代理gemini API.
## 预览
访问 https://ai.cneko.org 以预览
## 部署
1. 创建一个cloudflare workers账户
2. 创建一个新workers
3. 按照引导将workers部署到本地
4. 使用(https://github.com/CSneko/workers-ai/blob/main/workers/chat-ai/src/worker.ts)[worker文件]替换掉你的`项目路径/src/workers.js` 文件
5. 按照以下编辑`wrangler.toml`文件
```toml
name = "chat-ai"
main = "src/worker.ts"
workers_dev = true

[[routes]]
pattern = "YOUR_DOMAIN_PATTERN"
zone_name = "YOUR_DOMAIN"
custom_domain = true
[placement]
mode = "smart"

[vars]
API_KEY = "YOUR_API_KEY"
MODEL_NAME = "gemini-1.0-pro"
PROMPT = "You are a cute catgrild."
```

**注意:如果你没有gemini API KEY,请从`https://aistudio.google.com`获取**

**如果你没有域名,请删除routes部分**

## 调用
### 简单调用
最简单的调用方法为发送一个get请求,包含一个`t`查询参数,并读取返回值中的`response`字段.

### 查询参数
| 参数名 | 描述 | 是否可选 | 默认值 |
| --- | --- | --- | --- |
| t | 用户输入 | 否 | 无 |
| p | 提示词 | 是 | 配置文件中的PROMPT |
| model | 模型名称 | 是 | 配置文件中的MODEL_NAME |
| key | gemini API KEY | 是 | 配置文件中的API_KEY |
### 请求头
#### msg
这是一个可选的请求头,用于包含历史聊天记录.

内容格式如下:
```json
{
    "contents":[
        {
            "role":"user",
            "parts":[
                {"text":"你好"}
            ]
        },{
            "role":"model",
            "parts":[
                {"text":"喵～你好呀～"}
            ]
        },
        {
            "role":"user",
            "parts":[
                {"text":"过的怎样呢"}
            ]
        },{
            "role":"model",
            "parts":[
                {"text":"非常棒"}
            ]
        }
        
    ]
    
}
```

### 返回
返回值是一个json对象,包含以下字段:
| 字段名 | 描述 | 类型 |
| --- | --- | --- |
| response | 模型输出 | string |
| source_response | gemini API返回的原始模型输出 | string |
| input | 用户输入 | string |
| prompt | 提示词 | string |
| model | 模型名称 | string |
| status | 状态码 | number |
| headers | 请求头 | object |