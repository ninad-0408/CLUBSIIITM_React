import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { ScheduleMeet } from '../../Actions/approval'
import Loader from '../Loader/Loader';
import { useHistory } from 'react-router';

const ScheduleMeeting = ({ app, setapp }) => {
	const dispatch = useDispatch();
	const history = useHistory();
	const [meet, setMeet] = useState({
		time: "",
		date: ""
	});

	function handleChange(event) {
		const { name, value } = event.target;
		setMeet((prev) => {
			return {
				...prev,
				[name]: value
			};
		});
	};

	const handleSubmit = () => {
		dispatch(ScheduleMeet(app._id, meet));
		history.push(`/club/${app.clubid}`);
	};

	return (
		app ?
			<div className='profile pt-5'>
				<div class="container mb-5">
					<h2 class="page-section-heading text-center text-uppercase text-secondary"
						style={{ 'font-family': 'Kaushan Script, cursive', 'marginTop': '200px' }}>Schedule interview of {app.studentid.name}
					</h2>
					<div class="divider-custom">
						<div class="divider-custom-line"></div>
						<div class="divider-custom-icon"><i class="fas fa-star"></i></div>
						<div class="divider-custom-line"></div>
					</div>
				</div>

				<div class="container">
					<form onSubmit={handleSubmit}>
						<div class="form-group">
							<label for="time">TIME</label>
							<input type="text" class="form-control" id="alarm" name="time" value={meet.time} placeholder="" onChange={handleChange} required />
						</div>
						<div class="form-group">
							<label for="date">DATE</label>
							<input type="text" class="form-control" id="date-input" name="date" value={meet.date} onChange={handleChange}
								placeholder="Date of Interview" required />
						</div>
						<button type='submit' class="btn btn-outline-danger" >
							Schedule
						</button>
					</form>
				</div>
			</div> : <Loader margin />
	)
};

export default ScheduleMeeting;

