// Pusher WebSocket configuration
// TODO: Set up Pusher account and get credentials from environment variables

import Pusher from 'pusher'
import PusherClient from 'pusher-js'

// Server-side Pusher instance (for triggering events)
export const pusher = new Pusher({
  appId: process.env.PUSHER_APP_ID!,
  key: process.env.PUSHER_KEY!,
  secret: process.env.PUSHER_SECRET!,
  cluster: process.env.PUSHER_CLUSTER!,
  useTLS: true,
})

// Client-side Pusher instance
export const pusherClient = new PusherClient(process.env.NEXT_PUBLIC_PUSHER_KEY!, {
  cluster: process.env.NEXT_PUBLIC_PUSHER_CLUSTER!,
})

// Channels for different chat rooms
export const getChatChannel = (chatId: string) => `chat-${chatId}`

// Events
export const MESSAGE_EVENT = 'new-message'
export const USER_JOINED_EVENT = 'user-joined'
export const USER_LEFT_EVENT = 'user-left'