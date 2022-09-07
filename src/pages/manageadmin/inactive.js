import axios from "axios";
import React from "react";
import L from './loading';

const baseURL = "https://6318315ff6b281877c654cf3.mockapi.io/api/td/CCode";
  
function App() {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);

  if (!post) return null;
  let filteredArray = post.filter(person => person.SubTime = 0);

  return (
    <div className="App">
      
      <table>
        
       {filteredArray.length === 0 && <span>No Elements Found</span> }
        {post.filter(person => person.SubTime = 0).map((val, key) => {
             
          return (
            <tr key={key}>
              <td className="border  border-black w-36">{val.CName}</td>
              <td className="border  border-black w-36">{val.CCode}</td>
              <td className="border  border-black w-36">{val.SubTime}</td>
            </tr>
          )
        })}
         
      </table>
    </div>
  );
}
  
export default App;