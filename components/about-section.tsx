"use client"

import { Card } from "@/components/ui/card"
import { MapPin, Calendar, GraduationCap, ChevronLeft, ChevronRight } from "lucide-react"
import { DataFlowBackground } from "./data-flow-background"
import { useState, useEffect } from "react"

const images = [
  {
    src: "/vedang-indoor.jpg",
    alt: "Vedang Mishra - Indoor Portrait",
    colors: {
      primary: "rgb(139, 69, 19)", // burgundy/brown
      secondary: "rgb(255, 193, 7)", // yellow
      accent: "rgb(220, 20, 60)", // crimson
    },
  },
  {
    src: "/vedang-outdoor.jpg",
    alt: "Vedang Mishra - Outdoor Portrait",
    colors: {
      primary: "rgb(34, 139, 34)", // forest green
      secondary: "rgb(255, 69, 0)", // red-orange
      accent: "rgb(70, 130, 180)", // steel blue
    },
  },
]

export function AboutSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  // Auto-advance images every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true)
      setTimeout(() => {
        setCurrentImageIndex((prev) => (prev + 1) % images.length)
        setIsTransitioning(false)
      }, 300)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  const currentImage = images[currentImageIndex]

  const nextImage = () => {
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length)
      setIsTransitioning(false)
    }, 300)
  }

  const prevImage = () => {
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)
      setIsTransitioning(false)
    }, 300)
  }

  return (
    <section
      id="about"
      className="py-20 bg-muted/30 relative overflow-hidden transition-all duration-1000 ease-in-out"
      style={{
        background: `linear-gradient(135deg, ${currentImage.colors.primary}15, ${currentImage.colors.secondary}10, ${currentImage.colors.accent}05)`,
      }}
    >
      <DataFlowBackground variant="about" intensity="medium" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              About <span className="text-primary">Me</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Detail-oriented Computer Science student specializing in data analysis, visualization and cloud-enabled
              automation
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="fade-in-left">
              <div className="relative">
                <div
                  className="w-full h-96 rounded-2xl flex items-center justify-center relative overflow-hidden transition-all duration-1000 ease-in-out"
                  style={{
                    background: `linear-gradient(45deg, ${currentImage.colors.primary}20, ${currentImage.colors.secondary}15)`,
                  }}
                >
                  {/* Data flow overlay on photo */}
                  <div className="absolute inset-0 opacity-30">
                    <div
                      className="absolute top-4 left-0 w-full h-0.5 bg-gradient-to-r from-transparent to-transparent data-flow"
                      style={{
                        background: `linear-gradient(to right, transparent, ${currentImage.colors.secondary}, transparent)`,
                      }}
                    ></div>
                    <div
                      className="absolute bottom-4 left-0 w-full h-0.5 bg-gradient-to-r from-transparent to-transparent data-flow"
                      style={{
                        animationDelay: "2s",
                        background: `linear-gradient(to right, transparent, ${currentImage.colors.accent}, transparent)`,
                      }}
                    ></div>
                  </div>

                  {/* Image carousel */}
                  <div className="relative w-80 h-80">
                    <img
                      src={currentImage.src || "/placeholder.svg"}
                      alt={currentImage.alt}
                      className={`w-full h-full object-cover rounded-xl shadow-2xl animate-float relative z-10 transition-opacity duration-300 ${
                        isTransitioning ? "opacity-0" : "opacity-100"
                      }`}
                    />

                    {/* Navigation buttons */}
                    <button
                      onClick={prevImage}
                      className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>

                    {/* Image indicators */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
                      {images.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => {
                            setIsTransitioning(true)
                            setTimeout(() => {
                              setCurrentImageIndex(index)
                              setIsTransitioning(false)
                            }, 300)
                          }}
                          className={`w-2 h-2 rounded-full transition-all duration-200 ${
                            index === currentImageIndex ? "bg-white scale-125" : "bg-white/50 hover:bg-white/75"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                {/* </CHANGE> */}
              </div>
            </div>

            <div className="fade-in-right">
              <h3 className="text-3xl font-bold mb-6">My Journey</h3>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                I'm Vedang Mishra, a Computer Science undergraduate at Chandigarh University (graduating 2025) with
                hands-on experience in Python, SQL, dashboarding (Power BI / Tableau), and cloud tooling (AWS). My work
                spans end-to-end data workflows — from ingest and cleaning to modeling, visualisation, and delivering
                production-ready dashboards and lightweight ML models.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                I've built monitoring & alerting tools in Python, performed RFM customer segmentation for e-commerce,
                and implemented predictive models for loan approval. I care deeply about data quality, reproducibility,
                and making results accessible to stakeholders via clear dashboards and actionable recommendations.
              </p>

              <div className="grid gap-4">
                <Card className="p-4 hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-6 h-6 text-primary" />
                    <div>
                      <h4 className="font-semibold">Location</h4>
                      <p className="text-sm text-muted-foreground">Mohali, India</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-4 hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-6 h-6 text-primary" />
                    <div>
                      <h4 className="font-semibold">Availability</h4>
                      <p className="text-sm text-muted-foreground">
                        Open to internships, full-time roles & freelance consulting
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-4 hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-3">
                    <GraduationCap className="w-6 h-6 text-primary" />
                    <div>
                      <h4 className="font-semibold">Education</h4>
                      <p className="text-sm text-muted-foreground">
                        BE Computer Science — Chandigarh University (2021–2025)
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>

          <div className="fade-in-up">
            <Card className="p-8 bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4">What I'm Looking For</h3>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                  Right now I'm actively seeking roles as a Data Analyst and exploring opportunities in Investment
                  Analysis where I can apply quantitative skills, build financial models, and help investment teams make
                  decisions backed by data. If you're an investor, hiring manager, or team lead looking for a driven
                  analyst, let's talk.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
