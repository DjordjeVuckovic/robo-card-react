import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {addPostApi, deletePostApi, getPosts, updatePostApi} from "../service/posts.service.ts";
import {Post, PostMode} from "../model/post.model.ts";
import {RequestStatus} from "../../../store/action-type.ts";
import {findAvatarImage} from "../utils/image-handler.ts";
import {RootState} from "../../../store/store.ts";

const POSTS_NAME = 'posts'

const initialState = {
    posts: [] as Post[],
    status: 'idle' as RequestStatus,
    error: null as string | null,
    selectedPost: null as Post,
    mode: 'view' as PostMode,
    searchQuery: '' as string,
};
export const fetchPosts = createAsyncThunk('posts/fetchPosts', getPosts);
export const deletePost = createAsyncThunk('posts/deletePost', deletePostApi);
export const addPost = createAsyncThunk('posts/addPost', addPostApi);
export const updatePost = createAsyncThunk('posts/updatePost', updatePostApi);
export const postSlice = createSlice({
    name: POSTS_NAME,
    initialState,
    reducers: {
        setSelectedPost: (state, action : {payload: Post,type: string}) => {
            state.selectedPost = action.payload
            state.mode = 'view'
        },
        onUpdatePost: (state, action : {payload: Post,type: string}) => {
            state.selectedPost = action.payload
            state.mode = 'update'
        },
        setMode: (state, action : {payload: PostMode,type: string}) => {
            state.mode = action.payload
        },
        onSearch: (state, action: {payload: string,type: string}) => {
            state.searchQuery = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchPosts.pending, state => {
                state.status = 'loading'
            })
            .addCase(fetchPosts.fulfilled, (state,action) => {
                state.mode = 'view'
                state.status = 'succeeded'
                const posts: Post[] = (action.payload as Post[]).map(x => {
                    return {
                        id: x.id,
                        img: findAvatarImage(),
                        description: x.description,
                        title: x.title
                    }
                })
                state.posts = posts
                state.selectedPost = posts[0]
            })
            .addCase(fetchPosts.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            // delete post
            .addCase(deletePost.pending, (state) => {
                state.mode = 'delete'
                state.status = 'loading';
            })
            .addCase(deletePost.fulfilled, (state, action) => {
                state.status = 'succeeded';
                const newPosts = state.posts.filter((post) => post.id !== action.payload);
                state.posts = newPosts
                state.selectedPost = newPosts[0]
            })
            .addCase(deletePost.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            // add post
            .addCase(addPost.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(addPost.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.posts = [...state.posts, action.payload]
                state.selectedPost = action.payload
                state.mode = 'view'
            })
            .addCase(addPost.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            // update post
            .addCase(updatePost.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(updatePost.fulfilled, (state, action) => {
                state.status = 'succeeded';
                const updatedPostIndex = state.posts.findIndex(post => post.id === action.payload.id);
                if (updatedPostIndex !== -1) {
                    state.posts[updatedPostIndex] = action.payload;
                }
                state.selectedPost = action.payload
                state.mode = 'view'
            })
            .addCase(updatePost.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    }
})
export const selectFilteredPosts = (state: RootState) => {
    const { searchQuery, posts } = state.posts;
    return searchQuery
        ? posts.filter(post => post.title.toLowerCase().includes(searchQuery.toLowerCase()))
        : posts;
}
export const {
    setSelectedPost,
    setMode,
    onUpdatePost,
    onSearch
} = postSlice.actions
export default postSlice.reducer;