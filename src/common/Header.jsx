import React , {useState , useContext} from 'react';
import {Stack } from "@mui/material"
import {Button , Drawer, Typography } from "../utils"
import DrawerComponent from "../components/DrawerComponent"
import {ThemeContext} from "../App"
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
              <Stack direction="row" alignItems="center" justifyContent="space-between" className="xl:max-w-[80%] lg:max-w-[1366px] max-w-[1240px] mx-auto bg-[transparent] p-2 w-[100%] h-[70px]" >
                <Stack direction="row" alignItems="center" justifyContent={{xs : "center", sm: "flex-start" , md:"flex-start"}} className="w-full "  >
                  {/* <img className="md:hidden visible md:mr-0 mr-2" onClick={() => setShowDrawer(true)} alt="menu icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAExJREFUSEtjZKAxYKSx+QyjFhAM4QEJov8EnYVfAYqjsfmA5hZQ6AFU7QMSBzT3Ac3jgOYW0DyIhr4FNI8Dmlsw9ONg1AcoIUDz0hQAbegGGXzv/l0AAAAASUVORK5CYII="/> */}
                  <img className="md:max-w-[40px] max-w-[40px] md:max-h-[40px] max-h-[40px] mb-1 " src="https://www.freeiconspng.com/thumbs/coffee-icon-png/coffee-icon-png-2.png" alt="logo-imag"  />
                  <Typography children="Coffeto" className="text-[white] md:text-2xl text-lg font-semibold font-[Pacifico]"  />
                </Stack>
                <Stack direction="row" justifyContent="flex-end" alignItems="center" className="" spacing={{ xs : 2 , sm: 2 , md: 2 , lg : 4 , xl: 6 }}  >
                  <Button children="Home" className="bg-[transparent] text-[white] lg:text-[15px] text-[13px] capitalize font-normal md:block hidden font-[Pacifico]" />
                  <Button children="About" className="bg-[transparent] text-[white] lg:text-[15px] text-[13px] capitalize font-normal md:block hidden font-[Pacifico]" />
                  <Button children="Shops" className="bg-[transparent] text-[white] lg:text-[15px] text-[13px] capitalize font-normal md:block hidden font-[Pacifico]" />
                  <Button children="Testimonial" className="bg-[transparent] text-[white] xl:text-[15px] text-[13px] capitalize font-normal md:block hidden font-[Pacifico]" />
                </Stack>
              </Stack>
          {/* </motion.div> */}

        <Drawer openState={showDrawer} onClickFunc={() => setShowDrawer(false)} children={<DrawerComponent />} />
    </>
  );
}

export default Header;
