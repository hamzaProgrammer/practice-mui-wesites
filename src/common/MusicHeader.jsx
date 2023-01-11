import React , {useState} from 'react';
import {Box , List, ListItem  , ListItemButton  , ListItemIcon  , useMediaQuery , ListItemText , Divider } from "@mui/material"
import Typography from "../utils/Typography"
import MyButton from "../utils/Button"
import {logoStyle , buttonStyles ,iconStyle} from "./commonStyles"
import SearchIcon from '@mui/icons-material/Search';
import InboxIcon from '@mui/icons-material/Inbox';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from "../utils/Drawer"



const MusicHeader = () => {
    const [ showNotification , setShowNotifications ] = useState(false)
    const lessThanMedium = useMediaQuery('(min-width:768px)');
    const [ showDrawer , setShowDrawer ] = useState(false)

    const DrawerData = () => {
        return (
            <List className=" bg-[pink] " >
                <ListItem disablePadding>
                    <ListItemButton>
                        {/* <ListItemIcon>
                            <InboxIcon />
                        </ListItemIcon> */}
                        <ListItemText primary="Inbox" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                        <ListItemButton>
                            {/* <ListItemIcon>
                                <InboxIcon />
                            </ListItemIcon> */}
                            <ListItemText primary="Inbox" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            {/* <ListItemIcon>
                                <InboxIcon />
                            </ListItemIcon> */}
                            <ListItemText primary="Inbox" />
                        </ListItemButton>
                    </ListItem>
            </List>
        )
    }

    return (
        <>
            <Box className="max-w-[1240px] mx-auto flex justify-between md:px-4 px-1 py-1" >
                <Box className="max-w-max w-[100%] flex justify-between items-center" >
                    <img alt="logo" className="max-w-[50px] max-h-[50px] rounded-md object-cover" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAclBMVEX///8AAACLi4ssLCz7+/vGxsbBwcFxcXH09PQvLy8cHByUlJTd3d3t7e2EhIT5+fnT09N9fX3Ly8uamprj4+OgoKAzMzOxsbF3d3chISG2trapqalRUVEVFRWPj48ICAhGRkY6OjpeXl5NTU1nZ2dBQUH5cZ+PAAADV0lEQVR4nO3ZaXOqMBiGYV5FxQ3ccN9r//9fPAkQ9k49nQamzH19olEgj5C1jgMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACo2geO2XQer9vLRdhUsE5F523WwylUJV21Xwqq5SrhruxJWzVTCdduVsGqlEu7broRVR5Ww253pTiWUtithVdj5hL50fUAcSdcHxLNOeGy7FjaNpesD4kU6PSC6rp541w2IR79nXE0rHfo9M78b9nzzZnvXXq/SUy2u6elhUhRMe5mr9+tZasxfe9fxRPoH6Vc+3EvONS67iryc9HCZrCrnN5FZ6ewwd/I9KfMO+UtuLASqUL1o6GxEzne5BOUPl/nqyCIqm4qMko/VoZ8czieVhLP8uZ/J8trbNp1Q/6YjZ6EexqvmhirhaDDUBh/6l9DeTqjmSY+hYd5xT/VpYVpa+UktUNnk7AxEenvzkHKWWQe7N4dvJzxlr3NGJ6zcxio9mXk4Q1X9tchQ9QRujk44deLD108Snp3kQqk4oVsu/nXBZjE4rpfPe9QqJp56oXZqeTHt9QvGahCZjOPjdEbwdkL1Yoi50tM0AJ3wEF+8fxlaCTc/jQqNPZqQ6ue3KJeWjdNY7yV0Pgr3yBKm7CSMZM9wG6oGNlPv6iLq+m7j/CPMnuG4Px55/5swWCZXG9/SsSZ6hknxZWAvYZ5+fmrImOkRTU7OF+0wajNuEuvNhPqM+NzsnKbaYZ5qf+FTV+8glQVUlLBkmk3vSgm/Ht1OpYTNWqmR4iy3ufPIZh5GXUL1zO+DyOpZTLgbJOIIrvlzsBoVEoamfNjMilTNZ54POXjZiJepS1jskUxnoROmznFR4YvJXLbQ09jsavJULzmRrbr5c1meY+xrEup3M7U0hVErNp5xUT6LabrFeWljCZXP2o+Ovl9TiWzJkHWG3jW3ZjhFRUGuJL1KsM6V+jV9kw337MV6xx/8D1W0R1OdQXbIWif0v//e3xXtBnd6j2aV68y7adNgv92OQCfs9G6wqwfhpueKzdIb3o3serVG7xk2snPZmqt0/D9revV2absOdqkBcdt2HexSK5rw+2/9aV63e9J4PdTYthAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/wD1bCIWZS5UedAAAAAElFTkSuQmCC" />
                    <Typography children="pulse" sx={logoStyle} />
                </Box>
                {
                    lessThanMedium === true ? (
                        <Box className="max-w-max w-[100%] flex justify-between items-center" >
                            <MyButton children="Home" variant="text" sx={buttonStyles} className="myNewNNBtn" />
                            <MyButton children="About" variant="text" sx={buttonStyles} className="myNewNNBtn" />
                            <MyButton children="Contact Us" variant="text" sx={buttonStyles} className="myNewNNBtn" />
                            <MyButton children="Singers" variant="text" sx={buttonStyles} className="myNewNNBtn" />
                        </Box>
                    ) : (
                        null
                    )
                }
                <Box className="max-w-max md:space-x-4 space-x-1 w-[100%] flex justify-between items-center" >
                    <SearchIcon size="25px" style={iconStyle}  />
                    <MyButton children="Upload" variant="text" className="bg-[#00b894] rounded-3xl text-[white] font-medium hover:bg-[white] md:px-4 px-1 hover:text-[#00b894] capitalize hover:border hover:border-#00b894 " />
                    <img onClick={() => setShowNotifications(!showNotification)}  alt="user avatar" className="md:max-w-[50px] md:max-h-[50px] max-w-[35px] max-h-[35px] rounded-md object-cover" src="https://www.shareicon.net/data/512x512/2015/09/18/103160_man_512x512.png" />
                    {
                        lessThanMedium === false ? (
                            <MenuIcon size="25px" className="menuIcon" onClick={() =>setShowDrawer(!showDrawer)} />
                        ) : (
                            null
                        )
                    }
                </Box>
                {
                    showNotification === true ? (
                        <List className=" bg-[pink] absolute top-[8%] right-[7%]" >
                            <ListItem disablePadding>
                                <ListItemButton>
                                    {/* <ListItemIcon>
                                        <InboxIcon />
                                    </ListItemIcon> */}
                                    <ListItemText primary="Inbox" />
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                                    <ListItemButton>
                                        {/* <ListItemIcon>
                                            <InboxIcon />
                                        </ListItemIcon> */}
                                        <ListItemText primary="Inbox" />
                                    </ListItemButton>
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemButton>
                                        {/* <ListItemIcon>
                                            <InboxIcon />
                                        </ListItemIcon> */}
                                        <ListItemText primary="Inbox" />
                                    </ListItemButton>
                                </ListItem>
                        </List>
                    ) : (
                        null
                    )
                }
                {
                    lessThanMedium === false ? (
                        <Drawer openState={showDrawer} onClickFunc={() =>setShowDrawer(false)} children={<DrawerData/>} />
                    ) : (
                        null
                    )
                }
            </Box>
        </>
    );
}

export default MusicHeader;
