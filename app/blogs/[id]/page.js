// "use client";

export async function generateStaticParams() {
  const res = await fetch(`https://hedonovaagri.com/wp-json/wp/v2/posts`, {
    next: { revalidate: 60 },
  });
  const posts = await res.json();
  return posts.map((el) => ({ id: el.id.toString() }));
}

async function getPost(params) {
  const res = await fetch(
    `https://hedonovaagri.com/wp-json/wp/v2/posts/${params.id}`,
    { next: { revalidate: 60 } }
  );
  const post = await res.json();

  return post;
}

export default async function Post({ params }) {
  const post = await getPost(params);

  return (
    <div
      style={{
        display: "flex",
        // alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
      }}
    >
      <div style={{ width: "50%" }}>
        <h1 style={{ color: "white", fontSize: "2rem" }}>
          {post.title.rendered}
        </h1>
        <p style={{ color: "#b1b1b1" }}>Created at: {post.date}</p>
        <div
          style={{ color: "white" }}
          dangerouslySetInnerHTML={{ __html: post.content.rendered }}
        />{" "}
      </div>
    </div>
  );
}