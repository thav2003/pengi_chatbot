"use client";
import ChatContent from "@/components/ChatContent";
import ChatHeader from "@/components/ChatHeader";
import ScrollComponent from "@/components/ScrollComponent";

const ChatPage = () => {
  return (
    <ScrollComponent>
      <ChatHeader />
      <ChatContent />
    </ScrollComponent>
  );
};

export default ChatPage;
