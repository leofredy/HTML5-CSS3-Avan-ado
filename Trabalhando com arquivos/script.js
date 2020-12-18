function handleFileSelect(event){
    const file = event
                    .target
                    .files[0];
    const reader = new FileReader();
    reader.onload = function(){
        const content = reader.result;
        const textArea = document
                            .querySelector('#text-area');
        textArea.value = content;
    }

    reader.readAsText(file);
}


function saveFile(){
    const content = document
                        .querySelector('#text-area')
                        .value;
    const ancoraElement = document
                            .createElement('a');
    ancoraElement.setAttribute(
        'href',
        `data:plain/text;charset=utf-8, 
            ${encodeURIComponent(content)}
        `
    );
    ancoraElement.setAttribute('download', 'fileText.txt');

    ancoraElement.click();
}