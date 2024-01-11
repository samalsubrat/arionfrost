import React, {useState,useEffect} from 'react';
import './preloader.css';
import { motion } from 'framer-motion';
import { opacity, slideUp } from './anim';


const words = ["Hello", "स्वागत हे", "Ciao", "Olà", "やあ", "Hallå", "Guten tag", "Hallo"];
const Preloader = () => {
  const [index, setIndex] = useState(0);
  useEffect( () => {

    if(index == words.length - 1) return;

    setTimeout( () => {

        setIndex(index + 1)

    }, index == 0 ? 500 : 150)

}, [index])

  return (
    <motion.div variants={slideUp} initial="initial" exit="exit" className="introduction">
        <motion.p variants={opacity} initial="initial" animate="enter">{words[index]}</motion.p>
        </motion.div>
  )
}

export default Preloader