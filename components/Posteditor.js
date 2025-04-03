import { BASE_URL } from "@/lib/api";
import PostsAPI from "@/lib/api/Posts";
import { useState } from "react"

import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"

export default function Posteditor({ post }) {
    const toast = (message, color) => Toastify({

        text: message,

        duration: 3000,

        position: 'center',

        style: {
            background: color,
        }

    }).showToast();

    const date = new Date()
    let method = "post";

    const [isLoading, setLoading] = useState(false);

    const [newPost, setPost] = useState({
        title: post?.title || "",
        text: post?.text || "",
        userId: post?.userId || 1,
        createdAt: post?.createdAt || date.toISOString(),
        updatedAt: date.toISOString(),
        ...(post?.id && { id: post.id })
    });

    (post) ? method = "put" : "post"

    const handleChange = (e) => {
        const field = e.target.name
        const value = e.target.value
        !e.target.value && toast(`${field} can't be empty`, "crimson")
        setPost({
            ...newPost,
            ...{ [field]: value }
        })
    }

    const submitPost = async () => {
        setLoading(true);
        if (!newPost.title || !newPost.text) {
            toast("Title and text can't be empty", "crimson");
            setLoading(false);
            return;
        }
        if (method === "post") {
            const response = await PostsAPI.post(newPost);
            if(response.id){
                toast("Post created!", "SpringGreen")
                setTimeout(() => window.location.href = `/posts/${response.id}`, 2000);
            }  else{
                alert("Sorry, couldn't create your post")
            } 
        } else {
            console.log(newPost);
            const response = await PostsAPI.put(newPost)
            if (response.id) {
                toast("Post edited!", "SpringGreen");
                setTimeout(() => window.location.href = `/posts/${response.id}`, 1000);

            } else {
                alert("Sorry, couldn't edit your post")
            } 
        }
        setLoading(false);
    }


    return (
        <form action={submitPost}>
            <label htmlFor="title">Title</label><br />
            <input name="title" type="text" value={newPost.title} onChange={handleChange}></input><br /><br />
            <label htmlFor="text">Text</label><br />
            <textarea
                type="text" name="text" rows="10" value={newPost.text} onChange={handleChange} /><br /><br />
            <input type="submit" value={isLoading ? "Loading..." : "Submit"} />
        </form>
    )
}