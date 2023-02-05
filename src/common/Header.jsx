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
              <Stack direction="row" alignItems="center" justifyContent="space-between" className="xl:max-w-[80%] lg:max-w-[1366px] max-w-[1240px] mx-auto bg-[transparent] p-2 w-[100%] h-[70px] " >
                <Stack direction="row" alignItems="center" justifyContent="flex-start"  >
                  <img className="md:hidden visible md:mr-0 mr-2" onClick={() => setShowDrawer(true)} alt="menu icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAExJREFUSEtjZKAxYKSx+QyjFhAM4QEJov8EnYVfAYqjsfmA5hZQ6AFU7QMSBzT3Ac3jgOYW0DyIhr4FNI8Dmlsw9ONg1AcoIUDz0hQAbegGGXzv/l0AAAAASUVORK5CYII="/>
                  <Typography children="Halux" className="text-[white] text-2xl font-semibold font-[Kalam]"  />
                  <img className="max-w-[20px] max-h-[20px] ml-1 mb-1" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAANhJREFUSEvtldENwjAMRF83gAkYAdgANmAURmAkNgA2gA1gAtgA5CqR3Mi010r5a/7aOPcc5yw3VF5NZX3GABbAJSW0Bz5Kciogi2+S6B2QIArAiz8SYA1IkCFAKb5LgCsgQfoAkXiuu+1JkH+APvH8thIkAijiMqQEjBGXIB5QWnGpeh2ws+/Iwh5gtjNn5DXksLLPvu6HaW3tuxbgBrSWjrLMmUy9QefcDPAPHZZ2LtGkEj2BlTKtghibF3kotdvRGxyAU9HVCu8FHIGzDx7bTAqoE1Md8APjLkQZBPCBYQAAAABJRU5ErkJggg==" alt="logo-imag"  />
                </Stack>
                <Stack direction="row" justifyContent="flex-end" alignItems="center" className="" spacing={{ xs : 2 , sm: 2 , md: 2 , lg : 4 , xl: 6 }}  >
                  <Button children="Home" className="bg-[transparent] text-[white] lg:text-md text-[13px] capitalize font-semibold hover:text-[#6c5ce7] md:block hidden " />
                  <Button children="Residences" className="bg-[transparent] text-[white] lg:text-md text-[13px] capitalize font-semibold hover:text-[#6c5ce7] md:block hidden " />
                  <Button children="Value" className="bg-[transparent] text-[white] lg:text-md text-[13px] capitalize font-semibold hover:text-[#6c5ce7] md:block hidden " />
                  <Button children="Contact" className="bg-[transparent] text-[white] xl:text-md text-[13px] capitalize font-semibold hover:text-[#6c5ce7] md:block hidden " />
                  <img className="cursor-pointer " onClick={() => setTheme(!theme)} alt="moon icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAZhJREFUSEu1lYExBEEQRd9FgAgQASJABIgAESACRIAIkAERIAMiQATIQD3VczW3N7s7W267amvm6mb/7/79p3fCyDEZGZ8+gmXgEDgF3K8MTaiL4Ai4CmBxf7J9NU8bwV1kLtAbsAG8ADvVyHGwRHABnEfGVvENPC2KwAwFM3aB58h6YQQCbgOXgJUYNvcL+ADW/yPRGvAe0rhXmhSv0YdjwP5UR94Drahr7gG1z8Pft4BESpeTd5LlBKm5uTz5y0q0GhVYSVXkBEn/1NwmwGY0fWkISU5wDZwAZ4D7UuiyB0ASK7Lqxy7JShLdxGhok0BX2ei97IDVp7BS42+s5ATpDtTacT8SEdCK8vgEdOLcsEuNPAgpqhoZYAIqrWNlKnNzVCQ7SrQ1xI5hba3sUJzeo9IsSpfK1Uok6wvlEtz+zFzGEoGHbJqleqF0io0vhWcFlsCYM0jbuPZF9fRjY1iNlbj62FhN4epZZVFeLTwTfV80M9OSTZfkIH4nBC9K2UeQgMzUxrn6WIUyunbOpVqCvia3/j86wS+UkVUZlM9ZYAAAAABJRU5ErkJggg=="/>
                  <Button children="Subscribe" className="bg-[#4834d4] text-[white] xl:text-[15px] md:px-8 px-2 text-[13px] hover:text-[#4834d4] capitalize font-semibold hover:bg-[transparent] " />
                </Stack>
              </Stack>
          {/* </motion.div> */}

        <Drawer openState={showDrawer} onClickFunc={() => setShowDrawer(false)} children={<DrawerComponent />} />
    </>
  );
}

export default Header;
