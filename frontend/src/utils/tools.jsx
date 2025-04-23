import CircularProgress from '@mui/material/CircularProgress';
import { toast } from 'react-toastify'


export const errorHelper = (formik,value) => ({
  error:formik.errors[value] && formik.touched[value]?true:false,
  helperText: formik.errors[value] && formik.touched[value] ?  formik.errors[value]:null 
})

export const Loader = () => (
    <div className='root_loader'>
        <CircularProgress/>
    </div>
)

export const showToast = (type,msg) => {
    switch(type){
      case 'SUCCESS':
          toast.success(msg,{
            position:'bottom-right'
          })
      break;
      case 'ERROR':
          toast.error(msg,{
            position:'bottom-right'
          })
      break;
      default:
        return false
    }
}