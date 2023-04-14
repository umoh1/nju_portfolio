import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import {Container, Divider} from '@chakra-ui/react';
import Hero from '../components/Hero'
import WorkExperience from '../components/WorkExperience'
import Projects from '../components/Projects'
import Education from '../components/Education'

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  
  return (
    <>
      <Head>
        <title>NJ Umoh Portfolio</title>
        <meta name="description" content="NJ Umoh Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Container maxW="container.lg">
        {/** Hero */}
        <Hero />
        <Divider my={5}/>
        
        {/** Education */}
        <Education />
        <Divider my={5}/>
        
        {/** Skills and work experience */}
        <WorkExperience />
        <Divider my={5}/>
        
        {/** Projects */}
        <Projects />
        
      </Container>
    </>
  );
}