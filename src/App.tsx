import { motion } from "framer-motion"
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Home</h1>
      <div className="box">
      <br></br>
      
      </div>
      <div className="box">
      </div>
      <br></br>

      <div className="box">
        
      </div>
      <br></br>

      <div className="box">
        
      </div>
      <br></br>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          duration: 2
        }}
        className="box">

      </motion.div>
    </div>
  );
}

export default App;
