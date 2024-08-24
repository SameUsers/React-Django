import React from 'react';
import axios from "axios";







class Profile extends React.Component{
    constructor(props){
    super(props)
    this.state={api:[], user_id:''}
    this.send=this.send.bind(this)
    axios.get("http://127.0.0.1:8000/API/test/",
    {
    headers:{"Authorization":"Bearer "+localStorage.getItem('token')}})
    .then(res=>this.setState({user_id:res.data['user_id']}))

    axios.get("http://127.0.0.1:8000/API/user/", {headers:{"Authorization":"Bearer "+localStorage.getItem('token')}}).then(res=>this.setState({api:res.data.results.filter(el=>el.id===this.state.user_id)}))
    }
    render(){
    return(
    <>
    <div>
        <button type ='button' onClick={this.send}>Function</button>
    </div>

    <div className='User'>
        <div>{this.state.api.map((el)=><div key={el.id}>
        <p>Имя пользователя : {el.username}</p>
        <p>ID : {el.id}</p>
        <p>Хэш-Пароль: {el.password}</p>
        <p>Почта {el.email}</p>



        </div> )}
        </div>

    </div>

    </>
    )

    }
    send(){
        axios.post("http://127.0.0.1:8000/api/token/verify/",
        {
            "token": localStorage.getItem('token'),
        }).then(res=>console.log(res))

    }
}



export default Profile;
