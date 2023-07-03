import React from "react";
import './header.css'


const Header = () => {
    return(
        <div>
            <div className="header">LOGO</div>
            <div className="row">
                    <svg className="person" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <circle cx="12.4597" cy="8.18919" r="3.68919" stroke="#333333"/>
                        <path d="M4.5 19.3379H19.5" stroke="#333333"/>
                        <path d="M4.5 19.84C4.5 16.4347 8.84699 13.9134 12.2143 14.0023C15.4328 14.0872 19.5 16.4347 19.5 19.84" stroke="#333333"/>
                    </svg>
                    <svg className="favorite" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M11.9004 7.0948C10.7002 1.47892 1.40917 5.90389 5.76074 11.6018C10.1123 17.2996 12.4004 19.4908 12.4004 19.4908" stroke="#333333"/>
                        <path d="M11.8943 7.0948C13.0945 1.47892 22.7306 5.90389 18.379 11.6018C14.0275 17.2996 11.7002 19.5 11.7002 19.5" stroke="#333333"/>
                        <path d="M11.3911 6.70752L12.4044 6.70757L12.3835 7.24079H11.3911V6.70752Z" fill="#333333"/>
                    </svg>
                    <svg className="bag" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M5.25468 10.5659C5.13958 9.11201 6.2884 7.86865 7.74689 7.86865H16.2531C17.7116 7.86865 18.8604 9.11201 18.7453 10.566L18.2203 17.1975C18.1174 18.4977 17.0323 19.5002 15.7281 19.5002H8.27189C6.96769 19.5002 5.88261 18.4977 5.77968 17.1975L5.25468 10.5659Z" stroke="#333333"/>
                        <path d="M7.99993 12.5C7.99993 12.5 7.78323 4 11.9999 4C16.2167 4 15.9999 12.5 15.9999 12.5" stroke="#333333"/>
                    </svg>
                    
            </div>
            <div className="reactangle"></div>
        </div>
    ) 
}

export default Header;