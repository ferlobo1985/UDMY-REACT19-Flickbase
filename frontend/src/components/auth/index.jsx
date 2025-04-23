import { useState } from "react";
import { useFormik} from 'formik'
import * as Yup from 'yup';

import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux'

import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

const Auth = ()=>{
    const [register, setRegister] = useState(false);
    let navigate = useNavigate()
    // redux
    const users = useSelector(state=>state.users);
    const notifications = useSelector(state=>state.notifications);
    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues:{email:'',password:''},
        validationSchema:Yup.object({
            email:Yup.string()
            .required('Sorry, the email is required')
            .email('This is not a valid email'),
            password:Yup.string()
            .required('Sorry, the password is required')
        }),
        onSubmit:(values)=>{
            onHandleSubmit(values)
        }
    })

    const onHandleSubmit = (values) => {
        if(register){
            /// dispatch register
        } else {
            /// dispatch sign in
        }
    }

    return(
        <>
            <div className="auth_container">
                <h1>Authenticate</h1>
                { users.loding ?
                    <div>....loading</div>
                :
                    <Box 
                        sx={{
                            '& .MuiTextField-root':{width:'100%',marginTop:'20px'}
                        }}
                        component="form"
                        onSubmit={formik.handleSubmit}
                    >

                        <TextField
                            name="email"
                            label="Enter your email"
                            variant="outlined"
                            {...formik.getFieldProps('email')}
                        />

                        <TextField
                            name="password"
                            label="Enter your password"
                            variant="outlined"
                            type="password"
                            {...formik.getFieldProps('password')}
                        />


                    </Box>
                }

            </div>
        </>
    )
}

export default Auth;