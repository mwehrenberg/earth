# earth

A personal platform built as a collection of containerized microservices, orchestrated with Docker Compose. The **dashboard** service acts as the landing page and central hub for navigating to all other services.

## Services

| Service     | Port   | Description                        |
|-------------|--------|------------------------------------|
| `dashboard` | `8080` | Landing page and navigation hub    |

## Getting started

**Prerequisites:** Docker

```bash
docker compose up
```

Then open [http://localhost:8080](http://localhost:8080).

The dashboard service mounts local source files and runs Vite's dev server with HMR, so changes are reflected immediately without rebuilding the container.

## Project structure

```
earth/
├── compose.yaml          # Service orchestration
└── services/
    └── dashboard/        # React + TypeScript + Vite SPA
```

Each service lives in its own directory under `services/` and is built as an independent container. To add a new service, create a directory under `services/`, add a `Dockerfile`, and register it in `compose.yaml`.

## Tech stack

- **Frontend:** React, TypeScript, Vite
- **Production server:** Nginx (multi-stage Docker build)
- **Orchestration:** Docker Compose
