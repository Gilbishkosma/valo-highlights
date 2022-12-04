import { useRef, useState } from 'react';
import Player from './components/Player';
import dummyJson from './output.json'




function App() {
  const [url,setUrl] = useState('https://youtu.be/5YWhwyEkias');
  const [highlightJson,setHighlightJson] = useState(dummyJson);
  const inputRef = useRef();
  const jsonRef = useRef();

  async function parseJsonFile(file) {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.onload = event => setHighlightJson(JSON.parse(event.target.result))
    fileReader.readAsText(jsonRef.current.files[0], "UTF-8");
  })
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    parseJsonFile(inputRef.current.value);
    setUrl(inputRef.current.value);
  } 


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="url" placeholder='paste url' ref={inputRef} required={true} />
        <br />
        <input type="file" placeholder='Upload json' ref={jsonRef} required={true} accept="json" />
        <br />
        <button>Submit</button>
      </form>
      {highlightJson.map((item,index) => (
      <Player key={index} url={url} startTime={item.start_clip} endTime={item.end_clip} tags={item.tags} /> )
      )}
    </div>
  );
}

export default App;
