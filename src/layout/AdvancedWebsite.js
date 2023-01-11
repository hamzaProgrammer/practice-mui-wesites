import React , {lazy , Suspense } from "react"
import { BrowserRouter as Router, Route, Routes as Switch } from 'react-router-dom'
import {Box} from "@mui/material"

const Header = lazy(() => import('../common/AdvanceHeader'))
const Footer = lazy(() => import('../common/AdvanceFooter'))
const ContentArea = lazy(() => import('../common/ContentArea'))
const Home = lazy(() => import('../pages/AdvanceWebsiteHome'))

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
