import LifeCycle from "./components/LifeCycle"
import PropsClass from './components/PropsClass'
import StopWatch from "./components/StopWatch";

function App()
{
  const arr = [1, 2, 3, 4, 5];
  const para = <>This is a paragraph</>
  return (
    <>
      {/* <LifeCycle /> */}
      {/* <PropsClass name="Ankit" number={arr} ele={para}>

        <p>I am in propsclass</p>

      </PropsClass> */}
      <StopWatch />
    </>
  )
}

export default App
