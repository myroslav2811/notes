import React from 'react';
import './App.css';
import TextFieldContainer from "./component/TextFieldContainer/TextFieldContainer";
import NoteContainer from "./component/NoteContainer/NoteContainer";

// let notes = [
//     {
//         id: 1,
//         color: 'lightblue',
//         text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ' +
//         'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in ' +
//         'reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in ' +
//         'culpa qui officia deserunt mollit anim id est laborum.'
//     },
//     {
//         id: 2,
//         color: 'lightblue',
//         text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ' +
//         'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in ' +
//         'reprehenderit in v'
//     },
//     {
//         id: 3,
//         color: 'lightblue',
//         text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ' +
//         'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in ' +
//         'reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in ' +
//         'culpa qui officia deserunt '
//     },
//     {
//         id: 4,
//         color: 'lightblue',
//         text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ' +
//         'Ut enim ad minim veniam, quis nostrud'
//     },
//     {
//         id: 5,
//         color: 'lightblue',
//         text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ' +
//         'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in ' +
//         'reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in ' +
//         'culpa qui officia deserunt mollit anim id est laborum.'
//     },
//     {
//         id: 6,
//         color: 'lightblue',
//         text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ' +
//         'Ut enim ad minim veniam, '
//     },
//     {
//         id: 7,
//         color: 'lightblue',
//         text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ' +
//         'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in ' +
//         'reprehenderit in voluptate velit esse '
//     },
//     {
//         id: 8,
//         color: 'lightblue',
//         text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ' +
//         'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in ' +
//         'reprehenderit in voluptate velit esse cillum '
//     },
//     {
//         id: 9,
//         color: 'lightblue',
//         text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ' +
//         'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in ' +
//         'reprehenderit in voluptate velit esse cillum '
//     },
//     {
//         id: 10,
//         color: 'lightblue',
//         text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ' +
//         'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in ' +
//         'reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in ' +
//         'culpa qui officia deserunt mollit anim id est laborum.'
//     }
//
// ];

class App extends React.Component {
    render() {
        return (<div className='container'>
            <TextFieldContainer/>
            <NoteContainer/>
        </div>)
    }
}

export default App;
