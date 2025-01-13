'use client'
import Image from 'next/image'
import GithubLineIcon from 'remixicon-react/GithubLineIcon'
import LinkedinBoxLineIcon from 'remixicon-react/LinkedinBoxLineIcon'
import {
  useMotionValue,
  useTransform,
  motion,
  useSpring,
  delay,
} from 'framer-motion'
import { useState } from 'react'

const Hero = () => {
  const [windowOffset, setWindowOffset] = useState({
    innerWidth: 0,
    innerHeight: 0,
  })
  const [mouseMove, setMouseMove] = useState(false)
  const [buttonHover, setButtonHover] = useState(false)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e
    x.set(clientX)
    y.set(clientY)
  }

  const handleMouseEnter = () => {
    setWindowOffset({
      innerWidth: window.innerWidth,
      innerHeight: window.innerHeight,
    })
    setMouseMove(true)
  }

  const { innerWidth, innerHeight } = windowOffset

  const xSpring = useSpring(x, { stiffness: 100, damping: 10 })
  const ySpring = useSpring(y, { stiffness: 100, damping: 10 })

  const rotateY = useTransform(xSpring, [0, innerWidth], [-30, 30])
  const rotateX = useTransform(ySpring, [0, innerHeight], [10, -50])

  return (
    <div
      id="home"
      className="h-screen grid place-items-center"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
    >
      <div>
        <div className="flex flex-col items-center justify-center gap-y-3 font-light capitalized">
          <motion.div
            className="flex items-center justify-center"
            style={{
              rotateX: mouseMove ? rotateX : 0,
              rotateY: mouseMove ? rotateY : 0,
              transition: '0.1s',
            }}
          >
            <Image
              src={'/person.png'}
              alt="Person Image"
              width={400}
              height={400}
              priority={true}
              className="h-auto w-[300px]"
            />
            <motion.span
              className="absolute text-3xl font-semibold text-white"
              initial={{ scale: 0 }}
              animate={{
                opacity: buttonHover ? 0 : 1,
                scale: buttonHover ? 2 : 0,
                y: buttonHover ? -40 : 0,
              }}
              transition={{ opacity: { delay: 0.8 } }}
            >
              Hi
            </motion.span>
          </motion.div>
          <h1 className="text-center text-5xl font-bold tracking-wider text-gray-500 sm:text-2xl">
            My name is Diana Ichmoukhametov &
          </h1>
          <p className="text-5xl tracking-wider text-gray-700">
            I'm full stack web developer
          </p>
        </div>
        <div className="mt-8 flex justify-center gap-x-10 text-3xl text-yellow-600 sm:text-2xl">
          <a
            href="https://github.com/Diana1888"
            className="rounded-lg hover:bg-red-400 hover:text-white transition-colors"
          >
            <GithubLineIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/diana-ichmoukhametov/"
            className="rounded-lg hover:bg-red-400 hover:text-white transition-colors"
          >
            <LinkedinBoxLineIcon />
          </a>
        </div>
        <a
          href="#"
          className="mx-auto mt-7 block w-max rounded-lg bg-red-400 px-3 py-1 font-light capitalized tracking-wider text-white hover:bg-red-500 transition-colors"
          onMouseEnter={() => setButtonHover(true)}
          onMouseLeave={() => setButtonHover(false)}
        >
          Talk to me
        </a>
      </div>
    </div>
  )
}

export default Hero
