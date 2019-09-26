# react-use-countdown-timer.

> Make any DOM events handler more powerful and Specification with simple way

[![NPM](https://img.shields.io/npm/v/react-use-countdown-timer.svg)](https://www.npmjs.com/package/react-use-countdown-timer) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-use-countdown-timer
```
```bash
yarn add react-use-countdown-timer
```
## Table of Contents

- [Install](#install)
- [Quick Start](#quick-start)
- [Usage](#usage)
- [FAQ](#faq)
- [Thanks](#thanks)
- [Contributing](#contributing)
- [License](#license)

## Quick Start
```jsx
import React from 'react';
import useCountdown from './useCountdown';

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
export default App;
```
## ScreenShot

## Usage

NOTE: React hooks require `react` and `react-dom` version `16.8.0` or higher.

## Related projects

## Plan
* TypeScript

## Change Log 
### 1.0.1
- add unit test
- add two commnad events onBlur and onFocus as default

## Thanks
This repo was setup with the help of the excellent [`create-react-library`](https://www.npmjs.com/package/create-react-library) and [`redux-react-hook`](https://github.com/facebookincubator/redux-react-hook/blob/master/README.md).

## Contributing
Zach Yu zachyu.tw@gmail.com

## License

MIT © [zachyutw](https://github.com/zachyutw)
