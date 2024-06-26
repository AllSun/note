import {useEffect,useState} from 'react'
function App() {
  const [count ,setCount] = useState(0)
  //1.第二个参数为空， 初始渲染+组件更新
  // useEffect(() =>{
  //   console.log('副作用函数执行')
  // })

  //2.第二个参数为空，初始渲染
  // useEffect(() =>{
  //   console.log('副作用函数执行');
  // },[])

  //3.第二个参数特定依赖项，初始渲染+特定依赖项更新
  useEffect(() =>{
    console.log('副作用函数执行');
  },[count])
  

  return(
    <button onClick={() => {setCount(count+1)}}>+{count}</button>
  )
}

export default App;
 