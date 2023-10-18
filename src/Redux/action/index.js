export const PLUS_COUNTER = "PLUS_COUNTER";
export const LESS_COUNTER = "LESS_COUNTER"
export const GET_API = "GET_API"


export const plusCounterAction = (counterSelector) => ({type: PLUS_COUNTER, payload: counterSelector + 1})
export const lessCounterAction = (counterSelector) => ({type: PLUS_COUNTER, payload: counterSelector - 1})

export const getAPIAction = () => {
     return async (dispatch, getState) => {
       try{
        let resp = await fetch("")
        if (resp.ok){
            let fetched = await resp.json()
            dispatch({type: GET_API, payload: fetched})
            console.log("get", getState());
        }
       }catch(err){
        console.log(err);
       }
    }
}