import React from 'react';
import { BsPauseFill, BsFillPlayFill } from 'react-icons/bs';
import { meal } from '../../constants';
import {
  IntroContainer,
  VideoOverlay,
  VideoOverlayCircle,
} from '../../styles/Intro.styled';

const Intro = () => {
  const [playVideo, setPlayVideo] = React.useState<boolean>(false);
  const [onHover, setOnHover] = React.useState<boolean>(false);
  const videoRef = React.useRef<HTMLVideoElement>(null);

  //   * handle video play function
  function handleChange() {
    setPlayVideo(prevState => !prevState);

    if (playVideo) {
      if (videoRef.current) {
        videoRef.current.pause();
      }
    } else {
      if (videoRef.current) {
        videoRef.current.play();
      }
    }
  }
  return (
    <IntroContainer>
      <video
        src={meal}
        typeof='video/mp4'
        loop
        controls={false}
        muted
        ref={videoRef}
      />
      <VideoOverlay
        playVideo={playVideo}
        onMouseEnter={() => setOnHover(true)}
        onMouseLeave={() => setOnHover(false)}>
        {onHover && (
          <VideoOverlayCircle onClick={handleChange}>
            {playVideo ? (
              <BsPauseFill color='#fff' fontSize={30} />
            ) : (
              <BsFillPlayFill color='#fff' fontSize={30} />
            )}
          </VideoOverlayCircle>
        )}
      </VideoOverlay>
    </IntroContainer>
  );
};

export default Intro;
