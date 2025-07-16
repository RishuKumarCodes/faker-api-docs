import { Download, GitBranch, Package } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CodeBlock } from "@/components/CodeBlock";
import { Alert, AlertDescription } from "@/components/ui/alert";

export default function Installation() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Installation</h1>
        <p className="text-xl text-muted-foreground">
          Get faker-api up and running in your development environment.
        </p>
      </div>

      {/* Prerequisites */}
      <div className="space-y-6">
        <h2 className="text-3xl font-bold tracking-tight">Prerequisites</h2>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Package className="h-5 w-5 text-primary" />
              <span>Node.js & npm</span>
            </CardTitle>
            <CardDescription>
              faker-api requires Node.js and npm to be installed on your system
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">
              You'll need Node.js version 14 or higher. We recommend installing
              Node.js using nvm (Node Version Manager).
            </p>
            <CodeBlock title="Install Node.js with nvm">
              {`# Install nvm (Linux/macOS)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

# Install latest Node.js
nvm install node
nvm use node

# Verify installation
node --version
npm --version`}
            </CodeBlock>
          </CardContent>
        </Card>
      </div>

      {/* Installation Methods */}
      <div className="space-y-6">
        <h2 className="text-3xl font-bold tracking-tight">
          Installation Methods
        </h2>

        {/* Git Clone Method */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <GitBranch className="h-5 w-5 text-primary" />
              <span>Git Clone (Recommended)</span>
            </CardTitle>
            <CardDescription>
              Clone the repository and install dependencies
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <CodeBlock title="Clone and Install">
              {`# Clone the repository
git clone https://github.com/amandollar/faker-api.git

# Navigate to the project directory
cd faker-api

# Install dependencies
npm install`}
            </CodeBlock>
            <Alert>
              <AlertDescription>
                Replace <code>yourname</code> with the actual GitHub username
                where the repository is hosted.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* NPM Package Method */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Download className="h-5 w-5 text-primary" />
              <span>NPM Package (Coming Soon)</span>
            </CardTitle>
            <CardDescription>
              Install globally via npm (feature in development)
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <CodeBlock title="Global Installation">
              {`# This feature is coming soon
npm install -g faker-api

# Once installed, you'll be able to use
faker-api start`}
            </CodeBlock>
            <Alert>
              <AlertDescription>
                Global npm installation is not yet available. Use the Git clone
                method for now.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>
      </div>

      {/* Verification */}
      <div className="space-y-6">
        <h2 className="text-3xl font-bold tracking-tight">
          Verify Installation
        </h2>
        <p className="text-muted-foreground">
          After installation, verify that faker-api is working correctly:
        </p>

        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">1. Check the CLI</h3>
            <CodeBlock language="bash">
              {`# From the faker-api directory
node bin/faker-api.js --help`}
            </CodeBlock>
            <p className="text-sm text-muted-foreground mt-2">
              This should display the help message with available commands.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">
              2. Start the default server
            </h3>
            <CodeBlock language="bash">
              {`# Start with default configuration
node bin/faker-api.js start`}
            </CodeBlock>
            <p className="text-sm text-muted-foreground mt-2">
              The server should start on port 3000 and display a success
              message.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">3. Test an endpoint</h3>
            <CodeBlock language="bash">
              {`# In another terminal, test the API
curl http://localhost:3000/users`}
            </CodeBlock>
            <p className="text-sm text-muted-foreground mt-2">
              You should receive a JSON response with fake user data.
            </p>
          </div>
        </div>
      </div>

      {/* Troubleshooting */}
      <div className="space-y-6">
        <h2 className="text-3xl font-bold tracking-tight">Troubleshooting</h2>

        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Port Already in Use</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-2">
                If port 3000 is already in use, specify a different port:
              </p>
              <CodeBlock>{`node bin/faker-api.js start -p 4000`}</CodeBlock>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Permission Errors</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-2">
                On some systems, you might need to use sudo or adjust
                permissions:
              </p>
              <CodeBlock>
                {`# Check Node.js permissions
ls -la $(which node)

# If needed, reinstall Node.js with proper permissions
# Or use a Node version manager like nvm`}
              </CodeBlock>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Windows Git Bash Issues</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-2">
                faker-api includes normalization for Windows/Git Bash
                compatibility:
              </p>
              <CodeBlock>
                {`# Use forward slashes in paths
node bin/faker-api.js start -c mock/example.json`}
              </CodeBlock>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Next Steps */}
      <div className="space-y-6">
        <h2 className="text-3xl font-bold tracking-tight">Next Steps</h2>
        <p className="text-muted-foreground">
          Now that you have faker-api installed, you can:
        </p>
        <ul className="space-y-2 text-muted-foreground">
          <li>
            •{" "}
            <a href="/quick-start" className="text-primary hover:underline">
              Follow the Quick Start guide
            </a>
          </li>
          <li>
            •{" "}
            <a href="/configuration" className="text-primary hover:underline">
              Learn about configuration options
            </a>
          </li>
          <li>
            •{" "}
            <a href="/examples" className="text-primary hover:underline">
              Explore example configurations
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
