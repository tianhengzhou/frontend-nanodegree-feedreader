# This is a jasmine unit test suite for a feed reader.

## How to run this test suite?
-  Download the master branch file and unzip it.
-  Make sure you have python pre-install in your computer. Mac and Linux are coming with python, so don't worry. For windows, download python from this link: https://www.python.org/downloads/windows/
-  Change the directory to the project folder.
-  Open a terminal or command line tool. Type python -m SimpleHTTPServer [port]
-  Open a browser then type localhost:[port]
-  By this way, you will render index.html file and see the Jasmine is running test.

## Test Coverage
-  Test Suite 1: Check the url and name is defined for RSS feed.
-  Test Suite 2: Check the menu can hide/show itself with clicking the menu icon link.
-  Test Suite 3: Check the loadfeed function can at least successfully load one feed.
-  Test Suite 4: Check if the loadfeed function load another feed, the content will change.