"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Brain, Database, TrendingUp } from "lucide-react"
import { DataFlowBackground } from "./data-flow-background"

export function HeroSection() {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about")
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <DataFlowBackground variant="hero" intensity="high" />

      {/* Additional floating tech icons for enhanced effect */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/3 left-1/4 animate-float">
          <Brain className="w-8 h-8 text-primary/30" />
        </div>
        <div className="absolute top-1/2 right-1/4 animate-float" style={{ animationDelay: "2s" }}>
          <Database className="w-6 h-6 text-primary/40" />
        </div>
        <div className="absolute bottom-1/3 left-1/3 animate-float" style={{ animationDelay: "4s" }}>
          <TrendingUp className="w-7 h-7 text-primary/35" />
        </div>
      </div>

      <div className="container mx-auto px-4 text-center z-10 relative">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">
            <span className="text-foreground">Future</span>{" "}
            <span className="text-primary animate-pulse-glow">Data-Driven</span>{" "}
            <span className="text-foreground">AI Analyst</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 text-pretty max-w-2xl mx-auto">
            Transforming raw data into actionable insights through the power of artificial intelligence and advanced
            analytics
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="text-lg px-8 py-6 animate-pulse-glow" onClick={scrollToAbout}>
              Explore My Journey
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 py-6 bg-transparent"
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            >
              View Projects
            </Button>
          </div>

          <div className="animate-bounce">
            <ArrowDown className="w-8 h-8 text-primary mx-auto cursor-pointer" onClick={scrollToAbout} />
          </div>
        </div>
      </div>
    </section>
  )
}
