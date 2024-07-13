
import './App.css'
import NhatHandleAccordion from './nhat_challenge/HandleAccordion'
import NhatHandleTabChange from './nhat_challenge/HandleTabChange'
import NhatHandleBox from './nhat_challenge/HandleBox'
import QuestionBoard from './nhat_challenge/QuestionBoard'
import HandleTrafficLight from './nhat_challenge/HandleTrafficLight'
import JobBoard from './nhat_challenge/JobBoard'
function App() {

  return (
    <div className="m-10">
      <h1 className=" text-center font-serif text-3xl font-bold font-weight: 600 text-blue-700">
        React Foundation
    </h1>
    <h2 className=" m-10 font-serif text-2xl font-bold font-weight: 600 text-purple-800">
      Ex 1: Tabs
    </h2>
    <NhatHandleTabChange/>
    <br />
    <h2 className=" m-10 font-serif text-2xl font-bold font-weight: 600 text-purple-800">
      Ex 2: Accordian
    </h2>
    <NhatHandleAccordion/>
    <br/>
    <h2 className=" m-10 font-serif text-2xl font-bold font-weight: 600 text-purple-800">
      Ex 3: Color Box
    </h2>
    <NhatHandleBox/>
    <br/>
    <h2 className=" m-10 font-serif text-2xl font-bold font-weight: 600 text-purple-800">
      Ex 4: Question Board
    </h2>
    <QuestionBoard/>
    <br/>
    <h2 className=" m-10 font-serif text-2xl font-bold font-weight: 600 text-purple-800">
      Ex 5: Traffic Light
    </h2>
    <HandleTrafficLight/>
    <br/>
    <h2 className=" m-10 font-serif text-2xl font-bold font-weight: 600 text-purple-800">
      Ex 6: Job Board
    </h2>
    <JobBoard/>
    </div>
    

  )
}

export default App
