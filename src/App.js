import './App.css';
import { Suspense,lazy } from 'react';
const Home = lazy(()=>import("./component/Home"))
function App() {
  return (
    <div className="App">
     <Suspense fallback={<div>Pleas wait</div>}>
      
          <Home/>
     </Suspense>
    
    </div>
  );
}

export default App;
