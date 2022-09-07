import axios from "axios";
import React from "react";

const baseURL = "https://6318315ff6b281877c654cf3.mockapi.io/api/td/CCode";
  
function App() {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);

  if (!post) return null;
  return (
    <div className="App">
      <table>
        
        {post.map((val, key) => {
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