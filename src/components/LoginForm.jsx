import { useState } from 'react'
import axios from 'axios'

const LoginForm = () => {

    const [ username, setUsername ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ error, setError ] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault();

        const authObject = { 'Project-ID': "c6ddaf1b-912e-4166-998c-589abb0dcb3b", 'User-Name': username, 'User-Secret': password }

        try {
            await axios.get('https://api.chatengine.io/chats', { headers: authObject });
            localStorage.setItem('username', username)
            localStorage.setItem('password', password)
            window.location.reload();
        } catch (error) {
            setError('opps, incorrect credentials')
        }
 
    }

    return (
        <div className="wrapper">
            <div className="form">
                <h1 className="title">
                    Lets Text
                </h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="username" required />
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="password" required /> 
                    <div align="center">
                        <div type="submit" className="button" onClick={handleSubmit} >
                            <span>Start Chating</span>
                        </div>
                    </div>
                    <h2 className="error">{ error }</h2>
                </form>
            </div> 
        </div>
    )
}

export default LoginForm;