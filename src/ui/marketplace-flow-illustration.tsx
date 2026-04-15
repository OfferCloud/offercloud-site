"use client";

import type { CSSProperties } from "react";

const HUB_CENTER = 210;
const FLOW_RADIUS_PX = 146;
const NODE_RADIUS_PERCENT = 38;

const ecosystemNodes = [
  {
    id: "integrations",
    label: "Integracje",
    angle: 240,
    lineColor: "rgba(34, 211, 238, 0.42)",
    glowColor: "rgba(34, 211, 238, 0.78)",
    shellColor: "rgba(34, 211, 238, 0.12)",
    labelClassName: "label-right-align",
    labelOffsetX: "calc(-100% - 1rem)",
    labelOffsetY: "-1rem",
  },
  {
    id: "panel",
    label: "Panel partnera",
    angle: 300,
    lineColor: "rgba(167, 139, 250, 0.42)",
    glowColor: "rgba(167, 139, 250, 0.76)",
    shellColor: "rgba(167, 139, 250, 0.12)",
    labelClassName: "label-left-align",
    labelOffsetX: "1rem",
    labelOffsetY: "-1rem",
  },
  {
    id: "buyers",
    label: "Kupujący",
    angle: 0,
    lineColor: "rgba(52, 211, 153, 0.42)",
    glowColor: "rgba(52, 211, 153, 0.82)",
    shellColor: "rgba(52, 211, 153, 0.12)",
    labelClassName: "label-left-align",
    labelOffsetX: "2.35rem",
    labelOffsetY: "-100%",
  },
  {
    id: "business",
    label: "Biznes",
    angle: 60,
    lineColor: "rgba(251, 191, 36, 0.4)",
    glowColor: "rgba(251, 191, 36, 0.76)",
    shellColor: "rgba(251, 191, 36, 0.12)",
    labelClassName: "label-left-align",
    labelOffsetX: "2.5rem",
    labelOffsetY: "1rem",
  },
  {
    id: "offers",
    label: "Źródła ofert",
    angle: 120,
    lineColor: "rgba(244, 114, 182, 0.4)",
    glowColor: "rgba(244, 114, 182, 0.74)",
    shellColor: "rgba(244, 114, 182, 0.12)",
    labelClassName: "label-right-align",
    labelOffsetX: "calc(-100% - 1rem)",
    labelOffsetY: "1rem",
  },
  {
    id: "sellers",
    label: "Sprzedający",
    angle: 180,
    lineColor: "rgba(96, 165, 250, 0.42)",
    glowColor: "rgba(96, 165, 250, 0.78)",
    shellColor: "rgba(96, 165, 250, 0.12)",
    labelClassName: "label-right-align",
    labelOffsetX: "calc(-100% + 0.35rem)",
    labelOffsetY: "-100%",
  },
] as const;

function getPolarOffset(angle: number, radius: number) {
  const radians = (angle * Math.PI) / 180;

  return {
    x: Math.cos(radians) * radius,
    y: Math.sin(radians) * radius,
  };
}

type MarketplaceFlowIllustrationProps = {
  className?: string;
};

