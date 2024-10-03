import { useState } from 'react'

function Form() {
    const [loginDetails, setLoginDetails] = useState({ userName: '', password: '' })

    const onChangeUserDetails = (e: any) => {
        const { name, value } = e.target
        setLoginDetails({ ...loginDetails, [name]: value })
    }

    const Submitdata = () => {
        console.log('Login Details:', loginDetails)
        setLoginDetails({ userName: '', password: '' })
    }

    return (
        <div className='Form'>
            <div>
            {/* {JSON.stringify(loginDetails)}<br/> */}
                <input 
                    type='text' 
                    placeholder='Enter UserName'
                    name='userName' 
                    value={loginDetails.userName} 
                    onChange={onChangeUserDetails} 
                /><br/>
                <input 
                    type='password' 
                    placeholder='Enter Password' 
                    name='password'
                    value={loginDetails.password} 
                    onChange={onChangeUserDetails} 
                /><br/>
                <button onClick={Submitdata}>Submit</button>
            </div>
        </div>
    )
}

export default Form
