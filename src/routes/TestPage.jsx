import "../App.css";
import "../animation";
import { motion } from "framer-motion";
import JOAKIM from "../assets/JoakimVillo.svg";

function TestPage() {
  return (
    <>
      <div className="bg-orange-200 absolute h-screen w-screen top-0 left-0 grid content-center justify-center">
        {/* <div className="joakim-villo text-9xl">
          <img className="joakim-villo" src={JOAKIM} />
        </div> */}
        <motion.div
          className="w-36 h-36 bg-orange-400 text-white flex items-center justify-center"
          animate={{
            scale: [1, 2, 2, 1, 1],
            rotate: [0, 0, 180, 180, 0],
            borderRadius: ["0%", "0%", "50%", "50%", "0%"],
          }}
          transition={{
            duration: 5,
            ease: "easeInOut",
            times: [0, 0.2, 0.5, 0.8, 1],
            repeat: Infinity,
            repeatDelay: 2,
          }}
        >
          <motion.div
            className="w-16 h-16 bg-blue-400 text-white flex items-center justify-center"
            animate={{
              scale: [1, 2, 2, 1, 1],
              rotate: [0, 0, 180, 180, 0],
              borderRadius: ["0%", "0%", "50%", "50%", "0%"],
            }}
            transition={{
              duration: 20,
              ease: "easeInOut",
              times: [0, 0.2, 0.5, 0.8, 1],
              repeat: Infinity,
              repeatDelay: 2,
            }}
          >
            <motion.div
              className="w-6 h-6 bg-green-400 text-white flex items-center justify-center"
              animate={{
                scale: [1, 2, 2, 1, 1],
                rotate: [0, 0, 180, 180, 0],
                borderRadius: ["0%", "0%", "50%", "50%", "0%"],
              }}
              transition={{
                duration: 15,
                ease: "easeInOut",
                times: [0, 0.2, 0.5, 0.8, 1],
                repeat: Infinity,
                repeatDelay: 2,
              }}
            ></motion.div>
          </motion.div>
        </motion.div>
        <div>WOW</div>
      </div>
    </>
  );
}

export default TestPage;
