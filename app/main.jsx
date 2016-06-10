import React from 'react';
import ReactDOM from 'react-dom';
import ModelCard from './components/ModelCard/component.jsx';
import Search from './components/Search/component.jsx'
function run() {
    ReactDOM.render(
        <Search/>, document.getElementById('root'));
};
const loadedStates = ['complete', 'loaded', 'interactive'];
if (loadedStates.includes(document.readyState) && document.body) {
    run();
} else {
    window.addEventListener('DOMContentLoaded', run, false);
}
