import Posteditor from "@/components/Posteditor";
import PostsAPI from "@/lib/api/Posts";

export default function editPost({ post }) {
    return (
        <>
            <h1>Posteditor</h1>
            <Posteditor post={post} />
        </>

    )

}

export async function getStaticPaths() {
    const posts = await PostsAPI.readAll();
    const paths = posts.map(post => ({
        params: { id: post.id }
    }))
    return { paths, fallback: true };
}

export async function getStaticProps(context) {
    const post = await PostsAPI.read(context.params.id);
    return {
        props: { post }, revalidate: 1
    }

}