import React , {useState , useContext} from 'react';
import {Stack , Box} from "@mui/material"
import {Button , Drawer, Typography } from "../utils"
import DrawerComponent from "../components/DrawerComponent"
import {ThemeContext} from "../App"
import Logo from "../assets/images/gym04.png"
import { motion } from "framer-motion"

const Header = () => {
  //const matchMedium = useMediaQuery('(min-width:828px)');
  const [ showDrawer , setShowDrawer ] = useState(false)
  const [ theme , setTheme ] = useContext(ThemeContext)
  return (
    <>

          {/* <motion.div
                initial={{ y: -250}}
                animate={{ y: 0}}
                transition={{ duration: 0.5 }}
          > */}
              <Stack direction="row" alignItems="center" justifyContent="space-between" className="xl:max-w-[80%] lg:max-w-[1366px] max-w-[1240px] mx-auto bg-[transparent] md:p-2 p-0 w-[100%] h-[70px] " >
                <Stack direction="row" alignItems="center" justifyContent="flex-start" className=""  >
                  <img className="visible mr-2 md:hidden md:mr-0 " onClick={() => setShowDrawer(true)} alt="menu icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAExJREFUSEtjZKAxYKSx+QyjFhAM4QEJov8EnYVfAYqjsfmA5hZQ6AFU7QMSBzT3Ac3jgOYW0DyIhr4FNI8Dmlsw9ONg1AcoIUDz0hQAbegGGXzv/l0AAAAASUVORK5CYII="/>
                  <img className="max-w-[25px] max-h-[25px] mb-1 bg-[#4834d4] p-1 rounded-md mr-1" src={Logo} alt="logo-imag"  />
                  <Typography children="Fitbody" className="text-[#34495e] xl:text-xl lg:text-lg md:text-lg text-lg font-semibold "  />
                </Stack>
                <Stack direction="row" justifyContent="flex-end" alignItems="center" className="" spacing={{ xs : 2 , md: 2 , lg : 4 }}  >
                  <Button children="Home" className="bg-[transparent] font-semibold text-[#34495e] lg:text-[15px] text-[13px] capitalize  md:block hidden " />
                  <Button children="Program" className="bg-[transparent] font-semibold text-[#34495e] lg:text-[15px] text-[13px] capitalize  md:block hidden " />
                  <Button children="Choose Us" className="bg-[transparent] font-semibold text-[#34495e] lg:text-[15px] text-[13px] capitalize  md:block hidden min-w-[100px]" />
                </Stack>
                <Box className="" >
                  <Button children="Register Now" className="bg-[#4834d4] text-[white] xl:text-[15px] md:text-[13px] text-[11px] capitalize md:min-w-[150px] py-2 rounded-lg hover:bg-[transparent] hover:text-[#4834d4] font-semibold w-[100px] md:h-[35px] h-[30px] md:mr-0 mr-1" />
                </Box>
              </Stack>
          {/* </motion.div> */}

        <Drawer openState={showDrawer} onClickFunc={() => setShowDrawer(false)} children={<DrawerComponent />} />
    </>
  );
}

export default Header;
