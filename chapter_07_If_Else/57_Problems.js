// Question 1 — HTTP Status Code Categorizer
// Problem: Given an HTTP status code, print which category it belongs to.
// 200–299 → Success
// 300–399 → Redirection
// 400–499 → Client Error
// 500–599 → Server Error
// Anything else → Invalid
// Sample Input/Output:

let statusCode = 396;
if ( statusCode === 200 || statusCode <= 299 ) {
    console.log( "Success" );
}
else if ( statusCode === 300 || statusCode <= 399 ) {
    console.log( "Redirection" );
}
else if ( statusCode === 400 || statusCode <= 499 ) {
    console.log( "Client error" );
}
else if ( statusCode === 500 || statusCode <= 599 ) {
    console.log( "Server Error" );
}
else {
    console.log( "Invalid" )
}
// Problem: Compare actual result with expected result and print test verdict.
// Sample Input/Output:
// expected = "Login Successful"
// actual   = "Login Successful"
// Output: ✅ Test Passed

let expectedOutput = "Login Successful";
let actualoutputType = "Login failed";


if ( expectedOutput === actualoutputType ) {
    console.log( "Test passed" );
}
else {
    console.log( "Test Failed — Expected: " + expectedOutput + ", Got:" + actualoutputType );
}

// Question 3 — Bug Severity Classifier
// Problem: Given a bug's impact score (1–10), classify the severity.
// 9–10 → Critical (block release)
// 7–8 → High
// 4–6 → Medium
// 1–3 → Low
// Anything else → Invalid score

let bugImpactScore = 5;

if ( bugImpactScore >= 9 && bugImpactScore <= 10 ) {
    console.log( "Severity: Critical — Block release" )
}
else if ( bugImpactScore >= 7 && bugImpactScore <= 8 ) {
    console.log( "Severity: High" )
}
else if ( bugImpactScore >= 4 && bugImpactScore <= 6 ) {
    console.log( "Severity: Medium" )
}
else if ( bugImpactScore >= 1 && bugImpactScore <= 3 ) {
    console.log( "Severity: Low" )
}
else {
    console.log( "Invalid score" )
}

// Question 4 — Build Health Reporter
// Problem: Given the percentage of test cases passed in a CI build, report build health.
// 100% → Green Build
// 90–99% → Stable (investigate failures)
// 70–89% → Unstable
// Below 70% → Broken Build (block deployment)

let build = 56;

if ( build === 100 ) {
    console.log( "Green build" );
}
else if ( build >= 90 && build <= 99 ) {
    console.log( "Stable (investigate failures)" );
}
else if ( build >= 70 && build <= 89 ) {
    console.log( "Unstable" );
}
else {
    console.log( "Broken Build (block deployment" );
}
// Question 5 — Login Lockout After Failed Attempts
// Problem: Track failed login attempts. Lock the account after 3 failed attempts.
// Sample Input/Output:

let attempt = 2

if ( attempt === 1 ) {
    console.log( "Login successful" )
}
else if ( attempt === 2 ) {
    console.log( "1 attempt left before lockout " )
}
else if ( attempt === 3 ) {
    console.log( "Account Locked — Contact support " )
}
