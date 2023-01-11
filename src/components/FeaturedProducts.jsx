import React from 'react';
import { Box , List , ListItem  , ListItemButton } from '@mui/material';
import Typography from "../utils/Typography"
import Button from "../utils/Button"

const FeaturedProducts = () => {

    // styling components
    const firstTypographyStyle= {textAlign : "center" , color : '#2d3436' , fontSize : {xs: "22px" , md : "25px" , lg : "28px" , fontWeight : 600 }}
    const listStyle = {
        fontWeight : 600,
        fontSize : "17px"
    }
    const featuredProductName = {
        fontWeight : 600,
        fontSize : "17px",
    }
    const featuredProductDesc = {
        fontWeight : 400,
        fontSize : "13px",
    }
    const featuredProductPrice = {
        fontWeight : 700,
        fontSize : "22px",
    }
    const featuredProductButton = {
        fontWeight : 550,
        fontSize : "12px",
        //border : "1px solid #2d3436",
        borderRadius : "10px",
        padding : 0,
        paddingTop : "5px",
        paddingBottom : "5px",
    }

    return (
        <>
            <Box className="flex flex-col pb-4" >
                <Typography  children="Featured Products" sx={firstTypographyStyle} />
                <Box className="flex md:flex-row flex-col max-h-[300px] overflow-y-auto mt-4" >
                    <Box className="flex flex-col md:max-width min-w-[250px]" >
                        <List>
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <Typography children="All" sx={listStyle} />
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <Typography children="Skin Care" sx={listStyle} />
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <Typography children="Conditioners" sx={listStyle} />
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <Typography children="Foundations" sx={listStyle} />
                                </ListItemButton>
                            </ListItem>
                        </List>
                    </Box>
                    <Box className="flex sm:flex-row flex-col flex-wrap  overflow-y-auto" >
                        <Box className="flex flex-row mr-2 mb-2 bg-[white] rounded-md p-3 max-w-[200px] max-h-[150px]" >
                            <Box className="flex flex-col min-w-[55%]" >
                                <Typography children="NATURE" sx={featuredProductName} />
                                <Typography children="super skin care" sx={featuredProductDesc} />
                                <Typography children="25$" sx={featuredProductPrice} />
                                <Button children="view now" variant="link" size="small" sx={featuredProductButton} />
                            </Box>
                            <img alt="product imag" className='max-w-[48%] max-h-[100%] ' src="https://media-asia-cdn.oriflame.com/productImage/?externalMediaId=product-management-media%2F35958%2F35958.png%3Fversion%3D1607612428&w=1440&bc=%23f5f5f5&ib=%23f5f5f5&h=1440&q=30" />
                        </Box>
                        <Box className="flex flex-row mr-2 mb-2 bg-[white] rounded-md p-3 max-w-[200px] max-h-[150px]" >
                            <Box className="flex flex-col min-w-[55%]" >
                                <Typography children="NATURE" sx={featuredProductName} />
                                <Typography children="super skin care" sx={featuredProductDesc} />
                                <Typography children="25$" sx={featuredProductPrice} />
                                <Button children="view now" variant="link" size="small" sx={featuredProductButton} />
                            </Box>
                            <img alt="product imag" className='max-w-[48%] max-h-[100%] ' src="https://media-asia-cdn.oriflame.com/productImage/?externalMediaId=product-management-media%2F35958%2F35958.png%3Fversion%3D1607612428&w=1440&bc=%23f5f5f5&ib=%23f5f5f5&h=1440&q=30" />
                        </Box>
                        <Box className="flex flex-row mr-2 mb-2 bg-[white] rounded-md p-3 max-w-[200px] max-h-[150px]" >
                            <Box className="flex flex-col min-w-[55%]" >
                                <Typography children="NATURE" sx={featuredProductName} />
                                <Typography children="super skin care" sx={featuredProductDesc} />
                                <Typography children="25$" sx={featuredProductPrice} />
                                <Button children="view now" variant="link" size="small" sx={featuredProductButton} />
                            </Box>
                            <img alt="product imag" className='max-w-[48%] max-h-[100%] ' src="https://media-asia-cdn.oriflame.com/productImage/?externalMediaId=product-management-media%2F35958%2F35958.png%3Fversion%3D1607612428&w=1440&bc=%23f5f5f5&ib=%23f5f5f5&h=1440&q=30" />
                        </Box>
                        <Box className="flex flex-row mr-2 mb-2 bg-[white] rounded-md p-3 max-w-[200px] max-h-[150px]" >
                            <Box className="flex flex-col min-w-[55%]" >
                                <Typography children="NATURE" sx={featuredProductName} />
                                <Typography children="super skin care" sx={featuredProductDesc} />
                                <Typography children="25$" sx={featuredProductPrice} />
                                <Button children="view now" variant="link" size="small" sx={featuredProductButton} />
                            </Box>
                            <img alt="product imag" className='max-w-[48%] max-h-[100%] ' src="https://media-asia-cdn.oriflame.com/productImage/?externalMediaId=product-management-media%2F35958%2F35958.png%3Fversion%3D1607612428&w=1440&bc=%23f5f5f5&ib=%23f5f5f5&h=1440&q=30" />
                        </Box>
                        <Box className="flex flex-row mr-2 mb-2 bg-[white] rounded-md p-3 max-w-[200px] max-h-[150px]" >
                            <Box className="flex flex-col min-w-[55%]" >
                                <Typography children="NATURE" sx={featuredProductName} />
                                <Typography children="super skin care" sx={featuredProductDesc} />
                                <Typography children="25$" sx={featuredProductPrice} />
                                <Button children="view now" variant="link" size="small" sx={featuredProductButton} />
                            </Box>
                            <img alt="product imag" className='max-w-[48%] max-h-[100%] ' src="https://media-asia-cdn.oriflame.com/productImage/?externalMediaId=product-management-media%2F35958%2F35958.png%3Fversion%3D1607612428&w=1440&bc=%23f5f5f5&ib=%23f5f5f5&h=1440&q=30" />
                        </Box>
                        <Box className="flex flex-row mr-2 mb-2 bg-[white] rounded-md p-3 max-w-[200px] max-h-[150px]" >
                            <Box className="flex flex-col min-w-[55%]" >
                                <Typography children="NATURE" sx={featuredProductName} />
                                <Typography children="super skin care" sx={featuredProductDesc} />
                                <Typography children="25$" sx={featuredProductPrice} />
                                <Button children="view now" variant="link" size="small" sx={featuredProductButton} />
                            </Box>
                            <img alt="product imag" className='max-w-[48%] max-h-[100%] ' src="https://media-asia-cdn.oriflame.com/productImage/?externalMediaId=product-management-media%2F35958%2F35958.png%3Fversion%3D1607612428&w=1440&bc=%23f5f5f5&ib=%23f5f5f5&h=1440&q=30" />
                        </Box>
                        <Box className="flex flex-row mr-2 mb-2 bg-[white] rounded-md p-3 max-w-[200px] max-h-[150px]" >
                            <Box className="flex flex-col min-w-[55%]" >
                                <Typography children="NATURE" sx={featuredProductName} />
                                <Typography children="super skin care" sx={featuredProductDesc} />
                                <Typography children="25$" sx={featuredProductPrice} />
                                <Button children="view now" variant="link" size="small" sx={featuredProductButton} />
                            </Box>
                            <img alt="product imag" className='max-w-[48%] max-h-[100%] ' src="https://media-asia-cdn.oriflame.com/productImage/?externalMediaId=product-management-media%2F35958%2F35958.png%3Fversion%3D1607612428&w=1440&bc=%23f5f5f5&ib=%23f5f5f5&h=1440&q=30" />
                        </Box>
                        <Box className="flex flex-row mr-2 mb-2 bg-[white] rounded-md p-3 max-w-[200px] max-h-[150px]" >
                            <Box className="flex flex-col min-w-[55%]" >
                                <Typography children="NATURE" sx={featuredProductName} />
                                <Typography children="super skin care" sx={featuredProductDesc} />
                                <Typography children="25$" sx={featuredProductPrice} />
                                <Button children="view now" variant="link" size="small" sx={featuredProductButton} />
                            </Box>
                            <img alt="product imag" className='max-w-[48%] max-h-[100%] ' src="https://media-asia-cdn.oriflame.com/productImage/?externalMediaId=product-management-media%2F35958%2F35958.png%3Fversion%3D1607612428&w=1440&bc=%23f5f5f5&ib=%23f5f5f5&h=1440&q=30" />
                        </Box>
                        <Box className="flex flex-row mr-2 mb-2 bg-[white] rounded-md p-3 max-w-[200px] max-h-[150px]" >
                            <Box className="flex flex-col min-w-[55%]" >
                                <Typography children="NATURE" sx={featuredProductName} />
                                <Typography children="super skin care" sx={featuredProductDesc} />
                                <Typography children="25$" sx={featuredProductPrice} />
                                <Button children="view now" variant="link" size="small" sx={featuredProductButton} />
                            </Box>
                            <img alt="product imag" className='max-w-[48%] max-h-[100%] ' src="https://media-asia-cdn.oriflame.com/productImage/?externalMediaId=product-management-media%2F35958%2F35958.png%3Fversion%3D1607612428&w=1440&bc=%23f5f5f5&ib=%23f5f5f5&h=1440&q=30" />
                        </Box>
                        <Box className="flex flex-row mr-2 mb-2 bg-[white] rounded-md p-3 max-w-[200px] max-h-[150px]" >
                            <Box className="flex flex-col min-w-[55%]" >
                                <Typography children="NATURE" sx={featuredProductName} />
                                <Typography children="super skin care" sx={featuredProductDesc} />
                                <Typography children="25$" sx={featuredProductPrice} />
                                <Button children="view now" variant="link" size="small" sx={featuredProductButton} />
                            </Box>
                            <img alt="product imag" className='max-w-[48%] max-h-[100%] ' src="https://media-asia-cdn.oriflame.com/productImage/?externalMediaId=product-management-media%2F35958%2F35958.png%3Fversion%3D1607612428&w=1440&bc=%23f5f5f5&ib=%23f5f5f5&h=1440&q=30" />
                        </Box>
                        <Box className="flex flex-row mr-2 mb-2 bg-[white] rounded-md p-3 max-w-[200px] max-h-[150px]" >
                            <Box className="flex flex-col min-w-[55%]" >
                                <Typography children="NATURE" sx={featuredProductName} />
                                <Typography children="super skin care" sx={featuredProductDesc} />
                                <Typography children="25$" sx={featuredProductPrice} />
                                <Button children="view now" variant="link" size="small" sx={featuredProductButton} />
                            </Box>
                            <img alt="product imag" className='max-w-[48%] max-h-[100%] ' src="https://media-asia-cdn.oriflame.com/productImage/?externalMediaId=product-management-media%2F35958%2F35958.png%3Fversion%3D1607612428&w=1440&bc=%23f5f5f5&ib=%23f5f5f5&h=1440&q=30" />
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    );
}

export default FeaturedProducts;
