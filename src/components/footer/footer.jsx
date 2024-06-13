import React from "react";
import "./footer.scss";
import iconSvg from "../../img/github_icon.svg"; 
import portfolioIcon from "../../img/isabel-matula-icon.svg"; 

export const Footer = () => {

    return (
        <div className="footer">
            <div className="icons-container">
                <a href="https://github.com/IsabelWen" target="_blank" rel="noopener noreferrer">
                    <img src={iconSvg} alt="Github" style={{width: '30px', height: '30px'}}/>
                </a>
                <a href="https://isabelwen.github.io/portfolio-website/" target="_blank" rel="noopener noreferrer">
                    <img src={portfolioIcon} alt="Portfolio" style={{width: '30px', height: '30px'}}/>
                </a>
            </div>
        </div>
    );
};
