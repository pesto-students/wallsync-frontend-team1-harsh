import {
	FETCH_GROUP_REQUEST,
	FETCH_GROUP_SUCCESS,
	FETCH_GROUP_FAILURE,
	ADD_SHARE_REQUEST,
	ADD_SHARE_SUCCESS,
	ADD_SHARE_FAILURE,
	DELETE_SHARE_REQUEST,
	DELETE_SHARE_SUCCESS,
	DELETE_SHARE_FAILURE,
	ADD_GROUP_REQUEST,
	ADD_GROUP_FAILURE,
	ADD_GROUP_SUCCESS,
	ADD_USER_REQUEST,
	ADD_USER_SUCCESS,
	ADD_USER_FAILURE,
	SIMPLIFY_REQUEST,
	SIMPLIFY_SUCCESS,
	SIMPLIFY_FAILURE,
	DELETE_GROUP_REQUEST,
	DELETE_GROUP_SUCCESS,
	DELETE_GROUP_FAILURE,
	ADD_PERCENTAGE_ARRAY_REQUEST,
	ADD_PERCENTAGE_ARRAY_SUCCESS,
	ADD_PERCENTAGE_ARRAY_FAILURE,
	EDIT_SHARE_REQUEST,
	EDIT_SHARE_FAILURE,
	EDIT_SHARE_SUCCESS,
} from "./types";

const INITIAL_STATE = {
	loading: true,
	group: [],
	simplified: [],
	contributions: [],
	error: false,
};

const groupReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case FETCH_GROUP_REQUEST:
			return {
				...state,
				loading: true,
				group: [],
				error: false,
			};
		case FETCH_GROUP_SUCCESS:
			return {
				loading: false,
				group: action.payload,
				error: false,
			};
		case FETCH_GROUP_FAILURE:
			return {
				loading: false,
				group: [],
				error: action.payload,
			};
		case ADD_SHARE_REQUEST:
			return {
				...state,
				loading: true,
				group: [...state.group],
				error: false,
			};
		case ADD_SHARE_SUCCESS:
			const updatedGroup = state.group.map((group) => {
				if (group.groupName === action.payload.groupName) {
					return {
						...group,
						finalContributions: action.payload.finalContributions,
						contributions: action.payload.share,
					};
				} else {
					return group;
				}
			});

			return {
				...state,
				loading: false,
				group: updatedGroup,
				error: false,
			};
		case ADD_SHARE_FAILURE:
			return {
				loading: false,
				group: [...state.group],
				error: action.payload,
			};
		case DELETE_SHARE_REQUEST:
			return {
				group: [...state.group],
				loading: true,
				error: false,
			};

		case DELETE_SHARE_SUCCESS:
			const updatedGroups = state.group.map((group) => {
				if (group.groupName === action.payload.groupName) {
					return {
						...group,
						finalContributions: action.payload.finalContributions,
						contributions: group.contributions.filter(
							(item) => item.id !== action.payload.contributionId
						),
					};
				} else {
					return group;
				}
			});

			return {
				...state,
				loading: false,
				group: updatedGroups,
				error: false,
			};

		case DELETE_SHARE_FAILURE:
			return {
				group: [...state.group],
				loading: false,
				error: action.payload,
			};
		case ADD_GROUP_REQUEST:
			return {
				loading: true,
				group: [...state.group],
				error: false,
			};
		case ADD_GROUP_SUCCESS:
			return {
				loading: false,
				group: [...state.group, action.payload],
				error: false,
			};
		case ADD_GROUP_FAILURE:
			return {
				loading: false,
				group: [...state.group],
				error: action.payload,
			};
		case ADD_USER_REQUEST:
			return {
				loading: true,
				group: [...state.group],
				error: false,
			};

		case ADD_USER_SUCCESS:
			const { groupName, user } = action.payload;
			const uGroup = state.group.map((group) => {
				if (group.groupName === groupName) {
					return {
						...group,
						groupMembers: [...group.groupMembers, user],
					};
				}
				return group;
			});
			return {
				...state,
				loading: false,
				group: uGroup,
				error: false,
			};
		case ADD_USER_FAILURE:
			return {
				loading: false,
				group: [...state.group],
				error: action.payload,
			};
		case SIMPLIFY_REQUEST:
			return {
				...state,
				loading: true,
				group: [...state.group],
				error: false,
			};
		case SIMPLIFY_SUCCESS:
			return {
				loading: false,
				group: [...state.group],
				simplified: action.payload,
				error: false,
			};
		case SIMPLIFY_FAILURE:
			return {
				loading: false,
				group: [...state.group],
				error: action.payload,
			};
		case DELETE_GROUP_REQUEST:
			return {
				loading: true,
				group: [...state.group],
				error: false,
			};
		case DELETE_GROUP_SUCCESS:
			const updatedAfterDelete = state.group.filter(
				(group) => group.groupName !== action.payload
			);
			return {
				...state,
				loading: false,
				group: updatedAfterDelete,
				error: false,
			};
		case DELETE_GROUP_FAILURE:
			return {
				loading: false,
				group: [...state.group],
				error: action.payload,
			};
		case ADD_PERCENTAGE_ARRAY_REQUEST:
			return {
				...state,
				loading: true,
				group: [...state.group],
				error: false,
			};
		case ADD_PERCENTAGE_ARRAY_SUCCESS:
			const updatedPA = state.group.map((group) => {
				if (group.groupName === action.payload.groupName) {
					return {
						...group,
						percentageArray: action.payload.percentageArray,
					};
				} else {
					return group;
				}
			});

			return {
				...state,
				loading: false,
				group: updatedPA,
				error: false,
			};
		case ADD_PERCENTAGE_ARRAY_FAILURE:
			return {
				loading: false,
				group: [...state.group],
				error: action.payload,
			};
		case EDIT_SHARE_REQUEST:
			return {
				...state,
				loading: true,
				group: [...state.group],
				error: false,
			};

		// case EDIT_SHARE_SUCCESS:
		// 	const updatedG = state.group.map((item) => {
		// 		console.log("printings", item);
		// 		if (item.groupName === action.payload.groupName) {
		// 			return {
		// 				...item,
		// 				contributions: item.contributions.map((contribution) =>
		// 					contribution.id === action.payload.contributionId
		// 						? { ...contribution, ...action.payload.share }
		// 						: contribution
		// 				),
		// 				finalContributions: action.payload.finalContributions,
		// 			};
		// 		}
		// 		return item;
		// 	});
		// 	return {
		// 		...state,
		// 		group: updatedG,
		// 		loading: false,
		// 		error: null,
		// 	};
		case EDIT_SHARE_SUCCESS:
			return {
				...state,
				loading: false,
				group: state.group.map((i) => {
					if (i.groupName === action.payload.groupName) {
						return {
							...i,
							contributions: i.contributions.map((contribution) =>
								contribution.id === action.payload.contributionId
									? { ...contribution, ...action.payload.share }
									: contribution
							),
							finalContributions: action.payload.finalContributions,
						};
					}
					return i;
				}),
				error: null,
			};

		case EDIT_SHARE_FAILURE:
			return {
				loading: false,
				group: [...state.group],
				error: action.payload,
			};
		default:
			return state;
	}
};

export default groupReducer;
