# Stack/Cors

Library and middleware enabling cross-origin resource sharing for your
http-{foundation,kernel} using application. It attempts to implement the
<<<<<<< HEAD
[W3C Recommendation] for cross-origin resource sharing.

[W3C Recommendation]: http://www.w3.org/TR/cors/

Master [![Build Status](https://secure.travis-ci.org/asm89/stack-cors.png?branch=master)](http://travis-ci.org/asm89/stack-cors)
=======
[W3C Candidate Recommendation] for cross-origin resource sharing.

[W3C Candidate Recommendation]: http://www.w3.org/TR/cors/

Master [![Build Status](https://secure.travis-ci.org/asm89/stack-cors.png?branch=master)](http://travis-ci.org/asm89/stack-cors)
Develop [![Build Status](https://secure.travis-ci.org/asm89/stack-cors.png?branch=develop)](http://travis-ci.org/asm89/stack-cors)
>>>>>>> upstream/master

## Installation

Require `asm89/stack-cors` using composer.

## Usage

<<<<<<< HEAD
This package can be used as a library or as [stack middleware].

[stack middleware]: http://stackphp.com/

### Example: using the library
=======
Stack middleware:
>>>>>>> upstream/master

```php
<?php

<<<<<<< HEAD
use Asm89\Stack\CorsService;

$cors = new CorsService(array(
    'allowedHeaders'      => array('x-allowed-header', 'x-other-allowed-header'),
    'allowedMethods'      => array('DELETE', 'GET', 'POST', 'PUT'),
=======
use Asm89\Stack\Cors;

$app = new Cors($app, array(
    // you can use array('*') to allow any headers
    'allowedHeaders'      => array('x-allowed-header', 'x-other-allowed-header'),
    // you can use array('*') to allow any methods
    'allowedMethods'      => array('DELETE', 'GET', 'POST', 'PUT'),
    // you can use array('*') to allow requests from any origin
>>>>>>> upstream/master
    'allowedOrigins'      => array('localhost'),
    'exposedHeaders'      => false,
    'maxAge'              => false,
    'supportsCredentials' => false,
));
<<<<<<< HEAD

$cors->addActualRequestHeaders(Response $response, $origin);
$cors->handlePreflightRequest(Request $request);
$cors->isActualRequestAllowed(Request $request);
$cors->isCorsRequest(Request $request);
$cors->isPreflightRequest(Request $request);
```

## Example: using the stack middleware
=======
```

Or use the library:
>>>>>>> upstream/master

```php
<?php

<<<<<<< HEAD
use Asm89\Stack\Cors;

$app = new Cors($app, array(
    // you can use array('*') to allow any headers
    'allowedHeaders'      => array('x-allowed-header', 'x-other-allowed-header'),
    // you can use array('*') to allow any methods
    'allowedMethods'      => array('DELETE', 'GET', 'POST', 'PUT'),
    // you can use array('*') to allow requests from any origin
=======
use Asm89\Stack\CorsService;

$cors = new CorsService(array(
    'allowedHeaders'      => array('x-allowed-header', 'x-other-allowed-header'),
    'allowedMethods'      => array('DELETE', 'GET', 'POST', 'PUT'),
>>>>>>> upstream/master
    'allowedOrigins'      => array('localhost'),
    'exposedHeaders'      => false,
    'maxAge'              => false,
    'supportsCredentials' => false,
));
<<<<<<< HEAD
=======

$cors->addActualRequestHeaders(Response $response, $origin);
$cors->handlePreflightRequest(Request $request);
$cors->isActualRequestAllowed(Request $request);
$cors->isCorsRequest(Request $request);
$cors->isPreflightRequest(Request $request);
>>>>>>> upstream/master
```
