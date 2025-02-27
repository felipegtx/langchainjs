import { OpenAI } from "langchain/llms";

export const run = async () => {
  const model = new OpenAI();
  // `call` is a simple string-in, string-out method for interacting with the model.
  const resA = await model.call(
    "What would be a good company name a company that makes colorful socks?"
  );
  console.log({ resA });
  // { resA: '\n\nSocktastic Colors' }
};
