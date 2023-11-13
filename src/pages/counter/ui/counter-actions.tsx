import {ButtonWithIcon} from "../../../components/buttons";
import {IoAddSharp} from "react-icons/io5";
import {FiMinus} from "react-icons/fi";
import {GrPowerReset} from "react-icons/gr";
import {PiLadderBold} from "react-icons/pi";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {addToCounter, decrement, increment, reset} from "../slice/counter-slice.ts";

export const CounterActions = () => {
    const [inputValue, setInputValue] = useState<number>(0)
    const dispatch = useDispatch();
    const handleAddToCounter = () => {
        dispatch(addToCounter(inputValue));
    };
    return (
        <div className={'col-1'}>
            <div className={'flex-start g-07 mg-2'}>
                <ButtonWithIcon color="#161B20"
                                bgColor={'#00f07d'}
                                width={'100%'}
                                icon={IoAddSharp}
                                onClick={() => dispatch(increment())}>
                    Increment
                </ButtonWithIcon>
                <ButtonWithIcon color="#ffffff"
                                bgColor={'#ff922d'}
                                width={'100%'}
                                icon={FiMinus}
                                onClick={() => dispatch(decrement())}>
                    Decrement
                </ButtonWithIcon>
                <ButtonWithIcon color="#ffffff"
                                bgColor={'#4066ff'}
                                width={'100%'}
                                icon={GrPowerReset}
                                onClick={() => dispatch(reset())}>
                    Reset
                </ButtonWithIcon>
            </div>
            <div className={'flex-start mg-2 g-07'}>
                <input type={'number'}
                       className={'input-base'}
                       onChange={(e) => setInputValue(Number(e.target.value))}
                />
                <ButtonWithIcon color="#161B20"
                                bgColor={'#00f07d'}
                                width={'fit-content'}
                                icon={PiLadderBold}
                                onClick={() => handleAddToCounter()}>
                    Add to counter
                </ButtonWithIcon>
            </div>
        </div>
    );
};
