import {useForm} from "react-hook-form";
import {Post} from "../model/post.model.ts";
import {InputCore} from "../../../components/forms/inputs/input-core.tsx";
import {ButtonWithIcon} from "../../../components/buttons";
import {AiOutlineCheck} from "react-icons/ai";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../../../store/store.ts";
import {addPost} from "../slice/posts-slice.ts";

export const CreatePost = () => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<Post>({mode: 'onTouched'})
    const onCreate = (data: Post) => {
        dispatch(addPost(data))
    }
    const dispatch = useDispatch<AppDispatch>();
    return (
        <form className={'flex-col-space g-1'}
              onSubmit={handleSubmit(onCreate)}
        >
            <h2 style={{color: "#00f07d"}}>Create post</h2>
            <InputCore register={register('title', {
                        required: {
                            value: true,
                            message: 'Title is required'
                        }
            })}
                       label={'Title'}
                       error={errors.title?.message}
                       placeholder={'Enter title'}
            />
            <InputCore register={register('description', {
                required: {
                    value: true,
                    message: 'Description is required'
                }
            })}
                       label={'Description'}
                       error={errors.description?.message}
                       placeholder={'Enter description'}
            />
            <ButtonWithIcon color={'black'}
                            bgColor={'#00f07d'}
                            icon={AiOutlineCheck}
                            width={'fit-content'}
                            type={'submit'}>
                Submit
            </ButtonWithIcon>
        </form>
    );
};
