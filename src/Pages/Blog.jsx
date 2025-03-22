import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import logo from '../assets/logo1.png'

const Timeline = () => {
  const [commits, setCommits] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchCommits = async () => {
      try {
        const response = await fetch("https://api.github.com/repos/Farhandotshaikh/ElementusLabs/commits?per_page=10")
        if (!response.ok) {
          throw new Error("Failed to fetch commits")
        }
        const data = await response.json()
        setCommits(data)
        setLoading(false)
      } catch (err) {
        setError(err.message)
        setLoading(false)
      }
    }

    fetchCommits()
  }, [])

  if (loading) return <div className="text-center">Loading...</div>
  if (error) return <div className="text-center text-red-500">Error: {error}</div>

  return (
    <div className="relative flex justify-center">
      {/* Vertical Timeline Line */}
      <div className="absolute left-0 top-0 bottom-0 w-[8px] bg-black/50" />

      {/* Timeline Entries */}
      <div className="space-y-16 ">
        {commits.map((commit, index) => (
          <div key={index} className="relative pl-8">
            {/* Timeline Dot */}
            <div className="absolute left-[-4px] top-2 w-4 h-4 rounded-full bg-black" />

            <div className="space-y-2 m-6 p-2 shadow-md hover:shadow-none shadow-black rounded-lg">
              <time className="text-black text-xl">{new Date(commit.commit.author.date).toLocaleDateString()}</time>
              <h2 className="text-2xl font-medium text-black">
                {commit.commit.message.split("\n")[0]}
              </h2>
              <p className="text-lg text-black/70">
                {commit.commit.message.split("\n").slice(1).join("\n")}
              </p>

              <a
                href={commit.html_url}
                className="inline-block text-black hover:opacity-80"
                target="_blank"
                rel="noopener noreferrer"
              >
                View commit &gt;
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Blog() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-400 from-30% via-blue-600 via-70% to-cyan-400 to-80% backdrop-blur-lg">
      {/* Header */}
      <header className="sticky top-0 bg-white/10 backdrop-blur-md border-b border-white/20 z-50 flex items-center flex-wrap justify-center sm:justify-between px-6 py-4">
        <div className="flex justify-start items-center gap-3 mx-3">
          <Link to="/">
            <img src={logo} alt="Elementus Logo" className="w-8 h-10 md:w-10 md:h-14" />
          </Link>
         
          <div className="text-3xl font-semibold">Elementus</div>
        </div>
        <nav className="flex justify-end items-center gap-3">
          <Link to="/Docs" className="hover:text-black/80 text-lg mx-2">
            Docs
          </Link>
          <a href="https://elementusui.netlify.app" target="_blank" className="hover:text-black/80 text-lg mx-2">
            Components
          </a>
          <hr className="border-l-2 border-white/60 h-8 mx-2" />
          <a
            href="https://github.com/Farhandotshaikh/Elementus"
            className="sm:mx-2 transition-colors duration-300 text-gray-300 hover:text-blue-400"
            aria-label="Github"
          >
            <svg
              className="w-10 h-10 my-2 fill-black"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12.026 2C7.13295 1.99937 2.96183 5.54799 2.17842 10.3779C1.395 15.2079 4.23061 19.893 8.87302 21.439C9.37302 21.529 9.55202 21.222 9.55202 20.958C9.55202 20.721 9.54402 20.093 9.54102 19.258C6.76602 19.858 6.18002 17.92 6.18002 17.92C5.99733 17.317 5.60459 16.7993 5.07302 16.461C4.17302 15.842 5.14202 15.856 5.14202 15.856C5.78269 15.9438 6.34657 16.3235 6.66902 16.884C6.94195 17.3803 7.40177 17.747 7.94632 17.9026C8.49087 18.0583 9.07503 17.99 9.56902 17.713C9.61544 17.207 9.84055 16.7341 10.204 16.379C7.99002 16.128 5.66202 15.272 5.66202 11.449C5.64973 10.4602 6.01691 9.5043 6.68802 8.778C6.38437 7.91731 6.42013 6.97325 6.78802 6.138C6.78802 6.138 7.62502 5.869 9.53002 7.159C11.1639 6.71101 12.8882 6.71101 14.522 7.159C16.428 5.868 17.264 6.138 17.264 6.138C17.6336 6.97286 17.6694 7.91757 17.364 8.778C18.0376 9.50423 18.4045 10.4626 18.388 11.453C18.388 15.286 16.058 16.128 13.836 16.375C14.3153 16.8651 14.5612 17.5373 14.511 18.221C14.511 19.555 14.499 20.631 14.499 20.958C14.499 21.225 14.677 21.535 15.186 21.437C19.8265 19.8884 22.6591 15.203 21.874 10.3743C21.089 5.54565 16.9181 1.99888 12.026 2Z"></path>
            </svg>
          </a>
        </nav>
      </header>

      {/* Main Content */}
      <main className="max-w-2xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-black mb-4">Updates History</h1>
          <p className="text-xl text-black">Latest news straight from the Elementus Labs</p>
        </div>
        {/* Timeline Component */}
        <div className="mt-16 flex justify-center">
          <Timeline />
        </div>
      </main>
    </div>
  )
}

