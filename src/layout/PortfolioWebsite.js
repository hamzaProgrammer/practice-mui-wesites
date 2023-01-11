import React , {lazy , Suspense } from "react"
import { BrowserRouter as Router, Route, Routes as Switch } from 'react-router-dom'
import {Box} from "@mui/material"

const Header = lazy(() => import('../common/PortfolioHeader'))
const Footer = lazy(() => import('../common/PortfolioFooter'))
const ContentArea = lazy(() => import('../common/ContentArea'))
const Home = lazy(() => import('../pages/PortfolioWebsite'))

const HomeLayout = () => {
  return (
    <>
        <Box>
            <Header />
            <ContentArea >
                <Suspense fallback={<div />}>
                    <Switch>
                        <Route exact path="/"  element={<Home />} />
                    </Switch>
                </Suspense>
            </ContentArea>
            <Footer />
        </Box>
    </>
  );
}

export default HomeLayout;
