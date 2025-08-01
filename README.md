# FarmAdmin

A modern farm management administration application built with Angular 19.2.1. This application provides a comprehensive interface for managing farm operations, resources, and data.

## Features

- Modern Angular-based web application
- Material Design UI components
- Responsive design for desktop and mobile
- SSL/HTTPS support for secure connections
- Docker containerization support
- Comprehensive testing setup

## Prerequisites

- Node.js (version 18 or higher)
- npm or yarn package manager
- Angular CLI (`npm install -g @angular/cli`)

## Getting Started

### Installation

1. Clone the repository:
```bash
git clone https://github.com/erickkkt/farm-admin.git
cd farm-admin
```

2. Install dependencies:
```bash
npm install
```

### Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `https://localhost:5001/`. The application will automatically reload whenever you modify any of the source files.

For HTTPS development (using the provided SSL certificates):
```bash
ng serve --ssl --ssl-cert ssl/localhost.crt --ssl-key ssl/localhost.key
```

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

For production build:
```bash
ng build --configuration production
```

## Docker Support

The project includes Docker support for containerized deployment.

### Building the Docker image:
```bash
docker build -t farm-admin .
```

### Running the container:
```bash
docker run -p 80:80 farm-admin
```

## Testing

### Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

### Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Project Structure

```
src/
├── app/
│   ├── components/          # Reusable UI components
│   ├── models/             # Data models and interfaces
│   ├── services/           # Application services
│   ├── app-routing.module.ts
│   └── app.module.ts
├── assets/                 # Static assets
├── environments/           # Environment configurations
└── index.html
```

## Development Tools

This project is configured with:
- **Angular Material** - UI component library
- **TypeScript** - Type-safe JavaScript
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **Karma & Jasmine** - Unit testing

## SSL Configuration

The project includes SSL certificates for local HTTPS development located in the `ssl/` directory. These are for development purposes only and should not be used in production.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

## License

This project is licensed under the MIT License - see the LICENSE file for details.