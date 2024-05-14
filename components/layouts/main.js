import Head from "next/head"
import Navbox from "../navbox.js"
import Desc from "../desc.js"
import { Box, Container, Flex } from "@chakra-ui/react"

const Main = ({ children, router }) => {
    return (
        <>
            <Head>
                <meta name='viewport' content="width=device-width, initial-scale=1" />
                <title>Stephen Adebambo - Homepage</title>
            </Head>

            <Box as="main" router={router.asPath} sx={{
                '@media (min-width: 1024px)': {
                    display: 'flex',
                    justifyContent: 'center'
                }
            }}>
                {children}
            </Box>
        </>
    )
}

export default Main
