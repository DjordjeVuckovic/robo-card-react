import {MdOutlineErrorOutline} from "react-icons/md";

export const FieldError = ({error}) => {
	return (
		<div className={'flex-start g-3'} style={
			{padding: '1rem 1rem 1rem 0'}
		}>
			<MdOutlineErrorOutline color={'#ff4040'} size={20}/>
			<p style={{color: '#ff4040'}}>{error}</p>
		</div>
	)
}