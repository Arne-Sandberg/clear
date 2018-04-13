import React from 'react';
import ReactDOM from 'react-dom';

const title = 'My Minimal React Webpack Babel Setup with hot loader xxx';

class App extends React.Component {
	render() {
		return (
		<div>
			<a href='/uploadumsaetze'>Umsätze hochladen</a>
		</div>);
	}
}


ReactDOM.render(
  <App />,
  document.getElementById('app')
);


module.hot.accept();
