import React from 'react';
import {Box} from "@mui/material"
import Typography from "../utils/Typography"


const HeroSectionAnimated = () => {
    const firstTextStyle= {
        color : "#dfe4ea",
        fontSize : {lg : "25px" , md : "20px" , sm : "18px"},
        marginBottom : "10px"
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
    const fourthTextStyle= {
        color : "white",
        fontSize : { xs: "12px"},
        marginBottom : "15px",
        //paddingLeft : {md:"25px" , xs : "5px"},
        //paddingRight : {md:"25px" , xs : "5px"}
    }
    return (
        <>
            <Box className="flex md:flex-row flex-col justify-between items-center bg-[#081730] rounded-b-[5rem] max-w-[100%] md:h-[480px] h-[900px]" >
                <Box className="flex flex-col justify-start lg:pl-12 md:max-w-[50%] md:min-w-[50%] max-w-[100%] min-w-[100%] p-2 md:pt-0 pt-7 " >
                    <Typography children="Experience The" sx={firstTextStyle} />
                    <Typography children="Best Quality Music" sx={secondTextStyle} />
                    <Typography children="Useita versioita on muodostunut vuosien kuluessa, jotkut vahingossa ja jotkut tarkoituksella. Monet tietokoneen julkistusohjelmien pakkaukset ja nettisivueditorit käyttävät." sx={thirdTextStyle} />
                    <Box className="flex flex-col mt-20" >
                        <Typography children="Downlaod now on Ios and Android." sx={fourthTextStyle} />
                        <Box className="flex justify-between items-center max-w-[200px]" >
                            <img alt="ios download" className="max-w-[100px] max-h-[50px] rounded-md" src="https://e7.pngegg.com/pngimages/838/154/png-clipart-app-store-mobile-app-itunes-ios-apple-text-label.png"  />
                            <img alt="android download" className="max-w-[100px] max-h-[50px] rounded-md" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvIxqWzg96N3lKYiagEsP6XZBgjUZhCe_Y5g&usqp=CAU"  />
                        </Box>
                    </Box>
                </Box>
                <Box className=" flex justify-center min-w-[50%]" >
                    <img alt="mobile imag" className="max-w-[100%] max-h-[480px] rounded-md" src="https://trending.fm/src/images/app-mockup-1.png" />
                </Box>
            </Box>
        </>
    );
}

export default HeroSectionAnimated;
