function App() {
  const clickHandler = (e) => {
    console.log(e);
  }

  function clickHandler2(e){
    console.log(e);
  }

  return (
   <button onClick={clickHandler}>按钮</button>
  );
}

export default App;
