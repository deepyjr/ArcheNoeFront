import React from 'react'
import { AuthContext } from "../../Store/AuthContext";
import { BrowserRouter } from "react-router-dom";
import Layout from '../../Layout/Layout';
import Login from '../../Pages/Login';

function CheckConnection() {
    const { authState } = React.useContext(AuthContext);
    const [body, setBody] = React.useState()

    React.useEffect(()=>{
        if(authState.accessToken !== null){
            setBody(<BrowserRouter><Layout/></BrowserRouter>);
        }
        else if ( authState.accessToken === null){
            setBody(<BrowserRouter><Layout/></BrowserRouter>);
            // setBody(<Login/>)
        }
        else {
        }
    }, [authState.token])

    return (
        <div>
           {body} 
        </div>
    )
}

export default CheckConnection
