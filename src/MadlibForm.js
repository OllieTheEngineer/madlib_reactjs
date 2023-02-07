import React, { useState } from 'react';
import Madlib from './Madlib';
import './MadlibForm.css';

function MadlibForm() {
    const initialState = {
        nounOne: "",
        nounTwo: "",
        adjective: "",
        color: ""
    }
	const [ formData, setFormData ] = useState(initialState);
    const handleChange = (evt) => {
        const { name, value } = evt.target;
		setFormData(formData => ({
            ...formData,
            [name]: value
        }))
	}

    const handleSubmit =(evt) => {
        evt.preventDefault();
       const {nounOne, nounTwo, adjective, color} = formData;
       console.log(formData)
       if(!nounOne || !nounTwo || !adjective || !color){
        alert('All fields must be filled out!')
        return;
    }
        setDisplayForm(false)
    }

    const [ displayForm, setDisplayForm ] = useState(true);

    const showForm = () => {
        setDisplayForm(true);
        setFormData(initialState)
    }

	return (
        <div>
        {displayForm && (
        <div>
            <h2> MadLib Form </h2>
		<div onSubmit={handleSubmit}>
			<label htmlFor="noun1">Noun 1:</label>
			<input
				name="nounOne"
				type="text"
				id="nounOne"
				placeholder="type first noun"
				value={formData.nounOne}
				onChange={handleChange}
			/>
            <br></br>
			<label htmlFor="noun2">Noun 2:</label>
			<input
				name="nounTwo"
				type="text"
				id="nounTwo"
				placeholder="type second noun"
				value={formData.nounTwo}
				onChange={handleChange}
			/>
            <br></br>
			<label htmlFor="adjective">adjective:</label>
			<input
				name="adjective"
				type="text"
				id="adjective"
				placeholder="Add an adjective"
				value={formData.adjective}
				onChange={handleChange}
			/>
            <br></br>
			<label htmlFor="color">Color:</label>
			<input
				name="color"
				type="text"
				id="color"
				placeholder="add a color"
				value={formData.color}
				onChange={handleChange}
			/>
            <br></br>
            <button onClick={(evt) => handleSubmit(evt)}> Create a Madlib</button>
		</div>
        </div>
        )}
        {!displayForm && (
            <Madlib nounOne={formData.nounOne} adjective={formData.adjective} color={formData.color} nounTwo={formData.nounTwo} showForm={showForm}/>
        )}
        </div>
	);
}

export default MadlibForm;
