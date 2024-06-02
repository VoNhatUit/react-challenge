
import './App.css'
import NhatHandleAccordion from './nhat/NhatHandleAccordion'
import NhatHandleTabChange from './nhat/NhatHandleTabChange'

function App() {

  return (
    <>
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
    </>
  )
}

export default App
