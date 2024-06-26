//账单列表store
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const billStore = createSlice({
    name: 'bill',
    //数据状态state
    initialState: {
        billList: []
    },
    //同步修改数据，有个异步的可以看看，需要用axios
    reducers: {
        setBillList(state,action){
            state.billList = action.payload
        }
    }
})

//结构actionCreater函数
const {setBillList} = billStore.actions

//编写异步
const getBillList = ()=>{
    return async(dispatch) =>{
        //编写异步请求
        const res = await axios.get('http://localhost:8888/ka')
        dispatch(setBillList(res.data))
    }
}   
export {getBillList}

//导出reducer
const reducer = billStore.reducer

export default reducer