import React from "react";
import { useHistory, useParams } from "react-router-dom";

import "./TaskDetails.css";
import Button from "./Button";

const TaskDetails = () => {
	const params = useParams();
	const history = useHistory();

	const handleBackButtonClick = () => {
		history.goBack();
	};

	return (
		<>
			<div
				className="back-button-container"
				onClick={handleBackButtonClick}
			>
				<Button>Voltar</Button>
			</div>
			<div className="task-details-container">
				<h2>{params.taskTitle}</h2>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Vestibulum quis est sit amet quam placerat ornare ut non
					purus. Aliquam dapibus purus sem, ultrices congue urna
					interdum eu. Ut nec pretium urna. In tortor mi, tempor non
					semper in, feugiat non orci. Vestibulum nec sollicitudin
					velit, sit amet laoreet lorem. Ut blandit molestie risus.
					Aenean a urna eu urna vestibulum mollis sit amet at quam.
					Aenean ullamcorper congue ligula et facilisis. Etiam sit
					amet tincidunt sem. Proin tincidunt ante nec nibh efficitur
					vestibulum. Nulla facilisi.
				</p>
			</div>
		</>
	);
};

export default TaskDetails;
