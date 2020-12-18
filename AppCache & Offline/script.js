window.applicationCache.addEventListener('checking', function(){
    console.log('Procurando por atualizações');
}, false);


document.cookie = "valor=slass"

function handleFileSelect(event){
    const myFile = event
                    .target
                    .files[0];
    const reader = new FileReader();
    reader.onloadend = function(){
        console.log(reader.result);
        const content = reader.result;
        document.querySelector('.content')
            .value = content;
    }

    reader.readAsText(myFile);
    reader.read
}