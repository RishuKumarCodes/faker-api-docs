import { Settings, FileText, Code, Clock } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CodeBlock } from '@/components/CodeBlock';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';

export default function Configuration() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Configuration</h1>
        <p className="text-xl text-muted-foreground">
          Learn how to configure faker-api using JSON configuration files and schema definitions.
        </p>
      </div>

      {/* Config File Structure */}
      <div className="space-y-6">
        <h2 className="text-3xl font-bold tracking-tight">Configuration File Structure</h2>
        <p className="text-muted-foreground">
          The main configuration file defines your API routes and their behavior. By default, faker-api 
          looks for <code>mock/example.json</code>.
        </p>
        
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <FileText className="h-5 w-5 text-primary" />
              <span>Basic Structure</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
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
      "method": "POST",
      "path": "/users",
      "response": {
        "success": true,
        "message": "User created successfully"
      }
    }
  ]
}`}
            </CodeBlock>
          </CardContent>
        </Card>
      </div>

      {/* Route Configuration */}
      <div className="space-y-6">
        <h2 className="text-3xl font-bold tracking-tight">Route Configuration</h2>
        
        <Card>
          <CardHeader>
            <CardTitle>Route Properties</CardTitle>
            <CardDescription>
              Each route object can contain the following properties
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-2">Property</th>
                    <th className="text-left p-2">Type</th>
                    <th className="text-left p-2">Required</th>
                    <th className="text-left p-2">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-2"><code>method</code></td>
                    <td className="p-2">string</td>
                    <td className="p-2"><Badge variant="destructive">Yes</Badge></td>
                    <td className="p-2">HTTP method (GET, POST, PUT, DELETE, etc.)</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2"><code>path</code></td>
                    <td className="p-2">string</td>
                    <td className="p-2"><Badge variant="destructive">Yes</Badge></td>
                    <td className="p-2">URL path starting with /</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2"><code>schema</code></td>
                    <td className="p-2">string</td>
                    <td className="p-2"><Badge variant="secondary">No</Badge></td>
                    <td className="p-2">Name of schema file in /schemas directory</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2"><code>response</code></td>
                    <td className="p-2">object</td>
                    <td className="p-2"><Badge variant="secondary">No</Badge></td>
                    <td className="p-2">Static JSON response (can include $faker templates)</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2"><code>count</code></td>
                    <td className="p-2">number</td>
                    <td className="p-2"><Badge variant="secondary">No</Badge></td>
                    <td className="p-2">Default number of items to generate</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2"><code>delay</code></td>
                    <td className="p-2">number</td>
                    <td className="p-2"><Badge variant="secondary">No</Badge></td>
                    <td className="p-2">Response delay in milliseconds</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Schema-Based Routes */}
      <div className="space-y-6">
        <h2 className="text-3xl font-bold tracking-tight">Schema-Based Routes</h2>
        
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Code className="h-5 w-5 text-primary" />
              <span>Using Schema Files</span>
            </CardTitle>
            <CardDescription>
              Reference schema files for dynamic data generation
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Schema-based routes use JavaScript files in the <code>/schemas</code> directory to generate realistic fake data.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold mb-2">Configuration</h4>
                <CodeBlock language="json">
{`{
  "method": "GET",
  "path": "/users",
  "schema": "user",
  "count": 10,
  "delay": 500
}`}
                </CodeBlock>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Schema File</h4>
                <CodeBlock title="schemas/user.js" language="javascript">
{`import { faker } from '@faker-js/faker';

