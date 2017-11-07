
import React, { Component } from 'react';
import './signup.css';
// import React, {Component} from 'react';
// import { FormErrors } from './FormErrors';
import {NavLink} from 'react-router-dom'

class HeaderApp extends Component{
    render()
    {
      return(
	  <header className="text-center">
		<div className="btnVolver">
            <img class ="imgbird" src="https://phoenix-trello.herokuapp.com/images/logo-11ecccd65d1c7977997eb6f0bc0002ad.png?vsn=d"/>
			{/* <NavLink to="/Home"><i className="fa fa-angle-left backend" aria-hidden="true"></i>{<back/>}</NavLink> */}
		</div>
      </header>
      );
	}
  }
 class Signup extends Component {
  constructor (props) {
    super(props);
    this.state = {
      name:'',
      lastname:'',
      email: '',
      password: '',
      formErrors: {name: '', lastname:'', email: '', password: ''},
      emailValid: false,
      passwordValid: false,
      formValid: false
    }
  }

  handleUserInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({[name]: value},
                  () => { this.validateField(name, value) });
  }

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let nameValid=this.setState.nameValid;
    let lastValid=this.setState.lastValid;    
    let emailValid = this.state.emailValid;
    let passwordValid = this.state.passwordValid;

    switch(fieldName) {     
        case 'name':
        nameValid = value.match('');
        fieldValidationErrors.name = nameValid ? '' : ' is invalid';
        break; 

      case 'email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? '' : ' is invalid';
        break;
      case 'password':
        passwordValid = value.length >= 6;
        fieldValidationErrors.password = passwordValid ? '': ' is too short';
        break;
      default:
        break;
    }
    this.setState({formErrors: fieldValidationErrors,
                    nameValid: nameValid,
                    emailValid: emailValid,
                    passwordValid: passwordValid
                  }, this.validateForm);
    }

  validateForm() {
    this.setState({formValid: this.state.nameValid && this.state.emailValid && this.state.passwordValid});
    }

  errorClass(error) {
    return(error.length === 0 ? '' : 'has-error');
   }

  render () {
    return (
    <section>
     <HeaderApp/>
	<div className="container">
	<form className="demoForm">
        <div className="panel panel-default"></div>
        <div className={`form-group ${this.errorClass(this.state.formErrors.name)}`}>            
            <div className='input-group'>
                <span className="input-group-addon"><i id="arrow" className="fa fa-user-o fa-2x" ></i></span>
                {/* <label htmlFor="email">Email address</label> <span className="input-group-addon"><i id="arrow" className="fa fa-user-o fa-2x" ></i></span>*/}
                <input type="name" required className="form-control inputName" name="name"
                 placeholder="Name"  value={this.state.name}  onChange={this.handleUserInput}  />
            </div>
        </div>

        <div className={`form-group ${this.errorClass(this.state.formErrors.lastname)}`}>            
            <div className='input-group'>
                <span className="input-group-addon"><i id="arrow" className="fa fa-user-o fa-2x" ></i></span>
                {/* <label htmlFor="email">Email address</label> <span className="input-group-addon"><i id="arrow" className="fa fa-user-o fa-2x" ></i></span>*/}
                <input type="lastname" required className="form-control inputName" name="lastname"
                 placeholder="Lastname"  value={this.state.lastname}  onChange={this.handleUserInput}  />
            </div>
        </div>

        <div className={`form-group ${this.errorClass(this.state.formErrors.email)}`}>            
            <div className='input-group'>
                <span className="input-group-addon"><i id="arrow" className="fa fa-user-o fa-2x" ></i></span>
                {/* <label htmlFor="email">Email address</label> <span className="input-group-addon"><i id="arrow" className="fa fa-user-o fa-2x" ></i></span>*/}
                <input type="email" required className="form-control inputName" name="email"
                 placeholder="Email"  value={this.state.email}  onChange={this.handleUserInput}  />
            </div>
        </div>
        <div className={`form-group ${this.errorClass(this.state.formErrors.password)}`}>
			<div className='input-group'>
			  <span className="input-group-addon"><i className="fa fa-key fa-fw lock"></i></span>
              <input type="password" className="form-control inputName" name="password"
            placeholder="Password" value={this.state.password} onChange={this.handleUserInput}  />
			</div>
        </div>

        <div className={`form-group ${this.errorClass(this.state.formErrors.password)}`}>
			<div className='input-group'>
			  <span className="input-group-addon"><i className="fa fa-key fa-fw lock"></i></span>
              <input type="password" className="form-control inputName" name="password"
            placeholder="Confirm password" value={this.state.password} onChange={this.handleUserInput}  />
			</div>
        </div>
            {
            this.state.formValid?<NavLink to={"/map"}className="btn btn-lg btn-block btn-ingresar">Ingresar</NavLink>
            :<button type="submit" className="btn btn-lg btn-block btn-ingresar" disabled={!this.state.formValid}>Ingresar</button>
            }
            <NavLink to={"/signin"} >Sign in</NavLink>
      </form>			
	</div>
 </section>
    )
  }
}
export default Signup;

