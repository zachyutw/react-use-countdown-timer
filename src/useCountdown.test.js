// import ExampleComponent from './'
import React from 'react';
import useCountdown from './useCountdown';
import { render, fireEvent, getByTestId } from '@testing-library/react';
import { JestEnvironment } from '@jest/environment';

const App = () => {
    const [ timer1 ] = useCountdown({ period: 10000 });
    const [ timer2 ] = useCountdown({ period: 10000, gap: 500 });
    const [ timer3 ] = useCountdown({ period: 10000, gap: 100 });

    return (
        <div style={{ padding: '20px', width: '100%' }}>
            <h1>Test Use Coundown</h1>
            <p>speed normal 1sec: {timer1 / 1000}</p>
            <p>speed gap 500ms: {timer2 / 1000}</p>
            <p>speed gap 100ms: {timer3 / 1000}</p>
        </div>
    );
};

describe('withItemEvents', () => {
    test('Componet can show', () => {
        expect(App).toBeTruthy();
    });
    test('timer1', () => {
        jest.useFakeTimers();
        // setTimeout(() => {
        //     expect(component.state().fruits).toEqual(fruits);
        // }, 1500);
        // jest.runAllTimers();
    });
});
