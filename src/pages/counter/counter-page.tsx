import {Fragment} from "react";
import {CounterActions} from "./ui/counter-actions.tsx";
import {CounterSelector} from "./ui/counter-selector.tsx";
import {HeaderText} from "../../components/text";

export const CounterPage = () => {
    return (
        <Fragment>
            <HeaderText>Redux toolkit with slices</HeaderText>
            <div className={'grid-2-c inner-width'}>
                <CounterActions/>
                <CounterSelector/>
            </div>
        </Fragment>
    );
};
