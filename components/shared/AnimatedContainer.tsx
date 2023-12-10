"use client";
import React, { useRef } from "react";
import { useInView } from "framer-motion";
type Props = {
  children: React.ReactNode;
  initialClassName?: string;
  whileInViewClassName?: string;
  once?: boolean;
  className?: string;
  transitionClassName: string;
};

const AnimatedContainer = ({
  children,
  className,
  whileInViewClassName,
  initialClassName,
  transitionClassName,
  once,
}: Props) => {
  const ref = useRef<HTMLDivElement>(null!);
  const isInView = useInView(ref, { once });
  return (
    <div ref={ref} className={className}>
      <div
        className={`${transitionClassName} ${
          isInView ? whileInViewClassName : initialClassName
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export default AnimatedContainer;
