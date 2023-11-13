import redux from "../../../assets/redux-logo.png";
import {useSelector} from "react-redux";
import {RootState} from "../../../store/store.ts";

export const CounterSelector= () => {
    const counter = useSelector((state: RootState ) => state.counter.count);
    return (
            <div className={'flex-col-center mg-2 g-07'}>
                <img src={redux} alt={'redux'} loading={'lazy'} width={'400px'} height={'300px'}/>
                <h1 className={'primary-text'}>Counter value is: <span className={'redux-text'}>{counter}</span></h1>
            </div>
    );
};
