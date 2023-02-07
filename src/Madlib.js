import React, {useState} from 'react';
import MadlibForm from './MadlibForm';

function Madlib(props) {
	const [ displayStory, setDisplayStory ] = useState(true);
    const hideStory = () => {
        setDisplayStory(false)
        props.showForm();
    }

	return (
		<div>
			{displayStory && (
				<div>
					<h2> MadLib Story </h2>
					<p>
						{' '}
						Once upon a time, there was a {props.nounOne} who lived in a {props.adjective} {props.color}{' '}
						house with their {props.nounTwo}.
					</p>
					<button onClick={() => hideStory()}> Restart </button>
				</div>
			)}
		</div>
	);
}

export default Madlib;
