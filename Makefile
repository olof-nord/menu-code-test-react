SHELL := /bin/bash

docker: backend-docker frontend-docker

.PHONY: backend-docker
backend-docker:
	@echo "Building backend image..."
	docker build . -t ot-menu-test-backend:latest -f Dockerfile.backend

.PHONY: frontend-docker
frontend-docker:
	@echo "Building frontend image..."
	docker build . -t ot-menu-test-frontend:latest -f Dockerfile.frontend
