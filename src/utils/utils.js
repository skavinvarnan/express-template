class Utils {
  // https://www.kammerl.de/ascii/AsciiSignature.php
  static consoleAsciiSignature() {
    console.log('');
    console.log('');
    console.log(" ______     __  __     ______   ______     ______     ______     ______   \n" +
      "/\\  ___\\   /\\_\\_\\_\\   /\\  == \\ /\\  == \\   /\\  ___\\   /\\  ___\\   /\\  ___\\  \n" +
      "\\ \\  __\\   \\/_/\\_\\/_  \\ \\  _-/ \\ \\  __<   \\ \\  __\\   \\ \\___  \\  \\ \\___  \\ \n" +
      " \\ \\_____\\   /\\_\\/\\_\\  \\ \\_\\    \\ \\_\\ \\_\\  \\ \\_____\\  \\/\\_____\\  \\/\\_____\\\n" +
      "  \\/_____/   \\/_/\\/_/   \\/_/     \\/_/ /_/   \\/_____/   \\/_____/   \\/_____/");
    console.log('');
    console.log('');
  }

  static createErrorJson(errorString, internalStatueCode) {
    return {
      success: false,
      statusCode: internalStatueCode,
      error: errorString
    }
  }

  static createSuccessJson(json, internalStatueCode) {
    return {
      success: true,
      statusCode: internalStatueCode,
      ...json
    }
  }
}

module.exports = Utils;
