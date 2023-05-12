import React from "react";
import styled from "styled-components";

const AdContainer = styled.div`
  height: 500px;
  width: 100vw;
  background-color: #3d5a80;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h2`
  font-size: 36px;
  font-weight: bold;
  color: #e0fbfc;
  margin-bottom: 20px;
  text-align: center;
`;

const Subtitle = styled.h3`
  font-size: 24px;
  font-weight: bold;
  color: #98c1d9;
  margin-bottom: 20px;
  text-align: center;
`;

const TextContent = styled.div`
  height: 100px;
  width: 80%;
  color: #293241;
  font-size: 18px;
  line-height: 1.5;
  text-align: center;
  margin-bottom: 20px;
`;

const CompanyLogosContainer = styled.div`
  height: 50px;
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  perspective: 1000px;
  transform-style: preserve-3d;
`;

const CompanyLogo = styled.img`
  width: auto;
  margin: 0 10px;
  animation: spin 5s infinite linear;
  transform-style: preserve-3d;
  @keyframes spin {
    0% {
      transform: rotateZ(0);
    }
    25% {
      transform: rotateZ(2deg);
    }
    50% {
      transform: rotateZ(0);
    }
    75% {
      transform: rotateZ(-2deg);
    }
    100% {
      transform: rotateZ(0);
    }
  }
`;

const AdContent: React.FC = () => {
  const companyLogos = [
    { src: "https://files.codingninjas.in/google-9542.svg", alt: "google" },
    {
      src: "https://files.codingninjas.in/microsoft-9541.svg",
      alt: "microsoft",
    },
    { src: "https://files.codingninjas.in/adobe-9540.svg", alt: "Adobe" },
    // { src: "https://files.codingninjas.in/amazon-9538.svg", alt: "Amazon" },
    // { src: "https://files.codingninjas.in/flipkart-9536.svg", alt: "Flipkart" },
    { src: "https://files.codingninjas.in/samsung-9534.svg", alt: "Samsung" },
    // { src: "https://files.codingninjas.in/expedia-9533.svg", alt: "Expedia" },
  ];

  return (
    <AdContainer>
      <Title>
        More than 50k recruiters from leading tech companies are hiring
      </Title>
      <Subtitle>
        Join the ranks of top talent and land your dream job today!
      </Subtitle>
      <TextContent>
        Our job portal connects you with the best tech companies in the
        industry, offering positions in software development, data science, AI,
        and more. With our personalized job matching algorithm, you can find the
        perfect job for you in no time. Sign up today and start your journey to
        success!
      </TextContent>
      <CompanyLogosContainer>
        {companyLogos.map((logo) => (
          <CompanyLogo
            src={logo.src}
            alt={logo.alt}
            key={logo.alt}
            width="50px"
          />
        ))}
      </CompanyLogosContainer>
    </AdContainer>
  );
};

export default AdContent;
