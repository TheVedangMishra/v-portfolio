"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Plus, Edit, Trash2, Code, Database, BarChart3, Cloud, Brain, Globe } from "lucide-react"
import { DataFlowBackground } from "./data-flow-background"

interface Skill {
  id: string
  name: string
  category: string
  icon: string
  description: string
}

const iconMap = {
  Code,
  Database,
  BarChart3,
  Cloud,
  Brain,
  Globe,
}

export function SkillsSection() {
  const [skills, setSkills] = useState<Skill[]>([
    {
      id: "1",
      name: "Python",
      category: "Programming",
      icon: "Code",
      description:
        "Data wrangling and automation (Pandas, NumPy), scripting for ETL pipelines, prototype ML models with scikit-learn",
    },
    {
      id: "2",
      name: "SQL",
      category: "Database",
      icon: "Database",
      description:
        "Querying, joins, window functions, aggregates, stored procedures; experienced building analytics tables for dashboards",
    },
    {
      id: "3",
      name: "Power BI",
      category: "Data Visualization",
      icon: "BarChart3",
      description: "Creating KPI-driven visual reports and interactive dashboards for non-technical stakeholders",
    },
    {
      id: "4",
      name: "Tableau",
      category: "Data Visualization",
      icon: "BarChart3",
      description:
        "Advanced data storytelling with charts and designing comprehensive business intelligence dashboards",
    },
    {
      id: "5",
      name: "AWS",
      category: "Cloud & Deployment",
      icon: "Cloud",
      description:
        "Experience deploying lightweight services and artifacts to AWS (S3/EC2). Familiarity with Docker and CI/CD pipelines",
    },
    {
      id: "6",
      name: "Machine Learning",
      category: "Statistics & ML",
      icon: "Brain",
      description:
        "Regression, classification (logistic regression, decision trees), model evaluation, feature engineering basics",
    },
    {
      id: "7",
      name: "Pandas",
      category: "Programming",
      icon: "Code",
      description: "Advanced data manipulation, cleaning, and transformation for large datasets",
    },
    {
      id: "8",
      name: "NumPy",
      category: "Programming",
      icon: "Code",
      description: "Numerical computing and array operations for data analysis and scientific computing",
    },
    {
      id: "9",
      name: "React",
      category: "Web & Frontend",
      icon: "Globe",
      description: "Building interactive dashboards and interfaces for data visualization applications",
    },
    {
      id: "10",
      name: "Flask",
      category: "Web & Frontend",
      icon: "Globe",
      description: "Creating web applications and APIs for data science projects and dashboard backends",
    },
  ])

  const [editingSkill, setEditingSkill] = useState<Skill | null>(null)
  const [isAddingSkill, setIsAddingSkill] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    icon: "Code",
    description: "",
  })

  const categories = [
    "Programming",
    "Database",
    "Data Visualization",
    "Cloud & Deployment",
    "Statistics & ML",
    "Web & Frontend",
  ]
  const iconOptions = ["Code", "Database", "BarChart3", "Cloud", "Brain", "Globe"]

  const handleEdit = (skill: Skill) => {
    setEditingSkill(skill)
    setFormData({
      name: skill.name,
      category: skill.category,
      icon: skill.icon,
      description: skill.description,
    })
  }

  const handleSave = () => {
    const skillData = {
      ...formData,
      id: editingSkill?.id || Date.now().toString(),
    }

    if (editingSkill) {
      setSkills(skills.map((s) => (s.id === editingSkill.id ? (skillData as Skill) : s)))
    } else {
      setSkills([...skills, skillData as Skill])
    }

    setEditingSkill(null)
    setIsAddingSkill(false)
    setFormData({ name: "", category: "", icon: "Code", description: "" })
  }

  const handleDelete = (id: string) => {
    setSkills(skills.filter((s) => s.id !== id))
  }

  const groupedSkills = skills.reduce(
    (acc, skill) => {
      if (!acc[skill.category]) {
        acc[skill.category] = []
      }
      acc[skill.category].push(skill)
      return acc
    },
    {} as Record<string, Skill[]>,
  )

  const SkillForm = () => (
    <div className="space-y-4">
      <div>
        <Label htmlFor="name">Skill Name</Label>
        <Input
          id="name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          placeholder="Enter skill name"
        />
      </div>
      <div>
        <Label htmlFor="category">Category</Label>
        <Select value={formData.category} onValueChange={(value) => setFormData({ ...formData, category: value })}>
          <SelectTrigger>
            <SelectValue placeholder="Select category" />
          </SelectTrigger>
          <SelectContent>
            {categories.map((category) => (
              <SelectItem key={category} value={category}>
                {category}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div>
        <Label htmlFor="icon">Icon</Label>
        <Select value={formData.icon} onValueChange={(value) => setFormData({ ...formData, icon: value })}>
          <SelectTrigger>
            <SelectValue placeholder="Select icon" />
          </SelectTrigger>
          <SelectContent>
            {iconOptions.map((icon) => (
              <SelectItem key={icon} value={icon}>
                {icon}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div>
        <Label htmlFor="description">Description</Label>
        <Input
          id="description"
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          placeholder="Enter skill description"
        />
      </div>
      <div className="flex gap-2 pt-4">
        <Button onClick={handleSave}>Save Skill</Button>
        <Button
          variant="outline"
          onClick={() => {
            setEditingSkill(null)
            setIsAddingSkill(false)
            setFormData({ name: "", category: "", icon: "Code", description: "" })
          }}
        >
          Cancel
        </Button>
      </div>
    </div>
  )

  return (
    <section id="skills" className="py-20 bg-muted/30 relative overflow-hidden">
      <DataFlowBackground variant="skills" intensity="medium" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              My <span className="text-primary">Skills</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Technical expertise and tools I use to transform data into insights
            </p>

            <Dialog open={isAddingSkill} onOpenChange={setIsAddingSkill}>
              <DialogTrigger asChild>
                <Button className="mt-6" onClick={() => setIsAddingSkill(true)}>
                  <Plus className="w-4 h-4 mr-2" />
                  Add New Skill
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Add New Skill</DialogTitle>
                </DialogHeader>
                <SkillForm />
              </DialogContent>
            </Dialog>
          </div>

          <div className="space-y-12">
            {Object.entries(groupedSkills).map(([category, categorySkills], categoryIndex) => (
              <div
                key={category}
                className={`fade-in-up relative`}
                style={{ animationDelay: `${categoryIndex * 0.1}s` }}
              >
                <div className="absolute inset-0 opacity-20 pointer-events-none">
                  <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-purple-500 to-transparent data-flow"></div>
                  <div
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-orange-500 to-transparent data-flow"
                    style={{ animationDelay: "2s" }}
                  ></div>
                </div>

                <h3 className="text-2xl font-bold mb-6 text-center">
                  <span className="text-primary">{category}</span>
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {categorySkills.map((skill, skillIndex) => {
                    const IconComponent = iconMap[skill.icon as keyof typeof iconMap] || Code

                    return (
                      <Card
                        key={skill.id}
                        className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 relative overflow-hidden"
                      >
                        <div className="absolute inset-0 opacity-10 pointer-events-none">
                          <div className="absolute top-1 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-400 to-transparent data-particle"></div>
                        </div>

                        <CardContent className="p-6">
                          <div className="absolute top-2 right-2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                            <Dialog>
                              <DialogTrigger asChild>
                                <Button
                                  size="icon"
                                  variant="ghost"
                                  className="h-6 w-6"
                                  onClick={() => handleEdit(skill)}
                                >
                                  <Edit className="w-3 h-3" />
                                </Button>
                              </DialogTrigger>
                              <DialogContent>
                                <DialogHeader>
                                  <DialogTitle>Edit Skill</DialogTitle>
                                </DialogHeader>
                                <SkillForm />
                              </DialogContent>
                            </Dialog>
                            <Button
                              size="icon"
                              variant="ghost"
                              className="h-6 w-6 text-destructive hover:text-destructive"
                              onClick={() => handleDelete(skill.id)}
                            >
                              <Trash2 className="w-3 h-3" />
                            </Button>
                          </div>

                          <div className="mb-4 flex justify-center">
                            <div className="p-3 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors network-pulse">
                              <IconComponent className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
                            </div>
                          </div>

                          <div className="text-center">
                            <h4 className="font-semibold text-lg mb-2">{skill.name}</h4>
                            <p className="text-sm text-muted-foreground leading-relaxed">{skill.description}</p>
                          </div>
                        </CardContent>
                      </Card>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
