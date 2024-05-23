import { ChakraProvider } from "@chakra-ui/react";
import Layout from "../components/layouts/main"
import theme from "../lib/theme"
import { AnimatePresence } from "framer-motion";

const Website = ({ Component, pageProps, router }) => {
    return (
        <ChakraProvider theme={theme}>
            <AnimatePresence mode="wait" initial={false}>
                <Layout router={router} >
                    <Component {...pageProps} key={router.route} />
                </Layout>
            </AnimatePresence>
        </ChakraProvider>
    )
}

export default Website
