import { useCallback, useEffect, useReducer } from 'react';
const initState = {
    actived: true,
    timer: 10000,
    period: 10000
};
const reducer = (state, action) => {
    switch (action.type) {
        case 'start':
            return { ...state, actived: true };
        case 'running':
            return { ...state, timer: action.timer };
        case 'end':
            return { ...state, actived: false, timer: 0 };
        case 'setValue':
            return { ...state, ...action };
        default:
            return {};
    }
};
const useCountdown = ({ period: propPeriod, speed = 1 }) => {
    const [ state, dispatch ] = useReducer(reducer, { ...initState, timer: propPeriod, period: propPeriod });
    const { actived, timer, period } = state;
    const setCountdownTimer = useCallback(
        (period) => {
            dispatch({ type: 'setValue', actived: true, period });
        },
        [ dispatch ]
    );

    useEffect(
        () => {
            let intervalId;
            let gap = 1000 / speed;
            if (actived) {
                dispatch({ type: 'start' });
                let countDownInterval = period;
                intervalId = setInterval(function (){
                    countDownInterval = countDownInterval - gap;
                    dispatch({ type: 'running', timer: countDownInterval });
                    if (countDownInterval <= 0) {
                        dispatch({ type: 'end' });
                        clearInterval(intervalId);
                    }
                }, gap);
            }
            return () => clearInterval(intervalId);
        },
        [ period, actived, dispatch, speed ]
    );
    return [ timer, setCountdownTimer ];
};
export default useCountdown;
