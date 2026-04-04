const sourdoughItem = [
    { element: document.querySelector("#basic-sour"), design: 'simple' },
    { element: document.querySelector("#bulk-sour"), design: 'bulk' },
    { element: document.querySelector("#dragonfly-sour"), design: 'insect' },
    { element: document.querySelector("#palm-frond-sour"), design: 'plant' },
    { element: document.querySelector("#plant-sour"), design: 'plant' },
    { element: document.querySelector("#plants-sour"), design: 'plant' },
    { element: document.querySelector("#pretty-sour"), design: 'simple' },
    { element: document.querySelector("#pumpkin-sour"), design: 'holiday' },
    { element: document.querySelector("#snowflake-sour"), design: 'holiday' },
    { element: document.querySelector("#vine-sour"), design: 'plant' }
];

const designOrder = {
    'simple': 1,
    'bulk': 2,
    'plant': 3,
    'insect': 4,
    'holiday': 5
};

// function sortSourdoughByDesign() {
//     const sortedSourdough = sourdoughItem.sort((a, b) => {
//         const designA = Object.values(a)[0].design.toUpperCase();
//         const designB = Object.values(b)[0].design.toUpperCase();
//         if (designA < designB) return -1;
//         if (designA > designB) return 1;
//         return 0;
//     });

//     const galleryContainer = document.querySelector('.gallery-container');
//     galleryContainer.innerHTML = '';
//     sortedSourdough.forEach(item => {
//         const sourdoughElement = Object.values(item)[0];
//         galleryContainer.appendChild(sourdoughElement);
//     });
// }

// sortSourdoughByDesign(sourdoughItem);

function sortSourdoughByDesign() {
    const sortedSourdough = sourdoughItem.sort((a, b) => {
        const priorityA = designOrder[a.design];
        const priorityB = designOrder[b.design];
        
        return priorityA - priorityB;
    });

    const galleryContainer = document.querySelector('.gallery');
    
    galleryContainer.innerHTML = '';
    sortedSourdough.forEach(item => {
        if (item.element) {
            galleryContainer.appendChild(item.element);
        }
    });
}

sortSourdoughByDesign();