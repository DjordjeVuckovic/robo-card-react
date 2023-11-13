import {Post} from "../model/post.model.ts";
import {useForm} from "react-hook-form";
import {updatePost} from "../slice/posts-slice.ts";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../../../store/store.ts";
import {InputCore} from "../../../components/forms/inputs/input-core.tsx";
import {AiOutlineCheck} from "react-icons/ai";
import {ButtonWithIcon} from "../../../components/buttons";
import {useEffect} from "react";

export const EditPost = (props: { post: Post }) => {
    const {post} = props;
    const {
        register,
        handleSubmit,
        setValue,
        getValues,
        formState: { errors }
    } = useForm<Post>({mode: 'onTouched'})
    const dispatch = useDispatch<AppDispatch>();
    useEffect(() => {
        setValue("title", post.title);
        setValue("description", post.description);
    }, [post, setValue]);
    const onEdit = (data: Post) => {
        const title = getValues('title') === post.title ? null : data.title
        const description = getValues('description') === post.description ? null : data.description
        if(!title && !description){
            alert('Nothing changes!')
            return
        }
        const updatedData: Post = {...post,title: data.title, description: data.description}
        dispatch(updatePost(updatedData))
    }
    return (
        <form className={"flex-col-center g-1"} onSubmit={handleSubmit(onEdit)}>
            <h2 style={{color: "#00f07d"}}>Edit post</h2>
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
            <img src={post.img}
                 width={'150px'}
                 height={'150px'}
                 alt={"avatar"}
                 className={"flex-center"}
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
}