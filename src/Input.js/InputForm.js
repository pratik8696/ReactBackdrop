import React,{useState} from 'react'
import {Form,Button} from 'react-bootstrap'
import Divs from './Divs';
import Errormodal from '../ErrorModal/Errormodal';
function InputForm(props) {


    const [name,setname]=useState('');
    const [age,setage]=useState('');
    const [error,seterror]=useState();

    function namehandler(e)
    {
        setname(e.target.value);
    }
    function agehandler(e)
    {
        setage(e.target.value);
    }
   
    function formhandler(e) {
        e.preventDefault();

        


        const namedetails={
            id:Math.random(),
        fullname:name,
        personage:age
        };


        if (name.trim().length == 0 && age.trim().length==0) {
            seterror(
                {
                    title: "Enter Values bhaiiiiiiiiiiiiiiiiiiiii",
                    body: "Enter valid input"
                }
            )
            return;
        }
        if(name.trim().length==0)
        {
            seterror(
                {
                    title:"Enter Fullname",
                    body:"Enter valid input"
                }
            )
            return ;
        }
        if (age.trim().length == 0) {
            seterror(
                {
                    title: "Enter Age",
                    body: "Enter valid input"
                }
            )
            return;
        }

        props.liftstate(namedetails);
        setname(' ');
        setage(' ');

    }


    function errorhandler()
    {
        seterror(null);
    }

    return (
        <div className="formsize">
            {error && <Errormodal title={error.title} body={error.body} onbuttonclick={errorhandler} /> }
            <Form onSubmit={formhandler} >
                    <Form.Label>Validation Form</Form.Label>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="text" placeholder="Enter Name" onChange={namehandler} value={name} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="text" placeholder="Enter Age" onChange={agehandler} value={age} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            <Divs />
        </div>
    )
}

export default InputForm
