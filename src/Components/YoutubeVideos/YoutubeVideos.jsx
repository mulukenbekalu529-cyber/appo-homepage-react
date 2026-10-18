// Question on React API
// 1. Apple has a YouTube channel with various videos available. Please display 9 random
// YouTube videos on your React based Apple website replica by fetching these videos from
// the YouTube data API that is publicly available. Please display your YouTube video
// component right below the component that has the last two images, i.e., right below the
// Arcade and Apple Card section. You will need to get an API key to access YouTube data
// API.

// Import useEffect and useState Hooks from React
import { useEffect, useState } from "react";

// Import the CSS file used to style this YouTube component
import "./YoutubeVideos.css";

// Create the Youtube functional component
function Youtube() {
  // Create a state variable to store the YouTube videos
  // youTubeVideos = current list of videos
  // setYouTubeVideos = function used to update the video list
  // [] = initial value is an empty array
  const [youTubeVideos, setYouTubeVideos] = useState([]);

  // useEffect runs after the component is rendered
  // We use it here to fetch videos from the YouTube API
  useEffect(() => {
    // Send a request to the YouTube Data API
    fetch(
      "https://www.googleapis.com/youtube/v3/search?key=AIzaSyDrKRYvBujILVOowUqzdVJ7l4ifpVtwj9Y&channelId=UCE_M8A5yxnLfW0KghEeajjw&part=snippet&order=date&maxResults=8&type=video",
    )
      // Convert the API response from JSON format into JavaScript data
      .then((response) => response.json())

      // Get the video information from the API response
      // Store the videos inside our state
      .then((data) => {
        setYouTubeVideos(data.items);
      })

      // If something goes wrong, display the error in the console
      .catch((error) => {
        console.error("Error fetching YouTube videos:", error);
      });

    // Empty dependency array means:
    // Run this effect only once when the component first loads
  }, []);

  // Return the JSX that should appear on the webpage
  return (
    // Main wrapper for the entire YouTube section
    <div className="allVideosWrapper">
      {/* Bootstrap container controls the content width */}
      <div className="container">
        {/* Bootstrap row creates the video grid */}
        <div className="row h-100 align-items-center justify-content-center text-center">
          {/* Section title */}
          <div className="col-12">
            <div className="title-wraper bold video-title-wrapper">
              Youtube Videos
            </div>
          </div>

          {/* 
            Loop through all videos stored in the state.
            .map() creates one video card for every video.
            singleVideo = current video
            i = index number of the current video
            // Get the unique YouTube video ID
            // Create the complete YouTube URL
            
          */}
          {youTubeVideos.map((singleVideo, i) => {
            const vidId = singleVideo.id.videoId;
            const vidLink = `https://www.youtube.com/watch?v=${vidId}`;

            // Return one video card
            // Bootstrap column
            // col-md-3 = 4 videos per row on medium/large screens
            // col-sm-12 = 1 video per row on small screens
            return (
              <div key={i} className="col-sm-12 col-md-3">
                {/* Individual video card */}
                <div className="singleVideoWrapper">
                  {/* Video thumbnail section */}
                  <div className="videoThumbnail">
                    {/* 
                      Clicking the thumbnail opens the YouTube video
                      in a new browser tab
                    */}
                    <a href={vidLink} target="_blank" rel="noreferrer">
                      {/* 
                        Display the high-quality thumbnail
                        provided by the YouTube API
                      */}
                      <img
                        src={singleVideo.snippet.thumbnails.high.url}
                        alt={singleVideo.snippet.title}
                      />
                    </a>
                  </div>

                  {/* Information below the thumbnail */}
                  <div className="videoInfoWrapper">
                    {/* Video title */}
                    <div className="videoTitle">
                      {/* Clicking the title opens the YouTube video */}
                      <a href={vidLink} target="_blank" rel="noreferrer">
                        {singleVideo.snippet.title}
                      </a>
                    </div>
                    {/* Video description */}
                    <div className="videoDesc">
                      {singleVideo.snippet.description}
                    </div>
                    {/* Published date */}{" "}
                    <div className="videoDate">
                      {" "}
                      Published:{" "}
                      {new Date(
                        singleVideo.snippet.publishedAt,
                      ).toLocaleDateString("en-GB")}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// Export the Youtube component
// This allows us to import and use it in App.jsx
export default Youtube;
