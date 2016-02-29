/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('verify the URL is defined and not empty', function () {
            allFeeds.forEach(function(item){
                expect(item.url).toBeDefined();
                expect(item.url).not.toBe('');
            })
        });

        /* Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('verify the name is defined and not empty', function () {
            allFeeds.forEach(function (item) {
                expect(item.name).toBeDefined();
                expect(item.name).not.toBe('');
            })
        });
    });
    /* Write a new test suite named "The menu" */
    describe('The menu', function () {
        var body = $('body'),
            menuIcon = $('.menu-icon-link');
        /* Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
        it('is hidden by default', function () {
            expect(body.hasClass('menu-hidden')).toBe(true);
        });
        /* Write a test that ensures the menu changes
         * visibility when the menu icon is clicked. This test
         * should have two expectations: does the menu display when
         * clicked and does it hide when clicked again.
         */
        it('is changing when click the menu icon is clicked', function () {
            menuIcon.click();
            expect(body.hasClass('menu-hidden')).toBe(false);
            menuIcon.click();
            expect(body.hasClass('menu-hidden')).toBe(true);
        })
    });
    /* Write a new test suite named "Initial Entries" */
    describe('Initial Entries', function () {
        beforeEach(function (done) {
            loadFeed(0, done)
        });
        /* Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test wil require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
        it('has at least a single element in feed', function () {
            var entries = $('.feed .entry');
            expect(entries.length).toBeGreaterThan(0);
        })
    });
    /* Write a new test suite named "New Feed Selection"*/
     describe('New Feed Selection', function () {
        var feed_bef, feed_aft;
        var head_title = $('.header-title'),
            entries = $('.feed .entry');
        beforeEach(function (done) {
            expect(allFeeds.length).toBeGreaterThan(1);
            loadFeed(0, function () {
                feed_bef = head_title.text() + entries.text();
                loadFeed(1, function () {
                    feed_aft = head_title.text() + entries.text();
                    done();
                })
            })
        });
         /* Write a test that ensures when a new feed is loaded
          * by the loadFeed function that the content actually changes.
          * Remember, loadFeed() is asynchronous.
          */
        it('changes feed content', function (done) {
            expect(feed_bef).not.toEqual(feed_aft);
            done();
        })
    });
}());
