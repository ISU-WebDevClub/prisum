#!/usr/bin/env bash
find prisum/templates -name '*.html' | xargs -I % sh -c 'echo "\n%:"; html_lint.py --disable="concerns_separation,optional_tag,protocol" %;'
