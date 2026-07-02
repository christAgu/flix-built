# =============================================================================
# Makefile — flix-built (a.k.a. "Netflix" clone)
#
# Tech stack used in this project:
#   - Angular 14 (TypeScript ~4.7) — SPA framework, scaffolded with Angular CLI
#   - RxJS 7   — reactive/async data streams (e.g. movies.service.ts)
#   - PrimeNG 14 + PrimeFlex 3 — UI component library & CSS flex utility grid
#   - SCSS     — component and global styling (src/styles.scss, styles/color.scss)
#   - Karma + Jasmine — unit test runner / spec framework (karma.conf.js, *.spec.ts)
#   - npm      — package manager (package.json / package-lock.json)
#
# This Makefile just wraps the underlying `npm`/`ng` commands so the whole
# workflow (install, run, build, test) can be driven with plain `make`.
# =============================================================================

.DEFAULT_GOAL := help
.PHONY: help install start build watch test clean

help: ## Show this help and the stack summary
	@echo "flix-built — Angular 14 + RxJS + PrimeNG/PrimeFlex + SCSS + Karma/Jasmine"
	@echo ""
	@echo "Available targets:"
	@awk 'BEGIN {FS = ":.*?## "} /^[a-zA-Z_-]+:.*?## / {printf "  %-10s %s\n", $$1, $$2}' $(MAKEFILE_LIST)

install: ## Install npm dependencies (package-lock.json)
	npm ci

start: ## Run the Angular dev server (ng serve) at http://localhost:4200
	npm start

build: ## Production build via Angular CLI (output: dist/netflix)
	npm run build

watch: ## Rebuild on file changes (development configuration)
	npm run watch

test: ## Run unit tests with Karma/Jasmine
	npm test

clean: ## Remove build output and installed dependencies
	rm -rf dist node_modules
