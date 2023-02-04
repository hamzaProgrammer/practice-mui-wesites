import React , {useState , useEffect} from 'react';
import {Box , useMediaQuery ,Stack } from "@mui/material"
import {Button , Drawer } from "../utils"
import MenuIcon from '@mui/icons-material/Menu';
import DrawerComponent from "../components/DrawerComponent"


const Header = () => {
  const matchMedium = useMediaQuery('(min-width:828px)');
  const [ showDrawer , setShowDrawer ] = useState(false)
  return (
    <>
        <Box className={`flex md:p-3 p-1 w-full justify-between sticky top-0 left-5 z-50 bg-[white] max-h-[70px] `} >
          <Stack direction="row" justifyContent="space-between" itemsCenter="center" className="max-w-[1100px] w-full mx-auto" >
              <Box>
                  <img  alt="logo" loading="lazy" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUyW3Cceis7i3Ms5jxHGbj0G1ACWhnDVlsHg&usqp=CAU" className="max-w-[100px] mt-0 max-h-[50px] rounded-lg" />
              </Box>
              {
                matchMedium === true ? (
                  <Box className="flex justify-items-end item-center pt-2 " >
                      <Box>
                            <Button children="Collections" sx={{color: "#2d3436" , boxShadow: 0, fontSize : "14px" , marginRight : "20px" , fontWeight : "bold" ,}}  />
                            <Button children="Brands" sx={{color: "#2d3436" , boxShadow: 0, fontSize : "14px" , marginRight : "20px" , fontWeight : "bold" ,}}  />
                            <Button children="New" sx={{color: "#2d3436" , boxShadow: 0, fontSize : "14px" , marginRight : "20px" , fontWeight : "bold" ,}}  />
                            <Button children="Sales" sx={{color: "#2d3436" , boxShadow: 0, fontSize : "14px" , marginRight : "20px" , fontWeight : "bold" ,}}  />
                            <Button children="English" sx={{color: "#2d3436" , boxShadow: 0, fontSize : "14px" , marginRight : "20px" , fontWeight : "bold" ,}}  />
                      </Box>
                  </Box>
                ) : (
                  <Box className="flex justify-items-end items-center " >
                      <Button children="Register Restaurant" className="bg-[crimson] text-[white] capitalize hover:bg-[#ff7675] md:h-[40px] h-[35px] md:text-[14px] text-[12px]" sx={{color: "#2d3436" , boxShadow: 0, fontSize : "14px" , marginRight : "20px" , fontWeight : "bold" , '&:hover' : {backgroundColor : "#f9ca24"} }}  />
                      <MenuIcon sx={{marginLeft : "-10px" }} onClick={() => setShowDrawer(!showDrawer)} />
                  </Box>
                )
              }
              <Button children="Register Restaurant" className="bg-[crimson] text-[white] capitalize hover:bg-[#ff7675] lg:block hidden text-[14px] h-[40px] mt-[7px]" sx={{color: "#2d3436" , boxShadow: 0, fontSize : "14px" , marginRight : "20px" , fontWeight : "bold" , '&:hover' : {backgroundColor : "#f9ca24"} }}  />
          </Stack>
        </Box>

        <Drawer openState={showDrawer} onClickFunc={() => setShowDrawer(false)} children={<DrawerComponent />} />
    </>
  );
}

export default Header;
