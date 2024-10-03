import {useState,useEffect} from 'react'

// let obj = {width:window.innerWidth,height:window.innerHeight};

function Window() {
    
    const [screenSize,setScreenSize] = useState({width:window.innerWidth,height:window.innerHeight})

    const updatedSize = ()=>{
        setScreenSize({width:window.innerWidth,height:window.innerHeight})
    }

    useEffect(()=>{
        window.addEventListener('resize',updatedSize)
        return()=>{
            window.removeEventListener('resize',updatedSize)
        }
    },[])

    return (
        <div>
            {screenSize.width}<br/>
            {screenSize.height}
        </div>
    )
}

export default Window