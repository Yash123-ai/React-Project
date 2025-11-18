import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import A from './component/A'
import{ErrorBoundary}from 'react-error-boundary'
import B from './component/B'
import C from './component/C'

function ErrorFallback(error){
  return <>
  <p> Something Went Wrong :{error.message}</p>
  </>
}
function App() {
  
  return (
    <>
    {/*<ErrorBoundary FallbackComponent={ErrorFallback}>
       <A/>
    </ErrorBoundary>*/}

    {/*<ErrorBoundary fallbackRender={({error,resetErrorBoundary})=>{
      return(
        <>
        <h1>Something Went Wrong . {error.message}</h1>
        <button onClick={()=>resetErrorBoundary()}>Reset</button> 
        </>
      )
    }}>
       <A/>
    </ErrorBoundary>*/}

    {/*<ErrorBoundary fallback={<h1>Something Went Wrong</h1>}>
      <A/>
    </ErrorBoundary>*/}

    {/*<B/>*/}

    <C/>
    
    

     
    </>
  )
}

export default App
