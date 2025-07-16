import { Lightbulb, Code, Database, Globe } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CodeBlock } from '@/components/CodeBlock';
import { Badge } from '@/components/ui/badge';

export default function Examples() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Examples</h1>
        <p className="text-xl text-muted-foreground">
          Real-world examples and use cases for faker-api configurations.
        </p>
      </div>

      {/* E-commerce API */}
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Globe className="h-5 w-5 text-primary" />
              <span>E-commerce API</span>
              <Badge variant="secondary">Popular</Badge>
            </CardTitle>
            <CardDescription>
              Complete mock API for an online store with products, categories, and orders
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold mb-2">Configuration</h4>
                <CodeBlock title="mock/ecommerce.json" language="json">
{`{
  "routes": [
    {
      "method": "GET",
      "path": "/products",
      "schema": "product",
      "count": 20,
      "delay": 300
    },
    {
      "method": "GET",
      "path": "/categories",
      "schema": "category",
      "count": 8,
      "delay": 150
    },
    {
      "method": "POST",
      "path": "/cart",
      "response": {
        "cartId": "$faker.string.uuid()",
        "status": "created",
        "total": 0,
        "items": []
      },
      "delay": 250
    }
  ]
}`}
                </CodeBlock>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Product Schema</h4>
                <CodeBlock title="schemas/product.js" language="javascript">
{`import { faker } from '@faker-js/faker';

export default () => ({
  id: faker.string.uuid(),
  name: faker.commerce.productName(),
  description: faker.commerce.productDescription(),
  price: parseFloat(faker.commerce.price()),
  category: faker.commerce.department(),
  inStock: faker.datatype.boolean(),
  rating: faker.number.float({ 
    min: 1, max: 5, precision: 0.1 
  }),
  images: Array.from({ length: 3 }, () => 
    faker.image.url()
  ),
  tags: faker.helpers.arrayElements(
    ['new', 'sale', 'featured', 'popular'],
    { min: 0, max: 2 }
  )
});`}
                </CodeBlock>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-2">Usage Examples</h4>
              <CodeBlock>
{`# Start the server
node bin/faker-api.js start -c mock/ecommerce.json

# Get products
curl http://localhost:3000/products

# Get specific number of products
curl http://localhost:3000/products?count=50

# Create cart
curl -X POST http://localhost:3000/cart`}
              </CodeBlock>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Social Media API */}
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Code className="h-5 w-5 text-primary" />
              <span>Social Media API</span>
            </CardTitle>
            <CardDescription>
              Mock API for a social media platform with users, posts, and comments
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold mb-2">Configuration</h4>
                <CodeBlock title="mock/social.json" language="json">
{`{
  "routes": [
    {
      "method": "GET",
      "path": "/users",
      "schema": "socialUser",
      "count": 15,
      "delay": 200
    },
    {
      "method": "GET",
      "path": "/posts",
      "schema": "post",
      "count": 30,
      "delay": 400
    },
    {
      "method": "GET",
      "path": "/notifications",
      "schema": "notification",
      "count": 10,
      "delay": 150
    }
  ]
}`}
                </CodeBlock>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Post Schema</h4>
                <CodeBlock title="schemas/post.js" language="javascript">
{`import { faker } from '@faker-js/faker';

export default () => ({
  id: faker.string.uuid(),
  userId: faker.string.uuid(),
  content: faker.lorem.paragraphs(2),
  images: faker.helpers.arrayElements(
    Array.from({ length: 5 }, () => 
      faker.image.url()
    ),
    { min: 0, max: 3 }
  ),
  likes: faker.number.int({ min: 0, max: 1000 }),
  comments: faker.number.int({ min: 0, max: 50 }),
  shares: faker.number.int({ min: 0, max: 100 }),
  createdAt: faker.date.past(),
  isEdited: faker.datatype.boolean(),
  hashtags: faker.helpers.arrayElements(
    ['coding', 'tech', 'design', 'photography'],
    { min: 0, max: 3 }
  )
});`}
                </CodeBlock>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Banking API */}
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Database className="h-5 w-5 text-primary" />
              <span>Banking API</span>
            </CardTitle>
            <CardDescription>
              Financial services mock API with accounts, transactions, and transfers
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold mb-2">Configuration</h4>
                <CodeBlock title="mock/banking.json" language="json">
{`{
  "routes": [
    {
      "method": "GET",
      "path": "/accounts",
      "schema": "account",
      "count": 3,
      "delay": 500
    },
    {
      "method": "GET",
      "path": "/transactions",
      "schema": "transaction",
      "count": 25,
      "delay": 600
    },
    {
      "method": "POST",
      "path": "/transfer",
      "response": {
        "transferId": "$faker.string.uuid()",
        "status": "pending",
        "estimatedCompletion": "$faker.date.future()",
        "fee": "$faker.finance.amount()"
      },
      "delay": 1200
    }
  ]
}`}
                </CodeBlock>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Transaction Schema</h4>
                <CodeBlock title="schemas/transaction.js" language="javascript">
{`import { faker } from '@faker-js/faker';

export default () => ({
  id: faker.string.uuid(),
  accountId: faker.string.uuid(),
  amount: parseFloat(faker.finance.amount()),
  type: faker.helpers.arrayElement([
    'deposit', 'withdrawal', 'transfer', 'payment'
  ]),
  description: faker.finance.transactionDescription(),
  merchant: faker.company.name(),
  category: faker.helpers.arrayElement([
    'food', 'transport', 'entertainment', 
    'utilities', 'shopping', 'healthcare'
  ]),
  date: faker.date.past({ years: 1 }),
  status: faker.helpers.arrayElement([
    'completed', 'pending', 'failed'
  ]),
  balance: parseFloat(faker.finance.amount()),
  currency: 'USD'
});`}
                </CodeBlock>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Blog API */}
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Lightbulb className="h-5 w-5 text-primary" />
              <span>Blog/CMS API</span>
            </CardTitle>
            <CardDescription>
              Content management system with articles, authors, and categories
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold mb-2">Configuration</h4>
                <CodeBlock title="mock/blog.json" language="json">
{`{
  "routes": [
    {
      "method": "GET",
      "path": "/articles",
      "schema": "article",
      "count": 15,
      "delay": 300
    },
    {
      "method": "GET",
      "path": "/authors",
      "schema": "author",
      "count": 8,
      "delay": 200
    },
    {
      "method": "GET",
      "path": "/tags",
      "response": {
        "tags": [
          "$faker.lorem.word()",
          "$faker.lorem.word()",
          "$faker.lorem.word()",
          "$faker.lorem.word()",
          "$faker.lorem.word()"
        ]
      },
      "delay": 100
    }
  ]
}`}
                </CodeBlock>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Article Schema</h4>
                <CodeBlock title="schemas/article.js" language="javascript">
{`import { faker } from '@faker-js/faker';

export default () => ({
  id: faker.string.uuid(),
  title: faker.lorem.sentence(),
  slug: faker.helpers.slugify(faker.lorem.sentence()),
  excerpt: faker.lorem.paragraph(),
  content: faker.lorem.paragraphs(8),
  authorId: faker.string.uuid(),
  author: {
    name: faker.person.fullName(),
    avatar: faker.image.avatar(),
    bio: faker.lorem.paragraph()
  },
  featuredImage: faker.image.url(),
  publishedAt: faker.date.past(),
  updatedAt: faker.date.recent(),
  status: faker.helpers.arrayElement([
    'published', 'draft', 'archived'
  ]),
  categories: faker.helpers.arrayElements([
    'Technology', 'Design', 'Business', 
    'Health', 'Travel', 'Food'
  ], { min: 1, max: 3 }),
  readingTime: faker.number.int({ min: 2, max: 15 }),
  viewCount: faker.number.int({ min: 10, max: 10000 })
});`}
                </CodeBlock>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Testing Scenarios */}
      <div className="space-y-6">
        <h2 className="text-3xl font-bold tracking-tight">Testing Scenarios</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Error Simulation</CardTitle>
              <CardDescription>
                Test error handling with delayed responses
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock language="json">
{`{
  "method": "GET",
  "path": "/slow-endpoint",
  "response": {
    "error": "Server timeout",
    "code": 500
  },
  "delay": 5000
},
{
  "method": "POST",
  "path": "/validation-error",
  "response": {
    "error": "Validation failed",
    "code": 400,
    "details": [
      "Email is required",
      "Password must be 8+ characters"
    ]
  },
  "delay": 200
}`}
              </CodeBlock>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Pagination Example</CardTitle>
              <CardDescription>
                Mock paginated responses
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock language="json">
{`{
  "method": "GET",
  "path": "/paginated-users",
  "response": {
    "data": [
      {
        "id": "$faker.string.uuid()",
        "name": "$faker.person.fullName()",
        "email": "$faker.internet.email()"
      }
    ],
    "pagination": {
      "page": 1,
      "limit": 10,
      "total": 100,
      "pages": 10
    }
  },
  "delay": 300
}`}
              </CodeBlock>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Export Examples */}
      <div className="space-y-6">
        <h2 className="text-3xl font-bold tracking-tight">Data Export Examples</h2>
        
        <Card>
          <CardHeader>
            <CardTitle>Generate Test Datasets</CardTitle>
            <CardDescription>
              Use the export command to create large datasets for testing
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <CodeBlock>
{`# Generate 1000 products for load testing
node bin/faker-api.js export --route products --count 1000 --out test-data/products.json

# Generate user dataset for database seeding
node bin/faker-api.js export --route users --count 500 --out seeds/users.json

# Generate transaction data for financial testing
node bin/faker-api.js export --route transactions --count 5000 --out data/transactions.json`}
            </CodeBlock>
            
            <div>
              <h4 className="font-semibold mb-2">Batch Export Script</h4>
              <CodeBlock title="generate-test-data.sh" language="bash">
{`#!/bin/bash

# Create data directory
mkdir -p test-data

# Generate different datasets
node bin/faker-api.js export --route users --count 100 --out test-data/users.json
node bin/faker-api.js export --route products --count 200 --out test-data/products.json
node bin/faker-api.js export --route orders --count 50 --out test-data/orders.json

echo "Test data generated successfully!"`}
              </CodeBlock>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}