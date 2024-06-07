import { FC } from "react";

const ChatHeader: FC = () => {
  return (
    <div className="sticky top-0 z-10 mb-1.5 flex h-14 items-center justify-between bg-[#212121] p-2 font-semibold">
      <div className="flex items-center gap-2">
        <div className="group flex cursor-pointer items-center gap-1 rounded-xl px-3 py-2 text-lg font-medium hover:bg-[#2f2f2f]">
          <div className="text-[#f9f9f9]">
            ChatPengi <span className="text-[#b4b4b4]">3.5</span>
          </div>
          <svg
            width="16"
            height="17"
            viewBox="0 0 16 17"
            fill="none"
            className="text-[#9b9b9b]"
          >
            <path
              d="M11.3346 7.83203L8.00131 11.1654L4.66797 7.83203"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ChatHeader;