export function MarketplaceFlowIllustration({
  className = "",
}: MarketplaceFlowIllustrationProps) {
  return (
    <div
      className={`relative aspect-square w-full ${className}`}
      role="img"
      aria-label="Marketplace w centrum ekosystemu OfferCloud, połączony z integracjami, panelem partnera, źródłami ofert, kupującymi, sprzedającymi i biznesem."
    >
      <svg
        viewBox="0 0 420 420"
        className="absolute inset-0 h-full w-full"
        fill="none"
        aria-hidden="true"
      >
        <circle
          cx="210"
          cy="210"
          r="118"
          className="orbit-ring orbit-ring-outer"
        />
        <circle
          cx="210"
          cy="210"
          r="156"
          className="orbit-ring orbit-ring-soft"
        />

        {ecosystemNodes.map((node) => {
          const { x, y } = getPolarOffset(node.angle, FLOW_RADIUS_PX);

          return (
            <line
              key={`flow-${node.id}`}
              x1={HUB_CENTER}
              y1={HUB_CENTER}
              x2={HUB_CENTER + x}
              y2={HUB_CENTER + y}
              className="flow-line"
              style={{ stroke: node.lineColor }}
            />
          );
        })}
      </svg>

      {ecosystemNodes.map((node, index) => (
        <div
          key={node.id}
          className={`ecosystem-node ecosystem-node-${index + 1}`}
          style={
            {
              left: `calc(50% + ${getPolarOffset(node.angle, NODE_RADIUS_PERCENT).x}%)`,
              top: `calc(50% + ${getPolarOffset(node.angle, NODE_RADIUS_PERCENT).y}%)`,
              "--label-x": node.labelOffsetX,
              "--label-y": node.labelOffsetY,
              "--node-line-color": node.lineColor,
              "--node-glow-color": node.glowColor,
              "--node-shell-color": node.shellColor,
            } as CSSProperties
          }
        >
          <div className="node-glow" />
          <div className="node-shell">
            <div className="node-core" />
          </div>
          <div className={`node-label ${node.labelClassName}`}>
            {node.label}
          </div>
        </div>
      ))}

      <div className="hub absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2">
        <div className="hub-glow" />
        <div className="hub-ring hub-ring-outer" />
        <div className="hub-ring hub-ring-inner" />
        <div className="hub-core">
          <div className="hub-center-dot" />
          <div className="hub-copy">
            <span className="hub-kicker">OfferCloud</span>
            <span className="hub-title">Marketplace</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        .orbit-ring {
          fill: none;
          stroke: rgba(255, 255, 255, 0.06);
        }

        .orbit-ring-outer {
          stroke-dasharray: 4 10;
          opacity: 0.55;
          stroke: rgba(52, 211, 153, 0.16);
        }

        .orbit-ring-soft {
          opacity: 0.3;
          stroke: rgba(167, 139, 250, 0.14);
        }

        .flow-line {
          stroke-width: 1.35;
          stroke-linecap: round;
          stroke-dasharray: 5 12;
          animation: flow 14s linear infinite;
        }

        .flow-line:nth-of-type(even) {
          animation-duration: 18s;
          animation-direction: reverse;
        }

        .ecosystem-node {
          position: absolute;
          width: 1.9rem;
          height: 1.9rem;
          transform: translate(-50%, -50%);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .ecosystem-node-1 {
          animation: float-a 6.8s ease-in-out infinite;
        }

        .ecosystem-node-2 {
          animation: float-b 7.6s ease-in-out infinite;
        }

        .ecosystem-node-3 {
          animation: float-c 7.2s ease-in-out infinite;
        }

        .ecosystem-node-4 {
          animation: float-b 8.1s ease-in-out infinite;
        }

        .ecosystem-node-5 {
          animation: float-a 7s ease-in-out infinite;
        }

        .ecosystem-node-6 {
          animation: float-c 7.8s ease-in-out infinite;
        }

        .node-glow {
          position: absolute;
          inset: -115%;
          border-radius: 50%;
          filter: blur(14px);
          opacity: 0.34;
          animation: pulse-glow-node 4.4s ease-in-out infinite alternate;
          background: var(--node-glow-color);
          transform-origin: center center;
        }

        .node-shell {
          position: relative;
          display: flex;
          height: 1.15rem;
          width: 1.15rem;
          align-items: center;
          justify-content: center;
          border-radius: 999px;
          border: 1px solid
            color-mix(in srgb, var(--node-line-color) 55%, white 18%);
          backdrop-filter: blur(8px);
          background: var(--node-shell-color);
        }

        .node-core {
          position: relative;
          width: 0.36rem;
          height: 0.36rem;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.9);
          box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
        }

        .node-label {
          position: absolute;
          font-size: 0.62rem;
          font-weight: 600;
          letter-spacing: 0.07em;
          text-transform: uppercase;
          color: rgba(244, 244, 245, 0.88);
          white-space: nowrap;
          pointer-events: none;
          line-height: 1.2;
          left: 0;
          top: 0;
          transform: translate(var(--label-x), var(--label-y));
        }

        .label-center {
          text-align: center;
        }

        .label-left-align {
          text-align: left;
        }

        .label-right-align {
          text-align: right;
        }

        .hub {
          pointer-events: none;
        }

        .hub-glow {
          position: absolute;
          inset: -28%;
          border-radius: 50%;
          background: radial-gradient(
            circle,
            rgba(52, 211, 153, 0.14) 0%,
            rgba(96, 165, 250, 0.1) 38%,
            rgba(167, 139, 250, 0.08) 52%,
            rgba(244, 114, 182, 0.06) 64%,
            transparent 70%
          );
          animation: pulse-glow-hub 6.5s ease-in-out infinite alternate;
          transform-origin: center center;
        }

        .hub-ring {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          border: 1px solid rgba(255, 255, 255, 0.08);
          transform-origin: center center;
        }

        .hub-ring-outer {
          animation: hub-ring-clockwise 20s linear infinite;
          border-left-color: rgba(52, 211, 153, 0.46);
          border-right-color: rgba(34, 211, 238, 0.42);
        }

        .hub-ring-inner {
          inset: 1.2rem;
          animation: hub-ring-clockwise-inner 16s linear infinite;
          border-top-color: rgba(167, 139, 250, 0.42);
          border-bottom-color: rgba(251, 191, 36, 0.38);
        }

        .hub-core {
          position: absolute;
          inset: 1.7rem;
          display: flex;
          flex-direction: column;
          gap: 0.45rem;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: radial-gradient(
            circle at top,
            rgba(52, 211, 153, 0.12),
            rgba(96, 165, 250, 0.05) 56%,
            rgba(255, 255, 255, 0.03)
          );
          border: 1px solid rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(10px);
          animation: hub-breathe 6s ease-in-out infinite;
          transform-origin: center center;
        }

        .hub-center-dot {
          height: 0.42rem;
          width: 0.42rem;
          border-radius: 999px;
          background: rgba(52, 211, 153, 0.95);
          box-shadow: 0 0 16px rgba(52, 211, 153, 0.78);
        }

        .hub-copy {
          display: flex;
          flex-direction: column;
          gap: 0.15rem;
          text-align: center;
        }

        .hub-kicker {
          font-size: 0.54rem;
          font-weight: 700;
          letter-spacing: 0.26em;
          text-transform: uppercase;
          color: rgba(110, 231, 183, 0.92);
        }

        .hub-title {
          font-size: 0.84rem;
          font-weight: 700;
          color: rgba(244, 244, 245, 0.95);
          letter-spacing: 0.02em;
        }

        @keyframes flow {
          from {
            stroke-dashoffset: 0;
          }
          to {
            stroke-dashoffset: -100;
          }
        }

        /* Clockwise spin + subtle scale: peak stays modest (no oversized rings) */
        @keyframes hub-ring-clockwise {
          0% {
            transform: rotate(0deg) scale(1);
          }
          50% {
            transform: rotate(180deg) scale(1.02);
          }
          100% {
            transform: rotate(360deg) scale(1);
          }
        }

        @keyframes hub-ring-clockwise-inner {
          0% {
            transform: rotate(0deg) scale(1);
          }
          50% {
            transform: rotate(180deg) scale(1.015);
          }
          100% {
            transform: rotate(360deg) scale(1);
          }
        }

        @keyframes pulse-glow-node {
          0% {
            opacity: 0.28;
            transform: scale(0.96);
          }
          100% {
            opacity: 0.5;
            transform: scale(1.03);
          }
        }

        @keyframes pulse-glow-hub {
          0% {
            opacity: 0.28;
            transform: scale(0.97);
          }
          100% {
            opacity: 0.48;
            transform: scale(1.04);
          }
        }

        @keyframes hub-breathe {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.02);
          }
        }

        @keyframes float-a {
          0%,
          100% {
            transform: translate3d(-50%, -50%, 0);
          }
          50% {
            transform: translate3d(-50%, calc(-50% - 10px), 0);
          }
        }

        @keyframes float-b {
          0%,
          100% {
            transform: translate3d(-50%, -50%, 0);
          }
          50% {
            transform: translate3d(calc(-50% + 8px), calc(-50% - 6px), 0);
          }
        }

        @keyframes float-c {
          0%,
          100% {
            transform: translate3d(-50%, -50%, 0);
          }
          50% {
            transform: translate3d(calc(-50% - 8px), calc(-50% + 6px), 0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .orbit-ring-outer,
          .flow-line,
          .ecosystem-node-1,
          .ecosystem-node-2,
          .ecosystem-node-3,
          .ecosystem-node-4,
          .ecosystem-node-5,
          .ecosystem-node-6,
          .node-glow,
          .hub-glow,
          .hub-ring-outer,
          .hub-ring-inner,
          .hub-core {
            animation: none !important;
          }
        }
      `}</style>
    </div>
  );
}
