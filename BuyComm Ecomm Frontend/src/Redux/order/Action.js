import { CREATE_ORDER_FAILURE, CREATE_ORDER_REQUEST, CREATE_ORDER_SUCCESS, GET_ORDER_BY_ID__FAILURE, GET_ORDER_BY_ID__REQUEST, GET_ORDER_BY_ID__SUCCESS } from "./ActionType";
import { api } from "../../config/apiConfig";
import { useNavigate } from "react-router-dom";

export const createOrder = (reqData) => async (dispatch) => {
    dispatch({type:CREATE_ORDER_REQUEST});
    try {
        console.log("CA data ",reqData.data)
        const { data } = await api.post(`/api/orders`,
            reqData.data
        );
        console.log("DA ",data._id);
        if (data._id) {
            reqData.navigate({ search: `step=2&order_id=${data._id}` });
            console.log("DA2",data._id);
        }
        console.log("created order ", data);
        dispatch({ type: CREATE_ORDER_SUCCESS, payload: data })
    } catch (error) {
        console.log("catch error : ",error);
        dispatch({ type: CREATE_ORDER_FAILURE, payload: error.message });
    }
}

export const getOrderById = (orderId) => async (dispatch) => {
    dispatch({ type: GET_ORDER_BY_ID__REQUEST });
    try {
      const { data } = await api.get(`/api/orders/${orderId}`);
      console.log("Order by ID: ", data);
      dispatch({ type: GET_ORDER_BY_ID__SUCCESS, payload: data });
    } catch (error) {
      console.log("Error fetching order: ", error);
      dispatch({ type: GET_ORDER_BY_ID__FAILURE, payload: error.message });
    }
}




