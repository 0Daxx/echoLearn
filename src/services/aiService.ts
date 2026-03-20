import OpenAI from 'openai';

// Initialize the OpenAI client for Cerebras
const openai = new OpenAI({
  apiKey: import.meta.env.VITE_CEREBRAS_API_KEY,
  dangerouslyAllowBrowser: true, // NOTE: For production, API calls should go through your own backend server
  baseURL: "https://api.cerebras.ai/v1",
});

// The Socratic System Prompt
const SOCRATIC_SYSTEM_PROMPT = `
You are an AI tutor for a programming course. Your goal is to help students learn by guiding them to the answer, not giving it to them directly.
You must follow the Socratic method. When a student asks for help on a task, respond with a leading question or a hint that points them in the right direction.
Your response should be concise and encouraging.
Do not provide the full solution. Instead, break down the problem into smaller, manageable steps and ask the student what they think the next step might be.
`;

/**
 * Generates a Socratic hint for a given task.
 * @param taskDescription The description of the task the student is working on.
 * @param chapterContext The title and notes of the current chapter for context.
 * @returns A promise that resolves to the AI-generated hint string.
 */
export const generateSocraticHint = async (
  taskDescription: string,
  chapterContext: { title: string; notes: string }
): Promise<string> => {
  try {
    const completion = await openai.chat.completions.create({
      model: "llama3.1-8b", // Using the Llama 3.1 8B model
      messages: [
        { role: "system", content: SOCRATIC_SYSTEM_PROMPT },
        {
          role: "user",
          content: `
I'm working on a task in the chapter "${chapterContext.title}".
The chapter is about: "${chapterContext.notes}".
My task is: "${taskDescription}".
Can you give me a hint on how to start?
          `,
        },
      ],
      max_tokens: 150,
      temperature: 0.7,
    });

    const hint = completion.choices[0]?.message?.content?.trim();
    return hint || "Sorry, I couldn't generate a hint right now. Please try rephrasing the question.";
  } catch (error) {
    console.error("Error calling Cerebras API:", error);
    return "An error occurred while fetching a hint. Please check your connection and API key.";
  }
};