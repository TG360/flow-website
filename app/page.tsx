"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Clock, MapPin, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import { useRef } from "react"
import { AnimatedText } from "@/lib/AnimatedText";

export default function LandingPage() {
  // For parallax scrolling effect
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 1000], [0, 200])
  const y2 = useTransform(scrollY, [0, 1000], [0, -200])

  // Refs for scroll animations
  const missionRef = useRef(null)
  const featuresRef = useRef(null)
  const aboutRef = useRef(null)
  const faqRef = useRef(null)
  const contactRef = useRef(null)

  // InView states
  const missionInView = useInView(missionRef, { once: true, amount: 0.3 })
  const featuresInView = useInView(featuresRef, { once: true, amount: 0.3 })
  const aboutInView = useInView(aboutRef, { once: true, amount: 0.3 })
  const faqInView = useInView(faqRef, { once: true, amount: 0.3 })
  const contactInView = useInView(contactRef, { once: true, amount: 0.3 })

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  }


  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 10 },
    },
  }

  const fadeInUpVariants = {
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 12, duration: 0.6 },
    },
  }

  const staggerContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  }

  const featureCardVariants = {
    hidden: { y: 50, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 100, damping: 12 },
    },
    hover: {
      y: -10,
      scale: 1.05,
      boxShadow:
          "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: { type: "spring", stiffness: 400, damping: 10 },
    },
  }

  const founderCardVariants = {
    hidden: { y: 50, opacity: 0, rotateY: 30 },
    visible: {
      y: 0,
      opacity: 1,
      rotateY: 0,
      transition: { type: "spring", stiffness: 100, damping: 12 },
    },
  }

  // Floating animation for hero circle
  const floatingAnimation = {
    y: [-20, 0, -20],
    transition: { duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
  }

  // Pulse animation for hero circle
  const pulseAnimation = {
    scale: [1, 1.05, 1],
    opacity: [0.7, 0.9, 0.7],
    transition: { duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
  }

  // Rotating animation for gradient background
  const rotateAnimation = {
    rotate: 360,
    transition: { duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
  }

  return (
      // Removed "overflow-hidden" from the outer div
      <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950">
        <header className="border-b sticky top-0 z-40 bg-transparent bg-opacity-90 backdrop-blur-sm dark:border-gray-800">
          <div className="flex h-16 items-center justify-around px-4 md:px-6">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
              <Link href="/" className="flex items-center gap-2 text-lg font-semibold">
                <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}>
                  <Image src="/logo2.png" width={30} height={30} alt="Logo Picture" />
                </motion.div>
                <motion.span
                    className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent dark:from-blue-400 dark:to-purple-400"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  Flow
                </motion.span>
              </Link>
            </motion.div>

            <nav className="hidden md:flex gap-6">
              {["Mission", "Features", "About", "FAQ", "Contact"].map((item, index) => (
                  <motion.div
                      key={item}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                  >
                    {/* Wrap link text in a relative container with an animated underline */}
                    <Link href={`/#${item}`} className="relative text-md font-medium text-blue-500 dark:text-blue-400">
                      <motion.span
                          className="relative"
                          whileHover="hover"
                          initial="rest"
                          animate="rest"
                      >
                        {item}
                        <motion.div
                            variants={{
                              rest: { width: 0 },
                              hover: { width: "100%" },
                            }}
                            transition={{ duration: 0.3 }}
                            className="absolute -bottom-1 left-0 h-0.5 bg-blue-500 dark:bg-blue-400"
                        />
                      </motion.span>
                    </Link>
                  </motion.div>
              ))}
            </nav>

            <div className="flex gap-4">
              <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.6, duration: 0.5 }}>
                <Link href="/auth/login">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                        variant="outline"
                        size="sm"
                        className="border-blue-300 text-blue-600 hover:bg-blue-50 dark:border-blue-700 dark:text-blue-400 dark:hover:bg-blue-950"
                    >
                      Log In
                    </Button>
                  </motion.div>
                </Link>
              </motion.div>

              <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.7, duration: 0.5 }}>
                <Link href="/auth/signup">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                        size="sm"
                        className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 dark:from-blue-600 dark:to-purple-600 dark:hover:from-blue-700 dark:hover:to-purple-700"
                    >
                      Sign Up
                    </Button>
                  </motion.div>
                </Link>
              </motion.div>
            </div>
          </div>
        </header>

        <main className="flex-1">
          {/* Hero Section */}
          <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 overflow-hidden">
            <div className="container px-4 md:px-6 mx-auto relative">
              {/* Animated background elements */}
              <motion.div
                  className="absolute -top-20 -left-20 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl dark:bg-blue-500/30 z-0"
                  animate={pulseAnimation}
              />
              <motion.div
                  className="absolute top-40 -right-20 w-80 h-80 bg-purple-400/20 rounded-full blur-3xl dark:bg-purple-500/30 z-0"
                  animate={{ ...pulseAnimation, transition: { ...pulseAnimation.transition, delay: 1 } }}
              />

              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2 relative z-10">
                <motion.div
                    className="flex flex-col justify-center space-y-4"
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.2 }}
                >
                  <div className="space-y-2">
                    <AnimatedText
                        el="h1"
                        text={[
                          "Travel Your Way.",
                          "Every Day.",
                        ]}
                        className="text-3xl font-bold tracking-tighter leading-tight sm:text-5xl xl:text-6xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-purple-400"
                        repeatDelay={10000}
                    />
                    <motion.p
                        className="max-w-[600px] text-slate-600 md:text-xl dark:text-slate-300"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                    >
                      Fast, reliable rides at your fingertips. Join our community of riders and drivers in Bryan/College Station.
                    </motion.p>
                  </div>
                  <motion.div
                      className="flex flex-col relative gap-2 min-[400px]:flex-row"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7, duration: 0.8 }}
                  >
                    <Link href="/auth/signup?role=user">
                      <motion.div
                          whileHover={{ scale: 1.05, x: 5 }}
                          whileTap={{ scale: 0.95 }}
                          transition={{ type: "spring", stiffness: 400, damping: 10 }}
                          className="relative overflow-hidden"
                      >
                        <Button
                            size="lg"
                            className="group w-full min-[400px]:w-auto bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 dark:from-blue-600 dark:to-purple-600 dark:hover:from-blue-700 dark:hover:to-purple-700 transition-all relative overflow-hidden"
                        >
                          <span className="relative z-10 flex items-center">
                            Book a Ride
                            <motion.div
                                animate={{ x: [0, 5, 0] }}
                                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5, repeatType: "reverse" }}
                            >
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </motion.div>
                          </span>
                          {/* Shimmer effect overlay */}
                          <motion.div
                              className="absolute inset-0 w-full h-full"
                              style={{
                                background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)",
                                backgroundSize: "200% 100%",
                              }}
                              animate={{
                                backgroundPosition: ["200% 0", "-200% 0"]
                              }}
                              transition={{
                                ease: "linear",
                                duration: 5,
                                repeat: Number.POSITIVE_INFINITY,
                              }}
                          />
                        </Button>
                      </motion.div>
                    </Link>
                    <Link href="/auth/signup?role=driver">
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                        <Button
                            size="lg"
                            variant="outline"
                            className="w-full min-[400px]:w-auto border-blue-300 text-blue-600 hover:bg-blue-50 dark:border-blue-700 dark:text-blue-400 dark:hover:bg-blue-950"
                        >
                          Become a Driver
                        </Button>
                      </motion.div>
                    </Link>
                  </motion.div>
                </motion.div>

                <motion.div
                    className="flex items-center justify-center"
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.4 }}
                >
                  <div className="relative w-full max-w-[550px] aspect-square">
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl dark:from-blue-500/30 dark:to-purple-500/30"
                        animate={rotateAnimation}
                    />
                    <motion.div className="relative z-10 w-full h-full flex items-center justify-center" animate={floatingAnimation}>
                      <motion.div
                          className="w-64 h-64 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 flex items-center justify-center dark:from-blue-500 dark:to-purple-500"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ type: "spring", stiffness: 200, damping: 10 }}
                      >
                        <motion.div className="flex flex-col items-center gap-3" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8, duration: 0.5 }}>
                          {[1, 2, 3].map((_, index) => (
                              <motion.div
                                  key={index}
                                  className="w-32 h-4 bg-white rounded-full dark:bg-gray-200"
                                  initial={{ scaleX: 0 }}
                                  animate={{ scaleX: 1 }}
                                  transition={{ delay: 0.9 + index * 0.2, duration: 0.5 }}
                              />
                          ))}
                        </motion.div>
                      </motion.div>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Mission Section */}
          <motion.section
              id="Mission"
              className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950"
              ref={missionRef}
              initial="hidden"
              animate={missionInView ? "visible" : "hidden"}
              variants={containerVariants}
          >
            <div className="container px-4 md:px-6 mx-auto">
              <motion.div className="flex flex-col items-center justify-center space-y-4 text-center" variants={itemVariants}>
                <div className="space-y-2">
                  <motion.h2
                      className="text-3xl font-bold tracking-tighter md:text-4xl/tight bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-purple-400"
                      variants={itemVariants}
                  >
                    Our Mission
                  </motion.h2>
                </div>
              </motion.div>
              <motion.div className="mx-auto grid max-w-3xl mt-8 text-center" variants={itemVariants}>
                <motion.p className="text-lg text-slate-600 mb-6 dark:text-slate-300" variants={itemVariants}>
                  At Flow, our mission is to make transportation seamless, safe, and accessible while empowering drivers with greater flexibility and earning potential. We strive to create a driver-first platform where our partners have the tools, support, and fair compensation they deserve.
                </motion.p>
                <motion.p className="text-lg text-slate-600 dark:text-slate-300" variants={itemVariants}>
                  By prioritizing safety, community, and innovation, we connect riders with reliable drivers, ensuring affordability and trust in every ride. Flow isn’t just about getting from point A to B – It’s about building a transportation network that values and uplifts the people who make it possible.
                </motion.p>
              </motion.div>
            </div>
          </motion.section>

          {/* Features Section */}
          <motion.section
              id="Features"
              className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-900 relative overflow-hidden"
              ref={featuresRef}
              initial="hidden"
              animate={featuresInView ? "visible" : "hidden"}
              variants={containerVariants}
          >
            {/* Animated background elements */}
            <motion.div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl dark:bg-blue-500/10 z-0" style={{ y: y1 }} />
            <motion.div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl dark:bg-purple-500/10 z-0" style={{ y: y2 }} />

            <div className="container px-4 md:px-6 mx-auto relative z-10">
              <motion.div className="flex flex-col items-center justify-center space-y-4 text-center" variants={itemVariants}>
                <div className="space-y-2">
                  <motion.div
                      className="inline-block rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 px-3 py-1 text-sm text-white dark:from-blue-600 dark:to-purple-600"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      variants={itemVariants}
                  >
                    Features
                  </motion.div>
                  <motion.h2
                      className="text-3xl font-bold tracking-tighter md:text-4xl/tight bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-purple-400"
                      variants={itemVariants}
                  >
                    What Makes Flow Different
                  </motion.h2>
                </div>
              </motion.div>

              <motion.div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3" variants={staggerContainerVariants}>
                {[
                  {
                    icon: <Shield className="h-8 w-8 text-blue-500 dark:text-blue-400" />,
                    title: "Transparent Pricing Model",
                    description: "Via our transparent pricing model, drivers can better understand their earning potential.",
                  },
                  {
                    icon: <Clock className="h-8 w-8 text-purple-500 dark:text-purple-400" />,
                    title: "Subscription Driven",
                    description: "With a subscription model, drivers have fixed costs, increasing earnings potential.",
                  },
                  {
                    icon: <MapPin className="h-8 w-8 text-blue-600 dark:text-blue-400" />,
                    title: "Marketplace",
                    description: "Through our marketplace, we return pricing power to the people, letting demand rule.",
                  },
                ].map((feature, index) => (
                    <motion.div key={index} className="grid gap-2 text-center" variants={featureCardVariants} whileHover="hover" custom={index}>
                      <motion.div
                          className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-blue-400/20 to-purple-400/20 dark:from-blue-500/30 dark:to-purple-500/30"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        {feature.icon}
                      </motion.div>
                      <motion.h3
                          className={`text-xl font-bold ${
                              index === 1
                                  ? "text-purple-600 dark:text-purple-400"
                                  : index === 2
                                      ? "bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-purple-400"
                                      : "text-blue-600 dark:text-blue-400"
                          }`}
                      >
                        {feature.title}
                      </motion.h3>
                      <motion.p className="text-slate-600 dark:text-slate-300">{feature.description}</motion.p>
                    </motion.div>
                ))}
              </motion.div>

              <motion.div className="flex justify-center mt-8" variants={fadeInUpVariants}>
                <Link href="/#Contact">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                    <Button
                        size="lg"
                        className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 dark:from-blue-600 dark:to-purple-600 dark:hover:from-blue-700 dark:hover:to-purple-700"
                    >
                      Get in Touch
                    </Button>
                  </motion.div>
                </Link>
              </motion.div>
            </div>
          </motion.section>

          {/* About Us Section */}
          <motion.section
              id="About"
              className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950"
              ref={aboutRef}
              initial="hidden"
              animate={aboutInView ? "visible" : "hidden"}
              variants={containerVariants}
          >
            <div className="container px-4 md:px-6 mx-auto">
              <motion.div className="flex flex-col items-center justify-center space-y-4 text-center" variants={itemVariants}>
                <div className="space-y-2">
                  <motion.h2
                      className="text-3xl font-bold tracking-tighter md:text-4xl/tight bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-purple-400"
                      variants={itemVariants}
                  >
                    About Us
                  </motion.h2>
                  <motion.p className="text-xl font-semibold text-blue-600 dark:text-blue-400" variants={itemVariants}>
                    Travel your way. Every Day.
                  </motion.p>
                </div>
              </motion.div>

              <motion.div className="mx-auto grid max-w-3xl mt-8 text-center" variants={itemVariants}>
                {[
                  "At Flow, we believe in seamless, efficient, and reliable transportation. Founded with the vision of redefining ridesharing in Bryan/College Station, we're committed to providing a safe and affordable way to get around town.",
                  "Our platform connects riders with independent drivers who meet strict safety and reliability standards. Whether you're heading to class, work, or a night out, Flow ensures you get there with ease.",
                  "Driven by innovation and a passion for community, we're here to make every ride simple, stress-free, and accessible. Welcome to a new era of transportation- welcome to Flow.",
                ].map((paragraph, index) => (
                    <motion.p key={index} className="text-lg text-slate-600 mb-6 dark:text-slate-300" variants={fadeInUpVariants} custom={index}>
                      {paragraph}
                    </motion.p>
                ))}
              </motion.div>

              {/* Founders Section */}
              <motion.div className="mt-16" variants={containerVariants}>
                <motion.h3
                    className="text-2xl font-bold text-center mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-purple-400"
                    variants={itemVariants}
                >
                  Our Founders
                </motion.h3>

                <motion.div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto" variants={staggerContainerVariants}>
                  {[
                    { name: "Founder Name", title: "Co-Founder & CEO", textColor: "text-blue-600 dark:text-blue-400" },
                    { name: "Founder Name", title: "Co-Founder & CTO", textColor: "text-purple-600 dark:text-purple-400" },
                    {
                      name: "Founder Name",
                      title: "Co-Founder & COO",
                      textColor:
                          "bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-purple-400",
                    },
                  ].map((founder, index) => (
                      <motion.div
                          key={index}
                          className="flex flex-col items-center text-center"
                          variants={founderCardVariants}
                          whileHover="hover"
                          custom={index}
                      >
                        <motion.div
                            className="w-32 h-32 rounded-full bg-gradient-to-r from-blue-400/30 to-purple-400/30 mb-4 overflow-hidden dark:from-blue-500/40 dark:to-purple-500/40"
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                          <Image
                              src="/placeholder.svg?height=128&width=128"
                              width={128}
                              height={128}
                              alt={`${founder.name}`}
                              className="object-cover"
                          />
                        </motion.div>
                        <motion.h4 className={`text-xl font-bold ${founder.textColor}`}>{founder.name}</motion.h4>
                        <motion.p className="text-sm text-slate-500 mt-1 dark:text-slate-400">{founder.title}</motion.p>
                        <motion.p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue.
                        </motion.p>
                      </motion.div>
                  ))}
                </motion.div>
              </motion.div>

              <motion.div className="flex justify-center mt-12" variants={fadeInUpVariants}>
                <Link href="/#Contact">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                    <Button
                        size="lg"
                        className="text-lg px-8 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 dark:from-blue-600 dark:to-purple-600 dark:hover:from-blue-700 dark:hover:to-purple-700"
                    >
                      Are you ready to go with Flow?
                    </Button>
                  </motion.div>
                </Link>
              </motion.div>
            </div>
          </motion.section>

          {/* FAQ Section */}
          <motion.section
              id="FAQ"
              className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-900"
              ref={faqRef}
              initial="hidden"
              animate={faqInView ? "visible" : "hidden"}
              variants={containerVariants}
          >
            <div className="container px-4 md:px-6 mx-auto">
              <motion.div className="flex flex-col items-center justify-center space-y-4 text-center" variants={itemVariants}>
                <div className="space-y-2">
                  <motion.h2
                      className="text-3xl font-bold tracking-tighter md:text-4xl/tight bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-purple-400"
                      variants={itemVariants}
                  >
                    Frequently Asked Questions
                  </motion.h2>
                  <motion.p className="text-slate-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-slate-300" variants={itemVariants}>
                    Find answers to common questions about Flow
                  </motion.p>
                </div>
              </motion.div>

              <motion.div className="mx-auto grid max-w-3xl mt-8" variants={fadeInUpVariants}>
                <Accordion type="single" collapsible className="w-full">
                  {[
                    {
                      question: "How do I book a ride?",
                      answer:
                          "To book a ride with Flow, simply download our app, create an account, enter your pickup location and destination, and select a driver. You can track your ride in real-time and pay securely through the app.",
                      color: "text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300",
                      borderColor: "border-blue-200 dark:border-blue-800",
                    },
                    {
                      question: "What happens if I lose an item in a Flow vehicle?",
                      answer:
                          "If you've lost an item in a Flow vehicle, contact us immediately through the app or website. We'll connect you with your driver to arrange for the return of your belongings. Our drivers are instructed to check their vehicles after each ride and report any found items.",
                      color: "text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300",
                      borderColor: "border-blue-200 dark:border-blue-800",
                    },
                    {
                      question: "How do I become a driver?",
                      answer:
                          "To become a Flow driver, sign up through our app or website, complete the background check, provide required documentation (driver's license, insurance, vehicle registration), and complete our brief orientation. Once approved, you can start accepting rides and earning money on your own schedule.",
                      color: "text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300",
                      borderColor: "border-blue-200 dark:border-blue-800",
                    },
                    {
                      question: "What is the earnings split between a driver and Flow?",
                      answer:
                          "At Flow, we believe in fair compensation. Drivers keep a significantly higher percentage of the fare compared to traditional rideshare services. We operate on a subscription model where drivers pay a fixed weekly or monthly fee rather than a percentage of each ride, allowing them to maximize their earnings potential.",
                      color: "text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300",
                      borderColor: "border-blue-200 dark:border-blue-800",
                    },
                  ].map((faq, index) => (
                      <motion.div key={index} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 * index, duration: 0.5 }}>
                        <AccordionItem value={`item-${index + 1}`} className={faq.borderColor}>
                          <AccordionTrigger className={faq.color}>{faq.question}</AccordionTrigger>
                          <AccordionContent className="text-slate-600 dark:text-slate-300">{faq.answer}</AccordionContent>
                        </AccordionItem>
                      </motion.div>
                  ))}
                </Accordion>
              </motion.div>
            </div>
          </motion.section>

          {/* Contact Form Section */}
          <motion.section
              id="Contact"
              className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950"
              ref={contactRef}
              initial="hidden"
              animate={contactInView ? "visible" : "hidden"}
              variants={containerVariants}
          >
            <div className="px-4 md:px-6 mx-auto pr-6">
              <motion.div className="flex flex-col items-center justify-center space-y-4 text-center" variants={itemVariants}>
                <div className="space-y-2">
                  <motion.h2
                      className="text-3xl font-bold tracking-tighter md:text-4xl/tight bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-purple-400"
                      variants={itemVariants}
                  >
                    Contact Us
                  </motion.h2>
                  <motion.p className="text-slate-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-slate-300" variants={itemVariants}>
                    Have questions or want to learn more? Get in touch with our team.
                  </motion.p>
                </div>
              </motion.div>

              <motion.div className="mx-auto max-w-lg mt-8 w-full" variants={fadeInUpVariants}>
                <motion.form
                    className="space-y-4 w-full"
                    action="https://formspree.io/f/Team@RoamwithFlow.com"
                    method="POST"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                  {[
                    { id: "name", label: "Name", type: "text", placeholder: "Your name" },
                    { id: "email", label: "Email", type: "email", placeholder: "Your email" },
                    { id: "phone", label: "Phone", type: "tel", placeholder: "Your phone number" },
                  ].map((field, index) => (
                      <motion.div
                          key={field.id}
                          className="space-y-2"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.1 * (index + 1), duration: 0.5 }}
                      >
                        <Label htmlFor={field.id} className="text-blue-600 dark:text-blue-400">
                          {field.label}
                        </Label>
                        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                          <Input
                              id={field.id}
                              name={field.id}
                              type={field.type}
                              placeholder={field.placeholder}
                              required
                              className="border-blue-200 focus:border-blue-400 focus:ring-blue-400 dark:border-blue-800 dark:bg-gray-800 dark:text-white dark:focus:border-blue-600 dark:focus:ring-blue-600"
                          />
                        </motion.div>
                      </motion.div>
                  ))}

                  <motion.div className="space-y-2" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.5 }}>
                    <Label htmlFor="reason" className="text-blue-600 dark:text-blue-400">
                      Reason for Contact
                    </Label>
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Select name="reason" required>
                        <SelectTrigger className="border-blue-200 focus:border-blue-400 focus:ring-blue-400 dark:border-blue-800 dark:bg-gray-800 dark:text-white dark:focus:border-blue-600 dark:focus:ring-blue-600">
                          <SelectValue placeholder="Select a reason" />
                        </SelectTrigger>
                        <SelectContent className="dark:bg-gray-800 dark:border-blue-800 dark:text-white">
                          <SelectItem value="invest">To Invest</SelectItem>
                          <SelectItem value="ride">To Ride</SelectItem>
                          <SelectItem value="drive">To Drive</SelectItem>
                          <SelectItem value="interview">To Interview</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </motion.div>
                  </motion.div>

                  <motion.div className="space-y-2" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.5 }}>
                    <Label htmlFor="message" className="text-blue-600 dark:text-blue-400">
                      Comments
                    </Label>
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Textarea
                          id="message"
                          name="message"
                          placeholder="Your message"
                          className="min-h-[120px] border-blue-200 focus:border-blue-400 focus:ring-blue-400 dark:border-blue-800 dark:bg-gray-800 dark:text-white dark:focus:border-blue-600 dark:focus:ring-blue-600"
                      />
                    </motion.div>
                  </motion.div>

                  <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7, duration: 0.5 }}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                  >
                    <Button
                        type="submit"
                        className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 dark:from-blue-600 dark:to-purple-600 dark:hover:from-blue-700 dark:hover:to-purple-700"
                    >
                      Submit
                    </Button>
                  </motion.div>
                </motion.form>
              </motion.div>
            </div>
          </motion.section>
        </main>

        <motion.footer
            className="justify-around border-t border-blue-100 py-6 md:py-0 bg-white dark:bg-gray-900 dark:border-gray-800"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
        >
          <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row px-4 md:px-6 mx-auto">
            <motion.div className="flex items-center gap-2 text-lg font-semibold" whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
              <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}>
                <Image src="/logo2.png" width={30} height={30} alt="Logo Picture" />
              </motion.div>
              <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent dark:from-blue-400 dark:to-purple-400">
              Flow
            </span>
            </motion.div>

            <motion.div className="flex gap-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6, duration: 0.5 }}>
              {["Terms of Service", "Privacy Policy", "Contact Us"].map((item) => (
                  <motion.div key={item} whileHover={{ y: -2 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                    <Link
                        href={item === "Contact Us" ? "#contact" : "#"}
                        className="text-sm text-blue-600 hover:text-blue-800 hover:underline dark:text-blue-400 dark:hover:text-blue-300"
                    >
                      {item}
                    </Link>
                  </motion.div>
              ))}
            </motion.div>

            <motion.p className="text-sm text-slate-500 dark:text-slate-400" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7, duration: 0.5 }}>
              &copy; {new Date().getFullYear()} Flow. All rights reserved.
            </motion.p>
          </div>
        </motion.footer>
      </div>
  )
}
