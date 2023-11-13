import {useSelector} from "react-redux";
import {RootState} from "../../../store/store.ts";
import {Post} from "../model/post.model.ts";
import {Spinner} from "../../../core/spinner/spinner.tsx";
import {Fragment} from "react";
import {EditPost} from "./edit-post.tsx";
import {CreatePost} from "./create-post.tsx";

const SinglePostView = (props: { post: Post }) => {
    return (
        <div className={"flex-col-center"}>
            <h2 style={{color: "#00f07d"}}>{props.post.title}</h2>
            <img src={props.post.img} alt={"avatar"} className={"flex-center"}/>
            <p className={"mg-t-2"}>{props.post.description}</p>
        </div>
    );
}

export const PostView = () => {
    const post: Post = useSelector((state : RootState) => state.posts.selectedPost);
    const status = useSelector((state: RootState) => state.posts.status);
    const error = useSelector((state: RootState) => state.posts.error);
    const mode = useSelector((state: RootState) => state.posts.mode);
    if(status === 'loading' || !post){
        return  <Spinner text={'Loading...'} />;
    }
    if(status === 'failed'){
        return <div style={{color: '#ff4040'}}>Error: {error}</div>
    }
    return (
        <Fragment>
        { mode === 'view' && <SinglePostView post={post}/> }
        { mode === 'update' && <EditPost post={post}/> }
        { mode === 'create' && <CreatePost/> }
        { mode === 'delete' && <Spinner text={'Deleting...'} color={'#ff4040'}/>}
        </Fragment>
    );
};
