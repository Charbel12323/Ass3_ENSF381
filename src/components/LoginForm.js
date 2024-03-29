import './css/login.css'
import { Link } from 'react-router-dom';

import Header from './Header';

function LoginForm() {
    return (
        <div>
            <div className="login-container">
                <div className="login-form">
                    <h1>Login</h1>
                    <form className="login-form">
                        <input type="text" placeholder="Username" />
                        <input type="password" placeholder="Password" />
                        <input type="submit" value="Login" />
                    </form>
                    <Link to="/signup"><b>Don't Have an account?? Sign up here</b></Link>

                </div>
            </div>
        </div>
    );
}

export default LoginForm;