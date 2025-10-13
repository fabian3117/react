import { GraphicsCard } from '@/components/cards';
import { useEffect, useRef, useState } from 'react';
const options = { root: null, rootMargin: '0px', threshold: 0.6 };

export default function VideoPlayer({videoSrc,videoThumbnail}){
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (videoRef.current && !isPlaying) {
            videoRef.current
              .play()
              .then(() => {
                setIsPlaying(true);
              })
              .catch((error) => {
                console.error('Autoplay was prevented:', error);
              });
          }
        } else {
          if (videoRef.current && isPlaying) {
            videoRef.current.pause();
            setIsPlaying(false);
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);
    const videoElement = videoRef.current;

    if (videoElement) {
      observer.observe(videoElement);
    }

    return () => {
      if (videoElement) {
        observer.unobserve(videoElement);
      }
    };
  }, [isPlaying]);
  return(
    <>
      <GraphicsCard sx={{ border: '5px solid', borderColor: 'grey.300' }}>
        <video
          playsInline
          ref={videoRef}
          width="100%"
          height="100%"
          style={{ display: 'flex', objectFit: 'cover' }}
          preload="metadata"
          autoPlay={false}
          loop={true}
          muted={true}
          poster={videoThumbnail}
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      </GraphicsCard>
    </>
  );
}