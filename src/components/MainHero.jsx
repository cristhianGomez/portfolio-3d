import { motion } from "framer-motion"
import { styles } from '../styles'
import { Room } from "./svgs"
const MainHero = () => {
  return (
    <section className="relative w-full h-[200vh]">
      <div className={`${styles.paddingX} sticky top-0 h-screen max-w-7xl mx-auto flex justify-center items-center`}>
        <Room className="h-full max-h-[90%] px-4 sm:px-12" />
      </div>

    </section>
  )
}

export default MainHero