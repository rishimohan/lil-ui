import Button from './lib/components/Button';
import Badge from './lib/components/Badge';
import './App.css';

function App() {
  return (
    <div style={{ display:'flex', 
              flexDirection:'column', 
              alignItems:'start', 
              justifyContent:'center', 
              gap:'1.5rem', 
              padding: '5rem' }}>
      <p>Wow, look at this component library.</p>
      <h5>A notification badge:</h5>
        <Badge value={3}/>
      <br/>
     <h5>A button:</h5>
        <Button label="Enter" kind="primary"/>
    </div>
  );
}

export default App;
