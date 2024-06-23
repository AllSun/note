import {createContext, useContext} from 'react'

const MsgContext = createContext()
function A(){
  return(
    <div>这是A组件
      <B/>
    </div>
  )
}

function B(){
  const msg = useContext(MsgContext);
  return(
    <div>这是B组件,{msg}</div>
  )
}

function App() {

  const msg = '测试context传输';
  return(
    <MsgContext.Provider value={msg}>
    <div> 
      这是父组件
      <A/>
    </div>
    </MsgContext.Provider>
  )
}

export default App;
