// import React, { useState } from 'react';
// import UserInput from './components/UserInput';
// import UserDisplay from "./components/UserDisplay";

// const App = () => {
//   const [formDataList, setFormDataList] = useState([]);
//   const [updateIndex, setUpdateIndex] = useState(-1);

//   const handleFormSubmit = (formData) => {//handleformsubmit has taken two parameters formData & updateIndex from UserInput.
//     if (updateIndex === -1) {
//       setFormDataList([formData, ...formDataList]);
//     } else {
//       const newFormDataList = [...formDataList];//newFormDataList doesn't have any data so first we load all data into it.
//       newFormDataList[updateIndex] = formData;//formData has latest data we entered that is put at given index.
//       setFormDataList(newFormDataList);//then we put the whole list into formDataList which is our orginal list.
//       setUpdateIndex(-1);//then after updating set index to -1.
//     }
//   };

//   const handlingDelete = (index) => {
//     const newList = formDataList.filter((formData, i) => i !== index);
//     setFormDataList(newList);
//   };

//   const handlingUpdate = (index) => {
//     setUpdateIndex(index);//this sets the updateIndex value to index number of the entry we had clicked on for updating. Takes data from UserDisplay.
//   };

//   return (
//     <div style={{ display: 'flex', width: '100vw', height: '100vh' }}>
//       <div style={{ width: '30%', padding: '10px' }}>
//         <UserDisplay formDataList={formDataList} onDelete={handlingDelete} onUpdate={handlingUpdate} />
//       </div>
//       <div style={{ width: '70%', padding: '10px' }}>
//         <UserInput onFormSubmit={handleFormSubmit} formDataList={formDataList} updateIndex={updateIndex} />
//       </div>
//     </div>
//   );
// };

// export default App;


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
    this.handleDelete = this.handleDelete.bind(this);
  }
  handleFormSubmit(newSubmission) {
    this.setState((prevState) => ({
      formSubmissions: [newSubmission, ...prevState.formSubmissions],
    }));
  }
  handleDelete(index) {
    this.setState((prevState) => ({
      formSubmissions: prevState.formSubmissions.filter((submission, i) => i !== index)
    }))
  }

  render() {
    return (
      <div style={{ display: 'flex', width: '100vw', height: '100vh' }}>
        <div style={{ width: '30%' }}>
          <FormDetails formSubmissions={this.state.formSubmissions} handleDelete={this.handleDelete} />
        </div>
        <div style={{ width: '70%', padding: '10px', margin: '10px' }}>
          <InputClass onFormSubmit={this.handleFormSubmit} />
        </div>
      </div>
    );
  }
}

export default App;

