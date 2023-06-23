export async function generateStaticParams() {
  const res = await fetch(
    `https://hedonovaagri.com/wp-json/wp/v2/posts?per_page=500`,
    {
      next: { revalidate: 60 },
    }
  );
  const posts = await res.json();
  return posts.map((el) => ({ slug: el.slug }));
}

async function getPost(params) {
  const res = await fetch(
    `https://hedonovaagri.com/wp-json/wp/v2/posts?per_page=500`,
    {
      next: { revalidate: 60 },
    }
  );
  const posts = await res.json();
  const post = posts.filter((el) => el.slug === params.slug);

  return post[0];
}

export default async function Post({ params }) {
  const post = await getPost(params);
  const date = new Date(post.date.split("T")[0]);
  const formattedDate = date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return (
    <div
      style={{
        display: "flex",
        // alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
      }}
      className="blog"
    >
      <div className="blog-container">
        <h1 style={{ color: "white", fontSize: "2.2rem" }}>
          {post.title.rendered}
        </h1>
        <p style={{ color: "#b1b1b1", fontSize: "1rem" }}>
          Created at: {formattedDate}
        </p>
        <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />{" "}
      </div>
    </div>
  );
}
