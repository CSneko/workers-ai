import { Ai } from './vendor/@cloudflare/ai.js';

export default {
  async fetch(request:any, env:any) {
    const ai = new Ai(env.AI);

    const url = new URL(request.url);
    const searchParams = new URLSearchParams(url.search);
    const text = searchParams.get('text');

    const inputText = await ai.run('@cf/meta/m2m100-1.2b', {
      text: text,
      source_lang: "chinese", // defaults to english
      target_lang: "english"
    })

    const inputs = {
      prompt: JSON.stringify(inputText)
    };
    
    const response = await ai.run(
      '@cf/stabilityai/stable-diffusion-xl-base-1.0',
      inputs
    );

    return new Response(response, {
      headers: {
        'content-type': 'image/png'
      }
    });
  }
};
