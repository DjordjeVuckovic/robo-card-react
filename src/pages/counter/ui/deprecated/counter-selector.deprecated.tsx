import redux from "../../../../assets/redux-logo.png";
import {useSelector} from "react-redux";
import {RootStateDeprecated} from "../../../../store/store.deprecated.ts";

export const CounterSelectorDeprecated = () => {
    const counter = useSelector((state: RootStateDeprecated) => state.counter.count);
    return (
            <div className={'flex-col-center mg-2 g-07'}>
                <img src={redux} alt={'redux'} loading={'lazy'} width={'400px'} height={'300px'}/>
                <h1 className={'primary-text'}>Counter value is: <span className={'redux-text'}>{counter}</span></h1>
            </div>
    );
};
