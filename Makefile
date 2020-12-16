.PHONY: all

all: breaking_change format lint proto

proto:
	find . -name "*.proto" | xargs -L 1 protoc \
	  --go_out=plugins=grpc,paths=source_relative:. \
	  --grpc-web_out=import_style=commonjs+dts,mode=grpcwebtext:. \
	  --js_out=import_style=commonjs:.

breaking_change:
	buf check breaking --against .git#branch=main

format:
	prototool format -w

lint:
	buf check lint
