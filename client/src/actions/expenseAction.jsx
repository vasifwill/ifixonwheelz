import { withBasename } from "../utils/params";

const apiUrl = withBasename('/api/');

export const getList = () => {
  return (dispatch) => {
    dispatch(expenseGetRequest());
    return fetch(apiUrl+"getList", {
      method: 'POST',
      credentials: 'same-origin'
    }).then(response => {
      if(response.ok){
        response.json().then(data => {
          dispatch(expenseGetRequestSuccess(data.expenses, data.message, data.status))
        })
      }
      else{
        response.json().then(error => {
          dispatch(expenseGetRequestFaild(error))
        })
      }
    })
  }
}

export const getFilterList = (params) => {
  return (dispatch) => {
    dispatch(expenseGetRequest());
    return fetch(apiUrl+"getFilerList", {
      method: 'POST',
      body:params,
      credentials: 'same-origin'
    }).then(response => {
      if(response.ok){
        response.json().then(data => {
          dispatch(expenseGetRequestSuccess(data.expenses, data.message, data.status))
        })
      }
      else{
        response.json().then(error => {
          dispatch(expenseGetRequestFaild(error))
        })
      }
    })
  }
}

export const expenseGetRequest = (expenses) => {
  return {
    type: 'EXPENSE_GET_REQUEST',
    expenses
  }
}

export const expenseGetRequestSuccess = (expenses,message,status) => {
  return {
    type:'EXPENSE_GET_REQUEST_SUCCESS',
    expenses:expenses,
    message:message,
    status:status
  }
}

export const expenseGetRequestFaild = (error) => {
  return {
    type: 'EXPENSE_GET_REQUEST_FAILD',
    error
  }
}

