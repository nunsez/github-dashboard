install: install-yarn

install-yarn:
	yarn install

checks: lint compile

lint:
	yarn eslint .

compile:
	yarn tsc

build: checks
	yarn vite build

dev:
	yarn vite

serve:
	yarn vite preview
