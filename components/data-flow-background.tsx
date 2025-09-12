"use client"

import { useEffect, useState } from "react"

interface DataFlowBackgroundProps {
  variant?: "hero" | "about" | "projects" | "skills" | "connect"
  intensity?: "low" | "medium" | "high"
}

export function DataFlowBackground({ variant = "hero", intensity = "medium" }: DataFlowBackgroundProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-transparent to-orange-600/10" />

      {/* GitHub-style flowing network */}
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          {/* Flowing gradient for lines */}
          <linearGradient id={`flow-gradient-${variant}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgb(249 115 22)" stopOpacity="0" />
            <stop offset="30%" stopColor="rgb(249 115 22)" stopOpacity="0.6" />
            <stop offset="70%" stopColor="rgb(249 115 22)" stopOpacity="0.8" />
            <stop offset="100%" stopColor="rgb(249 115 22)" stopOpacity="0" />
          </linearGradient>

          {/* Node glow effect */}
          <filter id={`glow-${variant}`}>
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Main flowing branches - GitHub style */}
        <g className="github-network">
          {/* Primary branch */}
          <path
            d="M50,150 Q200,120 350,140 T650,160 Q800,170 950,150"
            stroke={`url(#flow-gradient-${variant})`}
            strokeWidth="2"
            fill="none"
            className="github-flow"
          />

          {/* Secondary branches */}
          <path
            d="M200,120 Q250,80 300,90 T450,100"
            stroke={`url(#flow-gradient-${variant})`}
            strokeWidth="1.5"
            fill="none"
            className="github-flow branch-grow"
            style={{ animationDelay: "0.5s" }}
          />

          <path
            d="M350,140 Q400,180 500,170 T700,160"
            stroke={`url(#flow-gradient-${variant})`}
            strokeWidth="1.5"
            fill="none"
            className="github-flow branch-grow"
            style={{ animationDelay: "1s" }}
          />

          <path
            d="M650,160 Q700,200 800,190 T950,180"
            stroke={`url(#flow-gradient-${variant})`}
            strokeWidth="1.5"
            fill="none"
            className="github-flow branch-grow"
            style={{ animationDelay: "1.5s" }}
          />

          {/* Vertical connections */}
          <path
            d="M200,120 L200,200"
            stroke="rgb(249 115 22)"
            strokeWidth="1"
            strokeOpacity="0.4"
            fill="none"
            className="github-flow"
            style={{ animationDelay: "2s" }}
          />

          <path
            d="M500,170 L500,250"
            stroke="rgb(249 115 22)"
            strokeWidth="1"
            strokeOpacity="0.4"
            fill="none"
            className="github-flow"
            style={{ animationDelay: "2.5s" }}
          />

          <path
            d="M800,190 L800,270"
            stroke="rgb(249 115 22)"
            strokeWidth="1"
            strokeOpacity="0.4"
            fill="none"
            className="github-flow"
            style={{ animationDelay: "3s" }}
          />
        </g>

        {/* Connection nodes */}
        <g className="network-nodes">
          <circle
            cx="200"
            cy="120"
            r="4"
            fill="rgb(249 115 22)"
            className="node-connection"
            filter={`url(#glow-${variant})`}
          />
          <circle
            cx="350"
            cy="140"
            r="4"
            fill="rgb(249 115 22)"
            className="node-connection"
            filter={`url(#glow-${variant})`}
          />
          <circle
            cx="500"
            cy="170"
            r="4"
            fill="rgb(249 115 22)"
            className="node-connection"
            filter={`url(#glow-${variant})`}
          />
          <circle
            cx="650"
            cy="160"
            r="4"
            fill="rgb(249 115 22)"
            className="node-connection"
            filter={`url(#glow-${variant})`}
          />
          <circle
            cx="800"
            cy="190"
            r="4"
            fill="rgb(249 115 22)"
            className="node-connection"
            filter={`url(#glow-${variant})`}
          />

          {/* Branch nodes */}
          <circle cx="300" cy="90" r="3" fill="rgb(249 115 22)" fillOpacity="0.8" className="node-connection" />
          <circle cx="450" cy="100" r="3" fill="rgb(249 115 22)" fillOpacity="0.8" className="node-connection" />
          <circle cx="700" cy="200" r="3" fill="rgb(249 115 22)" fillOpacity="0.8" className="node-connection" />
        </g>

        {/* Flowing particles along paths */}
        <g className="flow-particles">
          {Array.from({ length: 6 }).map((_, i) => (
            <circle
              key={`particle-${i}`}
              r="2"
              fill="rgb(249 115 22)"
              className="flowing-particle"
              style={{
                offsetPath:
                  i % 2 === 0
                    ? "path('M50,150 Q200,120 350,140 T650,160 Q800,170 950,150')"
                    : "path('M200,120 Q250,80 300,90 T450,100')",
                animationDelay: `${i * 1}s`,
              }}
            />
          ))}
        </g>
      </svg>

      {/* Floating data elements */}
      <div className="absolute inset-0">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={`float-${i}`}
            className="absolute w-1 h-1 bg-orange-500 rounded-full opacity-60 animate-pulse"
            style={{
              left: `${10 + i * 12}%`,
              top: `${20 + (i % 3) * 25}%`,
              animationDelay: `${i * 0.4}s`,
              animationDuration: `${2 + (i % 3)}s`,
            }}
          />
        ))}
      </div>

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
            linear-gradient(rgba(249, 115, 22, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(249, 115, 22, 0.1) 1px, transparent 1px)
          `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>
    </div>
  )
}
