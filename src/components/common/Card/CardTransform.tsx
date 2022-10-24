import { ReactElement, useRef, useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import "./style.css";

interface cardProps {
  children: ReactElement;
}

const calc = (
  x: number,
  y: number,
  rect: { top: number; height: number; left: number; width: number }
) => [
  -(y - rect.top - rect.height / 2) / 15,
  (x - rect.left - rect.width / 2) / 15,
  0.93,
];
const trans = (x: any, y: any, s: any) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

export default function CardTransform(props: cardProps) {
  const ref = useRef<HTMLInputElement>(null);
  const [xys, set] = useState([0, 0, 1]);

  const item = useSpring({ xys });

  return (
    <div className="card__wrapper">
      <div className="card__main">
        <animated.div
          style={{ transform: item.xys.to(trans) }}
          onMouseLeave={() => set([0, 0, 1])}
          onMouseMove={(e) => {
            const rect = ref.current!.getBoundingClientRect();
            set(calc(e.clientX, e.clientY, rect));
          }}
        >
          <div ref={ref}>{props.children}</div>
        </animated.div>
      </div>
    </div>
  );
}
