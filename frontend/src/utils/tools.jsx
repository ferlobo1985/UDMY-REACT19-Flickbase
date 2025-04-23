import CircularProgress from '@mui/material/CircularProgress';


export const errorHelper = (formik,value) => ({
  error:formik.errors[value] && formik.touched[value]?true:false,
  helperText: formik.errors[value] && formik.touched[value] ?  formik.errors[value]:null 
})

export const Loader = () => {
    <div className='root_loader'>
        <CircularProgress/>
    </div>
}