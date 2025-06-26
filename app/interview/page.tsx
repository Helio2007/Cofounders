'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"
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

export default function InterviewPage() {
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
            <span className="text-gray-900">Patoko Interview</span>
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

            <h1 className="text-5xl font-bold mb-6 leading-tight">Patoko, The Everything App</h1>
            <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
              Follow the inspiring journey of Patoko as it evolved from a local idea into a leading platform, streamlining property rentals across Albania and setting its sights on regional growth.
            </p>

            <div className="flex flex-wrap justify-center items-center gap-6 text-white/80">
              <div className="flex items-center">
                <Calendar className="w-5 h-5 mr-2" />
                <span>January 24, 2024</span>
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
                <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-6 text-white text-center">
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-10 h-10" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Arbri</h3>
                  <p className="text-white/80 text-sm">CEO & Co-Founder</p>
                  <p className="text-white/80 text-sm">Patoko</p>
                </div>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div>
                      <div className="text-2xl font-bold text-green-600">20K+</div>
                      <div className="text-gray-600 text-sm">Active Users</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-purple-600">7</div>
                      <div className="text-gray-600 text-sm">Cities</div>
                    </div>
                  </div>
                  <Separator className="my-4" />
                  <a 
                    href="https://patoko.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <Button className="w-full" size="sm">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Visit Patoko
                    </Button>
                  </a>
                </CardContent>
              </Card>

              {/* Table of Contents */}
              <Card>
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-4">In This Interview</h4>
                  <nav className="space-y-2">
                    <a href="#about" className="block text-sm text-gray-600 hover:text-blue-600 transition-colors">
                      About Patoko
                    </a>
                    <a href="#origin" className="block text-sm text-gray-600 hover:text-blue-600 transition-colors">
                      Origin Story
                    </a>
                    <a href="#challenges" className="block text-sm text-gray-600 hover:text-blue-600 transition-colors">
                      Biggest Challenges
                    </a>
                    <a href="#development" className="block text-sm text-gray-600 hover:text-blue-600 transition-colors">
                      Product Development
                    </a>
                    <a href="#advice" className="block text-sm text-gray-600 hover:text-blue-600 transition-colors">
                      Advice for Founders
                    </a>
                    <a href="#success" className="block text-sm text-gray-600 hover:text-blue-600 transition-colors">
                      Key Achievements
                    </a>
                    <a href="#current-stage" className="block text-sm text-gray-600 hover:text-blue-600 transition-colors">
                      Current Stage & Future Plans
                    </a>
                    <a href="#location" className="block text-sm text-gray-600 hover:text-blue-600 transition-colors">
                      Current Presence
                    </a>
                    <a href="#final-advice" className="block text-sm text-gray-600 hover:text-blue-600 transition-colors">
                      Final Words of Wisdom
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
                  "Don't fall too much in love with the idea, fall in love with the solution and the consistent way of solving it."
                </blockquote>
                <cite className="text-gray-600">— Arbri, CEO of Patoko</cite>
              </div>

              <div className="space-y-8">
                {/* About Section */}
                <section id="about">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mr-4">
                      <span className="text-white font-bold">1</span>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">About Patoko</h2>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-6 mb-6">
                    <p className="text-gray-800 font-medium mb-2">Protik Team:</p>
                    <p className="text-gray-700 italic">
                      "Can you briefly tell us what Patoko is and what problem it solves?"
                    </p>
                  </div>

                  <div className="bg-blue-50 rounded-xl p-6 mb-6">
                    <p className="text-blue-800 font-medium mb-2">Arbri:</p>
                    <p className="text-gray-700">
                      "Patoko is the first Albanian superapp and the first superapp in Europe, which solves the problem that users have of finding the service they want in the fastest possible way."
                    </p>
                  </div>
                </section>

                {/* Origin Story Section */}
                <section id="origin">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-600 rounded-full flex items-center justify-center mr-4">
                      <span className="text-white font-bold">2</span>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">Origin Story</h2>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-6 mb-6">
                    <p className="text-gray-800 font-medium mb-2">Protik Team:</p>
                    <p className="text-gray-700 italic">
                      "How did the idea for Patoko come about and what was the moment that convinced you to turn this idea into a real business?"
                    </p>
                  </div>

                  <div className="bg-blue-50 rounded-xl p-6 mb-6">
                    <p className="text-blue-800 font-medium mb-2">Arbri:</p>
                    <p className="text-gray-700">
                      "Patoko was born as a brainstorming process between the first co-founder (Patrik) and me, where we wanted to democratize services; we wanted to start with payments, but that is more difficult, so we reached the user's daily life, seeing that countries like Albania have a significant lack of digital services."
                    </p>
                  </div>
                </section>

                {/* Challenges Section */}
                <section id="challenges">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-pink-600 rounded-full flex items-center justify-center mr-4">
                      <span className="text-white font-bold">3</span>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">Biggest Challenges</h2>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-6 mb-6">
                    <p className="text-gray-800 font-medium mb-2">Protik Team:</p>
                    <p className="text-gray-700 italic">
                      "What have been the biggest challenges during your journey as a startup?"
                    </p>
                  </div>

                  <div className="bg-blue-50 rounded-xl p-6 mb-6">
                    <p className="text-blue-800 font-medium mb-2">Arbri:</p>
                    <p className="text-gray-700">
                      "The biggest challenge is how to build a technology company with all the things needed: registration, regulatory part, finding the first customers, improving the product all the time, identifying the type of service, etc. So, when you do a regular startup it is very difficult. When you do a startup that has many, many services it is even more difficult."
                    </p>
                  </div>
                </section>

                {/* Development Section */}
                <section id="development">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mr-4">
                      <span className="text-white font-bold">4</span>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">Product Development</h2>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-6 mb-6">
                    <p className="text-gray-800 font-medium mb-2">Protik Team:</p>
                    <p className="text-gray-700 italic">
                      "How long did it take you from developing the idea to the final product?"
                    </p>
                  </div>

                  <div className="bg-blue-50 rounded-xl p-6 mb-6">
                    <p className="text-blue-800 font-medium mb-2">Arbri:</p>
                    <p className="text-gray-700">
                      "The final product Patoko is never finished, because it is constantly evolving, but if we take it with MVP (Minimum Viable Product), it took us 3 months to release the first version of the taxi, 6 months for a more curated and functional version, and then it is ongoing all the time, which means; we have done 500 iterations on taxi and in other verticals we are constantly making improvements, taking into account the security aspect, aspects of the general structure, interoperability, integration with other platforms, etc., so it is an ongoing process, but let's take 6 months as the first phase."
                    </p>
                  </div>
                </section>

                {/* Advice Section */}
                <section id="advice">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-full flex items-center justify-center mr-4">
                      <span className="text-white font-bold">5</span>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">Advice for Founders</h2>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-6 mb-6">
                    <p className="text-gray-800 font-medium mb-2">Protik Team:</p>
                    <p className="text-gray-700 italic">
                      "What are some key pieces of advice you would give to someone who wants to become a founder?"
                    </p>
                  </div>

                  <div className="bg-blue-50 rounded-xl p-6 mb-6">
                    <p className="text-blue-800 font-medium mb-2">Arbri:</p>
                    <p className="text-gray-700">
                      "It's a cliché, but fail as soon as possible! So, don't fall too much in love with the idea, fall in love with the solution and the consistent way of solving it; if you reach the solution quickly, without any doubt you should jump in, but don't quit without being 100% sure that the idea will work."
                    </p>
                  </div>
                </section>

                {/* Success Section */}
                <section id="success">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mr-4">
                      <span className="text-white font-bold">6</span>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">Key Achievements</h2>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-6 mb-6">
                    <p className="text-gray-800 font-medium mb-2">Protik Team:</p>
                    <p className="text-gray-700 italic">
                      "What are some of the main successes you have achieved so far?"
                    </p>
                  </div>

                  <div className="bg-blue-50 rounded-xl p-6 mb-6">
                    <p className="text-blue-800 font-medium mb-2">Arbri:</p>
                    <p className="text-gray-700">
                      "The rapid education of the taxi market and the creation of opportunities for other startups, which have seen that a digital product can work, this is the first achievement. Capturing 1000 taxis registered in Patoko, creating other services that did not exist for the reservation part with a very high quality product. We call this a great success! And then changing the perception of the simple taxi in relation to technology. So, taking a 50-60 year old from Tirana, who had not switched to an electric car, because he saw technology as a barrier and then began to understand that in order to survive with other companies, the taxi had to change, is the greatest achievement."
                    </p>
                  </div>
                </section>

                {/* Current Stage Section */}
                <section id="current-stage">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full flex items-center justify-center mr-4">
                      <span className="text-white font-bold">7</span>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">Current Stage & Future Plans</h2>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-6 mb-6">
                    <p className="text-gray-800 font-medium mb-2">Protik Team:</p>
                    <p className="text-gray-700 italic">
                      "What stage is Patoko in today and what are the short-term plans?"
                    </p>
                  </div>

                  <div className="bg-blue-50 rounded-xl p-6 mb-6">
                    <p className="text-blue-800 font-medium mb-2">Arbri:</p>
                    <p className="text-gray-700">
                      "Our stage is that we are in expansion; either within the team, hiring many people, or in the form of improving the overall product, which is much more advanced than it has ever been and we are in the stage where we are thinking, after this summer is over, of testing in several international markets."
                    </p>
                  </div>
                </section>

                {/* Location Section */}
                <section id="location">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full flex items-center justify-center mr-4">
                      <span className="text-white font-bold">8</span>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">Current Presence</h2>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-6 mb-6">
                    <p className="text-gray-800 font-medium mb-2">Protik Team:</p>
                    <p className="text-gray-700 italic">
                      "Where is Patoko currently located?"
                    </p>
                  </div>

                  <div className="bg-blue-50 rounded-xl p-6 mb-6">
                    <p className="text-blue-800 font-medium mb-2">Arbri:</p>
                    <p className="text-gray-700">
                      "Currently, Patoko has a taxi service in 7 cities and is mostly in Tirana and Durrës with other services."
                    </p>
                  </div>
                </section>

                {/* Final Advice Section */}
                <section id="final-advice">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-600 rounded-full flex items-center justify-center mr-4">
                      <span className="text-white font-bold">9</span>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">Final Words of Wisdom</h2>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-6 mb-6">
                    <p className="text-gray-800 font-medium mb-2">Protik Team:</p>
                    <p className="text-gray-700 italic">
                      "What would you advise someone who has an idea but doesn't know how to turn it into a business?"
                    </p>
                  </div>

                  <div className="bg-blue-50 rounded-xl p-6 mb-6">
                    <p className="text-blue-800 font-medium mb-2">Arbri:</p>
                    <p className="text-gray-700">
                      "I would tell them to put the idea on the market as soon as possible and see if it works or not. The market will take care of the rest."
                    </p>
                  </div>
                </section>

                {/* Closing */}
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
                  <h3 className="text-2xl font-bold mb-4">Want to Share Your Story?</h3>
                  <p className="mb-6 opacity-90">
                    Are you a founder with an inspiring journey? Join our success stories series and help other
                    entrepreneurs learn from your experience.
                  </p>
                  <Button className="bg-white text-blue-600 hover:bg-gray-100">Apply for Interview</Button>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="text-2xl font-bold mb-4">protik</div>
              <p className="text-gray-400 mb-4">
                Fostering ICT growth through collaboration, innovation, and entrepreneurship in Albania.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-lg">Programs</h3>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Accelerator Program
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Training Workshops
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Coworking Space
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-lg">Resources</h3>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Success Stories
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Founder's Guide
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Funding Database
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-lg">Contact</h3>
              <ul className="space-y-3 text-gray-400">
                <li>Tirana, Albania</li>
                <li>info@protik.al</li>
                <li>+355 XX XXX XXX</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Protik Innovation Center. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
} 