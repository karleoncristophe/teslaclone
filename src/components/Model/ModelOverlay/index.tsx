import { useTransform } from 'framer-motion';
import React, { useCallback, useLayoutEffect, useState } from 'react';

import { CarModel } from '../ModelsContext';
import UseWrapperScroll from '../UseWrapperScroll';

import { Container } from './styles';

interface Props {
  model: CarModel
}

type SectionDimensions = Pick<HTMLDivElement, 'offsetTop' | 'offsetHeight'>

const ModelOverlay: React.FC<Props> = ({model, children}) => {

  const getSectionDimensions = useCallback(() => {
    return {
      offsetTop: model.sectionRef.current?.offsetTop,
      offsetHeight: model.sectionRef.current?.offsetHeight,
    } as SectionDimensions
  },[model.sectionRef])


 const [dimensions, setDimensions] = useState<SectionDimensions>(
  getSectionDimensions()
 )

 useLayoutEffect(() => {
   function onResize() {
     window.requestAnimationFrame(() => setDimensions(getSectionDimensions()))
   }


   window.removeEventListener('resizer', onResize)
 }, [getSectionDimensions])

 const {scrollY} = UseWrapperScroll()
  
 const setctionScrollProgress = useTransform(scrollY, y => (y - dimensions.offsetTop) / dimensions.offsetHeight)

 const opacity = useTransform(
   setctionScrollProgress,
   [-0.42, -0.05, 0.5, 0.42], 
   [0, 1, 1, 0]
  )

  const pointerEvents = useTransform(opacity, value =>
    value > 0 ? 'auto' : 'none'
    )

  return (
    <Container style={{ opacity, pointerEvents }}>{children} </Container>
  );
};

export default ModelOverlay;
