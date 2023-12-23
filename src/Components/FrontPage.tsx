/**
 * v0 by Vercel.
 * @see https://v0.dev/t/tx0wra9YfKq
 */
import '../index.css'

export default function FrontPage() {
  return (
    <>
      <header className="flex justify-between items-center px-6 py-4 bg-white dark:bg-black">
        <h1 className="text-4xl font-bold">ChatApp</h1>
        <div className="flex gap-4">
          <button className="text-black dark:text-white">
            Login
          </button>
          <button className="text-white bg-black">Register</button>
        </div>
      </header>
      <main className="bg-gray-100 dark:bg-gray-900 py-12">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center">
            <div className="w-1/2">
              <h2 className="text-5xl font-bold mb-8">Welcome to ChatApp</h2>
              <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
                Connect with friends and family. Share your moments.
              </p>
              <div className="flex gap-4">
                <button className="text-black dark:text-white">
                  Learn More
                </button>
                <button className="text-white bg-black">Get Started</button>
              </div>
            </div>
            <div className="w-1/2">
              <img
                alt="Chat Illustration"
                className="h-[400px] w-[400px] object-cover"
                height="400"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "400/400",
                  objectFit: "cover",
                }}
                width="400"
              />
            </div>
          </div>
        </div>
      </main>
      <footer className="px-6 py-4 bg-white dark:bg-black">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">ChatApp</h1>
          <div className="flex gap-4">
            <a className="text-black dark:text-white" href="#">
              Terms
            </a>
            <a className="text-black dark:text-white" href="#">
              Privacy
            </a>
            <a className="text-black dark:text-white" href="#">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </>
  )
}


