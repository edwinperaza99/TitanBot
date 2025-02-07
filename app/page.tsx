import Chat from "@/components/chat";

export default function Home() {
	return (
		<div className="container relative h-full w-full">
			<h1 className="text-center">Fullerbot</h1>
			<Chat />
		</div>
	);
}
