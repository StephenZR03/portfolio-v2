import { Container, Box, Heading, SimpleGrid, Divider } from "@chakra-ui/react"
import { motion } from "framer-motion"
import Section from "../components/section"

const Experience = () => {
    return (
        <motion.div
            key=""
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            transition={{ duration: 0.2 }}
        >
            <Container>
                <Heading as="h3" fontSize={20} mb={4}>
                    Experience
                </Heading>
            </Container>
        </motion.div>
    )
}

export default Experience
