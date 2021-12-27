import React, {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'


const Alert = () => {
    const [style, setStyle] = useState({
      top : "-200px"
    })
    const dispatch = useDispatch();
    const alert = useSelector(state => state?.alert?.message)
    console.log(alert);
    useEffect(()=>{
        if(alert)
            setStyle({top:'0px'})

        else
            setStyle({top:'-200px'})   
    },[alert])
    return (
        <div className='alert-container d-flex flex-column' >
            <div className="alert-content">
                {alert}
            </div>
            {/* <div className="alert-btn-container d-flex">
                <div className="alert-btn" onClick={()=> dispatch(clearAlert())}>
                    Close
                </div>
            </div> */}
        </div>
    )
}

export default Alert