import React, { useEffect, useState } from 'react';
import { ScrollContainer, Mouse, ScrollDot, Text } from './styles';

const ScrollIndicator: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY < 100); // Hide if scroll position is beyond 100px
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <ScrollContainer isVisible={isVisible}>
      <Mouse>
        <ScrollDot />
      </Mouse>
      <Text>scroll down</Text>
    </ScrollContainer>
  );
};

export default ScrollIndicator;
