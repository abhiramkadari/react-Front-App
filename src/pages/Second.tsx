
// import userData from './Form'

function Second(props:any) {
  return (
    <div>
      {props.name}
      {/* <div>
        {userData.map((user:any)=>{
          return(
            <div style={{border:'1px solid',margin:'4px'}}>
              <div>{user.name}</div>
              <div>{user.email}</div>
            </div>
          )
        })}
      </div> */}
    </div>
  )
}

export default Second