import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CodeBlock } from '@/components/CodeBlock';
import { GitBranch, Github, Heart, MessageSquare, Bug, Lightbulb, ExternalLink, Users } from 'lucide-react';

export function Contributing() {
  const contributionTypes = [
    {
      icon: Bug,
      title: "Bug Reports",
      description: "Found a bug? Help us fix it by reporting it.",
      color: "red"
    },
    {
      icon: Lightbulb,
      title: "Feature Requests",
      description: "Have an idea for a new feature? We'd love to hear it.",
      color: "blue"
    },
    {
      icon: GitBranch,
      title: "Code Contributions",
      description: "Submit pull requests to improve the codebase.",
      color: "green"
    },
    {
      icon: MessageSquare,
      title: "Documentation",
      description: "Help improve our docs and examples.",
      color: "purple"
    }
  ];

  const maintainers = [
    {
      name: "John Doe",
      role: "Core Maintainer",
      github: "johndoe",
      avatar: "https://github.com/johndoe.png"
    },
    {
      name: "Jane Smith", 
      role: "Documentation Lead",
      github: "janesmith",
      avatar: "https://github.com/janesmith.png"
    }
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4">Contributing to faker-api</h1>
        <p className="text-xl text-muted-foreground mb-6">
          We welcome contributions from the community! Whether you're fixing bugs, adding features, or improving documentation, your help makes faker-api better for everyone.
        </p>
        <div className="flex gap-3">
          <Button asChild>
            <a href="https://github.com/amandollar/faker-api" target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4 mr-2" />
              View on GitHub
            </a>
          </Button>
          <Button variant="outline" asChild>
            <a href="https://github.com/amandollar/faker-api/issues" target="_blank" rel="noopener noreferrer">
              <Bug className="w-4 h-4 mr-2" />
              Report Issue
            </a>
          </Button>
        </div>
      </div>

      {/* Ways to Contribute */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">Ways to Contribute</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {contributionTypes.map((type) => (
            <Card key={type.title}>
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg bg-${type.color}-500/10`}>
                    <type.icon className={`w-5 h-5 text-${type.color}-500`} />
                  </div>
                  <CardTitle className="text-lg">{type.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>{type.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Getting Started */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">Getting Started</h2>
        <Card>
          <CardHeader>
            <CardTitle>Development Setup</CardTitle>
            <CardDescription>Follow these steps to set up your local development environment</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">1. Fork and Clone</h4>
              <CodeBlock language="bash">
{`# Fork the repository on GitHub, then clone your fork
git clone https://github.com/YOUR_USERNAME/faker-api.git
cd faker-api`}
              </CodeBlock>
            </div>
            
            <div>
              <h4 className="font-semibold mb-2">2. Install Dependencies</h4>
              <CodeBlock language="bash">
{`npm install`}
              </CodeBlock>
            </div>

            <div>
              <h4 className="font-semibold mb-2">3. Create a Branch</h4>
              <CodeBlock language="bash">
{`git checkout -b feature/your-feature-name`}
              </CodeBlock>
            </div>

            <div>
              <h4 className="font-semibold mb-2">4. Run Tests</h4>
              <CodeBlock language="bash">
{`npm test
npm run lint`}
              </CodeBlock>
            </div>

            <div>
              <h4 className="font-semibold mb-2">5. Start Development Server</h4>
              <CodeBlock language="bash">
{`npm run dev`}
              </CodeBlock>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Pull Request Guidelines */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">Pull Request Guidelines</h2>
        <Card>
          <CardContent className="pt-6">
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Before Submitting</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Ensure all tests pass</li>
                  <li>• Run the linter and fix any issues</li>
                  <li>• Update documentation if needed</li>
                  <li>• Add tests for new features</li>
                  <li>• Keep commits focused and descriptive</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-2">PR Title Format</h4>
                <CodeBlock language="text">
{`feat: add new schema validation
fix: resolve Windows path issues
docs: update installation guide
test: add unit tests for CLI commands`}
                </CodeBlock>
              </div>

              <div>
                <h4 className="font-semibold mb-2">PR Description Template</h4>
                <CodeBlock language="markdown">
{`## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Documentation update
- [ ] Performance improvement

## Testing
- [ ] Unit tests pass
- [ ] Integration tests pass
- [ ] Manual testing completed

## Screenshots (if applicable)
Add screenshots for UI changes`}
                </CodeBlock>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Code Style */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">Code Style & Standards</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">JavaScript/Node.js</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <p>• Use ES6+ features and modern syntax</p>
              <p>• Follow ESLint configuration</p>
              <p>• Use meaningful variable names</p>
              <p>• Add JSDoc comments for functions</p>
              <p>• Prefer async/await over promises</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Testing</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <p>• Write unit tests for new features</p>
              <p>• Use Jest for testing framework</p>
              <p>• Aim for &gt;90% code coverage</p>
              <p>• Test edge cases and error conditions</p>
              <p>• Mock external dependencies</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Community */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">Community & Support</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                Maintainers
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {maintainers.map((maintainer) => (
                  <div key={maintainer.github} className="flex items-center gap-3">
                    <img 
                      src={maintainer.avatar} 
                      alt={maintainer.name}
                      className="w-10 h-10 rounded-full"
                    />
                    <div>
                      <p className="font-medium">{maintainer.name}</p>
                      <p className="text-sm text-muted-foreground">{maintainer.role}</p>
                    </div>
                    <Button variant="ghost" size="sm" asChild className="ml-auto">
                      <a href={`https://github.com/${maintainer.github}`} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4" />
                      </a>
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="w-5 h-5" />
                Get Help
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button variant="outline" className="w-full justify-start" asChild>
                <a href="https://github.com/amandollar/faker-api/discussions" target="_blank" rel="noopener noreferrer">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  GitHub Discussions
                  <ExternalLink className="w-3 h-3 ml-auto" />
                </a>
              </Button>
              <Button variant="outline" className="w-full justify-start" asChild>
                <a href="https://github.com/amandollar/faker-api/issues" target="_blank" rel="noopener noreferrer">
                  <Bug className="w-4 h-4 mr-2" />
                  Issue Tracker
                  <ExternalLink className="w-3 h-3 ml-auto" />
                </a>
              </Button>
              <Button variant="outline" className="w-full justify-start" asChild>
                <a href="https://discord.gg/faker-api" target="_blank" rel="noopener noreferrer">
                  <Users className="w-4 h-4 mr-2" />
                  Discord Community
                  <ExternalLink className="w-3 h-3 ml-auto" />
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Recognition */}
      <div className="bg-muted/50 rounded-lg p-6">
        <div className="flex items-center gap-2 mb-3">
          <Heart className="w-5 h-5 text-red-500" />
          <h3 className="font-semibold">Recognition</h3>
        </div>
        <p className="text-sm text-muted-foreground mb-4">
          We appreciate all contributors! Contributors are recognized in our README, release notes, and annual contributor highlights.
        </p>
        <div className="flex gap-2">
          <Badge variant="secondary">All Contributors</Badge>
          <Badge variant="secondary">Contributor of the Month</Badge>
          <Badge variant="secondary">Release Notes</Badge>
        </div>
      </div>
    </div>
  );
}