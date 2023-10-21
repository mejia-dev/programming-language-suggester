# The Programming Language Suggester

#### By github.com/mejia-dev

#### A fun, unofficial way to choose a new programming language to learn!

## Technologies Used

* HTML
* CSS
* JavaScript

## Description

This webpage uses a simple form and some branching to help you choose a new programming language to learn. Full explanation of the branching logic below:

IF the pizza answer is greater than or equal to 3, 
* AND your favorite flavor of cupcake has the letter "e" in it,
  * AND the length of your favorite word is greater than 6, "Python" is returned.
  * AND the length of your favorite word is less than or equal to 6, "Ruby" is returned.
* AND your favorite flavor of cupcake does not have the letter "e" in it, "Ruby" is returned.

ELSE (pizza answer is less than 3)
* AND your favorite flavor of cupcake has the letter "e" in it,
  * AND the length of your favorite word is greater than 4, "Rust" is returned.
  * AND the length of your favorite word is less than or equal to 4, "Ruby" is returned.
* AND your favorite flavor of cupcake does not have the letter "e" in it, "Ruby" is returned.

## Setup/Installation Requirements
Option A:
* Clone this repository to your desktop (from the git console, run "git clone https://github.com/mejia-dev/programming-language-suggester.git" without quotes)
* Navigate to the top level of the directory.
* Open the index.html file in your browser of choice.

Option B (not recommended due to known bug):
* Navigate to https://mejia-dev.github.io/programming-language-suggester/ in your browser of choice


## Known Bugs

* When viewing the site on GitHub Pages, the frog image color method doesn't work as expected. This appears to be due to the fact that GH Pages names the images directory differently ("Images" instead of "img"), which causes a 404 when looking for the overlay image in the relative path "../img/". Not sure if there is a recommended way to resolve this issue, so leaving this as-is for the time being.

## License

MIT License

Copyright (c) 2023 github.com/mejia-dev

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.