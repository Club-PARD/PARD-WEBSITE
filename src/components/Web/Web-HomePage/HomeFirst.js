import React from 'react';
import styled from 'styled-components';

const VideoContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

const VideoBackground = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: relative;
  z-index: -999;
`;

const HomeFirst = () => {
  return (
    <VideoContainer>
      <VideoBackground autoPlay loop muted>
        <source src={require("../../../assets/Video/BackGroundVideo.mp4")} type="video/mp4" />
      </VideoBackground>
    </VideoContainer>
  );
};

export default HomeFirst;
