"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Linkedin, Github, Twitter, Send, MapPin, Phone } from "lucide-react"
import { DataFlowBackground } from "./data-flow-background"

export function ConnectSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({ name: "", email: "", message: "" })
    alert("Thank you for your message! I'll get back to you soon.")
  }

  const socialLinks = [
    {
      name: "Email",
      icon: Mail,
      url: "mailto:your.email@example.com",
      color: "hover:text-red-500",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://linkedin.com/in/yourprofile",
      color: "hover:text-blue-600",
    },
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/yourusername",
      color: "hover:text-gray-800",
    },
    {
      name: "Twitter",
      icon: Twitter,
      url: "https://twitter.com/yourusername",
      color: "hover:text-blue-400",
    },
  ]

  return (
    <section id="connect" className="py-20 relative overflow-hidden">
      <DataFlowBackground variant="connect" intensity="low" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              Let's <span className="text-primary">Connect</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Ready to collaborate on data-driven projects or discuss opportunities in AI analytics
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="fade-in-left relative overflow-hidden">
              <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="absolute top-4 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-orange-500 to-transparent data-flow"></div>
                <div
                  className="absolute bottom-4 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-red-500 to-transparent data-flow"
                  style={{ animationDelay: "4s" }}
                ></div>
              </div>

              <CardHeader>
                <CardTitle className="text-2xl">Send Me a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name">Your Name</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Enter your name"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="email">Your Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="Enter your email"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me about your project or opportunity..."
                      rows={5}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full" size="lg">
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info & Social Links */}
            <div className="space-y-8 fade-in-right">
              <Card className="relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                  <div className="absolute top-2 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-400 to-transparent data-stream"></div>
                </div>

                <CardHeader>
                  <CardTitle className="text-2xl">Get In Touch</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary/10 rounded-full network-pulse">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Email</h4>
                      <p className="text-muted-foreground">your.email@example.com</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary/10 rounded-full network-pulse" style={{ animationDelay: "0.5s" }}>
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Location</h4>
                      <p className="text-muted-foreground">Your City, Country</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary/10 rounded-full network-pulse" style={{ animationDelay: "1s" }}>
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Phone</h4>
                      <p className="text-muted-foreground">+1 (555) 123-4567</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Follow Me</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    {socialLinks.map((link) => {
                      const IconComponent = link.icon
                      return (
                        <Button
                          key={link.name}
                          variant="outline"
                          size="lg"
                          asChild
                          className={`group ${link.color} transition-colors`}
                        >
                          <a href={link.url} target="_blank" rel="noopener noreferrer">
                            <IconComponent className="w-5 h-5 mr-2" />
                            {link.name}
                          </a>
                        </Button>
                      )
                    })}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-bold mb-2">Open to Opportunities</h3>
                  <p className="text-muted-foreground">
                    I'm actively seeking internships, entry-level positions, and collaborative projects in data science
                    and AI analytics. Let's build something amazing together!
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
