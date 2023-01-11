import React from 'react';
import {Box} from "@mui/material"
import Typography from "../utils/Typography"
import InputField from "../utils/Input"
import IconButton from "../utils/IconButton"
import SearchIcon from '@mui/icons-material/Search';


const SearchSectionAnimated = () => {
    const firstTextStyle= {
        color : "#dfe4ea",
        fontSize : {lg : "25px" , md : "20px" , sm : "18px"},
        marginBottom : "5px"
    }
    const secondTextStyle= {
        color : "#dfe4ea",
        fontSize : {lg : "45px" , md : "40px" , sm : "40px" , xs: "30px"},
        marginBottom : "15px",
    }
    const thirdTextStyle= {
        color : "#c8d6e5",
        fontSize : { xs: "12px"},
        marginBottom : "15px",
        paddingLeft : {md:"25px" , xs : "5px"},
        paddingRight : {md:"25px" , xs : "5px"}
    }
    const inputFieldStyle = {
        maxHeight : "20px" ,
        padding : 0 ,
        maxWidth : "190px",
        backgroundColor : "#30336b",
        borderRadius : "10px",
        minHeight : "45px",
        minWidth : "80%",
        color : 'white',
        borderBottom : "none"
    }
    const iconStyle = {
        backgroundColor : '#130f40',
        color : "white",
        borderRadius : "5px",
        fontSize : "25px",
        border : "1px solid #686de0"
    }
    return (
        <>
            <Box className="flex md:flex-row flex-col justify-between items-center bg-[#081730]  max-w-[100%] md:h-[480px] h-[800px] mt-4 pt-8 pb-4" >
                <Box className=" flex justify-center min-w-[50%]" >
                    <img alt="mobile imag" className="max-w-[100%] max-h-[480px] rounded-md" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwLYwoXwZD7R1fUk9RLvh-224ST5erE7GcJQ&usqp=CAU" />
                </Box>
                <Box className="flex flex-col justify-start lg:pl-12 md:max-w-[50%] md:min-w-[50%] max-w-[100%] min-w-[100%] p-2 pt-8 lg:pt-7 " >
                    <Box className="flex justify-between md:max-w-[80%] max-w-[100%] mb-6" >
                        <InputField variant="filled" hideLabel={true} placeholder="search any music or URL" color="white" id="filled-basic" size="small" sx={inputFieldStyle} />
                        <IconButton Icon={<SearchIcon />} sx={iconStyle} variant="outlined" />
                    </Box>
                    <Typography children="Search Music by" sx={firstTextStyle} />
                    <Typography children="Name or Direct Url" id="filled-basic" sx={secondTextStyle} />
                    <Typography children="Useita versioita on muodostunut vuosien kuluessa, jotkut vahingossa ja jotkut tarkoituksella. Monet tietokoneen julkistusohjelmien pakkaukset ja nettisivueditorit käyttävät." sx={thirdTextStyle} />
                    <img alt="ios download" className="max-w-[80%] max-h-[100px] rounded-md" src="https://static.vecteezy.com/system/resources/thumbnails/004/955/089/small_2x/music-player-buttons-free-vector.jpg"  />
                </Box>
            </Box>
        </>
    );
}

export default SearchSectionAnimated;
