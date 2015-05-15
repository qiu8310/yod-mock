## [basic.js](src/mocks/basic.js)

### [Boolean & Bool](src/mocks/basic.js#L11-30)

Generate a random boolean value.

__Rules:__ 

  - `() -> boolean`
  - `(number probability = 0.5) -> boolean`
  - `(string percentage) -> boolean`

__Examples:__ 

```js

// Ten percent's probability return true
@Bool(0.1);
@Bool('10%');

```




### [Double & Float](src/mocks/basic.js#L32-72)

Generate a random float value.

__Note: when you specified format to `2`, you may get a random value `0.10`, and the last `0` will be ignored, so you will get `0.1` eventually.__

__Rules:__ 

  - `() -> float`
  - `(string format = "1-4") -> float`
  - `(number max = 1) -> float`
  - `(number max = 1, string format = "1-4") -> float`
  - `(number min = 0, number max = 1) -> float`
  - `(number min = 0, number max = 1, string format = "1-4") -> float`
  - `(number min = 0, number max = 1, number format = "1-4") -> float`

__Examples:__ 

```js

@Float('2');       // generate value likes: 0.34
@Float(5, '1-3');  // generate value likes: 3.215 or 2.1 or 4.23
@Float(8, 9, '1'); // generate value likes: 8.2

```




### [Integer & Int](src/mocks/basic.js#L76-92)

Generate a random integer between `min` to `max` (include `min` and `max`).

__Rules:__ 

  - `() -> integer`
  - `(int max = 1000) -> integer`
  - `(int min = 0, int max = 1000) -> integer`

__Examples:__ 

```js

@Int();          // return a integer between 0 - 1000
@Int(10);        // return a integer between 0 - 10
@Int(10, 100);   // return a integer between 10 - 100

```




### [Number](src/mocks/basic.js#L95-105)

Generator a random number value (can be a random float or integer value).

__Rules:__ 

  - `() -> number`




### [Character & Char](src/mocks/basic.js#L125-152)

Generate a random character.

Available pre-defined pools: `vowel`, `hash`, `consonant`, `lower`, `upper`, `number`, `symbol`, `alpha` and `all`

- If parameter `pool` not in pre-defined pools, then itself will become a characters pool.
- You can set `useAsPool` to `true` to force pre-defined pool key words to become a normal characters pool.

__Rules:__ 

  - `() -> char`
  - `(string pool = "alpha") -> char`
  - `(string pool = "alpha", bool useAsPool = false) -> char`

__Examples:__ 

```js

@Char('vowel');        // will return random character in 'aeiou'
@Char('vowel', true);  // will return random character in 'vowel'

```




### [String & Str](src/mocks/basic.js#L155-175)

Generate a random string.

- you can specified the string's character generate pool
- you can specified string length by setting `length` argument
- you can set `min` and `max` to get a random length string which length is between `min` to `max`

__Rules:__ 

  - `() -> string`
  - `(string pool = "alpha") -> string`
  - `(int length) -> string`
  - `(string pool = "alpha", int length) -> string`
  - `(int min = 2, int max = 20) -> string`
  - `(string pool = "alpha", int min = 2, int max = 20) -> string`




### [Date](src/mocks/basic.js#L196-245)

Generate a random timestamp or formatted date.

Caller                             |  Description
---------------------------------  | ----------------
@Date()                            | last ten year's random timestamp
@Date(0)                           | last ten year to next ten year's random timestamp
@Date(-2)                          | last two year's timestamp
@Date(3)                           | next three year's timestamp
@Date(-1, 3600)                    | next one hour's timestamp
@Date("3600", "7200")              | next one hour to next two hour's timestamp
@Date("2011-1-1", "2011-12-31")    | between 2011-1-1 00:00:00 to 2011-12-31 00:00:00


Default format is timestamp, you can specified date format in the first argument, for example:

`@Date('YYYY-MM-DD HH:mm:ss', -2)`

__Date format reference：http://momentjs.com/docs/#/displaying/format/__

__Rules:__ 

  - `() -> string`
  - `(int flag = -10) -> string`
  - `(int flag = -10, nature range) -> string`
  - `(string format = "timestamp") -> string`
  - `(string format = "timestamp", int flag = -10) -> string`
  - `(string format = "timestamp", int flag = -10, nature range) -> string`
  - `(string from, string to) -> string`
  - `(string format = "timestamp", string from, string to) -> string`




