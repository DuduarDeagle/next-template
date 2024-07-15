/* Import types */
import { type MetadataRoute } from "next"

/* Set up a Robots component */
export default function robots(): MetadataRoute.Robots {
	return {
		rules: {
			userAgent: "*",
			disallow: "/"
		}
	}
}
