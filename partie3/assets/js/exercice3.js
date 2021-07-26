let languages = ['html', 'css', 'javascript', 'php', 'mysql', 'c++','ruby','python'];
console.log(languages)

languages.forEach((language,i) => {
    document.write(`<div>${language} (${i})</div>`)
    
});


// EXEMPLE SECOND

// for (var i = 0; i < languages.length; i++){

//     document.write(`<div>${languages[i]}</div>`);

// }


