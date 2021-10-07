import { Button } from '@material-ui/core';
import React, { useEffect } from 'react'
import { useHistory } from 'react-router'
import './Result.css'

const Result = ({ name, score }) => {
    const history = useHistory();
    useEffect(() => {
       
    }, [name, history]);
    return (
        <div className="results">
            <span className="scores">Final Score : {score}/10</span>
            <Button
                variant="contained"
                color="secondary"
                size="large"
                style={{ alignSelf: "center",marginTop:20,backgroundColor:'#ff4d4d'}}
                href="/"
            >
                GO To HomePage
            </Button>
        </div>
    )
}

export default Result
