
import { useState } from "react";



export default function App() {
    
    const [feedback1, setFeedback1] = useState("");
    const [feedback2, setFeedback2]= useState(['I watched Moana 2, and I think it was amazing- John',
                                             'The Wallace and Gromit movie became a personal favourite, I would definitely recommend- Alison',
                                             'I saw The Wild Robot, it was not what I expected but it was still a good watch- Naomi' ]);

   
   const handleSubmit = (event) => {
    event.preventDefault();
    setFeedback2( otherFeedback => [...otherFeedback, feedback1]);
    setFeedback1('');
   }

   return (
    
    <div className="App">

        <img src="https://images.justwatch.com/poster/323606360/s166/moana-2" alt="Moana 2 movie advert"></img>
        <img src="https://images.justwatch.com/poster/322033435/s166/mufasa-the-lion-king.avif" alt="Mufasa:Lion King movie advert"></img>
        <img src="https://images.justwatch.com/poster/317505587/s166/the-wild-robot.avif" alt="Wild Robot movie advert"></img>
        <img src="https://images.justwatch.com/poster/321462568/s166/wallace-and-gromit-vengeance-most-fowl.avif" alt="Wallace and Gromit movie advert"></img>
        <img src="https://images.justwatch.com/poster/317102237/s166/inside-out-2.avif" alt="Inside Out 2 movie advert"></img>
        <img src="https://images.justwatch.com/poster/320527460/s166/flow-2024.avif" alt="Flow movie advert"></img>
        

<br></br>
<form onSubmit={handleSubmit}>
<div> Add your movie review</div>
    <input type="text" value={feedback1} onChange={(e) => setFeedback1(e.target.value)}/>
    <input type= "submit"/>
    </form>

    
    <h1>All Reviews</h1>
   
    <ul>
        {feedback2.map((feedback2, index) => <li key={index}>{feedback2}</li>)}
    </ul>
    </div>
    
   );

};
    
