breaking_change:
	buf check breaking --against-input .git#branch=master

format:
	prototool format -w

lint:
	buf check lint
