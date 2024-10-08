/* Import types */
import { type MetadataRoute } from "next"

/* Set up robots */
const robots = (): MetadataRoute.Robots => {
	return {
		rules: {
			userAgent: "*",
			disallow: "/"
		}
	}
}

export default robots
