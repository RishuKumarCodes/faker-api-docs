import { Play, FileText, Server, Zap } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CodeBlock } from '@/components/CodeBlock';
import { Alert, AlertDescription } from '@/components/ui/alert';

export default function QuickStart() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Quick Start</h1>
        <p className="text-xl text-muted-foreground">
          Get your first mock API server running in under 5 minutes.
        </p>
      </div>

      {/* Step-by-step guide */}
      <div className="space-y-8">
        {/* Step 1 */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-semibold">1</span>
              <span>Start the Server</span>
            </CardTitle>
            <CardDescription>
              Launch faker-api with the default configuration
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <CodeBlock title="Terminal">
{`node bin/faker-api.js start`}
            </CodeBlock>
            <p className="text-sm text-muted-foreground">
              This starts a mock API server on <code>http://localhost:3000</code> using the default configuration 
              in <code>mock/example.json</code>.
            </p>
            <Alert>
              <Server className="h-4 w-4" />
              <AlertDescription>
                You should see a message like "Mock API server running on port 3000"
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* Step 2 */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-semibold">2</span>
              <span>Test Your First Endpoint</span>
            </CardTitle>
            <CardDescription>
              Make a request to see fake data in action
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold mb-2">Using curl</h4>
                <CodeBlock language="bash">
{`curl http://localhost:3000/users`}
                </CodeBlock>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Using fetch</h4>
                <CodeBlock language="javascript">
{`fetch('http://localhost:3000/users')
  .then(res => res.json())
  .then(data => console.log(data))`}
                </CodeBlock>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Expected Response</h4>
              <CodeBlock language="json">
{`[
  {
    "id": "f47ac10b-58cc-4372-a567-0e02b2c3d479",
    "name": "Jane Smith",
    "email": "jane.smith@example.com",
    "avatar": "https://avatars.example.com/jane"
  },
  // ... 4 more user objects
]`}
              </CodeBlock>
            </div>
          </CardContent>
        </Card>

        {/* Step 3 */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-semibold">3</span>
              <span>Explore Available Endpoints</span>
            </CardTitle>
            <CardDescription>
              The default configuration includes several endpoints to test
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <h4 className="font-semibold">GET /users</h4>
                <p className="text-sm text-muted-foreground">Returns an array of fake users</p>
                <CodeBlock language="bash">
{`curl http://localhost:3000/users?count=10`}
                </CodeBlock>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold">GET /hello</h4>
                <p className="text-sm text-muted-foreground">Simple static response</p>
                <CodeBlock language="bash">
{`curl http://localhost:3000/hello`}
                </CodeBlock>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold">GET /profile</h4>
                <p className="text-sm text-muted-foreground">Dynamic profile with inline faker</p>
                <CodeBlock language="bash">
{`curl http://localhost:3000/profile`}
                </CodeBlock>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Step 4 */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-semibold">4</span>
              <span>Customize Your Configuration</span>
            </CardTitle>
            <CardDescription>
              Modify the mock/example.json file to add your own endpoints
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <CodeBlock title="mock/example.json">
{`{
  "routes": [
    {
      "method": "GET",
      "path": "/users",
      "schema": "user",
      "count": 5,
      "delay": 1000
    },
    {
      "method": "GET",
      "path": "/products",
      "response": {
        "id": "$faker.string.uuid()",
        "name": "$faker.commerce.productName()",
        "price": "$faker.commerce.price()",
        "category": "$faker.commerce.department()"
      }
    }
  ]
}`}
            </CodeBlock>
            <p className="text-sm text-muted-foreground">
              Add a new endpoint by adding another route object to the routes array.
            </p>
          </CardContent>
        </Card>

        {/* Step 5 */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-semibold">5</span>
              <span>Create Custom Schemas</span>
            </CardTitle>
            <CardDescription>
              Build reusable schema files for complex data structures
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <CodeBlock title="schemas/product.js">
{`import { faker } from '@faker-js/faker';

export default () => ({
  id: faker.string.uuid(),
  name: faker.commerce.productName(),
  description: faker.commerce.productDescription(),
  price: parseFloat(faker.commerce.price()),
  category: faker.commerce.department(),
  inStock: faker.datatype.boolean(),
  rating: faker.number.float({ min: 1, max: 5, precision: 0.1 }),
  images: Array.from({ length: 3 }, () => faker.image.url()),
  createdAt: faker.date.past(),
  updatedAt: faker.date.recent()
});`}
            </CodeBlock>
            <p className="text-sm text-muted-foreground">
              Reference this schema in your configuration with <code>"schema": "product"</code>.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Common Use Cases */}
      <div className="space-y-6">
        <h2 className="text-3xl font-bold tracking-tight">Common Use Cases</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Play className="h-5 w-5 text-primary" />
                <span>Frontend Development</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Build UI components before backend is ready</li>
                <li>• Test different data scenarios</li>
                <li>• Demo applications with realistic data</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <FileText className="h-5 w-5 text-primary" />
                <span>API Testing</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Simulate API responses for testing</li>
                <li>• Test error scenarios and edge cases</li>
                <li>• Performance testing with delays</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Zap className="h-5 w-5 text-primary" />
                <span>Rapid Prototyping</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Quick mockups with realistic data</li>
                <li>• Client demonstrations</li>
                <li>• Proof of concept development</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Server className="h-5 w-5 text-primary" />
                <span>Data Export</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Generate test datasets</li>
                <li>• Seed databases for development</li>
                <li>• Create sample data files</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Next Steps */}
      <div className="space-y-6">
        <h2 className="text-3xl font-bold tracking-tight">What's Next?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="cursor-pointer hover:shadow-md transition-shadow">
            <CardHeader>
              <CardTitle className="text-lg">
                <a href="/cli-commands" className="hover:text-primary">
                  CLI Commands
                </a>
              </CardTitle>
              <CardDescription>
                Learn all available commands and options
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="cursor-pointer hover:shadow-md transition-shadow">
            <CardHeader>
              <CardTitle className="text-lg">
                <a href="/configuration" className="hover:text-primary">
                  Configuration
                </a>
              </CardTitle>
              <CardDescription>
                Deep dive into configuration options
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="cursor-pointer hover:shadow-md transition-shadow">
            <CardHeader>
              <CardTitle className="text-lg">
                <a href="/examples" className="hover:text-primary">
                  Examples
                </a>
              </CardTitle>
              <CardDescription>
                See real-world configuration examples
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    </div>
  );
}