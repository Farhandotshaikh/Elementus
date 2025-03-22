import React from "react"

export default function Installation() {
  return (
    <div className="max-w-3/4 ml-6 mr-2 sm:mx-8 pt-6">
      <h1 className="text-4xl sm:mt-6 inter-var mb-6">Installation</h1>

      <div className="space-y-6">
        <section>
          <h2 className="E- inter-var-s E- mb-4">Elementus works by scans all of your HTML files, JavaScript components, and any other templates for class names, generating the corresponding styles and then writing them to a static CSS file.
          It's fast, flexible, and reliable — with zero-runtime.</h2>
          
        </section>

        <section>
          <h1 className="text-2xl inter-var sm:mt-3 mb-4">Importing CDN Link</h1>
          <h2 className="text-lg inter-var-s mb-4">
          The simplest way to use, No need learn anything just copy the CDN Link and Paste it in your HTML File inside the {'<head> </head>'} tag and it is ready to use.
          </h2>

          <div className="bg-black text-purple-300 rounded-lg p-4 overflow-x-auto">
            <code className="text-sm">{'<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/Farhandotshaikh/ElementusLabs@main/assets/css/Elementus.min.css">'}</code>
          </div>
        </section>
      </div>
    </div>
  )
}

