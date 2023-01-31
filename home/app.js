const input = document.getElementById('input')
const Go = document.getElementById('Go')



    input.addEventListener('keyup', (e) => {
        if(e.keyCode === 13) {
            search()
        }
    })

    function search() {


    if (input.value === 'myth' || input.value === 'Myth' || input.value === 'MYTH') {
        window.location = "../myth/"
    }

   else if (input.value ==='pokimane' || input.value ==='poki' || input.value ==='Pokimane') {
        window.location = "../pokimane/"
    }

    else if (input.value ==='tfue' || input.value ==='Tfue' || input.value ==='TFUE') {
        window.location = "../tfue/"
    }

    else if (input.value ==='shroud' || input.value ==='Shroud' || input.value ==='SHROUD') {
        window.location = "../shroud/"
    }

    else if (input.value ==='xqc' || input.value ==='xQc' || input.value ==='XQC') {
        window.location = "../xqc/"
    }

    else if (input.value ==='auronplay' || input.value ==='Auronplay' || input.value ==='AURONPLAY') {
        window.location = "../auronplay/"
    }

    else if (input.value ==='rubius' || input.value ==='Rubius' || input.value ==='RUBIUS') {
        window.location = "../rubius/"
    }

    else if (input.value ==='ibai' || input.value ==='Ibai' || input.value ==='IBAI') {
        window.location = "../ibai/"
    }

    else if (input.value ==='ninja' || input.value ==='Ninja' || input.value ==='NINJA') {
        window.location = "../ninja/"
    }

    else if (input.value ==='drlupo' || input.value ==='Drlupo' || input.value ==='DRLUPO') {
        window.location = "../drlupo/"
    }

    else {
        alert("Sorry, we can't find the person you're looking for.")
    }


}

