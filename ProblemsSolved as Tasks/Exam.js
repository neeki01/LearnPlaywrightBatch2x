//Chalange1
function apiResponse() {
    let status1 = 200;
    switch ( status1 ) {
        case 200:
            return console.log( "PASS - OK: Request successful" );
            break;
        case 201:
            return console.log( "PASS - Created: Resource created successfully" );
            break;
        case 301:
            return console.log( "WARNING - Moved Permanently: URL has changed" );
            break;
        case 400:
            return console.log( "FAIL - Bad Request: Check request payloadl" );
            break;
        case 401:
            return console.log( "FAIL - Unauthorized: Check auth token" );
            break;
        case 403:
            return console.log( "FAIL - Forbidden: Insufficient permissions" );
            break;
        case 404:
            return console.log( "FAIL - Not Found: Check endpoint URL" );
            break;
        case 500:
            return console.log( "FAIL - Internal Server Error: Backend issue" );
            break;
        default:
            return console.log( "UNKNOWN - Unhandled status code" );

    }
    // return status1;
}

apiResponse();
//chalange2
function testCaseResultCounter() {
    const testResults = [ "pass", "fail", "skip", "pass", "fail", "pass" ];
    let passCount = 0
    let failCount = 0;
    let skipCount = 0;
    for ( let i = 0; i < testResults.lenght; i++ ) {
        if ( testResults[ i ] === "pass" ) {
            passCount++;
        }
        if ( testResults[ i ] === "fail" ) {
            failCount++;
        }
        if ( testResults[ i ] === "skip" ) {
            skipCount++;
        }

    }

    const total = testResults.length;
    const passRatePercentage = total > 0 ? ( ( passCount / total ) * 100 ) : 0;

    let verdict = "";
    if ( failCount === 0 && passCount > 0 ) {
        verdict = "ready for release";
    }
    else if ( failCount <= 2 ) {
        verdict = "review required";
    }
    else if ( failCount > 2 ) {
        verdict = "block release";
    }

    console.log( "--- TEST REPORT ---" );
    console.log( `Total Tests: ${ total }` );
    console.log( `Passed: ${ passCount }` );
    console.log( `Failed: ${ failCount }` );
    console.log( `Skipped: ${ skipCount }` );
    console.log( `Pass Rate: ${ passRatePercentage }%` );
    console.log( `Verdict: ${ verdict }` );
}

testCaseResultCounter();
//chalange3
// Function to simulate an API call
function mockApiCall() {
    const randomValue = Math.random();
    // 40% chance of success (randomValue > 0.6)
    return randomValue > 0.6;
}

function executeWithRetry() {
    let attempts = 0;
    let maxRetries = 5;
    let isSuccess = false;

    console.log( "Starting API call sequence...\n" );

    do {
        attempts++;
        console.log( `Attempt ${ attempts }: Calling API...` );

        isSuccess = mockApiCall();

        if ( isSuccess ) {
            console.log( `-> Attempt ${ attempts }: Success! Data retrieved successfully.\n` );
            break;
        } else {
            console.log( `-> Attempt ${ attempts }: Failed.` );
            if ( attempts < maxRetries ) {
                console.log( "-> Retrying...\n" );
            }
        }

    } while ( attempts < maxRetries );

    // Final result logging
    if ( isSuccess ) {
        console.log( `Final Result: API call succeeded after ${ attempts } attempt(s).` );
    } else {
        console.log( `Final Result: API call failed. All ${ maxRetries } attempts exhausted.` );
    }
}

//challenge 4

function evaluateElementState( isPresent, isDisplayed, isEnabled ) {
    // Determine the State using strict equality and logical operators
    const state = ( isPresent === false ) ? 'NOT FOUND' :
        ( isDisplayed === false ) ? 'HIDDEN' :
            ( isEnabled === false ) ? 'DISABLED' : 'READY';

    // Determine the Severity using the ternary operator
    const severity = ( state === 'NOT FOUND' ) ? 'CRITICAL' :
        ( state === 'HIDDEN' || state === 'DISABLED' ) ? 'WARNING' : 'OK';

    // Determine Action based on State
    let action = '';
    switch ( state ) {
        case 'READY':
            action = 'Perform intended action (click, type, etc.).';
            break;
        case 'DISABLED':
            action = 'Log bug: Element should be interactive but is greyed out. Check dependencies or preconditions.';
            break;
        case 'HIDDEN':
            action = 'Log bug: Element is in the DOM but not visible. Verify UI rendering logic.';
            break;
        case 'NOT FOUND':
            action = 'Log bug: Element is completely missing from the DOM. Check network requests or locator strategy.';
            break;
        default:
            action = 'Unknown state.';
    }

    console.log( `State: ${ state }` );
    console.log( `Severity: ${ severity }` );
    console.log( `Action: ${ action }` );
    console.log( '--------------------------------------------------' );
}

// === Example Usages ===
evaluateElementState( true, true, true );    // READY state
evaluateElementState( true, true, false );   // DISABLED state
evaluateElementState( true, false, false );  // HIDDEN state
evaluateElementState( false, false, false ); // NOT FOUND state
