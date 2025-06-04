
// create a function to output a pyramid of a given height for chatgpt 

function pyramid(char, rows, upsideDown){

    let output = "";
    let spaces = " ".repeat(rows - 1); // initial spaces for the first row

    for (let i = 0; i < rows; i++) {
        if (upsideDown) {
            // For upside down pyramid, adjust spaces accordingly
            output += spaces + char.repeat((rows - i) * 2 - 1) + "\n";
            spaces += " "; // increase spaces for next row
        } else {
            output += spaces + char.repeat(i * 2 + 1) + "\n";
            spaces = spaces.slice(0, -1); // decrease spaces for next row
        }
    }

    return output;
}

let outputPyramid = pyramid("*", 5, false); // normal pyramid
let outputUpsideDownPyramid = pyramid("*", 5, true); // upside down pyramid 

document.writeln("Normal Pyramid:\n" + outputPyramid + "<br>"); 
document.writeln("Upside Down Pyramid:\n" + outputUpsideDownPyramid + "<br>");
// Output the pyramid to the document


// freecodecamp pyramid

function freeccodecampPyramid(char, rows, upsideDown){
    if(rows <= 0){
        return "/n";
    }

    let pyrmaidLines = [];

    if(upsideDown === false){
        for(i = 0; i < rows; i++){
            let numchars = i  + 2 * i; // following  the order of precedence, first multiply i by 2 and then add 1

        }
    }
}


// rewrite this code again to fix the issues and make it work correctly

function pyramid2(char, rows, upsideDown) {
  if (rows <= 0) {
    return "\n";
  }

  let result = [];

  if (!upsideDown) {
    // Normal pyramid
    for (let i = 0; i < rows; i++) {
      let numchars = 1 + 2 * i;
      let spaces = rows - i - 1;
      let line = ' '.repeat(spaces) + char.repeat(numchars);
      result.push(line);
    }
  } else {
    // Upside-down pyramid
    for (let i = rows - 1; i >= 0; i--) {
      let numchars = 1 + 2 * i;
      let spaces = rows - i - 1;
      let line = ' '.repeat(spaces) + char.repeat(numchars);
      result.push(line);
    }
  }

  return '\n' + result.join('\n') + '\n';
}

// Using <pre> for proper formatting in browser
document.writeln("<pre>" + pyramid2("*", 5, false) + "</pre>");
document.writeln("<pre>" + pyramid2("#", 4, true) + "</pre>");
