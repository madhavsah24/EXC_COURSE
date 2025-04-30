import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function ModernLayout() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-indigo-600 text-white py-16 md:py-24">
        <div className="container flex flex-col items-center justify-center space-y-4 text-center">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
            Design Better Interfaces
          </h1>
          <p className="mx-auto max-w-[700px] text-white/80 md:text-xl">
            Build fast, beautiful, and accessible UIs effortlessly
          </p>
          <Button className="mt-6 bg-white text-indigo-600 hover:bg-white/90">Get Started</Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((feature, idx) => (
              <Card key={idx} className="border shadow-sm">
                <CardHeader>
                  <CardTitle>{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-2xl font-bold mb-8 text-center">What Developers Say</h2>
          <div className="space-y-4 max-w-3xl mx-auto">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="flex items-start space-x-2 p-4">
                <p className="flex-1">{testimonial.quote}</p>
                <span className="text-gray-400">-</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 bg-gray-100">
        <div className="container">
          <div className="text-center text-sm text-gray-500">
            <p>© 2023 Modern UI Workshop. All rights reserved.</p>
            <div className="flex justify-center space-x-4 mt-2">
              <a href="#" className="hover:underline">
                About
              </a>
              <a href="#" className="hover:underline">
                Contact
              </a>
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

const features = [
  {
    title: "Responsive Design",
    description: "Learn how to implement responsive design using TailwindCSS and ShadCN UI tools.",
  },
  {
    title: "Reusable Components",
    description: "Learn how to implement reusable components using TailwindCSS and ShadCN UI tools.",
  },
  {
    title: "Easy Customization",
    description: "Learn how to implement easy customization using TailwindCSS and ShadCN UI tools.",
  },
]

const testimonials = [
  {
    quote: "The most practical UI workshop I've attended!",
  },
  {
    quote: "TailwindCSS and ShadCN are a game changer!",
  },
  {
    quote: "This workshop showed me how to build interfaces that not only look great but also scale well.",
  },
]
