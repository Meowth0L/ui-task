import React from 'react';

const useScroll = () => {
  const [isScrollingDown, setIsScrollingDown] = React.useState(false);
  const [scrollPosition, setScrollPosition] = React.useState(0);

  React.useEffect(() => {
    let prevScrollPosition = window.scrollY;

    const handleScroll = () => {
      const currentScrollPosition = window.scrollY;

      setIsScrollingDown(prevScrollPosition < currentScrollPosition);
      setScrollPosition(currentScrollPosition);

      prevScrollPosition = currentScrollPosition;
    };

    window.addEventListener('scroll', handleScroll, false);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return { isScrollingDown, scrollPosition };
};

export default useScroll;
