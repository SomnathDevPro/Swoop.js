<h1>SWOOP.JS : simplifying web development with only one library</h1>

Tired of juggling with multiple libraries and utilities for your projects? Don't worry,swoop.js is here to help! A lightweight versatile javascript utility library,containing a ton of useful functions,that simplifies the process of web development,
Swoop js has a comprehensive set of features,from common utilities to to advanced and more specific utility classes,such as:
• <b>SWOOPHYSIX</b> for making physics calculations and unit conversions.
<br>
• <b>SWOOP TEST</b> for unit testing, helping you to write test cases for your code.
<br>
• <b>SWOOP CACHE</b> to store values for use later,with TTL feature.
<h3>INSTALLATION</h3>
you can simply include swoop.js using our CDN link: https://cdn.jsdelivr.net/gh/SomnathDevPro/Swoop.js@main/swoop.min.js

<h3>USAGE</h3>
Let's get started with swoop.js!
include swoop.js to your source code to get started :
<br>
<code><script src="https://cdn.jsdelivr.net/gh/SomnathDevPro/Swoop.js@main/swoop.min.js"></script></code>

<h3>The swoop object</h3>
The <code>SWOOP</code> object is the main object which you will be using to access the basic utilities!
available utility functions:
<h4>ARR (Array Functions)</h4>

1. `union(arr1, arr2)`: Returns the union of two arrays.
2. `intersection(arr1, arr2)`: Returns the intersection of two arrays.
3. `difference(arr1, arr2)`: Returns the difference of two arrays.
4. `sum(arr)`: Returns the sum of all elements in an array.
5. `mean(arr)`: Returns the mean of an array.
6. `standard_deviation(arr)`: Returns the standard deviation of an array.
7. `variance(arr)`: Returns the variance of an array.
8. `median(arr)`: Returns the median of an array.
9. `min(arr)`: Returns the minimum value of an array.
10. `max(arr)`: Returns the maximum value of an array.
11. `countUnique(arr)`: Returns the number of unique values in an array.
12. `countDuplicates(arr)`: Returns the number of duplicate values in an array.
13. `merge(arr1, arr2)`: Merges two arrays.
14. `freq(arr)`: Returns the frequency of elements in an array.

<h4>DOM (Document Object Model Functions)</h4>

1. `select(selector)`: Selects an element by its selector.
2. `selectid(id)`: Selects an element by its ID.
3. `selectall(element)`: Selects all elements with a matching selector.
4. `addListener(element, event, fn)`: Attaches an event listener to an element.
5. `removeListener(element, event, fn)`: Removes an event listener from an element.

<h4>FUNC (Functional Programming Utilities)</h4>

1. `throttle(func, wait)`: Throttles a function to prevent excessive calls.
2. `debounce(func, wait)`: Debounces a function to prevent excessive calls.
3. `memoize(func)`: Memoizes a function to cache its results.
4. `curry(func)`: Curries a function to enable partial application.
5. `once(func)`: Ensures a function is called only once.

<h4>MATHS (Mathematical Functions)</h4>

1. `sin(angle)`: Returns the sine of an angle.
2. `cos(angle)`: Returns the cosine of an angle.
3. `tan(angle)`: Returns the tangent of an angle.
4. `distance(x1, x2, y1, y2)`: Returns the distance between two points.
5. `midpoint(x1, x2, y1, y2)`: Returns the midpoint between two points.
6. `lerp(a, b, t)`: Returns the linear interpolation between two values.
7. `clamp(value, min, max)`: Clamps a value within a range.
8. `signum(value)`: Returns the sign of a number.
9. `sqrt(value)`: Returns the square root of a number.
10. `round(num)`: Returns the rounded value of a number.
11. `ceil(num)`: Returns the ceiling of a number.
12. `absolute(num)`: Returns the absolute value of a number.
13. `gcd(a, b)`: Returns the Greatest Common Divisor of two numbers.
14. `lcm(a, b)`: Returns the Least Common Multiple of two numbers.
15. `hypot(p, b)`: Returns the hypotenuse of a right triangle.
16. `randnum(min, max)`: Returns a random number within a range.

<h4>STR (String Functions)</h4>

