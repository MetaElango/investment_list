// app/sitemap.js

// import { getSortedPostsData } from "../lib/posts";

const URL = "https://bestinvestmentlist.com";

export default async function sitemap() {
  //   const posts = getSortedPostsData.map(({ id, date }) => ({
  //     url: `${URL}/blog/${id}`,
  //     lastModified: date,
  //   }));

  const routes = ["", "/portfolio", "/blog"].map((route) => ({
    url: `${URL}${route}`,
    lastModified: new Date().toISOString(),
  }));

  return [...routes];
}
