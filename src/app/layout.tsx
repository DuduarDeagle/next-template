/* Import dependencies */
import * as React from "react"
import Script from "next/script"

/* Import types */
import { type Metadata } from "next"

/* Define metadata */
export const metadata: Metadata = {
	title: "Duduar's site"
}

/* Import styles */
import "@styles/globals.css"

/* Define interfaces */
interface Props {
	children: React.ReactNode
}

/* Set up the root layout */
const RootLayout: React.FC<Props> = ({ children }) => (
	<html lang="es-419">
		<head>
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<meta charSet="UTF-8" />
			<meta name="googlebot" content="noindex" />
			<meta name="robots" content="noindex" />
		</head>
		<body>{children}</body>
		<Script id="touchstartEvent">
			{`document.addEventListener("touchstart", () => {})`}
		</Script>
	</html>
)

export default RootLayout
