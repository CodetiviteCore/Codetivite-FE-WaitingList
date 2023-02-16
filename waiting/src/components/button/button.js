import "./button.scss"

export const Button = ({ children, buttonType, buttonEnabled, ...otherProps }) => {
  return (

    <>
      {
        buttonType === "large" ?
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
