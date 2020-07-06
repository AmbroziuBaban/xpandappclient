import * as actionTypes from './actionTypes';
import axios from '../../axios/axios';

const getDataSucces = (data) => {
    return {
        type: actionTypes.GET_DATA_SUCCESS,
        data: data
    }
}

export const getData = (url, props) => {
    return (dispach) =>
    axios.get(url)
    .then(response =>{
        dispach(getDataSucces(response.data));
    })
    .catch(error => {
        //TODO: handle error
    })
}

const postDataSucces = (response) => {
    return{
        type: actionTypes.POST_DATA_SUCCESS,
        data: response
    }
}

export const postData = (url, obj, props) =>{
    return (dispatch) => {
        axios.post(url, obj)
        .then(response => {
            dispatch(postDataSucces(response));
        })
        .catch(error => {
            //TODO: handle error
        })
    }
}

const putDataSucces = (response) => {
    return{
        type: actionTypes.PUT_DATA_SUCCESS,
        response: response
    }
}

export const putData = (url, obj, props) => {
    return (dispatch) => {
        axios.put(url, obj)
        .then(response => {
            dispatch(putDataSucces(response));
        })
        .catch(error => {
            //TODO: handle the error when implemented
        })
    }
}

const deleteDataSuccess = (response) => {
    return {
        type: actionTypes.DELETE_DATA_SUCCESS,
        response: response
    }
}
 
export const deleteData = (url, props) => {
    return (dispatch) => {
        axios.delete(url)
        .then(response => {
            dispatch(deleteDataSuccess(response));
        })
        .catch(error => {
            //TODO: handle the error when implemented
        })
    }
}