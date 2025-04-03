import Post from "@/components/Post";
import Posteditor from "@/components/Posteditor";
import PostsAPI from "@/lib/api/Posts";
import Link from "next/link";


export default function Home({ posts }) {
  return (
    <>
      <h1>Home Site</h1>
      {posts ? posts.map(post => {
        return (
          <div key={post.id}>
            < Post post={post} />
          </div>
        )
      }
      ) : ""

      }
    </>
  );
}

export async function getStaticProps() {
  const posts = await PostsAPI.readAll();
  return {
    props: { posts }, revalidate: 1
  }
}
