import React,{useState} from 'react'
import InputForm from './InputForm'
import DisplayList from './DisplayList'
import Errormodal from '../ErrorModal/Errormodal'
const namedetails=[
    {fullname:"ramesh",
    personage:"30"},
]
function InputList(props) {

    const [list,setlist]=useState(namedetails)

    function handledata(e) 
    {
        // console.log(e);
            setlist((prevValue)=>{
                return [e,...namedetails]
            })
            // console.log(list);
    }
    return (
        <div>
           
            <InputForm liftstate={handledata} />
            <DisplayList tobedisplayed={list} />
        </div>
    )
}

export default InputList
