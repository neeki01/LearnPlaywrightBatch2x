var $=10;
var _a=12;
var p=12;
var abs7689=10;

// Rule 1: Start with letter, _, or $
var name = 10;       // ✓ starts with letter
var _count = 20;     // ✓ starts with underscore
var $total = 30;     // ✓ starts with dollar
// 1name = 40;       // ✗ starts with digit
// Rule 2: Digits allowed after first char
var abs7689 = 10;    // ✓ digits after letters
var item2 = 50;      // ✓
// Rule 3: Reserved keywords not allowed
var total = 60;      // ✓
// var let = 70;     // ✗ 'let' is reserved
// var class = 80;   // ✗ 'class' is reserved
// Rule 4: Case-sensitive
var foo = 90;
var Foo = 100;       // different from foo
// Rule 5: No spaces/special chars
var myVar = 110;     // ✓
// var my var = 120; // ✗ space not allowed
// var my-var = 130; // ✗ hyphen not allowed

// Rule 6: Naming Conventions (Case Styles)
// camelCase - first word lowercase, subsequent words capitalized (standard for variables/functions)
var firstName = "John";
var getUserData = function() {};
var isValidUser = true;
var totalAmountDue = 100;

// PascalCase - all words capitalized (standard for classes/constructors)
var Person = function() {};
var UserProfile = {};
var HttpRequestHandler = class {};
var ShoppingCartItem = {};

// snake_case - all lowercase with underscores (common in constants/database fields)
var max_retries = 3;
var user_id = 12345;
var api_endpoint = "/api/users";
var is_active_flag = true;

// UPPER_SNAKE_CASE / CONSTANT_CASE - all uppercase with underscores (standard for constants)
var MAX_VALUE = 100;
var API_BASE_URL = "https://api.example.com";
var DEFAULT_TIMEOUT = 5000;
var PI = 3.14159;

// kebab-case - lowercase with hyphens (NOT valid in JS identifiers, used in CSS/HTML)
// var my-variable = 10;  // ✗ invalid - hyphen is subtraction operator
// CSS uses: background-color, font-size, etc.

// Hungarian Notation - prefix indicates type (legacy, rarely used in modern JS)
var strName = "John";        // str = string
var intAge = 25;             // int = integer
var arrItems = [1, 2, 3];    // arr = array
var objConfig = {};          // obj = object
var boolActive = true;       // bool = boolean