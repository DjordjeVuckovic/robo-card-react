import '../posts.scss'
import {PostsSearch} from "./posts-search.tsx";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../../store/store.ts";
import {
    deletePost,
    fetchPosts,
    onUpdatePost,
    selectFilteredPosts,
    setMode,
    setSelectedPost
} from "../slice/posts-slice.ts";
import {Fragment, useEffect} from "react";
import {Spinner} from "../../../core/spinner/spinner.tsx";
import {PostCard} from "./post-card.tsx";
import {Post} from "../model/post.model.ts";
import {ButtonWithIcon} from "../../../components/buttons";
import {HiOutlinePlus} from "react-icons/hi";
export const AllPosts = () => {
    const dispatch = useDispatch<AppDispatch>();
    const posts = useSelector(selectFilteredPosts);
    const status = useSelector((state: RootState) => state.posts.status);
    const error = useSelector((state: RootState) => state.posts.error);
    const mode = useSelector((state: RootState) => state.posts.mode);

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchPosts());
        }
    }, [dispatch, status]);

    const buildLoaderText = () => {
        switch (mode) {
            case 'create':
                return 'Creating...';
            case 'delete':
                return 'Deleting...';
            case 'update':
                return 'Updating...';
            default:
                return 'Loading...';
        }
    }
    const onPostClick = (post: Post) => {
        dispatch(setSelectedPost(post));
    }
    const onPostEdit = (e,post: Post) => {
        e.stopPropagation()
        dispatch(onUpdatePost(post));
    };
    const onPostDelete = (id) => dispatch(deletePost(id))

    return (
        <div className={'all-posts-container scroll-y'}>
            {status === 'loading' ? (
                <Spinner text={buildLoaderText()}/>
            ): status === 'failed' ? (
                <div style={{color: 'red'}}>Error: {error}</div>
            ): (
             <Fragment>
                 <div className={'flex-start g-5'}>
                     <PostsSearch/>
                     <ButtonWithIcon color={'#161B20'}
                                     bgColor={'#00f07d'}
                                     icon={HiOutlinePlus}
                                     width={'fit-content'}
                                     onClick={() => dispatch(setMode("create"))}
                     >
                         Add new
                     </ButtonWithIcon>
                 </div>
                 <div className={'posts-map'}>
                     {posts.map((post) => (
                         <PostCard key={post.id}
                                   title={post.title}
                                   description={post.description}
                                   img={post.img}
                                   onClick = {() => onPostClick(post)}
                                   onDelete={() => onPostDelete(post.id)}
                                   onUpdate={(e) => onPostEdit(e,post)}
                         />
                     ))}
                 </div>
             </Fragment>
            )}
        </div>
    );
};
