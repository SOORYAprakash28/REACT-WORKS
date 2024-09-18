// import './App.css';
// import BookList from './BookList';
// function App() {
//   return (
//     <div className="App">
//       <BookList/>
//     </div>
//   );
// }
// export default App;

function App(){
  const [name, setname]=useState("Bond!");
  return (
    <div className="App">
      <h1>Hello, Soorya</h1>
      <button onClick={()=>setname("Agent 007!")}>
        Click to change
      </button>
    </div>
  )
}