import '../posts.scss'
import {ButtonWithIcon} from "../../../components/buttons";
import {MdTipsAndUpdates} from "react-icons/md";
import {AiOutlineDelete} from "react-icons/ai";


export const PostCard = ({ title, description, img, onClick, onDelete, onUpdate }) => {
    return (
        <div className={'post-card'} onClick={onClick}>
            <img src={img}
                 width={'60px'}
                 height={'60px'}
                 alt={'post'}/>
            <div className={'post-card__content'}>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
            <div className={'post-card__actions'}>
                <ButtonWithIcon color={'#4066ff'}
                                bgColor={'#f5f8f2'}
                                icon={MdTipsAndUpdates}
                                width={'fit-content'}
                                onClick={onUpdate}>
                    Update
                </ButtonWithIcon>
                <ButtonWithIcon color={'#161B20'}
                                bgColor={'#ff4040'}
                                icon={AiOutlineDelete}
                                width={'fit-content'}
                                onClick={onDelete}>
                    Delete
                </ButtonWithIcon>
            </div>
        </div>
    );
};
