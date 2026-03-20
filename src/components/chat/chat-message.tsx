import React from "react";
import type {ChatMessage as ChatMessageType} from "@/app/api/chat-rooms/[id]/messages/route";
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import Image from 'next/image'
import {cn} from "@/lib/utils";

interface ChatMessageProps {
    message: ChatMessageType
}

export default function ChatMessage(
    {message}: ChatMessageProps
) {
    const isUser = message.role === 'USER';
    
    return <div className={cn(
        'flex gap-3 p-3 rounded-xl mx-2 my-1',
        isUser ? 'flex-row-reverse' : 'bg-muted/50'
    )}>
        {!isUser && (
            <div className="shrink-0 mt-1">
                <Image
                    src="/favicon.ico"
                    alt="Assistant"
                    width={28}
                    height={28}
                    className="rounded-full ring-2 ring-primary/10"
                />
            </div>
        )}
        <div className={cn(
            'flex-1 max-w-[85%]',
            isUser ? 'text-right' : ''
        )}>
            <div className={cn(
                'inline-block rounded-2xl px-4 py-2.5',
                isUser 
                    ? 'bg-primary text-primary-foreground rounded-br-md'
                    : 'bg-transparent'
            )}>
                <Markdown className={cn(
                    'text-sm leading-relaxed',
                    isUser ? '' : 'prose prose-sm max-w-none'
                )}
                          remarkPlugins={[remarkGfm, remarkMath]}
                          rehypePlugins={[rehypeKatex]}
                >
                    {message.content}
                </Markdown>
            </div>
        </div>
    </div>
}
