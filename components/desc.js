import { Box, Heading, Text, Flex } from "@chakra-ui/react"
import MobileNav from "./mobilenav.js"

const Desc = () => {
    return (

        <Box display={{ md: 'flex' }}>
            <Box flexGrow={1}>
                <Flex justifyContent="space-between">
                    <Heading as="h1" variant="page-title" fontSize="36px">
                        Stephen Adebambo
                    </Heading>
                    <MobileNav />
                </Flex>
                <Text fontWeight="bold" mb={5} mt={2}>Full-Stack Web Developer, Hopeless Creative</Text>
                <p style={{ width: "250px", marginBottom: "20px" }}>&quot;Crafting digital solutions, one stack at a time...&quot;</p>
            </Box>
        </Box>
    )
}

export default Desc
