import React from "react";
import styled from "@emotion/styled";
import Image from "next/image";
function Home() {
    return (
      <Container>
         
         {/* <Image alt="#" src="/static/images/05.png" width={2880} height={2880} /> */}
            
          
          
          <ImageContainer className="img-container">
          <OverlayImage alt="#" src="/static/images/01_2.png" width={2880} height={2880} />
            <OverlayImage alt="#" src="/static/images/01.png" width={2880} height={2880} />
            
          </ImageContainer>
          <Secon className="img-section">
            <Image alt="#" src="/static/images/02.png" width={2880} height={2880} />
          </Secon>
          <Third className="img-third">
            <Image alt="#" src="/static/images/03.png" width={2880} height={2880} />
          </Third>
        
        <StyledSvg viewBox="0 0 425 1682" fill="none" xmlns="http://www.w3.org/2000/svg" >
          <g clipPath>
            <path d="M0 130.932V0H425V412C414.771 385.038 358.309 323.781 214.29 294.452C70.2708 265.123 11.422 173.218 0 130.932Z" />
            <path d="M-1 94V583C7.62265 550.272 49.812 492.942 81.6337 470.498C323.068 300.211 410.971 450.895 425 547.843V405.937C421.993 376.125 378.09 309.6 226.534 282C74.9784 254.4 11.6965 145.167 -1 94Z" />
            <path d="M-16 888C-8.65371 864.158 38.272 802.093 101.439 773.116C378.5 646.018 435 664.753 435 608.384V465.964C262.5 276.021 70.5372 426.347 -6 530.477L-16 888Z" />
            <path d="M-6 840.865V967.676C-6 895.568 61.7436 853.09 95.6155 840.865C275.929 780.692 401.002 921.883 441 1000V466C423.163 531.27 471.5 670.5 143.18 727.108C34.6548 745.82 -6 840.865 -6 840.865Z" />
            <path d="M-6 945.577V1105.15C37.5092 1216.68 177.38 1261.26 241.877 1269.62C330.15 1272.23 402.073 1338.96 427 1372V974.986C363.41 862.144 246.06 824.494 195.335 819.774C43.4708 809.754 -2.16506 899.468 -6 945.577Z" />
            <path d="M-12.8282 1519V1075.13C-14.4603 1062.67 -14.3193 1049.91 -12.8282 1037V1075.13C-4.34519 1139.85 52.038 1196.13 215.738 1220.17C269.906 1228.13 368.74 1242.68 441 1342.7V1485.24C426.497 1428.98 375.019 1319.07 285.134 1329.58C221.062 1332.91 71.7689 1375.46 -12.8282 1519Z" />
            <path d="M300.131 1325C142.3 1302.89 30.1404 1432.37 -6 1499.05V1542V1743L211.5 1806.5L459.5 1757.5L433 1463.45C414.93 1409.2 396.5 1338.5 300.131 1325Z" />
          </g>
          <defs>
      <linearGradient id="linear-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0.451661" stop-color="#B50905"/>
          <stop offset="0.548698" stop-color="#B50905" stop-opacity="1"/>
          <stop offset="1.884812" stop-color="#B50905" stop-opacity="0.8"/>
          <stop offset="1" stop-color="#B50905" stop-opacity="8"/>
      </linearGradient>
    </defs>
        </StyledSvg>
      </Container>
    );
  }
  const Container = styled.div`
    max-width: 2880px;
    margin: auto;
    position: relative;
    overflow: hidden;
  `;
  const Content = styled.div`
    position: absolute;
    object-fit: cover;
    mix-blend-mode: overlay;
    opacity: 0.6;
    width: 100%;
    z-index: 2;
  `;
  
  const ImageContainer = styled.div`
    position: absolute;
    object-fit: cover;
    mix-blend-mode: overlay;
    opacity: 0.6;
    width: 100%;
    z-index: 2;
  `;
  const OverlayImage = styled(Image)`
    position: absolute;
    justify-content: end;
    object-fit: cover;
    mix-blend-mode: overlay;
    opacity: 0.6;
    width: 100%;
    z-index: 2;
    top: 0;
  `;
  const Secon = styled.div`
  position: absolute;
    object-fit: cover;
    mix-blend-mode: overlay;
    opacity: 0.6;
    width: 100%;
    z-index: 2;
    top: 50;
  `;
  const Third = styled.div`
  position: absolute;
    object-fit: cover;
    mix-blend-mode: overlay;
    opacity: 0.6;
    width: 100%;
    z-index: 2;
    bottom:0;
  `;
  
  const StyledSvg = styled.svg`
    max-width: 2880px;
    margin: auto;
    position: relative;
    overflow: visible;
    z-index: 1;
    path {
      fill: none;
    }
    path:nth-of-type(odd) {
      fill: url(#linear-gradient);  
    }
    path:nth-of-type(even) {
      fill: #BCBCBC;
    }
    clipPath {
      rect {
        width: 425px;
        height: 1463px;
        fill: #BCBCBC;
      }
    }
  `;

 
export default Home;