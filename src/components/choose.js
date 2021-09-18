import { useHistory } from "react-router-dom";


function Choose()  {

    const history = useHistory();

    function handleClick() {
      history.push("/driver");
    }
    function handleClick2() {
        history.push("/rider");
      }
  
    return (
    <div>
    <h2>Choose a role</h2>

    <button href="/driver" onClick={handleClick}>Driver Home</button>
    <br />
    <button href="/rider" onClick={handleClick2}>Rider Home</button>
    <br/>
    </div>
    );
        
    };
    
    export default Choose;