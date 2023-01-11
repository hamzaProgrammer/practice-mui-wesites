import React from 'react';
import {Box} from "@mui/material"
import Typography from "../utils/Typography"
import Button from "../utils/Button"

const MusicSections = () => {
    const titleStyle = {
        color : 'white',
        fontSize : "16px",
        fontWeight : 600,
        textAlign : "center",
        marginBottom : "20px"
    }
    const descStyle = {
        color : '#c8d6e5',
        fontSize : "12px",
        fontWeight : 400,
        textAlign : "center",
        marginBottom : "20px",
        paddingLeft : "5px",
        paddingRight : "5px"
    }
    const buttonStyle = {
        color : '#5f27cd',
        fontSize : "12px",
        textAlign : "center",
        textDecoration : "underline",
        fontWeight : 600
    }
    return (
        <>
            <Box className="flex md:flex-row flex-col justify-between items-center max-w-[1240px] mx-auto mt-4 pb-2 md:px-6 " >
                <Box className="flex flex-col  justify-center items-center max-w-[300px]" >
                    <img alt="imag 1" className="max-w-[50px] max-h-[50px] rounded-md mb-2" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-3lebG63zm0aPw0GKfwQOCN1eBIerCIvXTg&usqp=CAU" />
                    <Typography children="For Live Music" sx={titleStyle} />
                    <Typography children="Monet tietokoneen julkistusohjelmien pakkaukset ja nettisivueditorit käyttävät nyt Lorem Ipsumia heidän normaalina mallitekstinä. 'Lorem Ipsumia' etsittäessä" sx={descStyle} />
                    <Button children="learn more" variant="text" sx={buttonStyle} />
                </Box>
                <Box className="flex flex-col  justify-center items-center max-w-[300px]" >
                    <img alt="imag 1" className="max-w-[50px] max-h-[50px] rounded-md mb-2" src="https://assets.stickpng.com/images/5a02cab818e87004f1ca43d9.png" />
                    <Typography children="For Daily Music" sx={titleStyle} />
                    <Typography children="Monet tietokoneen julkistusohjelmien pakkaukset ja nettisivueditorit käyttävät nyt Lorem Ipsumia heidän normaalina mallitekstinä. 'Lorem Ipsumia' etsittäessä" sx={descStyle} />
                    <Button children="learn more" variant="text" sx={buttonStyle} />
                </Box>
                <Box className="flex flex-col  justify-center items-center max-w-[300px]" >
                    <img alt="imag 1" className="max-w-[50px] max-h-[50px] rounded-md mb-2" src="https://w7.pngwing.com/pngs/62/799/png-transparent-cafe-music-artist-coffee-shop-music-show.png" />
                    <Typography children="For Artists" sx={titleStyle} />
                    <Typography children="Monet tietokoneen julkistusohjelmien pakkaukset ja nettisivueditorit käyttävät nyt Lorem Ipsumia heidän normaalina mallitekstinä. 'Lorem Ipsumia' etsittäessä" sx={descStyle} />
                    <Button children="learn more" variant="text" sx={buttonStyle} />
                </Box>
            </Box>
        </>
    );
}

export default MusicSections;
