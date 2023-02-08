///Test case - Check status - Negative Test Case
pm.test("Status code: 200", function () {
    pm.response.to.have.status(201);
});
///Response time - Positive Test Case
pm.test("Response time, less than: 500ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(500);
});
///One of the values returned in results - Positive Test Case
pm.test("Body matches string", function () {
    pm.expect(pm.response.text()).to.include("label","url", "version");
});
///Response size - Negative Test case
pm.test("Response Size", function () {
    pm.expect(pm.response.responseSize).to.be.equal(1228);
});  
///Header has 'Vary' key - Positive Test case
pm.test("Header 'Vary' is present", function () {
    pm.response.to.have.header("Vary");
});

(FIX THE TEST CASE)///Cookie 'BrowserId' domain is 'salesforce.com' - Positive Test case
pm.test("Cookie 'BrowserId' domain is 'salesforce.com'", function () {
    pm.expect(pm.cookies.get("BrowserId").value).to.eql("salesforce.com");
});
