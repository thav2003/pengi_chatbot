import { create } from "zustand";

export type MessageChat = {
  type: "system" | "user";
  content: string;
};

type MessageState = {
  messages: MessageChat[];
  addMessage: (message: MessageChat) => void;
  clearMessages: () => void;
};

const useMessageStore = create<MessageState>((set) => ({
  messages: [],
  addMessage: async (message) => {
    const response = await fetch("http://127.0.0.1:8000/chat/get_answer", {
      method: "POST",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        session_id: "1",
        conversation_id: "1",
        question: message.content,
      }),
    });

    if (response.ok) {
      const data = await response.json();
      const answer: MessageChat = { type: "system", content: data.answer };

      // Thêm câu trả lời vào messages
      set((state) => ({ messages: [...state.messages, message, answer] }));
    } else {
      const answer: MessageChat = {
        type: "system",
        content: "Failed to fetch answer",
      };
      set((state) => ({ messages: [...state.messages, message, answer] }));
    }
  },

  clearMessages: () => set({ messages: [] }),
}));

export default useMessageStore;
