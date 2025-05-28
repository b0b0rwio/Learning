import React, { useState, useEffect } from "react";
import styled from "styled-components";
import appleImg from "./apple.jpg";
import { useNavigate } from "react-router";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  max-width: 300px;
  margin: 20px;
  transition: all 0.3s ease;
`;

const HoverCard = styled(Card)`
  &:hover {
    transform: scale(1.05);
  }
`;

const CardImage = styled.img`
  width: 50%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 15px;
`;

const CardTitle = styled.h3`
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const CardDescription = styled.p`
  font-size: 15px;
  text-align: center;
  line-height: 1.5;
  margin-bottom: 20px;
`;

export const CardButton = styled.button`
  padding: 10px 15px;
  background-color: ${({ isDisabled }) => (isDisabled ? "#b0b0b0" : "#006395")};
  color: white;
  border: none;
  border-radius: 6px;
  cursor: ${({ isDisabled }) => (isDisabled ? "not-allowed" : "pointer")};
  font-size: 15px;
  width: 100%;
`;

const ProductCard = () => {
  const [hasError, setHasError] = useState(false);
  const navigate = useNavigate();

  if (hasError) {
    throw new Error("Test error in ProductCard render");
  }

  return (
    <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "center" }}>
      <HoverCard>
        <CardImage src={appleImg} alt="Apple Image" />
        <CardTitle>Apple</CardTitle>
        <CardDescription>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis ut quam provident quia nostrum
          mollitia corporis optio fuga adipisci, hic ab quas molestias officiis! Quo voluptatem corrupti tenetur
          facilis hic.
        </CardDescription>
        <CardButton onClick={() => { navigate("/Details") }}>Buy</CardButton>
      </HoverCard>

      <Card>
        <CardImage src={appleImg} alt="Apple Image" />
        <CardTitle>Apple</CardTitle>
        <CardDescription>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis ut quam provident quia nostrum
          mollitia corporis optio fuga adipisci, hic ab quas molestias officiis! Quo voluptatem corrupti tenetur
          facilis hic.
        </CardDescription>
        <CardButton isDisabled>Buy</CardButton>
      </Card>
      
      <CardButton style={{width:"10%",height:"10%"}}onClick={() => setHasError(true)}>Simulate Error</CardButton>
    </div>
  );
};

export default ProductCard;