### [Range](src/mocks/basic.js#L249-264)

Generate a specified integer range.

__Rules:__ 

  - `() -> array`
  - `(int stop = 10) -> array`
  - `(int start = 0, int stop = 10) -> array`
  - `(int start = 0, int stop = 10, int step = 1) -> array`




### [Id & Sequence & Seq](src/mocks/basic.js#L268-287)

Generate a rand auto increment id.

__Rules:__ 

  - `() -> int`
  - `(int start = 1) -> int`
  - `(int start = 1, int step = 1) -> int`
  - `(string seed = "_d") -> int`
  - `(string seed = "_d", int start = 1) -> int`
  - `(string seed = "_d", int start = 1, int step = 1) -> int`




### [Guid & GUID & Uuid & UUID](src/mocks/basic.js#L292-318)

Generate a random [guid](http://zh.wikipedia.org/wiki/%E5%85%A8%E5%B1%80%E5%94%AF%E4%B8%80%E6%A0%87%E8%AF%86%E7%AC%A6)

__format: xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx__

   - x is replaced with a random hexadecimal digit from 0 to f
   - y is replaced with a random hexadecimal digit from 8 to b

__Rules:__ 

  - `() -> string`




### [Objectid & ObjectId & Oid](src/mocks/basic.js#L321-334)

Generate a random [object id](http://docs.mongodb.org/manual/reference/object-id/)

__Rules:__ 

  - `() -> string`




### [Md5 & MD5](src/mocks/basic.js#L338-350)

Generate a random md5 encrypted value.

__Rules:__ 

  - `() -> string`




## [location.js](src/mocks/location.js)

### [Country](src/mocks/location.js#L12-24)

Generate a random country in world

- setting `abbr` to `true` to return the country's shorthand name

_Using config `system.location.country`_

__Rules:__ 

  - `() -> string`
  - `(bool abbr = false) -> string`




### [Province & Region](src/mocks/location.js#L27-38)

Generate a random province in China

_Using config `system.location.region`_

__Rules:__ 

  - `() -> string`




### [Area](src/mocks/location.js#L42-53)

Generate a random area in China

_Using config `system.location.area`_

__Rules:__ 

  - `() -> string`




### [Latitude](src/mocks/location.js#L60-70)

Generate a random latitude float value

__Rules:__ 

  - `() -> float`
  - `(int min = -90, int max = 90) -> float`
  - `(int fixed = 5) -> float`
  - `(int fixed = 5, int min = -90, int max = 90) -> float`




### [Longitude](src/mocks/location.js#L74-82)

Generate a random longitude float value

__Rules:__ 

  - `() -> float`
  - `(int min = -180, int max = 180) -> float`
  - `(int fixed = 5) -> float`
  - `(int fixed = 5, int min = -180, int max = 180) -> float`




### [Coordinates](src/mocks/location.js#L87-95)

Generate a random coordinates

__Rules:__ 

  - `() -> string`




## [media.js](src/mocks/media.js)

### [Image & Img & Picture & Pic](src/mocks/media.js#L12-26)

Generate a random image url

_Using config `system.picture`_

__Rules:__ 

  - `() -> string`
  - `(string category = "all") -> string`




### [Audio & Mp3 & MP3](src/mocks/media.js#L31-46)

Generate a random audio url

_Using config `system.audio`_

__Rules:__ 

  - `() -> string`
  - `(string category = "all") -> string`




### [Video & Mp4 & MP4](src/mocks/media.js#L51-67)

Generate a random video url

_Using config `system.video`_

__Rules:__ 

  - `() -> string`
  - `(string category = "all") -> string`




## [mixed.js](src/mocks/mixed.js)

### [CarType](src/mocks/mixed.js#L18-28)

Generate a random car type

_Using config `system.car.type`_

__Rules:__ 

  - `() -> string`




### [CarImage](src/mocks/mixed.js#L32-42)

Generate a random car image

_Using config `system.picture.car`_

__Rules:__ 

  - `() -> string`




## [text.js](src/mocks/text.js)

### [CW](src/mocks/text.js#L11-22)

Generate a random Chinese word

_Using config `system.word.cn`_

__Rules:__ 

  - `() -> string`




### [CS](src/mocks/text.js#L26-40)

Generate a random Chinese sentence

__Rules:__ 

  - `() -> string`




### [CP](src/mocks/text.js#L46-55)

Generate a random Chinese paragraph

__Rules:__ 

  - `(int length) -> string`
  - `() -> string`
  - `(int min = 3, int max = 7) -> string`




### [Word & EW](src/mocks/text.js#L61-95)

Generate a random english word

__Rules:__ 

  - `(int length) -> string`
  - `() -> string`
  - `(int min = 3, int max = 10) -> string`




### [Sentence & ES](src/mocks/text.js#L101-114)

Generate a random english sentence

__Rules:__ 

  - `(int length) -> string`
  - `() -> string`
  - `(int min = 12, int max = 18) -> string`




### [Paragraph & EP](src/mocks/text.js#L117-129)

Generate a random english paragraph

__Rules:__ 

  - `(int length) -> string`
  - `() -> string`
  - `(int min = 3, int max = 7) -> string`




### [Good](src/mocks/text.js#L134-144)

Generate a random good word

_Using config `system.word.good`_

__Rules:__ 

  - `() -> string`




### [Face](src/mocks/text.js#L148-158)

Generate a random ascii face string

_Using config `system.word.face`_

__Rules:__ 

  - `() -> string`




## [user.js](src/mocks/user.js)

### [Gender & Sex](src/mocks/user.js#L12-26)

Generate a random gender string

- `category` can be `'zh'`, `'en'` and `'short'`

_Using config `system.user.gender`_

__Rules:__ 

  - `() -> string`
  - `(string category = "en") -> string`




### [Age](src/mocks/user.js#L29-53)

Generate a random integer age

- `type` can be `'child'`, `'teen'`, `'adult'`, `'senior'`, `'all'`

__Rules:__ 

  - `() -> integer`
  - `(string type) -> integer`




### [Avatar](src/mocks/user.js#L57-65)

Generate a random avatar url

__Rules:__ 

  - `() -> string`




### [First & FirstName](src/mocks/user.js#L68-84)

Generate a random first name

- `gender` can be `'male'` or `'female'`

_Using config `system.user.first`_

__Rules:__ 

  - `() -> string`
  - `(string gender = "all") -> string`




### [Last & LastName](src/mocks/user.js#L88-103)

Generate a random last name

_Using config `system.user.last`_

__Rules:__ 

  - `() -> string`




### [UserName & Username](src/mocks/user.js#L106-120)

Generate a random username

__Rules:__ 

  - `() -> string`
  - `(bool middle = false) -> string`
  - `(string gender = "*") -> string`
  - `(string gender = "*", bool middle = false) -> string`
  - `(bool middle = false, string gender = "*") -> string`




### [Name & ChineseName](src/mocks/user.js#L123-137)

Generate a random chinese name

__Rules:__ 

  - `() -> string`




### [Nick & NickName & Nickname](src/mocks/user.js#L140-153)

Generate a random nickname

_Using config `system.user.nick`_

__Rules:__ 

  - `() -> string`




### [Comment](src/mocks/user.js#L156-170)

Generate a random comment

_Using config `system.user.comment`_

__Rules:__ 

  - `() -> string`




### [Telephone & Tel](src/mocks/user.js#L173-227)

Generate a random telephone

- `country` can be `'fr'`, `'uk'`, `'us'`, default is `'zh'`

__Rules:__ 

  - `() -> string`
  - `(bool format = false) -> string`
  - `(string country = "zh") -> string`
  - `(string country = "zh", bool format = false) -> string`




## [web.js](src/mocks/web.js)

### [Color](src/mocks/web.js#L11-34)

Generate a random color value

__Rules:__ 

  - `() -> string`
  - `(string format) -> string`

__Examples:__ 

```js

@Color();        // => some thing like: '#AB32F1'
@Color(short);   // => some thing like: '#345'
@Color(rgb);     // => some thing like: 'rgb(2, 10, 231)'

```




### [Domain](src/mocks/web.js#L38-47)

Generate a random domain

__Rules:__ 

  - `() -> string`




### [Email](src/mocks/web.js#L50-59)

Generate a random email

__Rules:__ 

  - `() -> string`




### [Ip & IP](src/mocks/web.js#L62-72)

Generate a random ip

__Rules:__ 

  - `() -> string`




### [Ipv6 & IPv6 & IPV6](src/mocks/web.js#L75-86)

Generate a random ipv6

__Rules:__ 

  - `() -> string`


