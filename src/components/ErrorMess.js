import React from 'react'
import { ErrorMessage } from "@hookform/error-message";
const ErrorMess = (props) => {
  return (
    <ErrorMessage
    errors={props.errors}
    name={props.name}
    render={({ messages }) => {
      return messages
        ? Object.entries(messages).map(([type, message]) => (
            <div className="error" key={type}>
              {message}
            </div>
          ))
        : null;
    }}
  />
  )
}

export default ErrorMess