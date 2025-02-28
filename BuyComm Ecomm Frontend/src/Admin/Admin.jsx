
import { useMediaQuery, useTheme } from '@mui/system';
import React from 'react'
import { useNavigate } from 'react-router-dom';

const menu = [
    {name:"Dashboard", path:"/admin"},
    {name:"Products", path:"/admin/products"},
    {name:"Customers", path:"/admin/customers"},
    {name:"Order", path:"/admin/orders"},
    {name:"AddProduct", path:"/admin/product/create"},
    {name:"", path:"/admin"},

]

const Admin = () => {

    const theme = useTheme();
    const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
    const [sideBarVisible, setSideBarVisible] = useState(false)
    const navigate = useNavigate();
    


  return (
    <div>
      Admin
    </div>
  )
}

export default Admin
