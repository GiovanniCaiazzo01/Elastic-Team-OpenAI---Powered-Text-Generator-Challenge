import { useContext } from "react";
import { ChatContext } from "../../providers/ChatProvider";

const useChat = () => {
  return useContext(ChatContext);
};

export { useChat };
