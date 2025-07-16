import { Terminal, Play, Download, HelpCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CodeBlock } from '@/components/CodeBlock';
import { Badge } from '@/components/ui/badge';

export default function CliCommands() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">CLI Commands</h1>
        <p className="text-xl text-muted-foreground">
          Complete reference for all faker-api command-line interface commands and options.
        </p>
      </div>

      {/* Global Usage */}
      <div className="space-y-6">
        <h2 className="text-3xl font-bold tracking-tight">Global Usage</h2>
        <CodeBlock title="Basic Syntax">
{`node bin/faker-api.js <command> [options]`}
        </CodeBlock>
        <p className="text-muted-foreground">
          All commands are run from the faker-api project directory using Node.js.
        </p>
      </div>

      {/* Start Command */}
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Play className="h-5 w-5 text-primary" />
              <span>start</span>
              <Badge variant="secondary">Primary Command</Badge>
            </CardTitle>
            <CardDescription>
              Start the mock API server with the specified configuration
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Basic Usage</h4>
              <CodeBlock>
{`node bin/faker-api.js start`}
              </CodeBlock>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Options</h4>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-2">Option</th>
                      <th className="text-left p-2">Alias</th>
                      <th className="text-left p-2">Description</th>
                      <th className="text-left p-2">Default</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="p-2"><code>--config</code></td>
                      <td className="p-2"><code>-c</code></td>
                      <td className="p-2">Path to JSON config file</td>
                      <td className="p-2"><code>mock/example.json</code></td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2"><code>--port</code></td>
                      <td className="p-2"><code>-p</code></td>
                      <td className="p-2">Port to run the server on</td>
                      <td className="p-2"><code>3000</code></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Examples</h4>
              <div className="space-y-2">
                <CodeBlock title="Default configuration">
{`node bin/faker-api.js start`}
                </CodeBlock>
                <CodeBlock title="Custom configuration and port">
{`node bin/faker-api.js start -c my-config.json -p 4000`}
                </CodeBlock>
                <CodeBlock title="Using long option names">
{`node bin/faker-api.js start --config ./configs/api.json --port 8080`}
                </CodeBlock>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Export Command */}
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Download className="h-5 w-5 text-primary" />
              <span>export</span>
              <Badge variant="outline">Data Export</Badge>
            </CardTitle>
            <CardDescription>
              Export fake data directly to a JSON file without starting the server
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Basic Usage</h4>
              <CodeBlock>
{`node bin/faker-api.js export --route <route> --out <file>`}
              </CodeBlock>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Required Options</h4>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-2">Option</th>
                      <th className="text-left p-2">Description</th>
                      <th className="text-left p-2">Example</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="p-2"><code>--route</code></td>
                      <td className="p-2">Route path name (without leading slash)</td>
                      <td className="p-2"><code>users</code></td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2"><code>--out</code></td>
                      <td className="p-2">Output file path</td>
                      <td className="p-2"><code>./data/users.json</code></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Optional Parameters</h4>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-2">Option</th>
                      <th className="text-left p-2">Description</th>
                      <th className="text-left p-2">Default</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="p-2"><code>--count</code></td>
                      <td className="p-2">Number of items to export</td>
                      <td className="p-2"><code>1</code></td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2"><code>--config</code></td>
                      <td className="p-2">Path to config file</td>
                      <td className="p-2"><code>mock/example.json</code></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Examples</h4>
              <div className="space-y-2">
                <CodeBlock title="Export 10 users">
{`node bin/faker-api.js export --route users --count 10 --out ./data/users.json`}
                </CodeBlock>
                <CodeBlock title="Export single profile">
{`node bin/faker-api.js export --route profile --out ./temp/profile.json`}
                </CodeBlock>
                <CodeBlock title="Custom config file">
{`node bin/faker-api.js export --route products --count 50 --out ./exports/products.json --config ./configs/ecommerce.json`}
                </CodeBlock>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Help Command */}
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <HelpCircle className="h-5 w-5 text-primary" />
              <span>--help</span>
              <Badge variant="outline">Information</Badge>
            </CardTitle>
            <CardDescription>
              Display help information for commands and options
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Usage</h4>
              <div className="space-y-2">
                <CodeBlock title="Global help">
{`node bin/faker-api.js --help`}
                </CodeBlock>
                <CodeBlock title="Command-specific help">
{`node bin/faker-api.js start --help
node bin/faker-api.js export --help`}
                </CodeBlock>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Common Patterns */}
      <div className="space-y-6">
        <h2 className="text-3xl font-bold tracking-tight">Common Usage Patterns</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Development Workflow</CardTitle>
              <CardDescription>
                Typical commands during development
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <CodeBlock>
{`# Start development server
node bin/faker-api.js start

# Test with custom port
node bin/faker-api.js start -p 4000

# Generate test data
node bin/faker-api.js export --route users --count 100 --out testdata.json`}
              </CodeBlock>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Production Testing</CardTitle>
              <CardDescription>
                Commands for testing scenarios
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <CodeBlock>
{`# Test specific configuration
node bin/faker-api.js start -c production-mock.json

# Generate large datasets
node bin/faker-api.js export --route products --count 1000 --out large-dataset.json

# Test on specific port
node bin/faker-api.js start -p 8080`}
              </CodeBlock>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Exit Codes */}
      <div className="space-y-6">
        <h2 className="text-3xl font-bold tracking-tight">Exit Codes</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b">
                <th className="text-left p-2">Code</th>
                <th className="text-left p-2">Description</th>
                <th className="text-left p-2">Common Causes</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-2"><code>0</code></td>
                <td className="p-2">Success</td>
                <td className="p-2">Command completed successfully</td>
              </tr>
              <tr className="border-b">
                <td className="p-2"><code>1</code></td>
                <td className="p-2">General error</td>
                <td className="p-2">Invalid arguments, file not found</td>
              </tr>
              <tr className="border-b">
                <td className="p-2"><code>2</code></td>
                <td className="p-2">Configuration error</td>
                <td className="p-2">Invalid JSON, missing schema file</td>
              </tr>
              <tr className="border-b">
                <td className="p-2"><code>3</code></td>
                <td className="p-2">Network error</td>
                <td className="p-2">Port already in use, permission denied</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}