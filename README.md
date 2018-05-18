[![Build Status](https://travis-ci.org/singuerinc/spain-phone.svg?branch=master)](https://travis-ci.org/singuerinc/spain-phone)
[![Coverage Status](https://coveralls.io/repos/github/singuerinc/spain-phone/badge.svg?branch=master)](https://coveralls.io/github/singuerinc/spain-phone?branch=master)

Spanish phone number validation

:telephone_receiver:
[https://es.wikipedia.org/wiki/Anexo:Prefijos_telef%C3%B3nicos_de_Espa%C3%B1a](https://es.wikipedia.org/wiki/Anexo:Prefijos_telef%C3%B3nicos_de_Espa%C3%B1a)

## Installation

```js
// npm
npm i spain-phone

// yarn
yarn add spain-phone
```

## Usage

### Check if it is a valid phone number

```js
import { isPhone } from 'spain-phone';

isPhone('907 xx xx xx'); //=> true
```

### Check it is a mobile or fixed number

```js
import { isFixed, isMobile } from 'spain-phone';

isFixed('5xx xx xx xx'); //=> true
isFixed('8xx xx xx xx'); //=> true
isFixed('9xx xx xx xx'); //=> true

isMobile('6xx xx xx xx'); //=> true
isMobile('7xx xx xx xx'); //=> true
```

### Others

```js
import { isFreeCall, isLowCost, isHighCost, isOther } from 'spain-phone';

// paid by who receive the call
isFreeCall('900 xx xx xx'); // => true

// paid 50/50 or at national rate
isLowCost('901 xx xx xx'); // => true

// usually used in tv contest, data system lines and services
isHighCost('905 xx xx xx'); // => true
isHighCost('907 xx xx xx'); // => true
isHighCost('803 xx xx xx'); // => true
isHighCost('806 xx xx xx'); // => true
isHighCost('807 xx xx xx'); // => true

// internet access
isOther('908 xx xx xx');
isOther('909 xx xx xx');

// radio-searching
isOther('940 xx xx xx');
```
