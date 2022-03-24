import React, {Component} from 'react';
import {Redirect, Link} from 'react-router-dom';
import './Dashboard.css';

export default class Dashboard extends Component{
    constructor(props){
        super(props);
        this.state = {
            redirect:false
        };

        this.logOut =this.logOut.bind(this);
    }
    logOut(){
        localStorage.setItem('status',false);
        this.setState({redirect:true});
    }
    render(){
        let {redirect}= this.state;
        if(redirect) return <Redirect to={"/login"}/>;
        return(
        <section class="ftco-section">
         <div class="container">
         <div class="row justify-content-center">
                <div class="col-md-6">
                    <Link to={'/forecast'}>Forecast</Link>
               </div>
               <div class="col-md-6">
                    <button className="btn waves-effect waves-light" onClick={this.logOut} type="submit" name="action">Log out
                    </button>
               </div>
         </div>
            <br/><br/>
            <div class="row justify-content-center">
               <div class="col-md-6">
                  <br/><br/><br/>
                  <h1 id = "title" class="heading-section">Learning React</h1>
                  <p id="description"> The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. </p>
                  <br/><br/>
                  <input type="button" value="Subscribe" class="btn btn-dark rounded-pill" style={{marginRight:150}}/>
                  <input type="button" value="Explore" class="btn btn-light rounded-pill" style={{marginRight: 16}}/>
               </div>
               <div class="col-md-6">
                  <img src = "https://cc-prod.scene7.com/is/image/CCProdAuthor/chart-design_P1_900x420?$pjpeg$&jpegSize=200&wid=900" width="400" height="300" style={{verticalAlign: 'middle', margin:50}}/>
               </div>
            </div>
            <br/><br/>
            <div class="row justify-content-center">
               <div class="col-md-6 text-center mb-5">
                  <h1 id = "title" class="heading-section">Survey Form</h1>
               </div>
            </div>
            <div class="row justify-content-center">
               <div class="col-md-12">
                  <div class="wrapper">
                     <div class="row no-gutters">
                        <div class="col-lg-12 col-md-7 order-md-last d-flex align-items-stretch">
                           <div class="col-lg-12 col-md-7 order-md-last d-flex align-items-stretch">
                              <div class="contact-wrap w-100 p-md-5 p-4">
                                 <h3 class="mb-4">Survey</h3>
                                 <form method="POST" id="survey-form" name="contactForm" class="contactForm">
                                    <div class="row">
                                       <div class="col-md-12">
                                          <div class="form-group">
                                             <label id="name-label" class="label" for="name">Name</label>
                                             <input type="text" class="form-control" name="name" id="name" placeholder="Name"/>
                                          </div>
                                       </div>
                                       <div class="col-md-12">
                                          <div class="form-group">
                                             <label id="email-label" class="label" for="email">Email</label>
                                             <input type="email" class="form-control" name="email" id="email" placeholder="Email"/>
                                          </div>
                                       </div>
                                       <div class="col-md-12">
                                          <div class="form-group">
                                             <label id="number-label" class="label" for="age">Age</label>
                                             <input type="number" class="form-control" name="age" id="number" placeholder="Age" min="1" max="150"/>
                                          </div>
                                       </div>
                                       <div class="col-md-12">
                                          <div class="form-group">
                                             <p class="label">PLEASE SELECT YOUR LANGUAGE</p>
                                             <select name="Language" id="dropdown">
                                                <option value="english">English</option>
                                                <option value="hindi">Hindi</option>
                                                <option value="punjabi">Punjabi</option>
                                             </select>
                                          </div>
                                       </div>
                                       <div class="col-md-12">
                                          <div class="form-group">
                                             <p class="label">PLEASE SELECT YOUR GENDER</p>
                                             <input type="radio" id="male" name="gender" value="Male"/>
                                             <label for="html">Male</label><br/>
                                             <input type="radio" id="female" name="gender" value="Female"/>
                                             <label for="css">Female</label> <br/>
                                          </div>
                                       </div>
                                       <div class="col-md-12">
                                          <div class="form-group">
                                             <p class="label">PLEASE SELECT YOUR INTRESTS</p>
                                             <input type="checkbox" id="html" name="html" value="Html"/>
                                             <label for="html"> Html</label><br/>
                                             <input type="checkbox" id="css" name="css" value="Css"/>
                                             <label for="css"> Css </label><br/>
                                             <input type="checkbox" id="bootstrap" name="bootstrap" value="Bootstrap"/>
                                             <label for="bootstrap"> Bootstrap </label><br/>
                                          </div>
                                       </div>
                                       <div class="col-md-12">
                                          <div class="form-group">
                                             <label class="label" for="comments">Comments</label>
                                             <textarea name="message" class="form-control" id="comment" cols="30" rows="4" placeholder="Comments"></textarea>
                                          </div>
                                       </div>
                                       <div class="col-md-12">
                                          <div class="form-group">
                                             <input type="submit" value="Submit" class="btn btn-primary" id="submit"/>
                                             <div class="submitting"></div>
                                          </div>
                                       </div>
                                    </div>
                                 </form>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <br/> <br/>
            <div class="row justify-content-center" style = {{backgroundColor: "#21304b", borderRadius: 25}}>
               <div >
                  <div style= {{color:"white", fontSize:40, marginTop: 50}}> Subscribe Now </div>
                  <div  class="centered">
                     <input type="email" name="email" id="emailq" placeholder="Your email address" style= {{borderRadius: 25, border: 2, padding: 20, width: 200, height: 15}}  />
                     <button type="button" value="Start now" class="btn btn-primary btn-lg" id="submit"> Start Now</button>
                  </div>
               </div>
            </div>
            <br/> <br/>
            <div class="row" align="center">
               <div class="column" align="left">
                  <h5>Week4</h5>
                  <p align="left" style = {{marginTop: 30}}> The quick brown fix jumps ove the lazy dog. The quick brown fix jumps ove the lazy dog.
                  </p>
                  <p align="left" style = {{marginTop: 30}}> All rights reserved.
                  </p>
               </div>
               <div class="column" align="left">
                  <h5>Landings</h5>
                  <p align="left" style = {{marginTop: 30}}> Home
                  </p>
                  <p align="left" style = {{marginTop: 30}}> Products
                  </p>
                  <p align="left" style = {{marginTop: 30}}> Services
                  </p>
               </div>
               <div class="column" align="left">
                  <h5>Company</h5>
                  <p align="left" style = {{marginTop: 30}}> Home
                  </p>
                  <p align="left" style = {{marginTop: 30}}> Carrers
                  </p>
                  <p align="left" style = {{marginTop: 30}}> Services
                  </p>
               </div>
               <div class="column" align="left">
                  <h5>Resources</h5>
                  <p align="left" style = {{marginTop: 30}}> Home
                  </p>
                  <p align="left" style = {{marginTop: 30}}> Products
                  </p>
                  <p align="left" style = {{marginTop: 30}}> Services
                  </p>
               </div>
            </div>
         </div>
      </section>
        )
    }
}
