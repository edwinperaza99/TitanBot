import {
	SidebarInset,
	SidebarProvider,
	SidebarTrigger,
} from "@/components/ui/sidebar";
import { Inter } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { AppSidebar } from "@/components/app-sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "TitanBot",
	description: "Chatbot application designed for CSUF",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={inter.className}>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					<div className="min-h-screen">
						<SidebarProvider>
							<AppSidebar />
							<SidebarInset>
								<header className="sticky top-0 left-0 h-11 flex items-center z-50">
									<SidebarTrigger className="p-4 m-2 bg-muted hover:bg-muted-foreground" />
								</header>
								{children}
							</SidebarInset>
						</SidebarProvider>
					</div>
				</ThemeProvider>
			</body>
		</html>
	);
}
