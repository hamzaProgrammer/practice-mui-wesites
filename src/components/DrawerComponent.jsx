import React from 'react';
import {Stack} from "@mui/material"
import {Button} from "../utils"
import {DrawerIconStyle , DrawerStyle} from "./styles"

const DrawerComponent = () => {
    return (
        <>
            <Stack direction="column" justifyContent="center" alignItems="center" sx={DrawerStyle} >
                <img  alt="logo" loading="lazy" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUyW3Cceis7i3Ms5jxHGbj0G1ACWhnDVlsHg&usqp=CAU" className="max-w-[50px] max-h-[50px] rounded-lg" style={DrawerIconStyle} />
                <Button children="Collections" sx={{color: "#2d3436" , boxShadow: 0, fontSize : "14px" , marginRight : "20px" , fontWeight : "bold" , marginBottom : "15px"}}  />
                <Button children="Brands" sx={{color: "#2d3436" , boxShadow: 0, fontSize : "14px" , marginRight : "20px" , fontWeight : "bold" , marginBottom : "15px"}}  />
                <Button children="New" sx={{color: "#2d3436" , boxShadow: 0, fontSize : "14px" , marginRight : "20px" , fontWeight : "bold" , marginBottom : "15px"}}  />
                <Button children="Sales" sx={{color: "#2d3436" , boxShadow: 0, fontSize : "14px" , marginRight : "20px" , fontWeight : "bold" , marginBottom : "15px"}}  />
                <Button children="English" sx={{color: "#2d3436" , boxShadow: 0, fontSize : "14px" , marginRight : "20px" , fontWeight : "bold" ,}}  />
            </Stack>
        </>
    );
}

export default DrawerComponent;
