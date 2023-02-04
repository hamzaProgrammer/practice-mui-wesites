import React, { Suspense, lazy} from 'react'
import { BrowserRouter as Router, Route, Routes as Switch } from 'react-router-dom'

//const Login = lazy(() => import('../pages/auth/Login'))
const HomeLayout = lazy(() => import('../layout/HomeLayout'))


const  Routes = () => {
    if(!localStorage.getItem(process.env.REACT_APP_ACCESS_TOKEN))
    {
        return (
                <Suspense fallback={<div />}>
                    <Router>
                        <Switch>
                            <Route exact path="/" element={<HomeLayout/>} />
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