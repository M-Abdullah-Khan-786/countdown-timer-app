import './App.css'
import CountdownTimer from './pages/CountdownTimer'

const App = () => {
  return (
    <>
       <div className='container'>
            <h1>Countdown Timer APP</h1>
            <CountdownTimer initialMinutes={2} initialSeconds={0} />
        </div>
    </>
  )
}

export default App
