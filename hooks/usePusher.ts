'use client'

import { useEffect, useRef } from 'react'
import { pusherClient, getChatChannel, MESSAGE_EVENT } from '@/lib/pusher'

interface UsePusherOptions {
  chatId: string
  onMessage?: (data: any) => void
  onUserJoined?: (data: any) => void
  onUserLeft?: (data: any) => void
}

export function usePusher({ chatId, onMessage, onUserJoined, onUserLeft }: UsePusherOptions) {
  const channelRef = useRef<any>(null)

  useEffect(() => {
    if (!chatId) return

    // Subscribe to chat channel
    const channel = pusherClient.subscribe(getChatChannel(chatId))
    channelRef.current = channel

    // Bind event listeners
    if (onMessage) {
      channel.bind(MESSAGE_EVENT, onMessage)
    }

    // TODO: Bind other events
    // if (onUserJoined) {
    //   channel.bind(USER_JOINED_EVENT, onUserJoined)
    // }
    // if (onUserLeft) {
    //   channel.bind(USER_LEFT_EVENT, onUserLeft)
    // }

    // Cleanup on unmount or chatId change
    return () => {
      if (channelRef.current) {
        pusherClient.unsubscribe(getChatChannel(chatId))
        channelRef.current = null
      }
    }
  }, [chatId, onMessage, onUserJoined, onUserLeft])

  // Function to send message (call API to trigger Pusher event)
  const sendMessage = async (content: string, senderId: string) => {
    try {
      // TODO: Call API endpoint that triggers Pusher event
      // await fetch('/api/messages/send', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ chatId, content, senderId })
      // })
      console.log('Sending message:', { chatId, content, senderId })
    } catch (error) {
      console.error('Error sending message:', error)
    }
  }

  return { sendMessage }
}

// Example usage in component:
/*
// In your chat component:
const { sendMessage } = usePusher({
  chatId: selectedChat,
  onMessage: (data) => {
    // Handle incoming message
    console.log('New message:', data)
    // Update messages state
  }
})

// Send a message:
sendMessage('Hello world!', userId)
*/