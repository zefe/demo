import { React, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';

import { startChecking } from '../stateManagement/actions/authActions';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';

import { Login } from '../components/Pages/Login';
import { SignUp } from '../components/Pages/SignUp';
import { Loading } from '../components/Common/Loading';
import { Layout } from '../components/Layout/Layout';
import { CustomerList } from '../components/Customers/CustomerList';
import { CustomerDetails } from '../components/Customers/CustomerDetails';


export const AppRouter = () => {

    const dispatch = useDispatch();
    const { checking , uid } = useSelector( state => state.auth)

    useEffect(() => {

        dispatch( startChecking() )

    }, [dispatch])

    if( checking ) {
        return(
            <Loading />
        )
    }


    return (
        <Router>
               <Switch>
                    <PublicRoute 
                        exact 
                        path="/login" 
                        component={ Login }
                        isAuthenticated={ !!uid }
                    />
                    <PublicRoute
                        exact 
                        path="/signup" 
                        component={ SignUp }
                        isAuthenticated={ !!uid }
                    />
                    
                    <Layout>
                        <PrivateRoute 
                            exact 
                            path="/" 
                            component={ CustomerList } 
                            isAuthenticated={ !!uid }
                        />
                        
                        <PrivateRoute 
                            exact 
                            path="/customer/:customerId" 
                            component={ CustomerDetails } 
                            isAuthenticated={ !!uid }
                        />
                    </Layout>

                <Redirect to="/" />

               </Switch>
        </Router>
    )
}
