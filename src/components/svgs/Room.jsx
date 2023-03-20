import { motion } from "framer-motion"
import { Books, Chair, Clock, Ground, Lamp, Monitors, Moon, PhotoSqr, Table, Window, KiraCat, ToriCat, MoonCat } from '../room'
const Room = () => {
    return (
        <motion.div animate={{ x: 0 }} className="relative flex justify-center">
            {/* <svg width="650" height="440"></svg>
            <Books className="absolute top-0" />
            <Clock className="absolute top-0" />
            <Lamp className="absolute top-0" />
            <Monitors className="absolute top-0" />
            <Moon className="absolute top-0" />
            <PhotoSqr className="absolute top-0" />
            <Window className="absolute top-0" />
            <KiraCat className="absolute top-0" />
            <ToriCat className="absolute top-0" />
            <MoonCat className="absolute top-0" />
            <Chair className="absolute bottom-[]" />
            <Table className="absolute bottom-[3.75rem] z-10" /> */}
            <Ground className="absolute bottom-0 w-full" />
        </motion.div>
    )
}
export default Room