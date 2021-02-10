import axios from 'axios';
import React, {useEffect, useState}  from 'react'
import {Link, useParams, useHistory } from 'react-router-dom'

function ViewList() {

const { id } = useParams()  

const  apiUrl = 'http://localhost:3004/users';

const [user, setUser] = useState([]);

const loadUser = async  () => {
    const result = await axios.get(`http://localhost:3004/users/${id}`)
    setUser(result.data)
    console.log(user);
} 
useEffect(() => {
    loadUser();
},[]);

return (



<div className="container">
            <div class="card bg-secondary shadow">
            <div class="card-header bg-white border-0">
              <div class="row align-items-center">
                <div class="col-8">
                  <h3 class="mb-0">Student Info</h3>
                </div>
              </div>
            </div>
            <div class="card-body">
                <h6 class="heading-small text-muted mb-4">School information</h6>
                <div class="pl-lg-4">
                  <div class="row">
                    <div class="col-lg-6">
                      <div class="form-group focused">
                        <label class="form-control-label" for="input-username">Name : </label>
                        {user.name}
                      </div>
                    </div>
                    <div class="col-lg-6">
                     <div class="form-group focused">
                        <label class="form-control-label" for="input-username">Roll Number : </label>
                        {user.rollNumber}
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-lg-6">
                        <div class="form-group focused">
                            <label class="form-control-label" for="input-username">Class : </label>
                         {user.whichclass}
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="form-group focused">
                            <label class="form-control-label" for="input-username">Address : </label>
                         {user.address}
                        </div>
                    </div>
                  </div>
                </div>
                <hr class="my-4"/>
                <h6 class="heading-small text-muted mb-4">Parents information</h6>
                <div class="pl-lg-4">
                     <div class="row">
                    <div class="col-lg-4">
                    <div class="form-group focused">
                        <label class="form-control-label" for="input-username">Father Name : </label>
                        {user.dadName}
                      </div>
                    </div>
                    <div class="col-lg-4">
                    <div class="form-group focused">
                        <label class="form-control-label" for="input-username">Mother Name : </label>
                        {user.momName}
                      </div>
                    </div>
                    <div class="col-lg-4">
                    <div class="form-group focused">
                        <label class="form-control-label" for="input-username">Phone Number : </label>
                        {user.phone}
                      </div>
                    </div>
                  </div>
                </div>
                <hr class="my-4"/>
                <h6 class="heading-small text-muted mb-4">About</h6>
                <div class="pl-lg-4">
                  <div class="form-group focused">
                    <label>About Me</label>
                    {user.rollNumber}
                  </div>
                </div>

                <div class="pl-lg-4">
                    <br/>
                   <Link className="action-Link"  to="/">Back Home</Link>
                </div>
            </div>
          </div>
        </div>

    ) 
}

export default ViewList;
