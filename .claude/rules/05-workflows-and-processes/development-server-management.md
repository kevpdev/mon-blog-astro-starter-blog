# Development Server Management

## Overview
This rule ensures proper management of development servers to avoid conflicts, resource waste, and confusion when working with tools like `pnpm dev`, `npm start`, or similar development commands.

## Core Principles

### 1. Always Check Before Starting
Before launching any development server, **ALWAYS** verify if there's already one running:

```bash
# Check for existing background processes
BashOutput <shell_id>  # If you know a shell ID is running
```

### 2. Reuse Existing Servers
When a development server is already running:
- **REUSE** the existing server instead of creating a new one
- Check the server output to confirm it's working properly
- Only create a new server if the existing one has issues

### 3. Clean Server Management
If you need to start a fresh server:
- **FIRST** kill the existing server properly using `KillBash <shell_id>`
- **THEN** start a new server instance
- Never leave orphaned server processes running

## Implementation Rules

### ✅ Good Practices
```bash
# Step 1: Check for existing servers
BashOutput existing_shell_id

# Step 2a: If server is healthy, use it
# Continue working with the existing server

# Step 2b: If server needs restart
KillBash existing_shell_id
pnpm dev  # Start new server
```

### ❌ Bad Practices
```bash
# DON'T: Start multiple servers simultaneously
pnpm dev  # While another is already running
npm start  # Creating port conflicts

# DON'T: Ignore existing processes
# Starting without checking leads to resource waste
```

## Common Scenarios

### Starting Development Work
1. Check if a server is already running from previous work
2. If found and working: continue using it
3. If not found or broken: start a new one cleanly

### Switching Between Features
- Keep the same server running across feature work
- Only restart if configuration changes require it
- Clean shutdown when completely finished

### Debugging Server Issues
1. Check server output with `BashOutput` first
2. If server is unresponsive, kill it properly
3. Start fresh server for clean debugging state

## Benefits

### Resource Management
- Prevents multiple Node.js processes consuming memory
- Avoids port conflicts (EADDRINUSE errors)
- Maintains system performance

### Development Experience
- Cleaner terminal output without duplicate processes
- Predictable behavior when testing changes
- Easier debugging of server-related issues

### Team Collaboration
- Consistent development environment setup
- Clear expectations for server management
- Reduced confusion in shared development sessions

## Related Rules
- See `bootstrap-quality.md` for project setup procedures
- See `deployment-checklist.md` for production server management
- See `performance-optimization.mdx` for server performance best practices

---

**Last Updated**: September 2025
**Category**: Workflows and Processes
**Priority**: High (prevents resource conflicts)