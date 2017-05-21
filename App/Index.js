/*import React from 'react'
import { render } from 'react-dom'
import DevTools from 'mobx-react-devtools';
// import { AppContainer } from 'react-hot-loader';
// import Routes from './Routes'

/*class HelloMessage extends React.Component {
  render() {
    return <div>
    Hello {this.props.name}
    <DevTools />
    </div>;
  }
}*/

/*import {observable} from 'mobx';
import {observer} from 'mobx-react';

var appState = observable({
    timer: 0
});



@observer
class TimerView extends React.Component {
    render() {
        return (<button onClick={this.onReset.bind(this)}>
                Seconds passed: {this.props.appState.timer}
            </button>);
    }

    onReset () {
        this.props.appState.resetTimer();
    }
};

appState.resetTimer = action(function reset() {
    appState.timer = 0;
});

setInterval(action(function tick() {
    appState.timer += 1;
}), 1000);

// ReactDOM.
// render(<TimerView appState={appState} />, document.body);


//-----------render-------------
render(
  // <HelloMessage name="John" />,
  <TimerView appState={appState} />,
  document.getElementById('root')
)*/

import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import AppState from './AppState';
import App from './App';

const appState = new AppState();

render(
  <AppContainer>
    <App appState={appState} />
  </AppContainer>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default;

    render(
      <AppContainer>
        <NextApp appState={appState} />
      </AppContainer>,
      document.getElementById('root')
    );
  });
}
