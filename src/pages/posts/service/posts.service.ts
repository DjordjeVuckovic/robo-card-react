import axios from 'axios';
import {Post} from "../model/post.model.ts";
import {findAvatarImage} from "../utils/image-handler.ts";

const baseURL = import.meta.env.VITE_POSTS_BASE_URL
console.log(baseURL)

export const getPosts = async (): Promise<Post[]> => {
    const response = await axios.get(`${baseURL}/posts.json`);
    const data = response.data;
    const posts: Post[] = [];
    for (const key in data) {
        posts.push({ ...data[key], id: key });
    }
    return posts;
};

export const addPostApi = async (post: Post): Promise<Post> => {
    const response: any =  await axios.post(`${baseURL}/posts.json`, post);
    return {
        title: post.title,
        id: response.data?.name,
        img: findAvatarImage(),
        description: post.description
    };
};

export const updatePostApi = async (post: Post): Promise<Post> => {
    console.log(post)
    const postData = {
        [post.id!]: { title: post.title, description: post.description },
    };
    console.log(postData)
    await axios.patch(`${baseURL}/posts.json`, postData);
    return post
};

export const deletePostApi = async (id: string): Promise<string> => {
    await axios.delete(`${baseURL}/posts/${id}.json`);
    return id;
};

export const getPostById = async (id: string): Promise<Post> => {
    return await axios.get(`${baseURL}/posts/${id}.json`);
};