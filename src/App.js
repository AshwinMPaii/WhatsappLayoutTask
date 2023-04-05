// import React, { useState } from 'react';
// import UserInput from './components/UserInput';
// import UserDisplay from "./components/UserDisplay";


// const App = () => {
//   const [formDataList, setFormDataList] = useState([]);

//   const handleFormSubmit = (formData) => {
//     setFormDataList([formData, ...formDataList]);
//   };

//   return (
//     <div style={{ display: 'flex', width: '100vw', height: '100vh' }}>
//       <div style={{ width: '30%', padding: '10px' }}>
//         <UserDisplay formDataList={formDataList} />
//       </div>
//       <div style={{ width: '70%', padding: '10px' }}>
//         <UserInput onFormSubmit={handleFormSubmit} />
//       </div>
//     </div>
//   );
// };

//export default App;

import React, { Component } from 'react';
import InputClass from './components/InputClass';
import FormDetails from './components/FormDetails';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formSubmissions: [],
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormSubmit(newSubmission) {
    this.setState((prevState) => ({
      formSubmissions: [newSubmission, ...prevState.formSubmissions],
    }));
  }

  render() {
    return (
      <div style={{ display: 'flex', width: '100vw', height: '100vh' }}>
        <div style={{ width: '30%' }}>
          <FormDetails formSubmissions={this.state.formSubmissions} />
        </div>
        <div style={{ width: '70%', padding: '10px', margin: '10px' }}>
          <InputClass onFormSubmit={this.handleFormSubmit} />
        </div>
      </div>
    );
  }
}

export default App;

