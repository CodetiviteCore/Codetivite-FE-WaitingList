import "./input.scss"

export const Input = ({ placeholder, icon, finish, ...otherProps }) => {
   
    return (
        <div className={`input ${finish && 'green'}`}>
            <img src={icon} alt="icon"/>
            <input
                {...otherProps}
                placeholder={placeholder}
            />
        </div>

    )
}
