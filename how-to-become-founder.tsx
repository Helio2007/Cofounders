"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import {
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
import React, { useState, useRef, useEffect } from "react"
import { toast } from "@/components/ui/use-toast"
import Image from "next/image"
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel"
import type { UseEmblaCarouselType } from 'embla-carousel-react'

export default function HowToBecomeFounder() {
  const [showModal, setShowModal] = useState(false)
  const [showDownloadAlert, setShowDownloadAlert] = useState(false)

  const handleDownloadDocuments = async () => {
    try {
      const response = await fetch('/api/download-legal-documents');
      if (!response.ok) throw new Error('Download failed');
      
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'Legal_Documents.zip';
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (error) {
      console.error('Error downloading documents:', error);
    }
  };

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
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
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
                  <FileText className="w-4 h-4 mr-2" />
                  Success Stories
                </a>
              </div>
              <div className="flex justify-center my-8">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold" onClick={() => setShowModal(true)}>
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
              <div className="text-3xl font-bold text-gray-900 mb-2">10+</div>
              <div className="text-gray-600">Startups Supported</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">€100K+</div>
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

          <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
            {/* Business Registration Process Card */}
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
                      SHPK, Joint Stock Company, or Partnership - we'll help you decide
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

            {/* Legal Document Package Card */}
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">Legal Document Package</h3>
              <p className="mb-6 opacity-90">
                Download the official Legal document templates to legally establish your startup.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center justify-between">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-3 text-green-400" />
                    <span>Official Foundation Act guide</span>
                  </div>
                  <Badge className="bg-blue-500/30">Akt Themelimi</Badge>
                </li>
                <li className="flex items-center justify-between">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-3 text-green-400" />
                    <span>Declaration on Ultimate Beneficiaries</span>
                  </div>
                  <Badge className="bg-blue-500/30">STATEMENT</Badge>
                </li>
                <li className="flex items-center justify-between">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-3 text-green-400" />
                    <span>Taxation Directorate Registration Form</span>
                  </div>
                  <Badge className="bg-blue-500/30">REGISTRATION REQUEST</Badge>
                </li>
                <li className="flex items-center justify-between">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-3 text-green-400" />
                    <span>Rental Agreement</span>
                  </div>
                </li>
                <li className="flex items-center justify-between">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-3 text-green-400" />
                    <span>Agreement between Partners</span>
                  </div>
                </li>
                <li className="flex items-center justify-between">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-3 text-green-400" />
                    <span>Company Statute</span>
                  </div>
                </li>
                <li className="flex items-center justify-between">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-3 text-green-400" />
                    <span>Decision</span>
                  </div>
                </li>
              </ul>
              <Button 
                className="bg-white text-blue-600 hover:bg-gray-100 w-full"
                onClick={() => setShowDownloadAlert(true)}
              >
                <Download className="w-4 h-4 mr-2" />
                Download Legal Documents Package
              </Button>
            </div>
          </div>

          {/* Pro Tip Section */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border-l-4 border-l-yellow-500 max-w-3xl mx-auto">
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
              <div className="flex flex-col gap-8 max-w-2xl mx-auto">
                <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 text-white hover:shadow-2xl transition-all duration-300 group">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Download className="w-8 h-8 text-white group-hover:scale-110 transition-transform" />
                  </div>
                  <h4 className="text-2xl font-bold text-center mb-3">Guideline</h4>
                  <p className="text-white/80 text-center mb-6">
                    Professional pitch deck guideline designed for startup success
                  </p>
                  <Button 
                    size="lg" 
                    className="w-full bg-white text-blue-600 hover:bg-gray-100 font-semibold"
                    onClick={() => {
                      const link = document.createElement('a');
                      link.href = '/templates/Presentation - Professional Pitch Deck Templates for Investors.pptx';
                      link.download = 'Presentation - Professional Pitch Deck Templates for Investors.pptx';
                      document.body.appendChild(link);
                      link.click();
                      document.body.removeChild(link);
                    }}
                  >
                    <Download className="w-5 h-5 mr-2" />
                    Download Guidelines
                  </Button>
                </div>

                <div className="bg-gradient-to-br from-emerald-600 to-blue-600 rounded-2xl p-8 text-white hover:shadow-2xl transition-all duration-300 group">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Users className="w-8 h-8 text-white group-hover:scale-110 transition-transform" />
                  </div>
                  <h4 className="text-2xl font-bold text-center mb-3">Practice Sessions</h4>
                  <p className="text-white/80 text-center mb-6">
                    Join monthly pitch practice sessions with expert feedback
                  </p>
                  <Button 
                    size="lg" 
                    className="w-full bg-white text-emerald-600 hover:bg-gray-100 font-semibold"
                    onClick={() => window.location.href = 'https://protik.org/trainings'}
                  >
                    <Users className="w-5 h-5 mr-2" />
                    Join Next Session
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
              <FileText className="w-5 h-5 mr-2" />
              <span className="font-semibold">SUCCESS STORIES</span>
            </div>
            <h2 className="text-4xl font-bold mb-4">Learn from Our Startup Heroes</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Watch exclusive interviews with founders who transformed their ideas into thriving businesses in Albania's tech ecosystem.
            </p>
          </div>
          <div className="relative max-w-5xl mx-auto">
            {/* Carousel with looping and bullet navigation */}
            {(() => {
              const slides = [
                {
                  badge: <Badge className="bg-blue-100 text-blue-800 mb-4">FEATURED STORY</Badge>,
                  title: "Patoko, The Everything App",
                  desc: "Follow the inspiring journey of Patoko as it evolved from a local idea into a leading platform, streamlining property rentals across Albania and setting its sights on regional growth.",
                  stats: [
                    { value: "20K+", label: "Users", color: "text-green-400" },
                    { value: "7", label: "Citys", color: "text-purple-400" },
                  ],
                  button: { href: "/interview", text: "Read Full Interview" },
                  image: { src: "/images/patoko.png", alt: "Startup Interview", className: "object-cover" },
                  bg: "bg-gradient-to-br from-blue-600 to-purple-600",
                },
                {
                  badge: <Badge className="bg-green-100 text-green-800 mb-4">InsectIntel</Badge>,
                  title: "Intelligent Device Helping Farmers Protect Their Future",
                  desc: "InsectIntel is revolutionizing agricultural pest management with AI-powered monitoring devices, helping farmers protect their crops and improve sustainability.",
                  stats: [
                    { value: "AI", label: "Powered Solution", color: "text-green-400" },
                    { value: "Global", label: "Impact Vision", color: "text-blue-400" },
                  ],
                  button: { href: "/interview/insectintel", text: "Read Full Interview" },
                  image: { src: "/images/insectIntel.webp", alt: "InsectIntel Interview", className: "object-cover" },
                  bg: "bg-gradient-to-br from-green-600 to-blue-600",
                },
                {
                  badge: <Badge className="bg-blue-100 text-blue-800 mb-4">IntraSync</Badge>,
                  title: "IntraSync: Modern Employee Management",
                  desc: "IntraSync unifies access, scheduling, and coordination for modern teams—making daily work simpler, smarter, and more transparent for SMEs and startups.",
                  stats: [
                    { value: "SMEs", label: "Target Market", color: "text-blue-600" },
                    { value: "Protik", label: "Employee Management", color: "text-purple-600" },
                  ],
                  button: { href: "/interview/intrasync", text: "Read Full Interview" },
                  image: { src: "/images/intrasync-logo-black.png", alt: "IntraSync Interview", className: "object-contain bg-white" },
                  bg: "bg-gradient-to-br from-blue-600 to-purple-600",
                },
              ];
              const [selectedIndex, setSelectedIndex] = useState(0);
              const [emblaApi, setEmblaApi] = useState<UseEmblaCarouselType[1] | null>(null);
              useEffect(() => {
                if (!emblaApi) return;
                const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
                emblaApi.on("select", onSelect);
                onSelect();
                return () => { if (emblaApi) emblaApi.off("select", onSelect); };
              }, [emblaApi]);
              return (
                <Carousel opts={{ loop: true }} setApi={setEmblaApi}>
                  <CarouselPrevious />
                  <CarouselNext />
                  <CarouselContent>
                    {slides.map((slide, idx) => (
                      <CarouselItem key={idx}>
                        <div className="grid lg:grid-cols-2 gap-8 items-center bg-white/80 rounded-3xl shadow-xl p-8 mb-12">
                          <div>
                            {slide.badge}
                            <h3 className="text-3xl font-bold mb-4">{slide.title}</h3>
                            <p className="text-gray-700 mb-6 text-lg">{slide.desc}</p>
                            <div className="flex items-center space-x-8 mb-6">
                              {slide.stats.map((stat, i) => (
                                <div className="text-center" key={i}>
                                  <div className={`text-2xl font-bold ${stat.color}`}>{stat.value}</div>
                                  <div className="text-gray-700 text-sm">{stat.label}</div>
                                </div>
                              ))}
                            </div>
                            <Button 
                              size="lg" 
                              className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-6 text-xl font-semibold w-full"
                              onClick={() => window.location.href = slide.button.href}
                            >
                              <FileText className="w-6 h-6 mr-3" />
                              {slide.button.text}
                            </Button>
                          </div>
                          <div className="relative">
                            <div className={`aspect-video ${slide.bg} rounded-2xl flex items-center justify-center relative overflow-hidden`}>
                              <div className="absolute inset-0 bg-black/20"></div>
                              <img
                                src={slide.image.src}
                                alt={slide.image.alt}
                                className={`absolute inset-0 w-full h-full ${slide.image.className}`}
                              />
                            </div>
                            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-20"></div>
                          </div>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  {/* Bullet navigation */}
                  <div className="flex justify-center mt-4 mb-8 space-x-2">
                    {slides.map((_, idx) => (
                      <button
                        key={idx}
                        className={`inline-block w-3 h-3 rounded-full transition-colors ${selectedIndex === idx ? 'bg-blue-600' : 'bg-gray-300'}`}
                        onClick={() => emblaApi && emblaApi.scrollTo(idx)}
                        aria-label={`Go to slide ${idx + 1}`}
                      />
                    ))}
                  </div>
                </Carousel>
              );
            })()}
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
                <Button 
                  className="bg-yellow-500 text-gray-900 hover:bg-yellow-400"
                  onClick={() => window.open('https://protik.org/', '_blank')}
                >
                  Apply for Interview
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
                <div className="text-3xl font-bold">10+</div>
                <div className="text-white/80">Startups Launched</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">€100K+</div>
                <div className="text-white/80">Funding Raised</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">85%</div>
                <div className="text-white/80">Success Rate</div>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100 hover:text-blue-800 px-8 py-4 text-lg font-semibold"
                onClick={() => window.location.href = 'https://protik.org/for-startups'}
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

      {/* Modal for Registration */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md relative">
            <button onClick={() => setShowModal(false)} className="absolute top-3 right-3 text-gray-400 hover:text-gray-700 text-2xl font-bold">&times;</button>
            <h2 className="text-2xl font-bold mb-4 text-blue-700">Start Your Founder Journey</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input type="text" className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Your Name" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input type="email" className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="you@email.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Your Startup Idea</label>
                <textarea className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Describe your idea..." rows={3}></textarea>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Startup needs</label>
                <textarea className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Your message..." rows={3}></textarea>
              </div>
              <button type="button" className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition">Submit</button>
            </form>
          </div>
        </div>
      )}

      {/* Alert Dialog for Legal Documents Download */}
      <AlertDialog open={showDownloadAlert} onOpenChange={setShowDownloadAlert}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Legal Document Package Download</AlertDialogTitle>
            <AlertDialogDescription>
              Most of the legal documents in this package require legal assistance from a notary.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleDownloadDocuments}>
              Confirm Download
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}
