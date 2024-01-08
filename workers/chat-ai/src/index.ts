import { Ai } from './vendor/@cloudflare/ai.js';


export default {
  async fetch(request : any, env : any) {
    const ai = new Ai(env.AI);
    const url = new URL(request.url);
    const params =  url.searchParams;
    var prompt = params.get('p'); //提示词
    var text = params.get('t'); //文本内容
    if (prompt !== null && prompt !== undefined) {
      prompt = prompt.replaceAll(`"`, "");
    }
    if (text !== null && text !== undefined){    
      text =  text.replaceAll(`"`, "");  
    }
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
    //组建返回值
    var response_text = `{"response":"${tran_rep_text.replaceAll(`"`,"")}","source_response":"${tran_type.replaceAll(`"`,"")}","input":"${text}","prompt":"${prompt}" }`
    response_text = replaceText(response_text)
    return new Response(response_text, {
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
function replaceText(text:string){
  text = text.replaceAll("猫女孩","猫娘");
  text = text.replaceAll("猫女","猫娘");
  return text;
}