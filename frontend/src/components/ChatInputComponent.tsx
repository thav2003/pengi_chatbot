/* eslint-disable no-undef */
"use client";
import useMessageStore, { MessageChat } from "@/stores/useMessageStore";
import { useParams, useRouter } from "next/navigation";
import { ChangeEvent, FC, useState } from "react";

const ChatInputComponent: FC = () => {
  const [disabledButton, setDisabledButton] = useState(true);
  const [textareaValue, setTextareaValue] = useState("");
  const params = useParams();
  const id = params.id as string;
  const router = useRouter();
  const { messages, addMessage, clearMessages } = useMessageStore();
  const handleTextareaChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = event.target;
    setTextareaValue(value);
    setDisabledButton(value === "");
  };
  const handleKeyDown = (event: any) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault(); // Prevent newline in textarea
      handleChat();
    }
  };

  const handleChat = () => {
    if (!id) {
      // createNewChat(sessionId, textareaValue);
      const newMessage: MessageChat = { type: "user", content: textareaValue };
      addMessage(newMessage);
      router.push(`/pengi/chat/1`);
    }
    if (id) {
      // sendMessage(id, textareaValue);
      const newMessage: MessageChat = { type: "user", content: textareaValue };
      addMessage(newMessage);
    }
    setTextareaValue("");
  };

  return (
    <div className="w-full pt-2 dark:border-white/20 md:w-[calc(100%-.5rem)] md:border-transparent md:pt-0 md:dark:border-transparent">
      <form className="mx-2 flex flex-row gap-3 last:mb-2 md:mx-4 md:last:mb-6 lg:mx-auto lg:max-w-2xl xl:max-w-3xl">
        <div className="relative flex h-full flex-1 flex-col">
          <div className="absolute bottom-full left-0 right-0"></div>
          <div className="flex w-full items-center">
            <div className="relative flex w-full flex-grow flex-col overflow-hidden rounded-2xl border border-[hsla(0,0%,100%,.15)] bg-[#212121] dark:text-white [&:has(textarea:focus)]:border-[hsla(0,0%,100%,.25)] [&:has(textarea:focus)]:shadow-[0_2px_6px_rgba(0,0,0,.05)]">
              <textarea
                rows={1}
                placeholder="Message ChatAIO…"
                className="m-0 max-h-52 max-h-[25dvh] w-full resize-none border-0 bg-transparent py-[10px] pl-3 pr-10 placeholder-black/50 focus:ring-0 focus-visible:ring-0 dark:bg-transparent dark:placeholder-white/50 md:py-3.5 md:pl-4 md:pr-12"
                style={{ height: "52px", overflowY: "hidden" }}
                onChange={handleTextareaChange}
                onKeyDown={handleKeyDown}
                value={textareaValue}
              ></textarea>
              <button
                type="button"
                onClick={handleChat}
                disabled={disabledButton}
                className="disabled:text-gray-400 absolute bottom-1.5 right-2 rounded-lg border border-black bg-black p-0.5 text-white transition-colors enabled:bg-black disabled:opacity-10 dark:border-white dark:bg-white dark:hover:bg-white md:bottom-3 md:right-3"
              >
                <span className="" data-state="closed">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="text-white dark:text-black"
                  >
                    <path
                      d="M7 11L12 6L17 11M12 18V7"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </form>
      <div className="relative px-2 py-2 text-center text-xs text-[#b4b4b4] md:px-[60px]">
        <span>
          ChatAIO can make mistakes. Consider checking important information.
        </span>
      </div>
    </div>
  );
};

export default ChatInputComponent;
