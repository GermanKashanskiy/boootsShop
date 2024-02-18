import { useState, useEffect } from 'react';
import useWindowDimensions from "../../shared/UseWindowDimentions";

export type Orientation = 'vertical' | 'horizontal';

export const useProductSectionLogic = () => {
  const [view, setView] = useState('list');
  const [imgNumber, setImgNumber] = useState<number>(0);
  const { width } = useWindowDimensions();
  const [orientation, setOrientation] = useState<Orientation>(width >= 900 ? 'vertical' : 'horizontal');

  const handleChange = (event: React.MouseEvent<HTMLElement>, nextView: string) => {
    if (nextView === null || nextView === view) {
      return;
    }
    setView(nextView);
    const newImgNumber = parseInt(nextView.split('-')[1]) - 1;
    setImgNumber(newImgNumber);
  };

  useEffect(() => {
    const newOrientation = width >= 900 ? 'vertical' : 'horizontal';
    setOrientation(newOrientation);
  }, [width]);

  return { view, setView, imgNumber, setImgNumber, orientation, handleChange };
};