export default () => ({
  id: faker.string.uuid(),
  name: faker.person.fullName(),
  email: faker.internet.email(),
  avatar: faker.image.avatar()
});`}
                </CodeBlock>
              </div>
            </div>

            <Alert>
              <Code className="h-4 w-4" />
              <AlertDescription>
                The schema name should match the filename without the .js extension. 
                For example, <code>"schema": "user"</code> maps to <code>schemas/user.js</code>.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>
      </div>

      {/* Static Response Routes */}
      <div className="space-y-6">
        <h2 className="text-3xl font-bold tracking-tight">Static Response Routes</h2>
        
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <FileText className="h-5 w-5 text-primary" />
              <span>Using Response Objects</span>
            </CardTitle>
            <CardDescription>
              Define static JSON responses with optional faker templating
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Simple Static Response</h4>
                <CodeBlock language="json">
{`{
  "method": "GET",
  "path": "/status",
  "response": {
    "status": "healthy",
    "timestamp": "2024-01-01T00:00:00Z",
    "version": "1.0.0"
  }
}`}
                </CodeBlock>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Dynamic Response with Faker</h4>
                <CodeBlock language="json">
{`{
  "method": "GET",
  "path": "/profile",
  "response": {
    "id": "$faker.string.uuid()",
    "name": "$faker.person.fullName()",
    "email": "$faker.internet.email()",
    "lastLogin": "$faker.date.recent()",
    "preferences": {
      "theme": "$faker.helpers.arrayElement(['light', 'dark'])",
      "language": "$faker.location.countryCode()"
    }
  }
}`}
                </CodeBlock>
              </div>
            </div>

            <Alert>
              <Settings className="h-4 w-4" />
              <AlertDescription>
                Any string starting with <code>$faker.</code> will be evaluated as a Faker.js method call. 
                All faker methods are supported with their original syntax.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>
      </div>

      {/* Response Timing */}
      <div className="space-y-6">
        <h2 className="text-3xl font-bold tracking-tight">Response Timing</h2>
        
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Clock className="h-5 w-5 text-primary" />
              <span>Delay Configuration</span>
            </CardTitle>
            <CardDescription>
              Simulate real-world API response times
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Use the <code>delay</code> property to simulate network latency and server processing time.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold mb-2">Fast Response</h4>
                <CodeBlock language="json">
{`{
  "method": "GET",
  "path": "/cached-data",
  "schema": "product",
  "delay": 100
}`}
                </CodeBlock>
                <p className="text-xs text-muted-foreground mt-1">100ms delay</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Slow Response</h4>
                <CodeBlock language="json">
{`{
  "method": "POST",
  "path": "/heavy-operation",
  "response": {"success": true},
  "delay": 3000
}`}
                </CodeBlock>
                <p className="text-xs text-muted-foreground mt-1">3 second delay</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Query Parameters */}
      <div className="space-y-6">
        <h2 className="text-3xl font-bold tracking-tight">Query Parameters</h2>
        
        <Card>
          <CardHeader>
            <CardTitle>Supported Parameters</CardTitle>
            <CardDescription>
              faker-api automatically handles certain query parameters
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-2">Parameter</th>
                    <th className="text-left p-2">Description</th>
                    <th className="text-left p-2">Example</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-2"><code>count</code></td>
                    <td className="p-2">Override the default count for schema-based routes</td>
                    <td className="p-2"><code>/users?count=20</code></td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div>
              <h4 className="font-semibold mb-2">Example Usage</h4>
              <CodeBlock>
{`# Default count (from config)
curl http://localhost:3000/users

# Override count via query parameter
curl http://localhost:3000/users?count=50`}
              </CodeBlock>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Complete Example */}
      <div className="space-y-6">
        <h2 className="text-3xl font-bold tracking-tight">Complete Configuration Example</h2>
        
        <Card>
          <CardHeader>
            <CardTitle>E-commerce API Configuration</CardTitle>
            <CardDescription>
              A comprehensive example for an e-commerce mock API
            </CardDescription>
          </CardHeader>
          <CardContent>
            <CodeBlock title="mock/ecommerce.json">
{`{
  "routes": [
    {
      "method": "GET",
      "path": "/products",
      "schema": "product",
      "count": 12,
      "delay": 300
    },
    {
      "method": "GET",
      "path": "/categories",
      "response": [
        {
          "id": "$faker.string.uuid()",
          "name": "$faker.commerce.department()",
          "description": "$faker.lorem.sentence()"
        }
      ],
      "delay": 150
    },
    {
      "method": "POST",
      "path": "/orders",
      "response": {
        "orderId": "$faker.string.uuid()",
        "status": "pending",
        "total": "$faker.commerce.price()",
        "estimatedDelivery": "$faker.date.future()"
      },
      "delay": 800
    },
    {
      "method": "GET",
      "path": "/auth/profile",
      "schema": "user",
      "delay": 200
    },
    {
      "method": "GET",
      "path": "/health",
      "response": {
        "status": "healthy",
        "timestamp": "$faker.date.recent()",
        "uptime": "$faker.number.int({min: 1000, max: 999999})"
      }
    }
  ]
}`}
            </CodeBlock>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}