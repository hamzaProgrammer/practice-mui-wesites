import React , {useState , useEffect} from 'react';
import {Box , useMediaQuery } from "@mui/material"
import Button from "../utils/Button"
import TextField from "../utils/Input"
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';


const Header = () => {
  // on click function of button
  const pressButton = () => {
    console.log("Presses")
  }

  const matchMedium = useMediaQuery('(min-width:828px)');

  const [ offSet , setOffset ] = useState(false)
  // detecting if page is scrolled
  useEffect(() => {
        const onScroll = () => setOffset(window.pageYOffset);
        // clean up code
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    console.log("offSet: ", offSet)

  return (
    <>
        <Box className={`flex md:p-3 p-1 justify-between sticky top-0 left-5 z-50 ${offSet > 100 ? 'bg-[yellow]' :  'bg-[white]'} `} >
            <Box>
                <img  alt="logo" loading="lazy" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUyW3Cceis7i3Ms5jxHGbj0G1ACWhnDVlsHg&usqp=CAU" className="max-w-[100px] max-h-[50px] rounded-lg" />
            </Box>
            {
              matchMedium === true ? (
                <Box className="flex justify-items-end" >
                    <Box>
                          <Button children="Collections" sx={{color: "#2d3436" , boxShadow: 0, fontSize : "14px" , marginRight : "20px" , fontWeight : "bold" , '&:hover' : {backgroundColor : "#f9ca24"} }} onClickFunc={pressButton}  />
                          <Button children="Brands" sx={{color: "#2d3436" , boxShadow: 0, fontSize : "14px" , marginRight : "20px" , fontWeight : "bold" , '&:hover' : {backgroundColor : "#f9ca24"} }}  />
                          <Button children="New" sx={{color: "#2d3436" , boxShadow: 0, fontSize : "14px" , marginRight : "20px" , fontWeight : "bold" , '&:hover' : {backgroundColor : "#f9ca24"} }}  />
                          <Button children="Sales" sx={{color: "#2d3436" , boxShadow: 0, fontSize : "14px" , marginRight : "20px" , fontWeight : "bold" , '&:hover' : {backgroundColor : "#f9ca24"} }}  />
                          <Button children="English" sx={{color: "#2d3436" , boxShadow: 0, fontSize : "14px" , marginRight : "20px" , fontWeight : "bold" , '&:hover' : {backgroundColor : "#f9ca24"} }}  />
                    </Box>
                    <Box>
                        <TextField variant="outlined" hideLabel={true} placeholder="search any thing...." id="outlined-basic" Icon={SearchIcon} size="small" sx={{maxHeight : "20px" , padding : 0 }}  />
                    </Box>
                </Box>
              ) : (
                <Box className="flex justify-items-end mt-1" >
                    <TextField variant="outlined" hideLabel={true} placeholder="search any thing...." id="outlined-basic" Icon={SearchIcon} size="small" sx={{maxHeight : "20px" , padding : 0 , maxWidth : "190px" }}  />
                    <MenuIcon sx={{marginLeft : "15px" , marginTop : "7px "}} />
                </Box>
              )
            }
        </Box>
    </>
  );
}

export default Header;
