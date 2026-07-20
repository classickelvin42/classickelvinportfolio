import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/"
    },
    sitemap: "https://yourname.dev/sitemap.xml" // TODO: replace with your production domain
  };
}
