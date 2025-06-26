'use client'

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

export default function InsectIntelInterviewPage() {
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
            <span className="text-gray-900">InsectIntel Interview</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-br from-green-600 via-emerald-600 to-blue-600 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full opacity-10"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-yellow-400 rounded-full opacity-20"></div>
          <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-green-400 rounded-full opacity-15"></div>
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

            <h1 className="text-5xl font-bold mb-6 leading-tight">InsectIntel: Revolutionizing Agricultural Pest Management</h1>
            <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
              When we think of tech startups, we often think of common apps or devices. But InsectIntel is different. With a clear vision and a team that doesn't back down from challenges, this startup is offering a unique approach to a global problem that concerns farmers in every corner of the world - pest management.
            </p>

            <div className="flex flex-wrap justify-center items-center gap-6 text-white/80">
              <div className="flex items-center">
                <Calendar className="w-5 h-5 mr-2" />
                <span>15/02/2025</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                <span>15 min read</span>
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
                <div className="bg-gradient-to-br from-green-600 to-blue-600 p-6 text-white text-center">
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-10 h-10" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Endri Dhaskali</h3>
                  <p className="text-white/80 text-sm">CEO & Founder</p>
                  <p className="text-white/80 text-sm">InsectIntel</p>
                </div>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div>
                      <div className="text-2xl font-bold text-green-600">AI</div>
                      <div className="text-gray-600 text-sm">Powered Solution</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-blue-600">Global</div>
                      <div className="text-gray-600 text-sm">Impact Vision</div>
                    </div>
                  </div>
                  <Separator className="my-4" />
                  <Badge className="bg-green-100 text-green-800 mb-2">CleanTech</Badge>
                  <Badge className="bg-blue-100 text-blue-800">AgriTech</Badge>
                </CardContent>
              </Card>

              {/* Table of Contents */}
              <Card>
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-4">In This Interview</h4>
                  <nav className="space-y-2">
                    <a href="#origin" className="block text-sm text-gray-600 hover:text-blue-600 transition-colors">
                      Origin Story
                    </a>
                    <a href="#achievements" className="block text-sm text-gray-600 hover:text-blue-600 transition-colors">
                      Key Achievements
                    </a>
                    <a href="#future" className="block text-sm text-gray-600 hover:text-blue-600 transition-colors">
                      Future Vision
                    </a>
                    <a href="#support" className="block text-sm text-gray-600 hover:text-blue-600 transition-colors">
                      Government Support
                    </a>
                    <a href="#partnerships" className="block text-sm text-gray-600 hover:text-blue-600 transition-colors">
                      Key Partnerships
                    </a>
                    <a href="#grant" className="block text-sm text-gray-600 hover:text-blue-600 transition-colors">
                      Grant Projects
                    </a>
                    <a href="#vision" className="block text-sm text-gray-600 hover:text-blue-600 transition-colors">
                      Future Vision
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
              <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 mb-12">
                <Quote className="w-12 h-12 text-green-600 mb-4" />
                <blockquote className="text-2xl font-medium text-gray-900 mb-4 italic">
                  "Our vision is to create a global system that not only helps farmers protect their crops but also contributes to more sustainable agriculture."
                </blockquote>
                <cite className="text-gray-600">— Endri Dhaskali, CEO of InsectIntel</cite>
              </div>

              <div className="space-y-8">
                {/* Origin Story Section */}
                <section id="origin">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-600 rounded-full flex items-center justify-center mr-4">
                      <span className="text-white font-bold">1</span>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">Origin Story</h2>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-6 mb-6">
                    <p className="text-gray-800 font-medium mb-2">Protik Team:</p>
                    <p className="text-gray-700 italic">
                      "Tell us about your startup's background. How did the idea come about and what were the initial steps you took to create this business?"
                    </p>
                  </div>

                  <div className="bg-blue-50 rounded-xl p-6 mb-6">
                    <p className="text-blue-800 font-medium mb-2">Endri:</p>
                    <p className="text-gray-700">
                      "The idea for our startup, InsectIntel, arose from the need to help farmers combat harmful insect invasions before they become a serious problem. By combining advanced AI technology with real-time monitoring, we aimed to create a system that would help protect crops. The initial steps involved developing a simple prototype and testing it in local farms to see the impact of our technology. We then built a small but passionate team to further develop the idea."
                    </p>
                  </div>
                </section>

                {/* Achievements Section */}
                <section id="achievements">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mr-4">
                      <span className="text-white font-bold">2</span>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">Key Achievements</h2>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-6 mb-6">
                    <p className="text-gray-800 font-medium mb-2">Protik Team:</p>
                    <p className="text-gray-700 italic">
                      "What are the biggest achievements of your startup so far?"
                    </p>
                  </div>

                  <div className="bg-blue-50 rounded-xl p-6 mb-6">
                    <p className="text-blue-800 font-medium mb-2">Endri:</p>
                    <p className="text-gray-700">
                      "Our startup has achieved several important successes so far. One of the biggest achievements has been creating functional prototypes that use cameras and advanced algorithms to effectively identify insects. We've also been selected for a government grant, support that has helped us accelerate our technology development phase. Additionally, we've collaborated with farmers and agricultural organizations to test and improve our devices, receiving valuable feedback that has influenced product development. Furthermore, we've presented our vision at international agricultural technology fairs, putting our startup on the global map of innovation in this sector."
                    </p>
                  </div>
                </section>

                {/* Future Section */}
                <section id="future">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full flex items-center justify-center mr-4">
                      <span className="text-white font-bold">3</span>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">Future Development</h2>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-6 mb-6">
                    <p className="text-gray-800 font-medium mb-2">Protik Team:</p>
                    <p className="text-gray-700 italic">
                      "How do you see your startup developing in the next 3-5 years?"
                    </p>
                  </div>

                  <div className="bg-blue-50 rounded-xl p-6 mb-6">
                    <p className="text-blue-800 font-medium mb-2">Endri:</p>
                    <p className="text-gray-700">
                      "In the next 3-5 years, we aim to expand our technology to international markets, with a special focus on European countries. We plan to further improve our devices, adding new features based on collected data analysis and farmer needs. Another priority is creating partnerships with large agricultural companies and research institutions to better integrate our technology into existing agricultural processes. Ultimately, we see ourselves as a key factor in creating a more sustainable and efficient agricultural system that will help farmers face future challenges."
                    </p>
                  </div>
                </section>

                {/* Support Section */}
                <section id="support">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mr-4">
                      <span className="text-white font-bold">4</span>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">Government Support</h2>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-6 mb-6">
                    <p className="text-gray-800 font-medium mb-2">Protik Team:</p>
                    <p className="text-gray-700 italic">
                      "How do you evaluate the support from government and other institutions for startups in our country?"
                    </p>
                  </div>

                  <div className="bg-blue-50 rounded-xl p-6 mb-6">
                    <p className="text-blue-800 font-medium mb-2">Endri:</p>
                    <p className="text-gray-700">
                      "Support from the government has been helpful, especially through grants and innovation promotion programs. However, there is still room for improvement in terms of simplifying bureaucratic procedures and providing support for innovative startups."
                    </p>
                  </div>
                </section>

                {/* Partnerships Section */}
                <section id="partnerships">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-full flex items-center justify-center mr-4">
                      <span className="text-white font-bold">5</span>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">Key Partnerships</h2>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-6 mb-6">
                    <p className="text-gray-800 font-medium mb-2">Protik Team:</p>
                    <p className="text-gray-700 italic">
                      "Do you have any partnerships or collaborations that have been key to your startup's development?"
                    </p>
                  </div>

                  <div className="bg-blue-50 rounded-xl p-6 mb-6">
                    <p className="text-blue-800 font-medium mb-2">Endri:</p>
                    <p className="text-gray-700">
                      "Yes, collaboration with local farmers has been key to testing and improving our prototype."
                    </p>
                  </div>
                </section>

                {/* Grant Projects Section */}
                <section id="grant">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-600 rounded-full flex items-center justify-center mr-4">
                      <span className="text-white font-bold">6</span>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">Grant Projects</h2>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-6 mb-6">
                    <p className="text-gray-800 font-medium mb-2">Protik Team:</p>
                    <p className="text-gray-700 italic">
                      "Recently, you were also one of the startups selected for the government grant. What projects do you plan to implement with this grant?"
                    </p>
                  </div>

                  <div className="bg-blue-50 rounded-xl p-6 mb-6">
                    <p className="text-blue-800 font-medium mb-2">Endri:</p>
                    <p className="text-gray-700">
                      "The grant we received from the government will help us implement several important projects. Initially, we plan to complete the development of an advanced model of our device that will be suitable for operating in harsh environmental conditions. Another project is the implementation of a real-time reporting system for farmers, which they can easily use through a dedicated platform. We also plan to expand the device's capacity to identify a wider range of insects and create a rich database that will serve as a valuable source of information for farmers and researchers."
                    </p>
                  </div>
                </section>

                {/* Vision Section */}
                <section id="vision">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mr-4">
                      <span className="text-white font-bold">7</span>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">Future Vision</h2>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-6 mb-6">
                    <p className="text-gray-800 font-medium mb-2">Protik Team:</p>
                    <p className="text-gray-700 italic">
                      "What is your vision for the future of your startup and how do you want your startup to be remembered in the industry where you operate?"
                    </p>
                  </div>

                  <div className="bg-blue-50 rounded-xl p-6 mb-6">
                    <p className="text-blue-800 font-medium mb-2">Endri:</p>
                    <p className="text-gray-700">
                      "Our vision is to create a global system that not only helps farmers protect their crops but also contributes to more sustainable agriculture. We want InsectIntel to be remembered as the company that transformed how farmers manage invasive insects using intelligent and environmentally friendly technology."
                    </p>
                  </div>
                </section>
              </div>
            </article>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="bg-gradient-to-r from-green-600 to-blue-600 p-16 rounded-xl text-center mx-6 my-12">
        <h2 className="text-4xl font-bold text-white mb-4">Want to Share Your Story?</h2>
        <p className="text-white text-lg mb-8 max-w-3xl mx-auto">
          Are you a founder with an inspiring journey? Join our success stories series and help other entrepreneurs learn from your experience.
        </p>
        <Button 
          className="bg-white text-green-600 hover:bg-gray-100"
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