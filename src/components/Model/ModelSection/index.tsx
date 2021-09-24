import useModel from '../useModel';
import { Container } from './styles';
import {useEffect, useRef} from 'react'

interface Props extends React.HTMLAttributes<HTMLDivElement> { 
  modelName: string
  overlayNode: React.ReactNode
}

const ModelSection: React.FC<Props> = ({
  modelName,
  overlayNode,
  children, 
  ...props
}) => {
 const {registerModel} = useModel(modelName)

const sectionRef = useRef<HTMLDivElement>(null)

useEffect(() => {
  if(sectionRef.current) {
    registerModel({
      modelName, overlayNode, sectionRef})
  }
}, [modelName, overlayNode, registerModel])


  return (
    <Container ref={sectionRef} {...props}><h1>{children}</h1></Container>
  );
};

export default ModelSection;
