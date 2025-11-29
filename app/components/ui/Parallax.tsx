'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface Props {
  children: React.ReactNode;
  speed?: number;
  className?: string;
  direction?: number;
}

export function Parallax({ children, speed = 50, className = "" }: Props) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [speed, -speed]);
  
  return <motion.div ref={ref} style={{ y }} className={className}>{children}</motion.div>;
}

export function HorizontalParallax({ children, direction = 1, speed = 100, className = "" }: Props) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const x = useTransform(scrollYProgress, [0, 1], [-50 * direction, speed * direction]);

  return <motion.div ref={ref} style={{ x }} className={className}>{children}</motion.div>;
}