import React from 'react';
import './Login.css';

const Login = () => {
    return (
    <div className='body'>
        <h2 className='text-p'> Form Login</h2>
        <form className='kotak_login'>
            <h1 className='tulisan_login'> Tugas Pertemuan ketiga</h1>

            <label>Username</label>
            <input type="text" name="username" class="form_login" placeholder=" masukkan username"/>

            <label>Password</label>
            <input type="password" name="username" class="form_login" placeholder="Masukkan Password Anda"/>

            <button type="submit" className="tombol_login">Login</button>
            <input type="checkbox" className="tengah" defaultChecked/>Remember Me
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <div style={{align:"center"}}>
            <button type="button" style={{textAlign:"center"}} className="tombol_cancel">Cancel</button>
            </div>
        </form>
    </div>
    );
}

export default Login;
