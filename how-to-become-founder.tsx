import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  PlayCircle,
  FileText,
  Users,
  Lightbulb,
  CheckCircle,
  Download,
  Star,
  Award,
  TrendingUp,
  Zap,
  Target,
  Rocket,
} from "lucide-react"

export default function HowToBecomeFounder() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 py-4 bg-white border-b sticky top-0 z-50">
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
          <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z" />
            </svg>
          </a>
          <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
          <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
            </svg>
          </a>
          <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </a>
        </div>
      </nav>

      {/* Hero Section with Dynamic Background */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-800 via-purple-800 to-blue-900"></div>
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-20 w-32 h-32 bg-white rounded-full opacity-10"></div>
          <div className="absolute top-40 right-32 w-24 h-24 bg-yellow-400 rounded-full opacity-20"></div>
          <div className="absolute bottom-32 left-1/3 w-40 h-40 bg-pink-400 rounded-full opacity-15"></div>
          <div className="absolute bottom-20 right-20 w-28 h-28 bg-green-400 rounded-full opacity-10"></div>
        </div>

        <div className="relative container mx-auto px-6 py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="flex items-center mb-6">
                <Rocket className="w-8 h-8 mr-3 text-yellow-400" />
                <span className="text-yellow-400 font-semibold">FOUNDER'S JOURNEY</span>
              </div>
              <h1 className="text-6xl font-bold mb-6 leading-tight">
                How to Become a
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-400">
                  {" "}
                  Founder
                </span>
              </h1>
              <p className="text-xl mb-8 opacity-90 leading-relaxed">
                Transform your innovative ideas into successful startups with our comprehensive guide to
                entrepreneurship in Albania's thriving tech ecosystem.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                <a href="#legal-framework" className="bg-white/80 text-blue-700 border-white/30 px-4 py-2 text-sm cursor-pointer hover:bg-blue-600 hover:text-white transition-colors rounded-full flex items-center font-semibold">
                  <FileText className="w-4 h-4 mr-2" />
                  Legal Framework
                </a>
                <a href="#funding-guide" className="bg-white/80 text-blue-700 border-white/30 px-4 py-2 text-sm cursor-pointer hover:bg-blue-600 hover:text-white transition-colors rounded-full flex items-center font-semibold">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  Funding Guide
                </a>
                <a href="#pitch-mastery" className="bg-white/80 text-blue-700 border-white/30 px-4 py-2 text-sm cursor-pointer hover:bg-blue-600 hover:text-white transition-colors rounded-full flex items-center font-semibold">
                  <Target className="w-4 h-4 mr-2" />
                  Pitch Mastery
                </a>
                <a href="#success-stories" className="bg-white/80 text-blue-700 border-white/30 px-4 py-2 text-sm cursor-pointer hover:bg-blue-600 hover:text-white transition-colors rounded-full flex items-center font-semibold">
                  <PlayCircle className="w-4 h-4 mr-2" />
                  Success Stories
                </a>
              </div>
              <div className="flex justify-center my-8">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
                  <Zap className="w-5 h-5 mr-2" />
                  Start Your Journey
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <img
                  src="/images/how.jpg"
                  alt="How to Become a Founder"
                  className="mx-auto my-8 w-full max-w-md md:max-w-lg h-auto rounded-2xl shadow-2xl object-contain"
                />
              </div>
              <div className="absolute -top-2 left-12 w-[75%] h-[85%] bg-gradient-to-br from-yellow-400 to-pink-400 rounded-2xl opacity-25 z-0"></div>
              <div className="absolute -top-1 left-6 w-[65%] h-[75%] rounded-2xl shadow-xl bg-black/20 blur-sm opacity-20 z-0"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">500+</div>
              <div className="text-gray-600">Startups Supported</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">€50M+</div>
              <div className="text-gray-600">Funding Raised</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">85%</div>
              <div className="text-gray-600">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">12</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Foundation Act Section with Colorful Design */}
      <section id="legal-framework" className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-blue-100 text-blue-800 px-6 py-3 rounded-full mb-6">
              <FileText className="w-5 h-5 mr-2" />
              <span className="font-semibold">STEP 1: LEGAL FOUNDATION</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Foundation Act & Legal Framework</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Build your startup on solid legal ground with our comprehensive guide to business registration and
              compliance in Albania.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="bg-white rounded-2xl p-8 shadow-xl border border-blue-100">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-600 rounded-full flex items-center justify-center mr-4">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Business Registration Process</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Choose Business Structure</h4>
                      <p className="text-gray-600 text-sm">
                        LLC, Joint Stock Company, or Partnership - we'll help you decide
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg">
                    <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Register with QKR</h4>
                      <p className="text-gray-600 text-sm">National Registration Center - streamlined online process</p>
                    </div>
                  </div>
                  <div className="flex items-start p-4 bg-gradient-to-r from-pink-50 to-yellow-50 rounded-lg">
                    <div className="w-8 h-8 bg-pink-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Obtain Licenses</h4>
                      <p className="text-gray-600 text-sm">Industry-specific permits and regulatory approvals</p>
                    </div>
                  </div>
                  <div className="flex items-start p-4 bg-gradient-to-r from-yellow-50 to-green-50 rounded-lg">
                    <div className="w-8 h-8 bg-yellow-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">
                      4
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Banking Setup</h4>
                      <p className="text-gray-600 text-sm">
                        Open business accounts and establish financial infrastructure
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-4">Quick Start Package</h3>
                <p className="mb-6 opacity-90">
                  Get everything you need to register your startup in one comprehensive package.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-3 text-green-400" />
                    Legal document templates
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-3 text-green-400" />
                    Step-by-step registration guide
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-3 text-green-400" />
                    Legal consultation session
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-3 text-green-400" />
                    Compliance checklist
                  </li>
                </ul>
                <Button className="bg-white text-blue-600 hover:bg-gray-100 w-full">
                  <Download className="w-4 h-4 mr-2" />
                  Download Package
                </Button>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg border-l-4 border-l-yellow-500">
                <div className="flex items-center mb-3">
                  <Lightbulb className="w-6 h-6 text-yellow-500 mr-2" />
                  <h4 className="font-semibold text-gray-900">Pro Tip</h4>
                </div>
                <p className="text-gray-600 text-sm">
                  Start the registration process early! It typically takes 5-10 business days, and you'll need this
                  completed before applying for most grants.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grants Section with Visual Elements */}
      <section id="funding-guide" className="py-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          <div className="absolute top-20 left-10 w-64 h-64 bg-blue-600 rounded-full"></div>
          <div className="absolute bottom-20 right-10 w-48 h-48 bg-purple-600 rounded-full"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-green-100 text-green-800 px-6 py-3 rounded-full mb-6">
              <TrendingUp className="w-5 h-5 mr-2" />
              <span className="font-semibold">STEP 2: SECURE FUNDING</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Funding & Grants Opportunities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover multiple funding sources and learn how to successfully apply for grants that will fuel your
              startup's growth.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <Card className="relative overflow-hidden group hover:shadow-2xl transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-700 opacity-0 group-hover:opacity-10 transition-opacity"></div>
              <CardHeader className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z" />
                  </svg>
                </div>
                <CardTitle className="text-xl">Government Grants</CardTitle>
                <CardDescription>National and local funding programs</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                    <span className="text-sm font-medium">Ministry of Economy</span>
                    <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                      €50K
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                    <span className="text-sm font-medium">Innovation Fund</span>
                    <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                      €100K
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                    <span className="text-sm font-medium">Regional Programs</span>
                    <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                      €25K
                    </Badge>
                  </div>
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">Explore Government Grants</Button>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden group hover:shadow-2xl transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-green-700 opacity-0 group-hover:opacity-10 transition-opacity"></div>
              <CardHeader className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-700 rounded-2xl flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </div>
                <CardTitle className="text-xl">EU Funding</CardTitle>
                <CardDescription>European Union programs</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                    <span className="text-sm font-medium">Horizon Europe</span>
                    <Badge variant="secondary" className="bg-green-100 text-green-800">
                      €2M+
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                    <span className="text-sm font-medium">Digital Europe</span>
                    <Badge variant="secondary" className="bg-green-100 text-green-800">
                      €500K
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                    <span className="text-sm font-medium">COSME SME</span>
                    <Badge variant="secondary" className="bg-green-100 text-green-800">
                      €150K
                    </Badge>
                  </div>
                </div>
                <Button className="w-full bg-green-600 hover:bg-green-700">Explore EU Programs</Button>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden group hover:shadow-2xl transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-purple-700 opacity-0 group-hover:opacity-10 transition-opacity"></div>
              <CardHeader className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl flex items-center justify-center mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl">Private Funding</CardTitle>
                <CardDescription>VCs, angels, and accelerators</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                    <span className="text-sm font-medium">Angel Networks</span>
                    <Badge variant="secondary" className="bg-purple-100 text-purple-800">
                      €250K
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                    <span className="text-sm font-medium">VC Funds</span>
                    <Badge variant="secondary" className="bg-purple-100 text-purple-800">
                      €1M+
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                    <span className="text-sm font-medium">Accelerators</span>
                    <Badge variant="secondary" className="bg-purple-100 text-purple-800">
                      €100K
                    </Badge>
                  </div>
                </div>
                <Button className="w-full bg-purple-600 hover:bg-purple-700">Find Investors</Button>
              </CardContent>
            </Card>
          </div>

          {/* Application Process Timeline */}
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl p-12 text-white">
            <h3 className="text-3xl font-bold text-center mb-12">Grant Application Timeline</h3>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center relative">
                <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6 border-2 border-white/30">
                  <span className="text-2xl font-bold">1</span>
                </div>
                <h4 className="text-xl font-semibold mb-3">Research & Identify</h4>
                <p className="text-white/80 text-sm">Find grants that match your startup's stage and industry focus</p>
                <div className="hidden md:block absolute top-10 -right-4 w-8 h-0.5 bg-white/30"></div>
              </div>
              <div className="text-center relative">
                <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6 border-2 border-white/30">
                  <span className="text-2xl font-bold">2</span>
                </div>
                <h4 className="text-xl font-semibold mb-3">Prepare Documents</h4>
                <p className="text-white/80 text-sm">Business plan, financial projections, and legal documentation</p>
                <div className="hidden md:block absolute top-10 -right-4 w-8 h-0.5 bg-white/30"></div>
              </div>
              <div className="text-center relative">
                <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6 border-2 border-white/30">
                  <span className="text-2xl font-bold">3</span>
                </div>
                <h4 className="text-xl font-semibold mb-3">Submit Application</h4>
                <p className="text-white/80 text-sm">
                  Complete application with all required materials before deadline
                </p>
                <div className="hidden md:block absolute top-10 -right-4 w-8 h-0.5 bg-white/30"></div>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6 border-2 border-white/30">
                  <span className="text-2xl font-bold">4</span>
                </div>
                <h4 className="text-xl font-semibold mb-3">Follow Up & Win</h4>
                <p className="text-white/80 text-sm">Track progress, provide additional info, and celebrate success</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pitch Deck Section with Interactive Elements */}
      <section id="pitch-mastery" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-purple-100 text-purple-800 px-6 py-3 rounded-full mb-6">
              <Target className="w-5 h-5 mr-2" />
              <span className="font-semibold">STEP 3: PERFECT YOUR PITCH</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Presentation & Pitch Deck Mastery</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Create compelling presentations that capture investor attention and secure the funding you need.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">The Perfect Pitch Deck</h3>
                <div className="space-y-4">
                  {[
                    {
                      number: 1,
                      title: "Problem Statement",
                      desc: "What pain point are you solving?",
                      color: "from-red-500 to-pink-500",
                    },
                    {
                      number: 2,
                      title: "Solution",
                      desc: "Your unique approach to the problem",
                      color: "from-blue-500 to-purple-500",
                    },
                    {
                      number: 3,
                      title: "Market Opportunity",
                      desc: "Size and potential of your target market",
                      color: "from-green-500 to-blue-500",
                    },
                    {
                      number: 4,
                      title: "Business Model",
                      desc: "How you generate revenue",
                      color: "from-purple-500 to-pink-500",
                    },
                    {
                      number: 5,
                      title: "Traction",
                      desc: "Proof of concept and early success",
                      color: "from-yellow-500 to-orange-500",
                    },
                  ].map((slide, index) => (
                    <div
                      key={index}
                      className="flex items-center p-4 bg-gradient-to-r from-gray-50 to-white rounded-xl border border-gray-100 hover:shadow-md transition-shadow"
                    >
                      <div
                        className={`w-12 h-12 bg-gradient-to-r ${slide.color} rounded-full flex items-center justify-center text-white font-bold mr-4`}
                      >
                        {slide.number}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{slide.title}</h4>
                        <p className="text-gray-600 text-sm">{slide.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

              <div className="space-y-6">
                <div className="bg-gradient-to-br from-blue-600 via-blue-500 to-blue-400 text-white rounded-2xl p-8">
                  <h3 className="text-2xl font-bold mb-6">Presentation Masterclass</h3>
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 mr-3 text-blue-200" />
                      <span>Storytelling techniques that captivate</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 mr-3 text-blue-200" />
                      <span>Body language and stage presence</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 mr-3 text-blue-200" />
                      <span>Handling tough investor questions</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 mr-3 text-blue-200" />
                      <span>Creating memorable moments</span>
                    </div>
                  </div>
                  <Button className="bg-white text-blue-600 hover:bg-gray-100 w-full">
                    <PlayCircle className="w-4 h-4 mr-2" />
                    Watch Masterclass
                  </Button>
                </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-xl p-6 shadow-lg text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Download className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Templates</h4>
                  <p className="text-gray-600 text-sm mb-3">Professional pitch deck templates</p>
                  <Button size="sm" variant="outline" className="w-full">
                    Download
                  </Button>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-lg text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Practice</h4>
                  <p className="text-gray-600 text-sm mb-3">Monthly pitch practice sessions</p>
                  <Button size="sm" variant="outline" className="w-full">
                    Join Session
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories with Rich Media */}
      <section id="success-stories" className="py-20 bg-gradient-to-b from-blue-50 via-white to-white text-gray-900 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm text-blue-700 px-6 py-3 rounded-full mb-6">
              <PlayCircle className="w-5 h-5 mr-2" />
              <span className="font-semibold">SUCCESS STORIES</span>
            </div>
            <h2 className="text-4xl font-bold mb-4">Learn from Our Startup Heroes</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Watch exclusive interviews with founders who transformed their ideas into thriving businesses in Albania's
              tech ecosystem.
            </p>
          </div>

          {/* Featured Story */}
          <div className="mb-16">
            <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <Badge className="bg-white/80 text-blue-700 border-white/30 px-4 py-2 text-sm font-semibold mb-4">
                    FEATURED STORY
                  </Badge>
                  <h3 className="text-3xl font-bold mb-4">From Dorm Room to €5M Valuation</h3>
                  <p className="text-gray-700 mb-6 text-lg">
                    Follow the incredible journey of TechStart Albania as they grew from a university project to
                    securing Series A funding and expanding across the Balkans.
                  </p>
                  <div className="flex items-center space-x-6 mb-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-400">€5M</div>
                      <div className="text-gray-700 text-sm">Valuation</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-400">50K+</div>
                      <div className="text-gray-700 text-sm">Users</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-400">3</div>
                      <div className="text-gray-700 text-sm">Countries</div>
                    </div>
                  </div>
                  <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100">
                    <PlayCircle className="w-5 h-5 mr-2" />
                    Watch Full Interview (45 min)
                  </Button>
                </div>
                <div className="relative">
                  <div className="aspect-video bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center relative overflow-hidden">
                    <PlayCircle className="w-20 h-20 text-white z-10" />
                    <div className="absolute inset-0 bg-black/20"></div>
                    <img
                      src="/images/startup-event.png"
                      alt="Startup Interview"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-20"></div>
                </div>
              </div>
            </div>
          </div>

          {/* More Stories Grid */}
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: "GreenTech Revolution",
                description: "Sustainable energy startup that secured €2M EU funding",
                duration: "38 min",
                category: "CleanTech",
                color: "from-green-500 to-blue-600",
              },
              {
                title: "E-Commerce Pioneer",
                description: "Building the Balkans' largest online marketplace",
                duration: "52 min",
                category: "E-Commerce",
                color: "from-purple-500 to-pink-600",
              },
              {
                title: "FinTech Disruptor",
                description: "Digital banking solution serving 100K+ customers",
                duration: "41 min",
                category: "FinTech",
                color: "from-blue-500 to-purple-600",
              },
            ].map((story, index) => (
              <Card
                key={index}
                className="bg-white/5 backdrop-blur-sm border-white/10 text-white hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="relative overflow-hidden">
                  <div
                    className={`aspect-video bg-gradient-to-br ${story.color} flex items-center justify-center relative`}
                  >
                    <PlayCircle className="w-16 h-16 text-white group-hover:scale-110 transition-transform" />
                    <Badge className="absolute top-3 left-3 bg-black/50 text-white">{story.category}</Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-2">{story.title}</h3>
                  <p className="text-gray-700 text-sm mb-4">{story.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-700">{story.duration} • Interview</span>
                    <Button size="sm" className="bg-white text-blue-600 hover:bg-gray-100 hover:text-blue-800 font-semibold">
                      Watch
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action for Interviews */}
          <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 backdrop-blur-sm rounded-2xl p-8 border border-yellow-500/20">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Share Your Success Story</h3>
              <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
                Are you a founder with an inspiring journey? Join our success stories series and help other
                entrepreneurs learn from your experience.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button className="bg-yellow-500 text-gray-900 hover:bg-yellow-400">Apply for Interview</Button>
                <Button className="bg-white text-blue-600 hover:bg-gray-100 hover:text-blue-800 font-semibold">
                  View All Stories
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners & Ecosystem */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Trusted by Leading Organizations</h2>
            <p className="text-gray-600">Join an ecosystem of innovation supported by top-tier partners</p>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-12">
            <img src="/images/aadf.jpg" alt="EDIM" className="h-12 object-contain" />
            <img src="/images/kastrati.png.jpg" alt="USAID" className="h-12 object-contain" />
            <img src="/images/usaid.jpg" alt="Microsoft" className="h-12 object-contain" />
            <img src="/images/microsoft-logo.jpg" alt="Cisco" className="h-12 object-contain" />
            <img src="/images/cisco.jpg" alt="VentureWell" className="h-12 object-contain" />
            <img src="/images/albtelecom.jpg" alt="ALBtelecom" className="h-12 object-contain" />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-yellow-400 rounded-full"></div>
          <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-pink-400 rounded-full"></div>
          <div className="absolute bottom-10 right-10 w-28 h-28 bg-green-400 rounded-full"></div>
        </div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="max-w-4xl mx-auto text-white">
            <h2 className="text-5xl font-bold mb-6">Ready to Launch Your Startup?</h2>
            <p className="text-xl mb-8 opacity-90">
              Join hundreds of successful founders who started their journey with Protik. Get the support, resources,
              and network you need to build the next big thing.
            </p>
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold">500+</div>
                <div className="text-white/80">Startups Launched</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">€50M+</div>
                <div className="text-white/80">Funding Raised</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">85%</div>
                <div className="text-white/80">Success Rate</div>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
                <Rocket className="w-5 h-5 mr-2" />
                Start Your Journey
              </Button>
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100 hover:text-blue-800 px-8 py-4 text-lg font-semibold"
              >
                <Users className="w-5 h-5 mr-2" />
                Join Our Community
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-10">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="mb-8 md:mb-0">
            <h3 className="text-xl font-semibold mb-2">Innovation</h3>
            <p className="mb-4 text-sm">Promoting ICT development and entrepreneurship in Albania.</p>
            <div className="flex space-x-4 mb-4">
              <a href="#" aria-label="Instagram"><i className="fab fa-instagram text-2xl"></i></a>
              <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin text-2xl"></i></a>
              <a href="#" aria-label="X"><i className="fab fa-x-twitter text-2xl"></i></a>
              <a href="#" aria-label="Facebook"><i className="fab fa-facebook text-2xl"></i></a>
            </div>
            <p className="text-xs">Protik Center 2025© | All rights reserved.</p>
          </div>
          <div className="md:text-right">
            <h4 className="font-semibold mb-2">FOR PARTNERSHIPS & NETWORKING</h4>
            <p className="font-bold">+355 69 70 29 000</p>
            <p className="font-bold">info@protik.com</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
