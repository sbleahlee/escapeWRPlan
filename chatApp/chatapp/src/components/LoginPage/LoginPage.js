import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {useForm} from 'react-hook-form';
import firebase from '../../firebase';


function LoginPage() {
    const {register, watch, errors, handleSubmit} = useForm();
    const [errorFromSubmit, setErrorFromSubmit] = useState("");
    const [loading, setLoading] = useState(false);


    //react-hook-form에서는 data라는 파라미터 제공됨
    const onSubmit = async(data) => {
        try{
            await firebase
            .auth()
            .signInWithEmailAndPassword(data.email, data.password);
        } catch (error){
            setErrorFromSubmit(error.message);
            setLoading(false)
            setTimeout(() => {
                setErrorFromSubmit("")
            }, 5000);
        }
        
    }

    return (
        <div className="auth-wrapper">
            <div style={{textAlign:'center'}}>
                <h3>Login</h3>
            </div>
            <form onSubmit = {handleSubmit(onSubmit)}>
                <label>Email</label>
                <input 
                    name = "email"
                    type = "email" 
                    ref = {register({ required: true, pattern: /^\S+@\S+$/i })}
                />
                {errors.email && <p>Email address should be filled in with email format</p>}

                <label>Password</label>
                <input 
                    name = "password"
                    type = "password" 
                    ref={register({ required: true, minLength: 10 })}
                />
                {errors.password && errors.password.type ==="required" && <p>This field is required</p>}
                {errors.password && errors.password.type ==="minLength" && <p>Password must have at least 10 characters</p>}
                
                {errorFromSubmit &&<p>{errorFromSubmit}</p>}
                <input type="submit" disabled = {loading}/>
            </form>

            <Link style = {{color:'gray', textDecoration : 'none', textAlign : 'center'}} to ="register"> 아직 ID가 없다면.. </Link>
        </div>
    )
}

export default LoginPage;
