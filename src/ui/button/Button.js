import React from 'react'
import PropTypes from 'prop-types' 
import './Button.css'

const Button = ({text, backgroundColor, textColor, borderColor,extraStyle, borderRadius, extraClassName, onClickFunction,  disabled}) => {

            const style = {
                  background: backgroundColor,
                  color: textColor,
                   border: `1.5px solid ${borderColor}`,
                   borderRadius: borderRadius,
                  ...extraStyle,
               }

      return (
            <button style = {style} className = {`button ${extraClassName}`} onClick ={onClickFunction} disabled = {disabled}>
                  {text}
            </button>
      )
}

Button.defaultProps = {
      text: "Hello!",
      borderColor: "#ff7e1d",
      textColor: "white",
      extraStyle: {},
      borderRadius: '8px',
      extraClassName: '',
      onClickFunction: (f) => f,
      disabled:false
}

Button.propTypes = {
      text: PropTypes.string,
      backgroundColor: PropTypes.string,
      textColor: PropTypes.string,
      borderColor: PropTypes.string,
      extraStyle: PropTypes.object,
      borderRadius: PropTypes.string,
      extraClassName: PropTypes.string,
      onClickFunction: PropTypes.func
}

export default Button;
