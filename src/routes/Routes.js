import React, { Suspense, lazy} from 'react'
import { BrowserRouter as Router, Route, Routes as Switch } from 'react-router-dom'

//const Login = lazy(() => import('../pages/auth/Login'))
const HomeLayout = lazy(() => import('../layout/HomeLayout'))
const HomeAnimatedLayout = lazy(() => import('../layout/AnimatedWebsite'))
const PortfolioLayout = lazy(() => import('../layout/PortfolioWebsite'))
const MusicLayout = lazy(() => import('../layout//MusicLayout'))
const AdvanceWebsite = lazy(() => import('../layout/AdvancedWebsite'))

const  Routes = () => {
    if(!localStorage.getItem(process.env.REACT_APP_ACCESS_TOKEN))
    {
        return (
                <Suspense fallback={<div />}>
                    <Router>
                        <Switch>
                            <Route exact path="/" element={<HomeLayout/>} />
                            <Route exact path="/animated" element={<HomeAnimatedLayout/>} />
                            <Route exact path="/portfolio" element={<PortfolioLayout/>} />
                            <Route exact path="/music" element={<MusicLayout/>} />
                            <Route exact path="/advance-website" element={<AdvanceWebsite/>} />
                            {/* <Route exact path="/" element={<MainLayout/>} />
                            <Route path="*"  element={<Login />} />
                            <Route exact path="/forget-password" element={<ForgetPassword/>} /> */}
                        </Switch>
                    </Router>
                </Suspense>
        )
    }
    return (
        <>
            
        </>
    )
}

export default Routes;