import axios from "Axios";

export function getResume(resume) {
	return dispatch => {
		var resumePromise = axios({
			url:'/app/components/resume/resume.json',
			responseType:'json'
		}).then(function(result){
			dispatch({
				type: "GET_RESUME",
				payload: result.data.resume
			});
		});
	};
}