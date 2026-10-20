import { useEffect, useState } from "react";
import "./YoutubeVideos.css";

function Youtube() {
  const [youTubeVideos, setYouTubeVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const apiKey = import.meta.env.VITE_YOUTUBE_API_KEY;

    async function fetchVideos() {
      if (!apiKey) {
        setError("YouTube videos are temporarily unavailable.");
        setLoading(false);
        return;
      }

      try {
        const params = new URLSearchParams({
          key: apiKey,
          channelId: "UCE_M8A5yxnLfW0KghEeajjw",
          part: "snippet",
          maxResults: "9",
          type: "video",
        });

        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/search?${params}`,
        );

        const data = await response.json();

        if (!response.ok) {
          throw new Error(
            data.error?.message || `YouTube API error: ${response.status}`,
          );
        }

        const videos = Array.isArray(data.items) ? data.items : [];

        // Shuffle the results and select 9 videos.
        const shuffledVideos = [...videos];

        for (let i = shuffledVideos.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [shuffledVideos[i], shuffledVideos[j]] = [
            shuffledVideos[j],
            shuffledVideos[i],
          ];
        }

        setYouTubeVideos(shuffledVideos.slice(0, 9));
      } catch (err) {
        console.error("Error fetching YouTube videos:", err);
        setError("YouTube videos are temporarily unavailable.");
      } finally {
        setLoading(false);
      }
    }

    fetchVideos();
  }, []);

  return (
    <div className="allVideosWrapper">
      <div className="container">
        <div className="row h-100 align-items-center justify-content-center text-center">
          <div className="col-12">
            <div className="title-wraper bold video-title-wrapper">
              Youtube Videos
            </div>
          </div>

          {loading && (
            <div className="col-12 py-4">Loading YouTube videos...</div>
          )}

          {!loading && error && (
            <div className="col-12 py-4" role="status">
              {error}
            </div>
          )}

          {!loading && !error && youTubeVideos.length === 0 && (
            <div className="col-12 py-4">
              No videos are available right now.
            </div>
          )}

          {!loading &&
            !error &&
            youTubeVideos.map((singleVideo) => {
              const vidId =
                typeof singleVideo.id === "object"
                  ? singleVideo.id?.videoId
                  : null;

              if (!vidId || !singleVideo.snippet) return null;

              const snippet = singleVideo.snippet;
              const thumbnail =
                snippet.thumbnails?.high?.url ||
                snippet.thumbnails?.medium?.url ||
                snippet.thumbnails?.default?.url;

              const vidLink = `https://www.youtube.com/watch?v=${vidId}`;

              return (
                <div key={vidId} className="col-sm-12 col-md-4">
                  <div className="singleVideoWrapper">
                    {thumbnail && (
                      <div className="videoThumbnail">
                        <a
                          href={vidLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            src={thumbnail}
                            alt={snippet.title || "YouTube video"}
                          />
                        </a>
                      </div>
                    )}

                    <div className="videoInfoWrapper">
                      <div className="videoTitle">
                        <a
                          href={vidLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {snippet.title}
                        </a>
                      </div>

                      <div className="videoDesc">{snippet.description}</div>

                      <div className="videoDate">
                        Published:{" "}
                        {snippet.publishedAt
                          ? new Date(snippet.publishedAt).toLocaleDateString(
                              "en-GB",
                            )
                          : "Date unavailable"}
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

export default Youtube;
