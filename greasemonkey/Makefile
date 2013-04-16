dist: manifest.json
	zip cellect cellect.user.js manifest.json

manifest.json: cellect.user.js
	sed -n " \
	  /\/\/ ==UserScript==/ b metadata; \
	  b; \
	  :metadata \
	  n; \
	  /\/\/ ==\/UserScript==/ { \
	    g; \
	    s/^/{ "\"content_scripts\"": [{ "\"js\"": ["\"cellect.user.js\""]\n    "\"matches\"": ["\"\<all_urls\>\""] }]\n  "\"manifest_version\"": 2/; \
	    s/\n/,\n/g; \
	    s/$$/ }/; \
	    p; \
	    q; \
	  }; \
	  s/\/\/ @description \(.*\)/  "\"description\"": "\"\\1\""/; \
	  s/\/\/ @homepageURL \(.*\)/  "\"homepage_url\"": "\"\\1\""/; \
	  s/\/\/ @name \(.*\)/  "\"name\"": "\"\\1\""/; \
	  s/\/\/ @version \(.*\)/  "\"version\"": "\"\\1\""/; \
	  T metadata; \
	  H; \
	  b metadata" cellect.user.js > manifest.json

include ../Makefile
