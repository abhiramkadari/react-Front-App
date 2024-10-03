import {useReducer,useEffect} from 'react'

//types
const FETCH_INIT = "FETCH_INIT"
const FETCH_START = "FETCH_START"
const FETCH_ERROR = "FETCH_ERROR"

//stateObj
const initialState = {
    loading:true,
    data:null,
    error:null
}

const dataReducer=(state:any,action:any)=>{  //   (stateObjParam , actionfromdispatch)
    // console.log('dataReducerdataReducer',action)
    switch(action.type){
        case FETCH_INIT:
            return {...state,loading:true,error:null};
            case FETCH_START:
                return {...state, loading:false, data:action.payload};
                case FETCH_ERROR:
                    return {...state, loading:false, error:action.payload};
        default:
            return state
    }
}

const MultiState = () => {
   const [userCall,dispatch] = useReducer(dataReducer,initialState) //(function,stateObjParam) //initiated Reducer but not called

   //api call with reducer types format
   const getUsers = async ()=>{

        try{
            dispatch({type:FETCH_INIT});
            const response = await fetch("https://jsonplaceholder.typicode.com/users");
            const newData = response.json();
            // console.log('ubdiubdiubc',newData)
            dispatch({type:FETCH_START, payload:newData});
            
        }catch(error:any){
            dispatch({type:FETCH_ERROR, payload:error.message});
        }
    
   }


   //calling api
   useEffect(()=>{
    getUsers();
   },[])

  return (
    <div>
        {userCall.loading && <p>Loadingg...........</p>}

        {userCall.data && (
            <div>
                {
                    // userCall.data.map((item:any)=>{
                    //     <div>{item.name}</div>
                    // })
                    JSON.stringify(userCall)
                }
            </div>
        )}

        { userCall.error && <div>{ userCall.error }</div> }
    </div>
  )
}

export default MultiState