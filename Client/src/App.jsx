
import { useState } from "react";
import appcss from "App.css";





export default function App() {
    
    const [feedback1, setFeedback2] = useState("");
    const [feedback2, setFeedback1]= useState(['I watched Moana 2 and I think it was amazing- John',
                                             'The Wallace and Gromit movie became a personal favourite, I would definitely recommend- Alison',
                                             'I saw Wild Robot, it was not what I expected, but it was still a good watch- Naomi' ]);

   
   const handleSubmit = (event) => {
    event.preventDefault();
    setFeedback2( otherFeedback => [...otherFeedback, feedback1]);
    setFeedback1('');
   }

   return (
    <div className="App">
        

<br></br>
<form onSubmit={handleSubmit}>
    <div> Add your movie review</div>
    <input type="text" value={feedback1} onChange={(e) => setFeedback1(e.target.value)}/>
    <input type= "submit"/>
    </form>

    <br></br>
    <h1>All reviews</h1>

    <ul>
        {feedback2.map.((feedback2, index) => <li key={index}>{feedback2}</li>)}
    </ul>
    </div>
    
   );

};
    
