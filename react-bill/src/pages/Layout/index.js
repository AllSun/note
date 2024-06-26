import { Outlet } from "react-router-dom"
import { Button } from "antd-mobile"
import { useDispatch } from "react-redux"
import { getBillList } from "@/store/modules/billStore"
import { useEffect } from "react"

const Layout = ()=>{
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch (getBillList())
    },[dispatch])
    return (
        
        <div>
            <Outlet/>
            我是layout
            <Button >Purple</Button>
        </div>
    )
}

export default Layout 