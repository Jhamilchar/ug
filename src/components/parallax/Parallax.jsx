import { motion, useScroll, useTransform } from "framer-motion";
import "../../styles/parallax.css";
import { useRef } from "react";

const Parallax = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div className="parallax">
      <div className="container-texts">
        <motion.h1 className="special-text" style={{ y: yText }}>
          AWS para Todos, AWS para Ti
        </motion.h1>
        <motion.p className="special-text-2" style={{ y: yText }}>
          Descubre el Poder de AWS
        </motion.p>
      </div>
      <motion.div className="mountains"></motion.div>
      <motion.div style={{ y: yBg }} className="planets"></motion.div>
      <motion.div style={{ x: yBg }} className="stars"></motion.div>
    </div>
  );
};

export default Parallax;
