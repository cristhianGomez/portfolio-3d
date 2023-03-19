import { motion } from "framer-motion"
import { styles } from '../styles'
import { Room } from "./svgs"
const MainHero = () => {
  return (
    <section className="mt-20 relative w-full h-screen">
      <div className={`${styles.paddingX} mt-[20vh] max-w-7xl mx-auto`}>
        <div>
          <h3 className={styles.heroSubText}>Hello there!</h3>
          <h1 className={styles.heroHeadText}>I'm <span className="text-secondary">Cristhian Gómez</span></h1>
          <p className="max-w-[550px] mt-8">
            I’m a software developer with expertise in developing modern web 
            applications using frameworks such as Vue, React and Node.js.<br />
            I am passionate about building high-quality software that meets the
            unique needs of each project.
          </p>
        </div>
      </div>
      <Room />
        <div className="absolute xs:bottom-10 sm:bottom-32 w-full flex justify-center items-center">
          <a href="#about">
            <div className="w-[35px]  h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
              <motion.div 
                animate={{ y:  [0, 24, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: 'loop'
                }}
                className="w-3 h-3 rounded-full bg-secondary mb-1"
              />
            </div>
          </a>
        </div>
    </section>
  )
}

export default MainHero