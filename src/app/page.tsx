import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      {/* Hero Section */}
      <section className="flex-1">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="flex flex-col items-start md:flex-row md:justify-between md:gap-16">
            <div className="md:w-1/2 space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-6xl lg:text-7xl">
                  Hi, I'm Tarandeep Singh
                </h1>
                <h2 className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-2xl font-semibold text-transparent md:text-3xl">
                  Full Stack Developer & ML Engineer
                </h2>
                <p className="text-lg text-muted-foreground max-w-[600px]">
                  I build exceptional digital experiences that combine cutting-edge technology 
                  with elegant design. Specializing in full-stack development, machine learning, 
                  and cloud solutions.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/projects"
                  className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-3 text-base font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  View My Work
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-lg border border-input bg-background px-8 py-3 text-base font-medium text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                >
                  Contact Me
                </a>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-6">
                <a
                  href="https://github.com/tarandeep2210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <span className="sr-only">GitHub</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
                <a
                  href="https://linkedin.com/in/tarandeep-singh-2210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Technologies Section */}
            <div className="mt-16 md:mt-0 md:w-1/2">
              <h3 className="mb-8 text-2xl font-semibold text-foreground">
                Technologies I Work With
              </h3>
              <div className="grid grid-cols-2 gap-4 md:grid-cols-2 lg:grid-cols-3">
                {technologies.map((tech) => (
                  <div
                    key={tech}
                    className="rounded-lg bg-card p-4 text-center shadow-sm ring-1 ring-border/5 transition-colors hover:bg-accent hover:text-accent-foreground"
                  >
                    <span className="text-sm font-medium">{tech}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/10">
        <div className="container mx-auto px-4 py-6">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Tarandeep Singh. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

const technologies = [
  "Next.js & React",
  "Python & FastAPI",
  "Machine Learning",
  "Cloud Services",
  "TypeScript",
  "Node.js",
];
