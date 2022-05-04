SHELL := /bin/bash

docker: backend-docker frontend-docker
build: frontend-build
test: backend-test frontend-test

.PHONY: backend-docker
backend-docker:
	@echo "Building backend image..."
	docker build . -t ot-menu-test-backend:latest -f Dockerfile.backend

.PHONY: frontend-docker
frontend-docker:
	@echo "Building frontend image..."
	docker build . -t ot-menu-test-frontend:latest -f Dockerfile.frontend

.PHONY: frontend-build
frontend-build:
	@echo "Building frontend..."
	pnpm run build

.PHONY: backend-start
backend-start:
	@echo "Starting backend..."
	pnpm run start-server

.PHONY: frontend-start
frontend-start:
	@echo "Starting frontend..."
	pnpm run start-app

.PHONY: backend-test
backend-test:
	@echo "Running backend unit tests..."
	pnpm run test-server

.PHONY: frontend-test
frontend-test:
	@echo "Running frontend unit tests..."
	pnpm run test-app
