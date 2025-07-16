import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, Download, Star } from 'lucide-react';

export function Versions() {
  const versions = [
    {
      version: "2.1.0",
      date: "2024-01-15",
      status: "latest",
      features: [
        "Added inline $faker.xxx() templating in static responses",
        "Windows/Git Bash compatibility improvements",
        "Enhanced error messages with auto-directory creation",
        "Support for nested object structures in schemas"
      ],
      fixes: [
        "Fixed path normalization issues on Windows",
        "Resolved CORS issues in development mode",
        "Fixed memory leaks in long-running server instances"
      ],
      breaking: []
    },
    {
      version: "2.0.0",
      date: "2023-12-01",
      status: "stable",
      features: [
        "Complete rewrite with modern ES modules",
        "Added export command for generating static JSON files",
        "Improved CLI with better help documentation",
        "Dynamic schema support with @faker-js/faker integration",
        "Query parameter support (?count=n)",
        "Configurable response delays"
      ],
      fixes: [
        "Improved performance for large datasets",
        "Better error handling and validation",
        "Fixed route collision issues"
      ],
      breaking: [
        "Minimum Node.js version now 16+",
        "Config file structure has changed",
        "Old schema format no longer supported"
      ]
    },
    {
      version: "1.2.1",
      date: "2023-09-20",
      status: "deprecated",
      features: [],
      fixes: [
        "Fixed security vulnerability in dependency",
        "Improved JSON parsing error messages"
      ],
      breaking: []
    },
    {
      version: "1.2.0",
      date: "2023-08-15",
      status: "deprecated",
      features: [
        "Added basic schema support",
        "Introduced delay configuration",
        "Support for custom port selection"
      ],
      fixes: [
        "Fixed route ordering issues",
        "Improved startup time"
      ],
      breaking: []
    },
    {
      version: "1.1.0",
      date: "2023-06-10",
      status: "deprecated",
      features: [
        "Added POST, PUT, DELETE method support",
        "Basic JSON response templates",
        "Configuration file validation"
      ],
      fixes: [
        "Fixed CORS headers",
        "Improved error responses"
      ],
      breaking: []
    },
    {
      version: "1.0.0",
      date: "2023-05-01",
      status: "deprecated",
      features: [
        "Initial release",
        "Basic GET route support",
        "Simple JSON responses",
        "CLI interface"
      ],
      fixes: [],
      breaking: []
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'latest':
        return <Badge className="bg-green-500/10 text-green-500 border-green-500/20"><Star className="w-3 h-3 mr-1" />Latest</Badge>;
      case 'stable':
        return <Badge variant="secondary">Stable</Badge>;
      case 'deprecated':
        return <Badge variant="outline" className="text-muted-foreground">Deprecated</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4">Version History</h1>
        <p className="text-xl text-muted-foreground mb-6">
          Track the evolution of faker-api with detailed release notes and changelogs.
        </p>
      </div>

      <div className="space-y-6">
        {versions.map((version) => (
          <Card key={version.version} className="relative">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <CardTitle className="text-2xl">v{version.version}</CardTitle>
                  {getStatusBadge(version.status)}
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">{version.date}</span>
                  <Download className="w-4 h-4 ml-2" />
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {version.features.length > 0 && (
                <div>
                  <h4 className="font-semibold text-green-600 dark:text-green-400 mb-2">✨ New Features</h4>
                  <ul className="space-y-1">
                    {version.features.map((feature, index) => (
                      <li key={index} className="text-sm text-muted-foreground pl-4 relative">
                        <span className="absolute left-0">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {version.fixes.length > 0 && (
                <div>
                  <h4 className="font-semibold text-blue-600 dark:text-blue-400 mb-2">🐛 Bug Fixes</h4>
                  <ul className="space-y-1">
                    {version.fixes.map((fix, index) => (
                      <li key={index} className="text-sm text-muted-foreground pl-4 relative">
                        <span className="absolute left-0">•</span>
                        {fix}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {version.breaking.length > 0 && (
                <div>
                  <h4 className="font-semibold text-red-600 dark:text-red-400 mb-2">⚠️ Breaking Changes</h4>
                  <ul className="space-y-1">
                    {version.breaking.map((change, index) => (
                      <li key={index} className="text-sm text-muted-foreground pl-4 relative">
                        <span className="absolute left-0">•</span>
                        {change}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="bg-muted/50 rounded-lg p-6">
        <h3 className="font-semibold mb-3">Migration Guides</h3>
        <div className="space-y-2 text-sm text-muted-foreground">
          <p>• <strong>v1.x to v2.x:</strong> See our <a href="#" className="text-primary hover:underline">migration guide</a> for updating config files and schemas.</p>
          <p>• <strong>Node.js Requirements:</strong> v2.0+ requires Node.js 16 or higher.</p>
          <p>• <strong>Legacy Support:</strong> v1.x versions are no longer maintained. Please upgrade to v2.x.</p>
        </div>
      </div>
    </div>
  );
}