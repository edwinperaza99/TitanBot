"use client";

import { Textarea } from "@/components/ui/textarea";
import { useChat } from "ai/react";

export default function Chat() {
	const { messages, input, handleInputChange, handleSubmit } = useChat();
	return (
		<div className="flex flex-col w-full md:max-w-3xl py-24 mx-auto relative">
			{messages.map((m) => (
				<div key={m.id} className="whitespace-pre-wrap">
					{m.role === "user" ? "User: " : "AI: "}
					{m.content}
				</div>
			))}

			<form onSubmit={handleSubmit} className="">
				<Textarea
					className="fixed bottom-0 w-full md:max-w-2xl p-2 mb-8 rounded-xl shadow-xl resize-none"
					value={input}
					placeholder="Message FullerBot..."
					onChange={handleInputChange}
				/>
			</form>
		</div>
	);
}
