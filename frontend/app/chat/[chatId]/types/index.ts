import { UUID } from "crypto";

export type ChatQuestion = {
  model?: string;
  question?: string;
  temperature?: number;
  max_tokens?: number;
  brain_id?: string;
  prompt_id?: string;
};
export type ChatHistory = {
  chat_id: string;
  message_id: string;
  user_message: string;
  assistant: string;
  message_time: string;
  prompt_title?: string;
  brain_name?: string;
};

type HistoryItemType = "MESSAGE" | "NOTIFICATION";

type Notification = {
  id: string;
  datetime: string;
  chat_id?: string | null;
  message?: string | null;
  action: string;
  status: string;
};

export type ChatItem = {
  item_type: HistoryItemType;
  body: ChatHistory | Notification;
};

export type ChatEntity = {
  chat_id: UUID;
  user_id: string;
  creation_time: string;
  chat_name: string;
};
