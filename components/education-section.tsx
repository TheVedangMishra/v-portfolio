"use client"

import { Card } from "@/components/ui/card"
import { GraduationCap, Calendar, BookOpen } from "lucide-react"
import { DataFlowBackground } from "./data-flow-background"

export function EducationSection() {
  return (
    <section id="education" className="py-20 relative overflow-hidden">
      <DataFlowBackground variant="education" intensity="low" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              My <span className="text-primary">Education</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Academic foundation in Computer Science with focus on data analytics and machine learning
            </p>
          </div>

          <div className="fade-in-up">
            <Card className="p-8 hover:shadow-lg transition-shadow relative overflow-hidden">
              {/* Data flow overlay */}
              <div className="absolute inset-0 opacity-20 pointer-events-none">
                <div className="absolute top-4 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-orange-500 to-transparent data-flow"></div>
                <div
                  className="absolute bottom-4 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-purple-500 to-transparent data-flow"
                  style={{ animationDelay: "2s" }}
                ></div>
              </div>

              <div className="relative z-10">
                <div className="flex items-start gap-6">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <GraduationCap className="w-8 h-8 text-primary" />
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold mb-2">Bachelor of Engineering, Computer Science</h3>
                        <p className="text-lg text-primary font-semibold">Chandigarh University</p>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        <span>2021 — 2025</span>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <BookOpen className="w-5 h-5 text-primary" />
                          <h4 className="font-semibold">Coursework</h4>
                        </div>
                        <ul className="space-y-2 text-muted-foreground">
                          <li>• Data Structures & Algorithms</li>
                          <li>• Database Management Systems</li>
                          <li>• Cloud Computing</li>
                          <li>• Machine Learning</li>
                        </ul>
                      </div>

                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <GraduationCap className="w-5 h-5 text-primary" />
                          <h4 className="font-semibold">Activities</h4>
                        </div>
                        <ul className="space-y-2 text-muted-foreground">
                          <li>• Hackathons participation</li>
                          <li>• Data Analytics projects</li>
                          <li>• AI/ML research seminars</li>
                          <li>• Expected Graduation: 2025</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
