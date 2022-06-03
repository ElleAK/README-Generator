const generatePage = (title, author) => {
    return `
    <!DOCTYPE html> 
    <html lang="en"> 
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>README Generator</title>
    </head>
  
    <body>
      <h1>${title}</h1>
      <h2>${author}</h2>
    </body>
    </html>
    `;
  };

  module.exports = generatePage;