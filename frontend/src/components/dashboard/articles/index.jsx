import { useEffect } from "react";
import { useNavigate, Link as NavLink } from 'react-router'
import { useSelector, useDispatch} from 'react-redux'
import { AdminTitle } from "../../../utils/tools";

import { getPaginatedArticles } from '../../../store/actions/articles'

import {
    Modal,
    Button,
    ButtonToolbar,
    ButtonGroup,
    InputGroup,
    FormControl
} from 'react-bootstrap'

const AdminArticles = () => {
    const articles = useSelector(state=>state.articles);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(()=>{
        dispatch(getPaginatedArticles({}))
    },[])

    return(
        <>
            <AdminTitle title="Articles"/>
            Admin articles index
        </>
    )
}

export default AdminArticles