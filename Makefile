.DEFAULT_GOAL := all
SHELL := /usr/bin/env bash -o pipefail
BUF_VERSION := 0.33.0
BUF_INSTALL_FROM_SOURCE := false
UNAME_OS := $(shell uname -s)
UNAME_ARCH := $(shell uname -m)
CACHE_BASE := $(HOME)/.cache/$(PROJECT)
CACHE := $(CACHE_BASE)/$(UNAME_OS)/$(UNAME_ARCH)
CACHE_BIN := $(CACHE)/bin
CACHE_VERSIONS := $(CACHE)/versions
export PATH := $(abspath $(CACHE_BIN)):$(PATH)

# BUF points to the marker file for the installed version.
#
# If BUF_VERSION is changed, the binary will be re-downloaded.
BUF := $(CACHE_VERSIONS)/buf/$(BUF_VERSION)
$(BUF):
	@rm -f $(CACHE_BIN)/buf
	@mkdir -p $(CACHE_BIN)
	curl -sSL \
		"https://github.com/bufbuild/buf/releases/download/v$(BUF_VERSION)/buf-$(UNAME_OS)-$(UNAME_ARCH)" \
		-o "$(CACHE_BIN)/buf"
	chmod +x "$(CACHE_BIN)/buf"
	@rm -rf $(dir $(BUF))
	@mkdir -p $(dir $(BUF))
	@touch $(BUF)


ROLLUP := ./node_modules/rollup/dist/bin/rollup

.PHONY: all check
all: $(BUF) breaking_change format lint proto
check: $(BUF) breaking_change lint

proto:
	buf generate
	npm i
	node index.js

breaking_change:
	buf check breaking --against .git#branch=main

format:
	prototool format -w

lint:
	buf check lint
