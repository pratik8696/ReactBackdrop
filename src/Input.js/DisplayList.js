import React from 'react'
import Divs from './Divs'
function DisplayList(props) {
    return (
        <div>
            {props.tobedisplayed.map((items)=>{
                return <Divs 
                fullname={items.fullname}
                personage={items.personage}
                />
            })}
        </div>
    )
}



export default DisplayList
