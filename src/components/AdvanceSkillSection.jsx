import React from 'react';
import {Stack} from "@mui/material"
import Typography from "../utils/Typography"



const AdvanceSkillSection = () => {
    return (
        <>
            <Stack className="-mt-[50px] bg-[#2f3542] rounded-xl px-4 py-4 max-w-[1240px] mx-auto " direction="column" justifyContent="center" alignItems="center">
                <Typography className="text-[white] text-3xl font-semibold mt-4" gutterBottom={true} children="Skills" />
                <Typography className="text-[#95a5a6] text-[15px] md:max-w-[900px] max-w-[300px] text-center font-medium" gutterBottom={true} children="kiedy ten chce zobaczyć sam jej wygląd. Jedną z mocnych stron używania Lorem Ipsum jest to, że ma wiele różnych „kombinacji” zdań, słów i akapitów, w przeciwieństwie do zwykłego: „tekst, tekst, tekst”, sprawiającego, że wygląda to „zbyt czytelnie” po polsku." />
                <Stack className="w-[800px] mt-3 " direction={{sm:"column" , md : "row"}} justifyContent="space-between"  alignItems="center" >
                    <Stack direction="column" justifyContent="center" alignItems="center" className="box1 bg-[#34495e] p-8 rounded-lg" >
                        <Typography className="text-[white] text-3xl font-semibold mt-4 box1" gutterBottom={true} children="Node Js" />
                        <Typography className="text-[white] text-3xl font-semibold mt-4 box11" gutterBottom={true} children="Back side" />
                    </Stack>
                    <Stack direction="column" justifyContent="center" alignItems="center" className="box2 bg-[#34495e] p-8 rounded-lg" >
                        <Typography className="text-[white] text-3xl font-semibold mt-4" gutterBottom={true} children="React Js" />
                    </Stack>
                    <Stack direction="column" justifyContent="center" alignItems="center" className="box3 bg-[#34495e] p-8 rounded-lg" >
                        <Typography className="text-[white] text-3xl font-semibold mt-4" gutterBottom={true} children="Typescript Js" />
                    </Stack>
                </Stack>
                <div className="content" >
                    <div className="front" >
                        Front
                    </div>
                    <div className="back" >
                        Back
                    </div>
                </div>
            </Stack>
        </>
    );
}

export default AdvanceSkillSection;
