'use client'

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users } from "lucide-react"

export default function Interview() {
  return (
    <div className="min-h-screen bg-white">
      {/* Call to Action Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-16 rounded-xl text-center">
        <h1 className="text-4xl font-bold text-white mb-4">Share Your Success Story</h1>
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

      {/* Interview Content */}
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Card className="p-8 shadow-lg">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-primary">1. What is Patoko and what problem does it solve?</h2>
              <p className="text-gray-700">
                Patoko is the first Albanian superapp and the first superapp in Europe, which solves the problem that users have of finding the service they want in the fastest possible way.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-primary">2. How did the idea for Patoko come about?</h2>
              <p className="text-gray-700">
                Patoko was born as a brainstorming process between the first co-founder (Patrik) and me, where we wanted to democratize services; we wanted to start with payments, but that is more difficult, so we reached the user's daily life, seeing that countries like Albania have a significant lack of digital services.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-primary">3. What have been the biggest challenges?</h2>
              <p className="text-gray-700">
                The biggest challenge is how to build a technology company with all the things needed: registration, regulatory part, finding the first customers, improving the product all the time, identifying the type of service, etc. So, when you do a regular startup it is very difficult. When you do a startup that has many, many services it is even more difficult.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-primary">4. How long did it take from idea to final product?</h2>
              <p className="text-gray-700">
                The final product Patoko is never finished, because it is constantly evolving, but if we take it with MVP (Minimum Viable Product), it took us 3 months to release the first version of the taxi, 6 months for a more curated and functional version, and then it is ongoing all the time, which means; we have done 500 iterations on taxi and in other verticals we are constantly making improvements, taking into account the security aspect, aspects of the general structure, interoperability, integration with other platforms, etc., so it is an ongoing process, but let's take 6 months as the first phase.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-primary">5. What would you do differently if starting from scratch?</h2>
              <p className="text-gray-700">
                Absolutely yes! I would like money at the beginning, to make things simpler. Money is very important, there are many things I would do differently; I would hire more staff, I would be more dedicated to marketing, etc.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-primary">6. What advice would you give to aspiring founders?</h2>
              <p className="text-gray-700">
                It's a cliché, but fail as soon as possible! So, don't fall too much in love with the idea, fall in love with the solution and the consistent way of solving it; if you reach the solution quickly, without any doubt you should jump in, but don't quit without being 100% sure that the idea will work.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-primary">7. What are your main successes so far?</h2>
              <p className="text-gray-700">
                The rapid education of the taxi market and the creation of opportunities for other startups, which have seen that a digital product can work, this is the first achievement. Capturing 1000 taxis registered in Patoko, creating other services that did not exist for the reservation part with a very high quality product. We call this a great success! And then changing the perception of the simple taxi in relation to technology. So, taking a 50-60 year old from Tirana, who had not switched to an electric car, because he saw technology as a barrier and then began to understand that in order to survive with other companies, the taxi had to change, is the greatest achievement.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-primary">8. What stage is Patoko in today?</h2>
              <p className="text-gray-700">
                Our stage is that we are in expansion; either within the team, hiring many people, or in the form of improving the overall product, which is much more advanced than it has ever been and we are in the stage where we are thinking, after this summer is over, of testing in several international markets.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-primary">9. Where is Patoko currently located?</h2>
              <p className="text-gray-700">
                Currently, Patoko has a taxi service in 7 cities and is mostly in Tirana and Durrës with other services.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-primary">10. What advice do you have for someone with a business idea?</h2>
              <p className="text-gray-700">
                I would tell them to put the idea on the market as soon as possible and see if it works or not. The market will take care of the rest.
              </p>
            </div>
          </div>
        </Card>
      </div>

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