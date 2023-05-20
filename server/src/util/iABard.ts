
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
 
 const translator=async (text: string, language:"spanish"|"english") =>{

   const request = await iABard(`translate this text: "${text}" . to ${language}`)
   return request
 }

const iABardPrompt = async (prompt: string, about: string) => {
  const text = `
  I want you to get the keywords of this text 
  "${prompt}".
  
  then I want those words to be in the following text 
  "${about}".
  Also, I want the generated text, put it in quotes and that it only occupies a maximum of 6 paragraphs and the text in spanish`
  ;
  //  const sendText = await translator(text,"english")
  // console.log("translate ________________"+sendText+"____________");

  const response = await iABard(text)
 
   console.log("response ________________"+response+"____________");

  return response
};

export { iABardPrompt };
