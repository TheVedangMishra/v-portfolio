"use client"

import { Card } from "@/components/ui/card"
import { Target, Lightbulb, Rocket } from "lucide-react"
import { DataFlowBackground } from "./data-flow-background"

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-muted/30 relative overflow-hidden">
      <DataFlowBackground variant="about" intensity="medium" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              About <span className="text-primary">Me</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Passionate about turning complex data into meaningful stories that drive business decisions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="fade-in-left">
              <div className="relative">
                <div className="w-full h-96 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center animate-pulse-glow relative overflow-hidden">
                  {/* Data flow overlay on photo */}
                  <div className="absolute inset-0 opacity-30">
                    <div className="absolute top-4 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-orange-500 to-transparent data-flow"></div>
                    <div
                      className="absolute bottom-4 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-500 to-transparent data-flow"
                      style={{ animationDelay: "2s" }}
                    ></div>
                  </div>
                  <img
                    src="/professional-headshot-of-data-analyst-with-modern-.jpg"
                    alt="Professional headshot"
                    className="w-80 h-80 object-cover rounded-xl shadow-2xl animate-float relative z-10"
                  />
                </div>
              </div>
            </div>

            <div className="fade-in-right">
              <h3 className="text-3xl font-bold mb-6">My Journey</h3>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                I'm on an exciting journey to become a data-driven AI analyst, combining my passion for technology with
                the power of artificial intelligence to solve real-world problems. Every day, I'm learning new
                techniques in machine learning, data visualization, and predictive analytics.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                My goal is to bridge the gap between complex data and actionable business insights, helping
                organizations make informed decisions that drive growth and innovation.
              </p>

              <div className="grid gap-4">
                <Card className="p-4 hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-3">
                    <Target className="w-6 h-6 text-primary" />
                    <div>
                      <h4 className="font-semibold">Current Focus</h4>
                      <p className="text-sm text-muted-foreground">Machine Learning & Data Science</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-4 hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-3">
                    <Lightbulb className="w-6 h-6 text-primary" />
                    <div>
                      <h4 className="font-semibold">Passion</h4>
                      <p className="text-sm text-muted-foreground">Turning Data into Insights</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-4 hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-3">
                    <Rocket className="w-6 h-6 text-primary" />
                    <div>
                      <h4 className="font-semibold">Future Goal</h4>
                      <p className="text-sm text-muted-foreground">Lead AI-Driven Analytics Teams</p>
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
                  I'm seeking opportunities to work with innovative teams that value data-driven decision making.
                  Whether it's internships, entry-level positions, or collaborative projects, I'm eager to apply my
                  growing skills in real-world scenarios and contribute to meaningful AI initiatives that make a
                  positive impact.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
