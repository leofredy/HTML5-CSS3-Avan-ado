
const list = document.querySelectorAll('ul')
const template = `
    <li>
        Vida: <span>9999</span>
    </li>
    <li>
        Ataque: <span>1000</span>
    </li>
    <li>
        Defesa: <span>10000</span>
    </li>
`

window.applicationCache.addEventListener('checking', function(){
    console.log('ola')
}, false)


const box = document.querySelectorAll('.drop-area');


function dragElement(event){
    event.dataTransfer.setData('logoID', event.target.id)
}

function allowDrop(event){
    event.preventDefault();
}

function onDrop(event, number){
    const logo = event.dataTransfer.getData('logoID'),
        img = document.querySelector(`#${logo}`)

    event.target.insertBefore(img, list[number])
    list[number].innerHTML = template;

    testando(number)
}

function testando(number){
    if(number === 1) {
        if(box[0].children[0] !== logo){
            list[0].innerHTML = `
                <li>
                    Vida: <span>100</span>
                </li>
                <li>
                    Ataque: <span>0</span>
                </li>
                <li>
                    Defesa: <span>0</span>
                </li>
            `
            console.log('nao tem logo')
        }
        else {
            console.log('tem logo')
        }
    }
}