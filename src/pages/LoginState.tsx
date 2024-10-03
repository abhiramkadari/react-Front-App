import { useReducer } from 'react'

// Define the initial state
const initialState = {
  userName: '',
  password: ''
}

// Define the reducer function
function reducer(state:any, action:any) {
  switch (action.type) {
    case 'setUserName':
      return { ...state, userName: action.payload }
    case 'setPassword':
      return { ...state, password: action.payload }
    case 'reset':
      return initialState
    default:
      throw new Error('Unknown action type')
  }
}

function LoginForm() {
  // Use the useReducer hook
  const [state, dispatch] = useReducer(reducer, initialState)

  const handleChange = (e:any) => {
    const { name, value } = e.target
    dispatch({ type: `set${name.charAt(0).toUpperCase() + name.slice(1)}`, payload: value })
  }

  const handleSubmit = (e:any) => {
    e.preventDefault()
    console.log('Login Details:', state)
    dispatch({ type: 'reset' })
  }

  return (
    <div className='Form'>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Username:
            <input 
              type='text' 
              name='userName' 
              value={state.userName} 
              onChange={handleChange} 
            />
          </label>
        </div>
        <div>
          <label>
            Password:
            <input 
              type='password' 
              name='password'
              value={state.password} 
              onChange={handleChange} 
            />
          </label>
        </div>
        <button type='submit'>Submit</button>
      </form>
      <div>
        <p>Current State: {JSON.stringify(state)}</p>
      </div>
    </div>
  )
}

export default LoginForm
