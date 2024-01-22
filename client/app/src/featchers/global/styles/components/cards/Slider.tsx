import { useState } from 'react';
import styled from 'styled-components';

const SliderContainer = styled.div`
  display: flex;
  align-items: center;
  width: 300px; 
  margin: 20px;
`;

const SliderTrack = styled.div`
  height: 4px; 
  width: 100%;
  background-color: #ddd; 
  position: relative;
`;

const SliderThumb = styled.div<{ value: number }>`
  position: absolute;
  left: ${(props) => props.value}%; 
  transform: translateX(-50%);
  height: 20px; /* Adjust thumb size */
  width: 20px; /* Adjust thumb size */
  background-color: blue; /* Adjust thumb color */
  border-radius: 50%; /* Round shape */
  cursor: pointer;
`;

type SliderProps = {
  min: number;
  max: number;
  onChange: (value: number) => void;
};

export const Slider: React.FC<SliderProps> = ({ min, max, onChange }) => {
  const [value, setValue] = useState<number>(min);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const percent = (x / rect.width) * 100;
    const newValue = (percent / 100) * (max - min) + min;
    setValue(newValue);
    onChange(newValue);
  };

  return (
    <SliderContainer>
      <SliderTrack onMouseDown={handleMouseMove}>
        <SliderThumb value={((value - min) / (max - min)) * 100} />
      </SliderTrack>
    </SliderContainer>
  );
};
