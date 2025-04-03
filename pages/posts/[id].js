
import PostsAPI from "@/lib/api/Posts";
import Link from "next/link";
import Styles from "./post.module.css"

import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"

export default function DetailPost({ post }) {
    const toast = (message, color) => Toastify({

        text: message,

        duration: 3000,
        
        position: "center",

        style: {
            background: color
        }

    }).showToast();

    const sucess = () => {
        toast("Deletion successful", "SpringGreen");
        setTimeout(() => window.location.href = "/", 1000);
    }

    const deletePost = async (id) => {
        if(confirm("Do you really want to delete this post?")){
            const response = await PostsAPI.delete(id);
            response.id ? sucess() : toast("error, couldn't delete post!", "crimson")
        }
        
    }

    return !post ? null : (
        <div>
            <div>
                <h1>{post.title}</h1>
                <p className={Styles.text}>{post.text}</p>
                <p><i>Erstellt am {post.createdAt}</i></p>
            </div>

            <div>
                <Link href={`/`} className={Styles.link}>Back</Link>
                <Link href={`/posts/edit/${post.id}`} className={Styles.link}>Edit</Link>
                <button onClick={() => deletePost(post.id)} className={Styles.link}>Delete</button>
            </div>

        </div>
    )
}





export async function getStaticPaths() {
    const posts = await PostsAPI.readAll();
    const paths = posts.map(post => ({
        params: { id: post.id.toString() }
    }))
    return { paths, fallback: true }
}


export async function getStaticProps(context) {
    const post = await PostsAPI.read(context.params.id);
    return {
        props: { post }, revalidate: 1
    }
}