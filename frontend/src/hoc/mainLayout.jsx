import { Container } from "react-bootstrap"
import { ToastContainer } from 'react-toastify';

const MainLayout = (props) =>{
    return(
        <Container className="app_container mb-5">
            {props.children}
            <ToastContainer/>
        </Container>
    )
}

export default MainLayout;