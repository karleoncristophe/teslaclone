import React from 'react'

export const LogoSVG: React.FC = ({ ...props }) => {
  return (
    
         <img src="https://lh3.googleusercontent.com/proxy/lUU9c30_trKdftyAO9RiL5h6wJnaX-DP97VCEDq5xfD4U_T_WsYLTKLY4WUAvYQTD9I_B6JtJrPTjCAkS2LxrktjfXRT4rv_I4AuNTMViF8W0ikgiNRV2FMbVKAZI-w" alt="" {...props}/>
      
    
  )
}

export const BurgerSVG: React.FC = ({ ...props }) => {
  return (
    <svg viewBox="0 0 45 30" fill="none" {...props}>
      <path fill="#000" d="M0 0h45v5H0zM0 25h45v5H0zM0 13h45v5H0z" />
    </svg>
  )
}