1. `strip(str)`: Removes whitespace from a string.
2. `contains(str, search, position)`: Checks if a substring is present in a string.
3. `isBlank(str)`: Checks if a string is blank.
4. `isNotBlank(str)`: Checks if a string is not blank.
5. `isAlphabet(str)`: Checks if a string contains only alphabetic characters.
6. `isNumeric(str)`: Checks if a string contains only numeric characters.
7. `echo(str, n)`: Repeats a string n times.
8. `capitalise(str)`: Capitalizes the first letter of a string.

Here is the updated text with markup:

<h3>Examples</h3>

<h4>Array Functions</h4>

<b>Union of two arrays</b>

```
const arr1 = [1, 2, 3];
const arr2 = [3, 4, 5];
const union = SWOOP.ARR.union(arr1, arr2); // [1, 2, 3, 4, 5]
```

<b>Sum of an array</b>

```
const arr = [1, 2, 3, 4, 5];
const sum = SWOOP.ARR.sum(arr); // 15
```

<b>Median of an array</b>

```
const arr = [1, 3, 5, 7, 9];
const median = SWOOP.ARR.median(arr); // 5
```

<h4>DOM Functions</h4>

<b>Select an element by its ID</b>

```
const elem = SWOOP.DOM.selectid('myElement');
```

<b>Add an event listener to an element</b>

```
const elem = SWOOP.DOM.selectid('myElement');
SWOOP.DOM.addListener(elem, 'click', () => console.log('Clicked!'));
```

<h4>Functional Programming Utilities</h4>

<b>Throttle a function</b>

```
const throttledFunc = SWOOP.FUNC.throttle(() => console.log('Hello!'), 1000);
throttledFunc(); // Hello!
throttledFunc(); // (no output, due to throttling)
```

<b>Memoize a function</b>

```
const memoizedFunc = SWOOP.FUNC.memoize((x) => x * x);
console.log(memoizedFunc(2)); // 4
console.log(memoizedFunc(2)); // 4 (cached result)
```

<h4>Mathematical Functions</h4>

<b>Calculate the distance between two points</b>

```
const x1 = 1;
const y1 = 2;
const x2 = 4;
const y2 = 6;
const distance = SWOOP.MATHS.distance(x1, x2, y1, y2); // 5
```

<b>Calculate the sine of an angle</b>

```
const angle = Math.PI / 2;
const sine = SWOOP.MATHS.sin(angle); // 1
```

<h4>String Functions</h4>

<b>Remove whitespace from a string</b>

```
const str = '   Hello World   ';
const stripped = SWOOP.STR.strip(str); // 'HelloWorld'
```

<b>Check if a string contains only alphabetic characters</b>

```
const str = 'HelloWorld';
const isAlphabet = SWOOP.STR.isAlphabet(str); // true
```
<h2>Swoophysix Class</h2>

The Swoophysix class provides a collection of methods for converting between different units of measurement and calculating various physics-related values.

<h3>Constructor</h3>

- `constructor(gravity=9.81)`: Initializes the Swoophysix object with a default gravity value of 9.81 m/s^2.

<h2>Heat Conversion Methods</h2>

<h3>Temperature Conversions</h3>

- `convertFtoC(value)`: Converts a temperature value from Fahrenheit to Celsius.
- `convertCtoF(value)`: Converts a temperature value from Celsius to Fahrenheit.
- `convertCtoK(value)`: Converts a temperature value from Celsius to Kelvin.
- `convertKtoC(value)`: Converts a temperature value from Kelvin to Celsius.
- `convertFtoK(value)`: Converts a temperature value from Fahrenheit to Kelvin.
- `convertKtoF(value)`: Converts a temperature value from Kelvin to Fahrenheit.

<h2>Length Conversion Methods</h2>

<h3>Length Conversions</h3>

- `convertMtoFT(value)`: Converts a length value from meters to feet.
- `convertFTtoM(value)`: Converts a length value from feet to meters.
- `convertINtoCM(value)`: Converts a length value from inches to centimeters.
- `convertCMtoIN(value)`: Converts a length value from centimeters to inches.
- `convertMtoIN(value)`: Converts a length value from meters to inches.
- `convertINtoM(value)`: Converts a length value from inches to meters.
- `convertCMtoM(value)`: Converts a length value from centimeters to meters.
- `convertMtoCM(value)`: Converts a length value from meters to centimeters.

<h2>Physics Calculation Methods</h2>

<h3>Physics Calculations</h3>

