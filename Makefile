RUNNER_JS_URL=https://raw.github.com/jquery/qunit/master/addons/phantomjs/runner.js

check: runner.js
	phantomjs $< test/index.html

runner.js:
	wget -O $@ $(RUNNER_JS_URL)

clean:
	rm -f runner.js
