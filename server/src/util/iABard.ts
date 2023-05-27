
const iABard =async (prompt:string) => {
  const importDynamic = new Function("modulePath", "return import(modulePath)");
  const { Bard } = await importDynamic("googlebard");
  const bot = new Bard(
    "__Secure-1PSID=WgiBsYGW7u8CL_X8Z3sbyXdL42kwz0M0jA35kZu5FJL-O8eOt9uK688Caft4R6OcT9FxtA."
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
