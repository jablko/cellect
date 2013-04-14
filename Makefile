# http://blog.jgc.org/2007/01/what-makefile-am-i-in.html
RUNNER_JS=$(dir $(lastword $(MAKEFILE_LIST)))runner.js

check: $(RUNNER_JS)
	phantomjs $(RUNNER_JS) test/index.html

$(RUNNER_JS):
	wget -O $(RUNNER_JS) https://raw.github.com/jquery/qunit/master/addons/phantomjs/runner.js
