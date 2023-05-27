import { API_KEY } from "../constants/Environment";

const iABard =async (prompt:string) => {
  const importDynamic = new Function("modulePath", "return import(modulePath)");
  const { Bard } = await importDynamic("googlebard");
  const bot = new Bard(
    API_KEY
  );

  
  try {
    let response = await bot.ask(prompt);
    return response
  } catch (error) {
    console.log(error);
  }

  return bot
}
 

const iABardPrompt = async (prompt: string, about: string) => {
  const text = `I want you to get the keywords of this text "${prompt}"`;
  const response = await iABard(text)
 
  return response
};

export { iABardPrompt };
