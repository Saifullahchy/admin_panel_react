import React from 'react'
import './user.css'
import {userRows} from '../home/dummyData'
import { CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Publish } from '@mui/icons-material'

export default function User() {
    return (
       <div className="user">
           <div className="userTitleContainer">
               <h1 className="userTitle">Edit User</h1>
               <button className="userAddButton">Create User</button>       
           </div>
           <div className="userContainer">
                   <div className="userShow">
                       <div className="userShowTop">
                           <img className="userShowImg" src="https://st2.depositphotos.com/1009634/7235/v/950/depositphotos_72350117-stock-illustration-no-user-profile-picture-hand.jpg" alt="" />
                           <div className="userShowTopTitle">
                               <span className="userShowUsername">Saifullah Chowdhury</span>
                                <span className="userShowUserTitle">Software Engineer</span>
                           </div>
                      </div>
                      <div className="userShowBottom">
                          <span className="userShowTitle">Account Details</span>
                          <div className="userShowInfo">
                              <PermIdentity className="userShowIcon"/>
                              <span className="userShowInfoTitle">safchy1123</span>
                          </div>
                          <div className="userShowInfo">
                              <CalendarToday className="userShowIcon"/>
                              <span className="userShowInfoTitle">10.12.1999</span>
                          </div>
                          <span className="userShowTitle">Contact Details</span>
                          <div className="userShowInfo">
                              <PhoneAndroid className="userShowIcon"/>
                              <span className="userShowInfoTitle">+088018382382</span>
                          </div>
                          <div className="userShowInfo">
                              <MailOutline className="userShowIcon"/>
                              <span className="userShowInfoTitle">safchy1123@gmail.com</span>
                          </div>
                          <div className="userShowInfo">
                              <LocationSearching className="userShowIcon"/>
                              <span className="userShowInfoTitle">Dhaka | Bangladesh</span>
                          </div>
                      </div>
                   </div>
                   <div className="userUpdate">
                       <span className="userUpdateTitle">Edit</span>
                       <form action="" className="userUpdateFrom">
                           <div className="userUpdateLeft">
                               <div className="userUpdateItem">
                                   <label >Username</label>
                                   <input type="text" className="userUpdateInput"  placeholder="safchy1123"/>
                               </div>
                               <div className="userUpdateItem">
                                   <label >Fullname</label>
                                   <input type="text" className="userUpdateInput"  placeholder="Saifullah Chowdhury"/>
                               </div>
                               <div className="userUpdateItem">
                                   <label >Email</label>
                                   <input type="text" className="userUpdateInput"  placeholder="safchy1123@gmail.com"/>
                               </div>
                               <div className="userUpdateItem">
                                   <label >Phone</label>
                                   <input type="text" className="userUpdateInput"  placeholder="+088018382382"/>
                               </div>
                               <div className="userUpdateItem">
                                   <label >Address</label>
                                   <input type="text" className="userUpdateInput"  placeholder="Dhaka | Bangladesh"/>
                               </div>
                               <div className="userUpdateItem">
                                   <label >Job Description</label>
                                   <input type="text" className="userUpdateInput"  placeholder="Software Engineer"/>
                               </div>
                           </div>
                           <div className="userUpdateRight">
                               <div className="userUpdateUpload">
                                   <img src="https://st2.depositphotos.com/1009634/7235/v/950/depositphotos_72350117-stock-illustration-no-user-profile-picture-hand.jpg" alt="" 
                                   className="userUpdateImg" />
                                   <label htmlFor="file"> <Publish className="userUpdateIcon"/> </label>
                                   <input type="file" id="file" style= {{display: "none"}} />
                                   
                               </div>
                               <button className="userUpdateButton">Update</button>
                           </div>
                       </form>
                   </div>
               </div>
       </div>
    )
}
