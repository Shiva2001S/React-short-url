import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
const Temp = ({obj}) => {
    const {url} = useParams();
    // url = toString(url);
    console.log(url, typeof(url));
    console.log(obj);
    const navigate = useNavigate();
    if(url in obj){
      console.log("yes");
      console.log(url);
    }
    useEffect(()=>{
      console.log("yes2");
      console.log('obj : ',obj[url]);
      // navigate('https://' + obj[url]);
      navigate('https://www.google.com');
      // window.location.href = obj[url];
    },[])
  return (

    <div>
      This is temp : 
      {url}
    </div>
  )
}

export default Temp;



