// src/components/BannerStyles.js
import styled from 'styled-components';

export const BannerContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
  padding: 1em;

  @media (max-width: 600px) {
    padding: 0.5em;
  }
`;

export const BannerImage = styled.img`
  margin-right: 2em;
  width: 180px;
  height: auto;
  max-width: 100%;
`;

export const BannerText = styled.span`
  color: white;
  font-size: 1em;

`;

export const BannerFooter = styled.p`
  color: white;
  margin-top: 1em;

  @media (max-width: 600px) {
    font-size: 0.8em;
  }
`;
