import React, { Component } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import {Link} from 'react-router-dom'



class register extends Component{
    
    
    // Constructor for form data
    
    constructor(props){
        super(props);
        this.state ={ 
            form:{ 
                Name:'',
                email:'', 
                contact:'',
                password:'',
                cnf_password:''
            },
            formErrorMsg:{ 
                Name:'',
                email:'', 
                contact:'',
                password:'',
                cnf_password:''
            },
            formValid:{
                Name:false,
                email:false, 
                contact:false,
                password:false,
                cnf_password:false,
                buttonActive:false
            },
            successMsg:'',
            errorMsg:'',
        }
    }

    //submit handler

    handleSubmit=(event)=>{
         event.preventDefault();
    }

    // on change handler
    handleChange = (event)=>{
        let {name ,value}= event.target;
        let formDum = this.state.form;
        formDum[name] = value;
        this.setState({form:formDum});
        this.validateField(name,value);

    }

    // field validation

    validateField = (fieldName, val)=>{
        //let pass = this.state.form.password;
        let formErrorMsgDum = this.state.formErrorMsg;
        let formValidDum = this.state.formValid;

        let errmsg ="";
        const reg = /^[a-zA-Z0-9._-]+@+[a-zA-z]+.com$/;
        if(fieldName==='Name'){
            if(val===''){
                errmsg = 'Name required'
            }
            formErrorMsgDum.Name = errmsg;
            formValidDum.Name = errmsg?false:true;
        }
        else if(fieldName === 'email'){
            if(val === ''){
                errmsg = 'Field Required'
            }else if(!reg.test(val)){
                errmsg = 'Invalid Email ID'
            }
            formErrorMsgDum.email = errmsg;
            formValidDum.email = errmsg?false:true;

        }else if(fieldName==='contact'){
            //this.setState({})
            if(val === ''){
                errmsg = 'Contact Required'
            }else if(val.toString().length<10 || val.toString().length>10){
                errmsg = 'Inavlid Contact'
            }
            formErrorMsgDum.contact = errmsg;
            formValidDum.contact = errmsg?false:true;

        }else if(fieldName==='password'){
            if(val === ''){
                errmsg = 'Password required'
            }else if(val.toString().length<8){
                errmsg = 'Password too weak (min 8 charcter)';
            }
            formErrorMsgDum.password = errmsg;
            formValidDum.password = errmsg?false:true;

        }else if(fieldName==='cnf_password'){
            if(this.state.form.password === ''){
                errmsg='Please Enter password field first'
            }else if(val===''){
                errmsg='Please Enter confirm password'
            }else if(val !== this.state.form.password){
                errmsg = 'Comfirm password doesnt match'
            }
            formErrorMsgDum.cnf_password=errmsg;
            formValidDum.cnf_password = errmsg?false:true;
        }

        formValidDum.buttonActive = formValidDum.Name && formValidDum.email && formValidDum.contact && formValidDum.password && formValidDum.cnf_password;
        this.setState({formErrorMsg:formErrorMsgDum,formValid:formValidDum})

    }


    
    

    // redering item
    
    render(){
        return(
            <div className="container bg-image" style={{margin:'0px',padding:'0px', backgroundImage:'url("/Images/bg-img.jpg")', maxWidth:'100%',  maxHeight:'100vh' }}>
                <div className="row">
                    <div className="col-md-4 col-sm-2"></div>
                    <div className="col-md-4 card bg-light col-sm-8" style={{marginTop: '2rem', marginBottom:'1rem'}}>
                        <form >

                            <div className="h3 text-center py-3 card-header">Sign up</div>

                            <div classsName="form-group" style={{marginTop:'1rem'}} >
                                <div className="row">
                                    <label htmlFor="name" className="col-sm-3" name="Name" style={{fontSize:'18px',color:"#696969" ,fontWeight:"bolder"}} >Name</label>
                                    <div  className="col-sm-9"> 
                                        <input type="text" className="form-control" name="Name" id="Name" onChange = {this.handleChange} placeholder="Please Enter your Name"/>
                                        <span className="text-danger">{this.state.formErrorMsg.Name}</span>
                                    </div>
                                </div>
                            </div>
                            <br/>
        
                            <div classsName="form-group">
                                <div className="row">
                                    <label htmlFor="email" className="col-sm-3"  name="email" style={{fontSize:'18px',color:"#696969" ,fontWeight:"bolder"}}>Email</label>
                                
                                    <div className="col-sm-9">
                                        <input type="email" className="form-control" name="email" id="email" placeholder="exp: abcd@gmail.com" onChange = {this.handleChange}/>
                                        <span className="text-danger">{this.state.formErrorMsg.email}</span>
                                    </div>
                                </div>
                            </div>
                            <br/>

                            <div classsName="form-group">
                                <div className="row">
                                    <label htmlFor="contact" className="col-sm-3" name="contact" style={{fontSize:'18px',color:"#696969" ,fontWeight:"bolder"}}>Contact</label>
                                    <div className="col-sm-9">
                                        <input type="number" className="form-control" name="contact" id="contact" placeholder="Exp: 9876xxxxxx "  onChange = {this.handleChange}/>
                                        <span className="text-danger">{this.state.formErrorMsg.contact}</span>
                                    </div>
                                </div>
                            </div>
                            <br/>
        
                            <div classsName="form-group">
                                <div className="row">
                                    <label htmlFor="password" className="col-sm-3" name="password" style={{fontSize:'18px',color:"#696969" ,fontWeight:"bolder"}}>Password</label>
                                    <div className="col-sm-9">
                                        <input type="password" className="form-control" name="password" id="password"  onChange = {this.handleChange}/>
                                        <span className="text-danger">{this.state.formErrorMsg.password}</span>
                                    </div>
                                </div>
                            </div>
                            <br/>
                        
                            <div classsName="form-group">
                                <div className="row">
                                <label htmlFor="cnf_password" className="col-sm-3" name="cnf_password" style={{fontSize:'18px',color:"#696969" ,fontWeight:"bolder"}}>Confirm Password</label>
                                <div className="col-sm-9">
                                <input type="password" className="form-control" name="cnf_password" id="cnf_password" onChange = {this.handleChange}/>
                                <span className="text-danger">{this.state.formErrorMsg.cnf_password}</span>
                                </div>
                                </div>
                            </div>
                            <br/>

                            <div style={{textAlign:"center" }}>
                                <p>
                                    Already have an account? <Link to='/' style={{textDecoration:'none'}}><b>Login</b></Link>
                                </p>
                            </div>
        
                            <div >
                                <button className="btn btn-success form-control mt-3 mb-3" onClick = {this.handleSubmit} disabled={!this.state.formValid.buttonActive}  >Register</button>
                            </div>
    
                        </form>
                    </div>
                    <div className="col-md-4 col-sm-2"></div>
                </div>
            </div>
        )
    }
}

export default register