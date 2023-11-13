import {HeaderTextWithIcon} from "../../components/text";
import {BsFileEarmarkPost} from "react-icons/bs";
import {AllPosts} from "./ui/all-posts.tsx";
import {PostsActions} from "./ui/posts-actions.tsx";

export const PostsPage = () => {
    return (
        <div className={'inner-width'}>
            <HeaderTextWithIcon
                icon={BsFileEarmarkPost}
                iconColor={'#00f07d'}
            >
                Avatar posts
            </HeaderTextWithIcon>
            <div className={'posts-container'}>
                <AllPosts/>
                <PostsActions/>
            </div>
        </div>
    );
};
