const resumeReducer = (state = {
	resume: {},
	lastValues: []
}, action) => {
	switch (action.type) {
		case "GET_RESUME":
			state = {
				...state,
				resume: action.payload,
				lastValues: [...state.lastValues, action.payload]
			};
			break;
	}
	return state;
}

export default resumeReducer;