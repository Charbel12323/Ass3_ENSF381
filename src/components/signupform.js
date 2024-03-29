import React, { useState } from 'react'; // Import React and useState hook
import './css/login.css';
import { Link } from 'react-router-dom';

function SignupForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent the default form submission behavior
        // Check if passwords match
        if (password !== confirmPassword) {
            setError('Passwords do not match. Please try again.');
            // Optionally, clear the password fields here
            setPassword('');
            setConfirmPassword('');
            return; // Prevent form from submitting
        }
        // If passwords match, proceed with your form submission logic here
        setError(''); // Clear any existing errors
        console.log('Form submitted'); // Placeholder for form submission logic
        // TODO: Implement your form submission logic here
    };

    return (
        <div>
            <div className="login-container">
                <div className="login-form">
                    <h1>Sign up</h1>
                    {error && <div style={{ color: 'red' }}>{error}</div>} {/* Display error message if any */}
                    <form className="login-form" onSubmit={handleSubmit}>
                        <input type="text" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} />
                        <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
                        <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />
                        <input type="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.target.value)} />
                        <input type="submit" value="Sign up" />
                        <Link to='/Login'>Go to Login Page</Link>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default SignupForm;
