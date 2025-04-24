import {Outlet} from 'react-router';
import AdminLayout from '../../hoc/adminLayout';

const Dashboard = () => {
    return(
        <AdminLayout>
            <Outlet/>
        </AdminLayout>
       
    )
}

export default Dashboard;