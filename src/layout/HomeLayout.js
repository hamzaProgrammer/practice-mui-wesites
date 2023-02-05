import React , {lazy , Suspense } from "react"
import { BrowserRouter as Router, Route, Routes as Switch } from 'react-router-dom'
// import Helmet from "react-hemet"
import {Box} from "@mui/material"

const Header = lazy(() => import('../common/Header'))
const Footer = lazy(() => import('../common/Footer'))
const ContentArea = lazy(() => import('../common/ContentArea'))
const Home = lazy(() => import('../pages/Home'))

const HomeLayout = () => {
  return (
    <>
        <Box>
            <ContentArea >
                <Suspense fallback={<div />}>
                    <Switch>
                        <Route exact path="/"  element={<Home />} />
                        {/* <Route exact path="/users/*"  element={<Users />} />
                        <Route exact path="/students/*"  element={<Students />} />
                        <Route exact path="/questions"  element={<Questions />} /> */}
                    </Switch>
                </Suspense>
            </ContentArea>
            <Footer />
        </Box>
    </>
  );
}

export default HomeLayout;
