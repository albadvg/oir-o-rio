//inicializar plugin carrusel
let carrusel = document.querySelector('.main-carousel');
let flickity = new Flickity( carrusel, {
    cellAlign: 'center',
    contain: true,
    wrapAround: true
})

let detailsAxenda = document.querySelectorAll('#sec-axenda details');
let detailsEstatutos = document.querySelectorAll('#sec-estatutos details');

//alternar pestanas abertas en tag details
detailsAxenda.forEach(detail => {
    detail.addEventListener('toggle', (e) => {
        if(detail.open) {
            detailsAxenda.forEach( detail => {
                if(detail != e.target && detail.open) {
                    detail.open = false;
                };
            });
        };
    });
});
detailsEstatutos.forEach(detail => {
    detail.addEventListener('toggle', (e) => {
        if(detail.open) {
            detailsEstatutos.forEach( detail => {
                if(detail != e.target && detail.open) {
                    detail.open = false;
                };
            });
        };
    });
});