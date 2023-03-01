import { fetchGroupFailure,fetchGroupSuccess,fetchGroupRequest } from "./actions";
import axios from 'axios';

export const getGroups =() => {
    return (dispatch)=>{
        dispatch(fetchGroupRequest())
        axios.get(
            "http://localhost:8000/api/63f361935a6870f14f57389d/groups"
        )
        .then((data)=>{
            const groups = data.data
            // console.log(groups)
        dispatch(fetchGroupSuccess(groups))

        })
        .catch(err=>{
        dispatch(fetchGroupFailure(err))
        })
    }
};
