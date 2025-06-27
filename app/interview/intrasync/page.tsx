"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"
import Image from "next/image"
import {
  PlayCircle,
  Calendar,
  Clock,
  Share2,
  Bookmark,
  ArrowLeft,
  Quote,
  Users,
  TrendingUp,
  Award,
  ExternalLink,
  ChevronRight,
} from "lucide-react"

export default function IntraSyncInterviewPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 py-4 bg-white border-b sticky top-0 z-50 backdrop-blur-sm bg-white/95">
        <div className="flex items-center">
          <div className="text-2xl font-bold text-black">protik</div>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">
            Home
          </a>
          <div className="relative group">
            <a href="#" className="text-gray-700 hover:text-blue-600 flex items-center transition-colors">
              About Us
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </div>
          <div className="relative group">
            <a href="#" className="text-gray-700 hover:text-blue-600 flex items-center transition-colors">
              Initiatives
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </div>
          <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">
            Accelerator
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">
            Trainings
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">
            Coworking Space
          </a>
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="outline" size="sm">
            <Share2 className="w-4 h-4 mr-2" />
            Share
          </Button>
          <Button variant="outline" size="sm">
            <Bookmark className="w-4 h-4" />
          </Button>
        </div>
      </nav>

      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="container mx-auto px-6">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <a href="/" className="hover:text-blue-600 transition-colors">
              Home
            </a>
            <ChevronRight className="w-4 h-4" />
            <a href="#" className="hover:text-blue-600 transition-colors">
              Success Stories
            </a>
            <ChevronRight className="w-4 h-4" />
            <span className="text-gray-900">IntraSync Interview</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full opacity-10"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-yellow-400 rounded-full opacity-20"></div>
          <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-pink-400 rounded-full opacity-15"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <Link href="/" className="inline-block">
              <Button 
                variant="outline" 
                className="bg-white/10 hover:bg-white/20 text-white border-white/20 backdrop-blur-sm transition-colors" 
                size="lg"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Back to Success Stories
              </Button>
            </Link>

            <h1 className="text-5xl font-bold mb-6 leading-tight">Interview with IntraSync</h1>
            <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
              Made by the Protik Team · June 27th, 2025
            </p>

            <div className="flex flex-wrap justify-center items-center gap-6 text-white/80">
              <div className="flex items-center">
                <Calendar className="w-5 h-5 mr-2" />
                <span>27/06/2025</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                <span>10 min read</span>
              </div>
              <div className="flex items-center">
                <Users className="w-5 h-5 mr-2" />
                <span>Interview by Protik Team</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-8">
              {/* Founder Profile */}
              <Card className="overflow-hidden">
                <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-6 text-white text-center">
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-10 h-10" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Protik Team</h3>
                  <p className="text-white/80 text-sm">Interviewers</p>
                  <p className="text-white/80 text-sm">IntraSync</p>
                </div>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div>
                      <div className="text-2xl font-bold text-blue-600">HR Tech</div>
                      <div className="text-gray-600 text-sm">Employee Management</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-purple-600">SMEs</div>
                      <div className="text-gray-600 text-sm">Target Market</div>
                    </div>
                  </div>
                  <Separator className="my-4" />
                  <Badge className="bg-blue-100 text-blue-800 mb-2">HR</Badge>
                  <Badge className="bg-purple-100 text-purple-800">Productivity</Badge>
                </CardContent>
              </Card>

              {/* Table of Contents */}
              <Card>
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-4">In This Interview</h4>
                  <nav className="space-y-2">
                    <a href="#problems" className="block text-sm text-gray-600 hover:text-blue-600 transition-colors">
                      Problems Solved
                    </a>
                    <a href="#differentiation" className="block text-sm text-gray-600 hover:text-blue-600 transition-colors">
                      Differentiation
                    </a>
                    <a href="#features" className="block text-sm text-gray-600 hover:text-blue-600 transition-colors">
                      Core Features
                    </a>
                    <a href="#target" className="block text-sm text-gray-600 hover:text-blue-600 transition-colors">
                      Target Customer
                    </a>
                    <a href="#gtm" className="block text-sm text-gray-600 hover:text-blue-600 transition-colors">
                      Go-to-Market
                    </a>
                    <a href="#vision" className="block text-sm text-gray-600 hover:text-blue-600 transition-colors">
                      Long-term Vision
                    </a>
                  </nav>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Main Article */}
          <div className="lg:col-span-3">
            <article className="prose prose-lg max-w-none">
              {/* Introduction */}
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 mb-12">
                <Quote className="w-12 h-12 text-blue-600 mb-4" />
                <blockquote className="text-2xl font-medium text-gray-900 mb-4 italic">
                  "IntraSync is designed to unify access, scheduling, and coordination for modern teams—making daily work simpler, smarter, and more transparent."
                </blockquote>
                <cite className="text-gray-600">— Protik Team</cite>
              </div>

              <div className="space-y-8">
                {/* Problems Solved Section */}
                <section id="problems">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mr-4">
                      <span className="text-white font-bold">1</span>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">What specific problems does IntraSync solve for companies when it comes to employee management?</h2>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-6 mb-6">
                    <p className="text-gray-800 font-medium mb-2">Protik Team:</p>
                    <p className="text-gray-700 italic">
                      IntraSync solves the problem of inefficient employee tracking and misaligned internal coordination. It replaces manual check-ins with digital QR-based entry and unifies personal and team schedules to improve daily organization and visibility.
                    </p>
                  </div>
                </section>

                {/* Differentiation Section */}
                <section id="differentiation">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mr-4">
                      <span className="text-white font-bold">2</span>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">How does IntraSync differentiate itself from existing HR and workforce management tools?</h2>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-6 mb-6">
                    <p className="text-gray-800 font-medium mb-2">Protik Team:</p>
                    <p className="text-gray-700 italic">
                      Unlike traditional HR tools focused on administrative tasks, IntraSync combines physical access control with real-time scheduling in a single, lightweight platform designed for everyday use by all employees, not just HR staff.
                    </p>
                  </div>
                </section>

                {/* Core Features Section */}
                <section id="features">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-yellow-500 rounded-full flex items-center justify-center mr-4">
                      <span className="text-white font-bold">3</span>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">Can you walk us through the core features of IntraSync and how they align with modern workforce needs?</h2>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-6 mb-6">
                    <p className="text-gray-800 font-medium mb-2">Protik Team:</p>
                    <p className="text-gray-700 italic">
                      IntraSync offers QR-based entry, personalized agendas, a shared company calendar, smart notifications, and usage analytics. These features support the hybrid work era by promoting accountability, transparency, and easy coordination across teams.
                    </p>
                  </div>
                </section>

                {/* Target Customer Section */}
                <section id="target">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-full flex items-center justify-center mr-4">
                      <span className="text-white font-bold">4</span>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">Who is your target customer—startups, SMEs, large enterprises—and why?</h2>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-6 mb-6">
                    <p className="text-gray-800 font-medium mb-2">Protik Team:</p>
                    <p className="text-gray-700 italic">
                      Our primary target is SMEs, as they often lack integrated tools for access and coordination. However, we also serve startups through a freemium model and offer scalable solutions for larger enterprises needing custom integrations.
                    </p>
                  </div>
                </section>

                {/* Go-to-Market Section */}
                <section id="gtm">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-600 rounded-full flex items-center justify-center mr-4">
                      <span className="text-white font-bold">5</span>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">What does your go-to-market strategy look like?</h2>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-6 mb-6">
                    <p className="text-gray-800 font-medium mb-2">Protik Team:</p>
                    <p className="text-gray-700 italic">
                      We'll start with a freemium model for small teams, drive adoption through referrals and partnerships, and upsell advanced features to growing companies. Direct outreach to HR leaders and B2B SaaS channels will support scale.
                    </p>
                  </div>
                </section>

                {/* Long-term Vision Section */}
                <section id="vision">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mr-4">
                      <span className="text-white font-bold">6</span>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">What's the long-term vision for IntraSync? Do you see it expanding beyond employee management?</h2>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-6 mb-6">
                    <p className="text-gray-800 font-medium mb-2">Protik Team:</p>
                    <p className="text-gray-700 italic">
                      Long-term, IntraSync aims to become a central hub for internal operations, expanding into workspace management, employee wellbeing tools, and deeper analytics to support smarter, more adaptive organizations.
                    </p>
                  </div>
                </section>
              </div>
            </article>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-16 rounded-xl text-center mx-6 my-12">
        <h2 className="text-4xl font-bold text-white mb-4">Want to Share Your Story?</h2>
        <p className="text-white text-lg mb-8 max-w-3xl mx-auto">
          Are you a founder with an inspiring journey? Join our success stories series and help other entrepreneurs learn from your experience.
        </p>
        <Button 
          className="bg-white text-blue-600 hover:bg-gray-100"
          onClick={() => window.open('https://protik.org/', '_blank')}
        >
          Apply for Interview
        </Button>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1">
              <h3 className="text-xl font-bold mb-4">protik</h3>
              <p className="text-gray-400 mb-4">
                Fostering ICT growth through collaboration, innovation, and entrepreneurship in Albania.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Programs</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Accelerator Program</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Training Workshops</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Coworking Space</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Success Stories</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Founder's Guide</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Funding Database</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2">
                <li className="text-gray-400">Tirana, Albania</li>
                <li><a href="mailto:info@protik.al" className="text-gray-400 hover:text-white">info@protik.al</a></li>
                <li className="text-gray-400">+355 XX XXX XXX</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>© 2024 Protik Innovation Center. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
} 