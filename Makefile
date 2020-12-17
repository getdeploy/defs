.PHONY: all

ROLLUP := ./node_modules/rollup/dist/bin/rollup

all: breaking_change format lint proto

check: breaking_change lint

proto:
	buf generate
	npm i
	$(ROLLUP) node/*/*.js -o node/index.js -p multi-entry
	$(ROLLUP) node/*/*.d.ts -o node/index.d.ts -p multi-entry -p dts
	$(ROLLUP) grpcweb/*/*.js -o grpcweb/index.js -p multi-entry
	$(ROLLUP) grpcweb/*/*.d.ts -o grpcweb/index.d.ts -p multi-entry -p dts

breaking_change:
	buf check breaking --against .git#branch=main

format:
	prototool format -w

lint:
	buf check lint
