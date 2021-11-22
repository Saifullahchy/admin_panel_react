import React from 'react'
import "./topbar.css"
import logo from "../../../assets/images/Logo.png"
import {Notifications, Translate , SettingsSuggest} from '@mui/icons-material';
export const Topbar = () => {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <img src={logo} alt="" className="logo" />
                </div>
                <div className="topRight">
                    <div className="topbarIcons">
                        <div className="topbarIconContainer">
                        <Notifications/>
                        <span className="topIconBag">2</span>
                        </div>
                    </div>

                    <div className="topbarIcons">
                        <div className="topbarIconContainer">
                        <Translate/>
                        <span className="topIconBag">en</span>
                        </div>
                    </div>

                    <div className="topbarIcons">
                        <div className="topbarIconContainer">
                        <SettingsSuggest/>
                        
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Topbar;