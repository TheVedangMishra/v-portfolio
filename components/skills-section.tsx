"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Plus, Edit, Trash2, Brain, Database, BarChart3, Code, Cloud, Zap } from "lucide-react"
import { DataFlowBackground } from "./data-flow-background"

interface Skill {
  id: string
  name: string
  category: string
  icon: string
}

const iconMap = {
  Brain,
  Database,
  BarChart3,
  Code,
  Cloud,
  Zap,
}

export function SkillsSection() {
  const [skills, setSkills] = useState<Skill[]>([
    { id: "1", name: "Python", category: "Programming", icon: "Code" },
    { id: "2", name: "Machine Learning", category: "AI/ML", icon: "Brain" },
    { id: "3", name: "SQL", category: "Database", icon: "Database" },
    { id: "4", name: "Data Visualization", category: "Analytics", icon: "BarChart3" },
    { id: "5", name: "Pandas", category: "Programming", icon: "Code" },
    { id: "6", name: "Scikit-learn", category: "AI/ML", icon: "Brain" },
    { id: "7", name: "Tableau", category: "Analytics", icon: "BarChart3" },
    { id: "8", name: "AWS", category: "Cloud", icon: "Cloud" },
    { id: "9", name: "TensorFlow", category: "AI/ML", icon: "Brain" },
    { id: "10", name: "Apache Spark", category: "Big Data", icon: "Zap" },
    { id: "11", name: "PostgreSQL", category: "Database", icon: "Database" },
    { id: "12", name: "Power BI", category: "Analytics", icon: "BarChart3" },
  ])

  const [editingSkill, setEditingSkill] = useState<Skill | null>(null)
  const [isAddingSkill, setIsAddingSkill] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    icon: "Code",
  })

  const categories = ["Programming", "AI/ML", "Database", "Analytics", "Cloud", "Big Data"]
  const iconOptions = ["Code", "Brain", "Database", "BarChart3", "Cloud", "Zap"]

  const handleEdit = (skill: Skill) => {
    setEditingSkill(skill)
    setFormData({
      name: skill.name,
      category: skill.category,
      icon: skill.icon,
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
    setFormData({ name: "", category: "", icon: "Code" })
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
      <div className="flex gap-2 pt-4">
        <Button onClick={handleSave}>Save Skill</Button>
        <Button
          variant="outline"
          onClick={() => {
            setEditingSkill(null)
            setIsAddingSkill(false)
            setFormData({ name: "", category: "", icon: "Code" })
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

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
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

                        <CardContent className="p-6 text-center">
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

                          <h4 className="font-semibold text-sm">{skill.name}</h4>
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
