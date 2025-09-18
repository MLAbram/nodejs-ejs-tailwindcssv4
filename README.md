# nodejs-ejs-tailwindcssv4
Node.js, EJS, and Tailwind CSS v4



STEPS 
-- command prmpt
npm i express ejs tailwindcss @tailwindcss/postcss postcss postcss-cli
npm i --save-dev nodemon

-- /package.json
"dev": "nodemon index.js -e ejs,js,json,css",
"build-tailwindcss": "postcss src/css/tailwind.css -o public/css/styles.css"

-- /postcss.config.mjs
export default {
  plugins: {
    "@tailwindcss/postcss": {},
  }
}

-- /src/css/tailwind.css
@import "tailwindcss";


-- /views/index.ejs
<!doctype html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="/css/styles.css" rel="stylesheet">
</head>
<body>
  <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>
</body>
</html>