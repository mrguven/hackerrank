import {useState} from "react";


function newCar () {
    const [color,setColor] = useState("blue");

    setColor("red");

return (

    <>

    <button onClick={setColor}>ChangeColor</button>

    <h1> this is new  {color} </h1>

</>
)


}



const root = reactDom.createRoot(document.getElementById('root'));
root.render(<newCar />);

