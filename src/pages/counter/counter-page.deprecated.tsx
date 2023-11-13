import {CounterActionsDeprecated} from "./ui/deprecated/counter-actions.deprecated.tsx";
import {CounterSelectorDeprecated} from "./ui/deprecated/counter-selector.deprecated.tsx";
import {Fragment} from "react";
import {HeaderText} from "../../components/text";

export const CounterPageDeprecated = () => {
    return (
        <Fragment>
            <HeaderText>Redux deprecated</HeaderText>
            <div className={'grid-2-c inner-width'}>
                <CounterActionsDeprecated/>
                <CounterSelectorDeprecated/>
            </div>
        </Fragment>
    );
};
