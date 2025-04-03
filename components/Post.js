import Link from "next/link";
import Styles from "./Post.module.css"

export default function Post(props) {
    const post = props.post;
    return (
        <>
            <article className={Styles.article}>
                <h1>{post.title}</h1>
                <p>{post.text}</p>
                <Link href={`/posts/${post.id}`} className={Styles.link}>Read More</Link>
            </article>

        </>
    )
}