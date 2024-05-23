import { motion } from "framer-motion"
import { Link, Heading, Image, Button, Box, Container, Text, useColorModeValue } from "@chakra-ui/react"
import NextLink from "next/link"
import me from "../public/images/me.jpg"
import Section from "../components/section"
import Paragraph from "../components/paragraph"
import { ChevronRightIcon } from "@chakra-ui/icons"
import { ExperienceSection, Year } from "../components/experience"

const Page = () => {
    return (
            <motion.div
                key={useColorModeValue('light', 'dark')}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 20, opacity: 0 }}
                transition={{ duration: 0.2 }}
            >
                <Container>
                    <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', '#19253680')} p={3} mb={6} align="center">
                        <i>&quot;Crafting digital solutions, one stack at a time...&quot;</i>
                    </Box>

                    <Box display={{ md: 'flex' }} alignItems="center" mb={10}>
                        <Box flexGrow={1}>
                            <Heading as="h2" variant="page-title">
                                Stephen Adebambo
                            </Heading>
                            <p>Full-Stack Engineer/ UI Designer / Hopeless Creative</p>
                        </Box>
                        <Box
                            flexShrink={0}
                            mt={{ base: 4, md: 0 }}
                            ml={{ md: 6 }}
                            align="center"
                        >
                            <Image
                                borderColor={useColorModeValue('#19253680', 'f0e7db')}
                                borderWidth={3}
                                borderStyle="solid"
                                maxW="120px"
                                display="inline-block"
                                borderRadius="full"
                                src={me.src}
                                alt="Profile Image"
                            />
                        </Box>
                    </Box>

                    <Section delay={0.1}>
                        <Heading as="h3" variant="section-title">
                            About
                        </Heading>
                        <Paragraph>
                            As a full-stack engineer, I&apos;m fueled by curiosity and a passion for innovation.
                            My interests span system architecture and user interface design, driving me to
                            explore the intersection of functionality and aesthetics. Currently pursuing a
                            Master&apos;s in Computer Science at Georgia Tech, I immerse myself in both theory
                            and practice. Beyond coding, you&apos;ll find me sketching, diving into literature,
                            or tinkering with my Neovim setup.
                        </Paragraph>
                        <Box align="center" my={8}>
                            <Link as={NextLink} href="/">
                                <Button
                                    rightIcon={<ChevronRightIcon />}
                                    colorScheme={useColorModeValue('purple', 'orange')}>
                                    Resum&eacute;
                                </Button>
                            </Link>
                        </Box>
                    </Section>

                    <Section delay={0.2}>
                        <Heading as="h3" variant="section-title">
                            Experience
                        </Heading>

                        <ExperienceSection mb={2} mt={2}>
                            <Year>2021</Year>
                            Worked as an intern over the summer for
                            <Link
                                as={NextLink}
                                href="https://aiivon.com/"
                                target="_blank"
                                _hover={{ textDecor: "underline" }}
                                transition="ease"
                                color={useColorModeValue('#805ad5', '#fbd38d')}
                            > Aiivon Innovation Hub</Link>.
                        </ExperienceSection>

                        <ExperienceSection mb={2} mt={2}>
                            <Year>2023</Year>
                            Obtained a Bachelor&apos;s Degree in Computer Science
                            at Nile University of Nigeria, Abuja, Nigeria.
                        </ExperienceSection>

                        <ExperienceSection mb={2} mt={2}>
                            <Year></Year>
                        </ExperienceSection>

                    </Section>
                </Container>
            </motion.div>
    )
}

export default Page
