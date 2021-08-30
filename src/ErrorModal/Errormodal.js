import React from 'react'
import {Card} from "react-bootstrap"
import classes from "./Errormodal.module.css";

function Errormodal(props) {
    return (
        <div className={classes.backdrop} >
            <Card>
                <Card.Header>
                    <h2>
                        {props.title}
                    </h2>
                </Card.Header>
                <Card.Body>
                    {props.body}
                </Card.Body>
                <Card.Footer>
                    <button onClick={props.onbuttonclick} >
                        OK
                    </button>
                </Card.Footer>
            </Card>
        </div>
    )
}

export default Errormodal
