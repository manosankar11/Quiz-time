import React from 'react'

const ErrorMessage = ({children}) => {
    return (
        <div 
            style={{
                width: "70%",
                padding: 10,
                marginBottom: 10,
                borderRadius:4,
                backgroundColor:"#ff3333",
                textAlign:"center",
                textTransform: "capitalize"
                
            }}
        >
            {children}
        </div>
    )
}

export default ErrorMessage
