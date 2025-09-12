"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Edit, Plus, Trash2 } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { DataFlowBackground } from "./data-flow-background"

interface Project {
  id: string
  title: string
  description: string
  image: string
  technologies: string[]
  liveUrl?: string
  githubUrl?: string
}

export function ProjectsSection() {
  const [projects, setProjects] = useState<Project[]>([
    {
      id: "1",
      title: "Sales Prediction Model",
      description:
        "Machine learning model that predicts sales trends using historical data and market indicators. Built with Python, scikit-learn, and deployed using Flask.",
      image: "/data-visualization-dashboard.png",
      technologies: ["Python", "Scikit-learn", "Pandas", "Flask", "Matplotlib"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: "2",
      title: "Customer Segmentation Analysis",
      description:
        "Comprehensive analysis of customer behavior patterns using clustering algorithms to identify distinct customer segments for targeted marketing.",
      image: "/customer-analytics-dashboard-with-segmentation-cha.jpg",
      technologies: ["Python", "K-Means", "Seaborn", "Jupyter", "SQL"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: "3",
      title: "Real-time Data Pipeline",
      description:
        "Automated data pipeline that processes streaming data from multiple sources, performs real-time analytics, and generates actionable insights.",
      image: "/data-pipeline-architecture-diagram-with-flowing-da.jpg",
      technologies: ["Apache Kafka", "Python", "Docker", "PostgreSQL", "Grafana"],
      liveUrl: "#",
      githubUrl: "#",
    },
  ])

  const [editingProject, setEditingProject] = useState<Project | null>(null)
  const [isAddingProject, setIsAddingProject] = useState(false)
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: "",
    technologies: "",
    liveUrl: "",
    githubUrl: "",
  })

  const handleEdit = (project: Project) => {
    setEditingProject(project)
    setFormData({
      title: project.title,
      description: project.description,
      image: project.image,
      technologies: project.technologies.join(", "),
      liveUrl: project.liveUrl || "",
      githubUrl: project.githubUrl || "",
    })
  }

  const handleSave = () => {
    const projectData = {
      ...formData,
      technologies: formData.technologies.split(",").map((tech) => tech.trim()),
      id: editingProject?.id || Date.now().toString(),
    }

    if (editingProject) {
      setProjects(projects.map((p) => (p.id === editingProject.id ? (projectData as Project) : p)))
    } else {
      setProjects([...projects, projectData as Project])
    }

    setEditingProject(null)
    setIsAddingProject(false)
    setFormData({ title: "", description: "", image: "", technologies: "", liveUrl: "", githubUrl: "" })
  }

  const handleDelete = (id: string) => {
    setProjects(projects.filter((p) => p.id !== id))
  }

  const ProjectForm = () => (
    <div className="space-y-4">
      <div>
        <Label htmlFor="title">Project Title</Label>
        <Input
          id="title"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          placeholder="Enter project title"
        />
      </div>
      <div>
        <Label htmlFor="description">Description</Label>
        <Textarea
          id="description"
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          placeholder="Describe your project"
          rows={3}
        />
      </div>
      <div>
        <Label htmlFor="image">Image URL</Label>
        <Input
          id="image"
          value={formData.image}
          onChange={(e) => setFormData({ ...formData, image: e.target.value })}
          placeholder="Enter image URL"
        />
      </div>
      <div>
        <Label htmlFor="technologies">Technologies (comma-separated)</Label>
        <Input
          id="technologies"
          value={formData.technologies}
          onChange={(e) => setFormData({ ...formData, technologies: e.target.value })}
          placeholder="Python, React, Node.js"
        />
      </div>
      <div>
        <Label htmlFor="liveUrl">Live URL (optional)</Label>
        <Input
          id="liveUrl"
          value={formData.liveUrl}
          onChange={(e) => setFormData({ ...formData, liveUrl: e.target.value })}
          placeholder="https://your-project.com"
        />
      </div>
      <div>
        <Label htmlFor="githubUrl">GitHub URL (optional)</Label>
        <Input
          id="githubUrl"
          value={formData.githubUrl}
          onChange={(e) => setFormData({ ...formData, githubUrl: e.target.value })}
          placeholder="https://github.com/username/repo"
        />
      </div>
      <div className="flex gap-2 pt-4">
        <Button onClick={handleSave}>Save Project</Button>
        <Button
          variant="outline"
          onClick={() => {
            setEditingProject(null)
            setIsAddingProject(false)
            setFormData({ title: "", description: "", image: "", technologies: "", liveUrl: "", githubUrl: "" })
          }}
        >
          Cancel
        </Button>
      </div>
    </div>
  )

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <DataFlowBackground variant="projects" intensity="medium" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              My <span className="text-primary">Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Showcasing my journey in data science and AI through hands-on projects
            </p>

            <Dialog open={isAddingProject} onOpenChange={setIsAddingProject}>
              <DialogTrigger asChild>
                <Button className="mt-6" onClick={() => setIsAddingProject(true)}>
                  <Plus className="w-4 h-4 mr-2" />
                  Add New Project
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle>Add New Project</DialogTitle>
                </DialogHeader>
                <ProjectForm />
              </DialogContent>
            </Dialog>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={project.id}
                className={`group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 fade-in-up relative overflow-hidden`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute inset-0 opacity-20 pointer-events-none">
                  <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-green-500 to-transparent data-flow"></div>
                  <div
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-orange-500 to-transparent data-flow"
                    style={{ animationDelay: "3s" }}
                  ></div>
                </div>

                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-2 right-2 flex gap-2">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          size="icon"
                          variant="secondary"
                          className="opacity-0 group-hover:opacity-100 transition-opacity"
                          onClick={() => handleEdit(project)}
                        >
                          <Edit className="w-4 h-4" />
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-2xl">
                        <DialogHeader>
                          <DialogTitle>Edit Project</DialogTitle>
                        </DialogHeader>
                        <ProjectForm />
                      </DialogContent>
                    </Dialog>
                    <Button
                      size="icon"
                      variant="destructive"
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                      onClick={() => handleDelete(project.id)}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription className="text-sm leading-relaxed">{project.description}</CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    {project.liveUrl && (
                      <Button size="sm" asChild>
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                    {project.githubUrl && (
                      <Button size="sm" variant="outline" asChild>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
