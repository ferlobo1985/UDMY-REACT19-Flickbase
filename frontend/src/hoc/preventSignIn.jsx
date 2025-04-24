import { Navigate, useLocation } from "react-router";

const PreventSignIn = (props) => {
    let location = useLocation()

    return(
        <>
            { props.users.auth ?
                <Navigate to="/dashboard" state={{from:location}} replace/>
            :
                props.children
            }
        </>
    )
}

export default PreventSignIn;