import { Avatar } from '@material-ui/core';
import React from 'react';
import { selectUser } from '../features/userSlice';
import './Sidebar.css';
import {useSelector} from 'react-redux';

function  Sidebar() {

    const user = useSelector(selectUser)

    const recentItem = (topic) =>(
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    )

    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img src="https://images.pexels.com/photos/547114/pexels-photo-547114.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""/>
                <Avatar src={user.photoUrl}>{user.email[0]}</Avatar>
                <h2>{user.displayName}</h2>
                <h4>{user.email}</h4>
            </div>
            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who viewed you</p>
                    <p className="sidebar__statNumber">2,543</p>
                </div>
                <div className="sidebar__stat">
                    <p>Who viewed you</p>
                    <p className="sidebar__statNumber">3,245</p>
                </div>
            </div>
            <div className="sidebar__bottom">
                <p>Recent</p>
                {recentItem('reactJs')}
                {recentItem('Programming')}
                {recentItem('Software Design')}
                {recentItem('Developer')}
                {recentItem('react Native')}
                {recentItem('NodeJs')}
            </div>
        </div>
    )
}

export default Sidebar  
