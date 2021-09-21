import React from 'react'
import "./Top.css"
import {NotificationsNone, Language, Settings} from '@material-ui/icons';

export default function Top() {
    return (
        <div className="top">
            <div className="topWrapper">
            <div className="topLeft">
                <span className="titulo">Loja Top</span>
            </div>
            <div className="topRight">
                <div className="topSequencia">
                    <NotificationsNone/>
                    <span className="topIcons">2</span>
                </div>
                <div className="topSequencia">
                    <Language/>
                </div>
                <div className="topSequencia">
                    <Settings/>
                </div>
                    <img src="https://avatars.githubusercontent.com/u/88510972?s=400&u=3238c6b6ceb0ed84fc259a450719ff95a7cccd06&v=4" alt="" className="topAvatar" />
            </div>
            </div>
        </div>
    )
}

