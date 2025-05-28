import {React,useEffect} from 'react'
import { CardButton } from './ProductCard';
const Details = () => {

  useEffect(() => {
    try {
      throw new Error('Test error in Details component');
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <div>
      hi
    </div>
  )
}

export default Details;