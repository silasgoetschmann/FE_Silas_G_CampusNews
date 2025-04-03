import { getJSON, BASE_URL, deleteJSON, postJSON, putJSON } from "."

const URL = `${BASE_URL}/posts`

const PostsAPI = {
    readAll() {
        return getJSON(`${URL}?_sort=-createdAt`)
    },
    read(id){
        return getJSON(`${URL}/${id}`)
    },
    delete(id){
        return deleteJSON(`${URL}/${id}`)
    },
    post(post){
        return postJSON(`${URL}`, { body: post })
    },
    put(post){
        console.log(post.id);
        return putJSON(`${URL}/${post.id}`, { body: post })
    }
}

export default PostsAPI
