import ReactPlayer from 'react-player/youtube'
import getYouTubeID from 'get-youtube-id';


function Player({url,startTime,endTime,tags}) {
  const videoId = getYouTubeID(url);
  const videoUrl = `https://www.youtube.com/embed/${videoId}?start=${startTime}&end=${endTime}`;
  return (
    <div>
      <p>{startTime}</p>
      <p>{endTime}</p>
      <div style={{display:'flex',gap:10}}>
        {Object.keys(tags).map((tag,index) => <h4 key={index}>{tag}</h4>)}
      </div>
      
      <ReactPlayer url={videoUrl} controls={false} />
    </div>
  );
}

export default Player;



