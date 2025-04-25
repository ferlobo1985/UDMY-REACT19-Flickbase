import { useEffect } from "react";
import { useNavigate, Link as NavLink } from 'react-router'
import { useSelector, useDispatch} from 'react-redux'
import { AdminTitle } from "../../../utils/tools";

import PaginateComponent from "./paginate";
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

    /// PAGINATE FUNC


    const goToEdit = (id) => {
        navigate(`/dashboard/articles/edit/${id}`)
    }

     /// PAGINATE FUNC

    useEffect(()=>{
        dispatch(getPaginatedArticles({}))
    },[])

    return(
        <>
            <AdminTitle title="Articles"/>
            <div className="articles_table">
                <ButtonToolbar className="mb-3">
                    <ButtonGroup className="me-2">
                        <Button as={NavLink} to='/dashboard/articles/add' variant="secondary">
                            Add article
                        </Button>
                    </ButtonGroup>
                    <form>
                        <InputGroup>
                            <InputGroup.Text id="btngr1">@</InputGroup.Text>
                            <FormControl
                                type="text"
                                placeholder="Search"
                            />
                        </InputGroup>
                    </form>
                </ButtonToolbar>

                <>
                    <PaginateComponent
                        articles={articles.adminArticles}
                        goToEdit={(id)=>goToEdit(id)}
                    />
                </>

            </div>
        </>
    )
}

export default AdminArticles