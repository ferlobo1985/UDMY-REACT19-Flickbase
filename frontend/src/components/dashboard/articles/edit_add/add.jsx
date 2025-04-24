import { useEffect, useRef } from "react";
import { AdminTitle, errorHelper, Loader } from "../../../../utils/tools";
import { useNavigate } from 'react-router'

/// FORMIK
import { formValues, validation} from './validationSchema'
import { useFormik, FieldArray, FormikProvider } from 'formik'

/// REDUX
import { useSelector, useDispatch } from 'react-redux'

// MUI
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button' 
import Divider from '@mui/material/Divider' 
import Chip from '@mui/material/Chip'
import Paper from '@mui/material/Paper'
import InputBase from '@mui/material/InputBase'
import IconButton from '@mui/material/IconButton'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import FormHelperText from '@mui/material/FormHelperText'
import InputLabel from '@mui/material/InputLabel';
import AddIcon from '@mui/icons-material/Add';


const AddArticle = () => {
    const articles = useSelector(state=>state.articles);
    const dispatch = useDispatch();
    let navigate = useNavigate();

    const formik = useFormik({
        enableReinitialize:true, 
        initialValues:formValues,
        validationSchema:validation,
        onSubmit:(values)=>{
            console.log(values)
        }
    })


    return(
        <>
            <AdminTitle title="Add Article"/>
            AddArticle
        </>
    )
}

export default AddArticle