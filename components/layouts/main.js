import Head from "next/head"
import { Box, Container, Flex } from "@chakra-ui/react"
import Navbar from "../navbar.js"

const Main = ({ children, router }) => {
    return (
        <Box as="main" pb={8}>
            <Head>
                <meta name='viewport' content="width=device-width, initial-scale=1" />
                <title>Stephen Adebambo - Homepage</title>
            </Head>

            <Navbar router={router.asPath} />
            <Container maxW="container.md" pt={20}>
                {children}
            </Container>
        </Box>
    )
}

export default Main
