import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { ScheduleMeet } from '../../Actions/approval'
import Loader from '../Loader/Loader';
import { useHistory } from 'react-router';
import DateFnsUtils from '@date-io/date-fns';
import { DatePicker, TimePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';

const ScheduleMeeting = ({ app, setapp }) => {
	
	const dispatch = useDispatch();
	const history = useHistory();
	const [meet, setMeet] = useState({
		time: new Date(),
		date: new Date()
	});

	function handleChange(event) {
		setMeet({
			date: event,
			time: event
		})
	};

	const handleSubmit = () => {
		var timedate = {
			date: meet.date.toLocaleDateString(),
			time: meet.time.toLocaleTimeString('en-US')
		}
		dispatch(ScheduleMeet(app._id, timedate));
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
				<MuiPickersUtilsProvider utils={DateFnsUtils}>
					<div class="container">
						<form onSubmit={handleSubmit} className='row'>
							<div class="form-group col-12 col-md-6">
								<label for="time">TIME</label>
								<TimePicker className="form-control" id="time-input" name="time" value={meet.time} placeholder onChange={handleChange} required style={{ "padding": "10px" }} />
							</div>
							<div class="form-group col-12 col-md-6">
								<label for="date">DATE</label>
								<DatePicker class="form-control" id="date-input" name="date" value={meet.date} onChange={handleChange} placeholder required />
							</div>
							<div className="col-12">
								<button type='submit' class="mt-5 mb-5 btn btn-outline-danger" >
									Schedule
								</button>
							</div>
						</form>
					</div>
				</MuiPickersUtilsProvider>
			</div> : <Loader margin />
	)
};

export default ScheduleMeeting;