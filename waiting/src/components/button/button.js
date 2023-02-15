import "./button.scss"

export const Button = ({ children, type, buttonEnabled, ...otherProps }) => {
  return (

    <>
      {
        type === "large" ?
          (
            <button
              {...otherProps}
              className={`button2 ${buttonEnabled ? "enabled" : null}`}

            >
              {children}
            </button>
          )
          :
          <button
            {...otherProps} 
          >
            {children}
          </button>


      }

    </>


  )
}
