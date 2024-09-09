let languages = ["Maria", "fabio","felip","Cobol"]
for(let i = 0; i < languages.length; i++){
    if(languages[i] == "Cobol"){
        languages.splice(i, 1)
    }
}

console.log(languages)