- `force(mass, acceleration)`: Calculates the force applied to an object.
- `pressure(force, area)`: Calculates the pressure exerted on an object.
- `energy(mass, velocity)`: Calculates the kinetic energy of an object.
- `momentum(mass, velocity)`: Calculates the momentum of an object.
- `liquid_pressure(area, height, density)`: Calculates the pressure exerted by a liquid.
- `friction(force, coeff)`: Calculates the frictional force applied to an object.
- `acceleration(velocity, time)`: Calculates the acceleration of an object.
- `potential_energy(mass, height)`: Calculates the potential energy of an object.
- `torque(radii, force)`: Calculates the torque applied to an object.

<h4>Examples</h4>

```
const swoophysix = new Swoophysix();

console.log(swoophysix.convertFtoC(32)); // 0
console.log(swoophysix.convertMtoFT(1)); // 3.28084
console.log(swoophysix.force(10, 2)); // 20
```

<h2>SwoopCache Class</h2>

The SwoopCache class provides a simple caching mechanism with a built-in time-to-live (TTL) feature.

<h3>Constructor</h3>

- `constructor(TTL=60000)`: Initializes the SwoopCache object with a default TTL of 60 seconds (60000 milliseconds).

<h2>Methods</h2>

<h3>setCacheData(key, value)</h3>

- Sets a cache entry with the given key and value. The entry will expire after the TTL has passed.

<h3>getCachedData(key)</h3>

- Retrieves a cache entry by its key. If the entry has expired, it will be deleted and null will be returned.

<h3>deleteCachedData(key)</h3>

- Deletes a cache entry by its key.

<h3>clearCachedData()</h3>

- Clears all cache entries.

<h4>Example Usage</h4>

```
const cache = new SwoopCache(30000); // 30-second TTL

cache.setCacheData('key', 'value');
console.log(cache.getCachedData('key')); // 'value'

// Wait for 30 seconds...

console.log(cache.getCachedData('key')); // null (expired)

cache.deleteCachedData('key');
cache.clearCachedData();
```

<h2>SwoopTest Class</h2>

The SwoopTest class provides a simple testing framework for writing and running unit tests.

<h3>Constructor</h3>

- `constructor()`: Initializes the SwoopTest object with an empty array of tests.

<h2>Methods</h2>

<h3>addTest(name, fn)</h3>

- Adds a test to the test suite with the given name and test function.

<h3>runTests()</h3>

- Runs all tests in the test suite, logging the results to the console.

<h3>Assertion Methods</h3>

- `assertEqual(a, b)`: Throws an error if `a` is not equal to `b`.
- `assertNotEqual(a, b, message)`: Throws an error if `a` is equal to `b`.
- `assertGreaterThan(a, b, message)`: Throws an error if `a` is not greater than `b`.
- `assertLessThan(a, b, message)`: Throws an error if `a` is not less than `b`.

<h4>Example Usage</h4>

```
const test = new SwoopTest();

test.addTest('test equal', () => {
  test.assertEqual(1, 1);
});

test.addTest('test not equal', () => {
  test.assertNotEqual(1, 2);
});

test.addTest('test greater than', () => {
  test.assertGreaterThan(2, 1);
});

test.addTest('test less than', () => {
  test.assertLessThan(1, 2);
});

test.runTests();
```

This will output:

```
passed test equal ✓
passed test not equal ✓
passed test greater than ✓
passed test less than ✓
```
<h2>Contributing Guidelines</h2>

We welcome contributions to the Swoop Library! If you'd like to get involved, here are some guidelines to help you get started:

_Reporting Issues_

- If you encounter a bug or issue, please open an issue on our GitHub page.
- Provide a clear description of the issue, along with any relevant code or examples.

_Submitting Pull Requests_

- If you'd like to contribute code, please submit a pull request.
- Ensure your code is well-documented and follows our coding standards.
- Provide a clear description of the changes you've made.

_Coding Standards_

- We follow standard JavaScript coding conventions.
- Keep code concise, readable, and well-documented.

_Testing_

- Ensure all changes are tested thoroughly.
- Add new tests as needed to cover new functionality.

_License_

- By contributing, you agree to license your contributions under the Apache 2.0 License.
- Please note that this license allows for free use, modification, and distribution of the software.

_Thanks!_

We appreciate your contributions to the Swoop Library! If you have any questions or need help getting started, feel free to reach out.
