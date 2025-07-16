import { Terminal, Zap, Shield, Code } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CodeBlock } from '@/components/CodeBlock';

export default function Introduction() {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="space-y-4">
        <div className="flex items-center space-x-2">
          <Terminal className="h-8 w-8 text-primary" />
          <h1 className="text-4xl font-bold tracking-tight">faker-api</h1>
        </div>
        <p className="text-xl text-muted-foreground max-w-3xl">
          A lightweight CLI tool that allows frontend developers to run a local, customizable mock API server 
          based on JSON config files and Faker-powered schema files. Perfect for building UIs without waiting 
          for backend APIs to be ready.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <Button size="lg" asChild>
            <a href="/installation">Get Started</a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href="https://github.com/amandollar/faker-api" target="_blank" rel="noopener noreferrer">
              View on GitHub
            </a>
          </Button>
        </div>
      </div>

      {/* Features */}
      <div className="space-y-6">
        <h2 className="text-3xl font-bold tracking-tight">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Zap className="h-5 w-5 text-primary" />
                <span>CLI-Powered</span>
              </CardTitle>
              <CardDescription>
                Simple command-line interface to start mock servers instantly
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Start server with a single command</li>
                <li>• Export fake data to JSON files</li>
                <li>• Configurable port and settings</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Code className="h-5 w-5 text-primary" />
                <span>Schema-Based</span>
              </CardTitle>
              <CardDescription>
                Dynamic response generation using @faker-js/faker
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Faker.js integration for realistic data</li>
                <li>• Custom schema files in JavaScript</li>
                <li>• Inline $faker templating</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Shield className="h-5 w-5 text-primary" />
                <span>Cross-Platform</span>
              </CardTitle>
              <CardDescription>
                Works on Windows, macOS, and Linux
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Unix (Linux/macOS) support</li>
                <li>• Windows (PowerShell, CMD)</li>
                <li>• Git Bash compatibility</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Terminal className="h-5 w-5 text-primary" />
                <span>Flexible Configuration</span>
              </CardTitle>
              <CardDescription>
                JSON-based route configuration with delay simulation
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• REST API endpoints (GET, POST, etc.)</li>
                <li>• Response delay simulation</li>
                <li>• Query parameter support</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Quick Example */}
      <div className="space-y-6">
        <h2 className="text-3xl font-bold tracking-tight">Quick Example</h2>
        <p className="text-muted-foreground">
          Get started with faker-api in minutes. Here's a simple example to create a mock user API:
        </p>
        
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">1. Start the server</h3>
            <CodeBlock language="bash">
{`node bin/faker-api.js start`}
            </CodeBlock>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">2. Access your mock API</h3>
            <CodeBlock language="bash">
{`curl http://localhost:3000/users`}
            </CodeBlock>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">3. Get realistic fake data</h3>
            <CodeBlock language="json">
{`[
  {
    "id": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
    "name": "John Doe",
    "email": "john.doe@example.com",
    "avatar": "https://avatars.example.com/john"
  }
]`}
            </CodeBlock>
          </div>
        </div>
      </div>

      {/* Project Structure */}
      <div className="space-y-6">
        <h2 className="text-3xl font-bold tracking-tight">Project Structure</h2>
        <CodeBlock title="Directory Layout">
{`faker-api/
├── bin/
│   └── faker-api.js         # CLI entry point
├── src/
│   ├── server.js            # Express server logic
│   ├── routeBuilder.js      # Route generation from config
│   └── configParser.js      # Config loader
├── schemas/
│   └── user.js              # Schema file using @faker-js/faker
├── mock/
│   └── example.json         # Config defining API routes
├── package.json
└── README.md`}
        </CodeBlock>
      </div>
    </div>
  );
}