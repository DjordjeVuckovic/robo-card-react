import {AiOutlineSearch} from "react-icons/ai";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../../store/store.ts";
import {onSearch} from "../slice/posts-slice.ts";

export const PostsSearch = () => {
    const dispatch = useDispatch<AppDispatch>();
    const searchQuery: string = useSelector((state : RootState) => state.posts.searchQuery);

    const onInputChange = (e) => {
        const searchQuery = e.target.value;
        dispatch(onSearch(searchQuery));
    };
    return (
        <div className={'posts-search flex-space'}>
            <input type="text"
                   placeholder="Search title..."
                   value={searchQuery}
                   onChange={(e) => onInputChange(e)}
            />
            <AiOutlineSearch color={'#00f07d'} size={'20'}/>
        </div>
    );
};
