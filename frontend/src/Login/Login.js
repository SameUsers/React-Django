import React from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';





class Login extends React.Component{

    constructor(props){
    super(props)
    this.state={email:[],password:[],username:[]}
    this.getEmail=this.getEmail.bind(this)
    this.getPassword=this.getPassword.bind(this)
    this.send=this.send.bind(this)
    this.getUsername=this.getUsername.bind(this)


    }

    render(){

    return(
    <form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Адрес электронной почты</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={this.getEmail}/>
    <div id="emailHelp" class="form-text">Мы никогда никому не передадим вашу электронную почту.</div>
    <label for="exampleInputEmail1" class="form-label">Username</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={this.getUsername}/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Пароль</label>
    <input type="password" class="form-control" id="exampleInputPassword1" onChange={this.getPassword}/>
  </div>
  <button type="button" class="btn btn-primary" onClick={this.send}>Отправить</button>
  <p>{this.state.password}</p>
  <p>{this.state.email}</p>
</form>

    )

    }
     getUsername(event){
        this.setState({username : event.target.value})

    }

    getEmail(event){
        this.setState({email : event.target.value})

    }
    getPassword(event){
        this.setState({password:event.target.value})
    }

    send(){
        const passwordd=this.state.password
        const emaill=this.state.email
        const usernamee = this.state.username
        axios.post("http://127.0.0.1:8000/API/user/",
        {
            "password": passwordd,
            "email" : emaill,
            "username": usernamee
        }).then(res=>console.log(res))


    }
}



export default Login;
