const parts = [ 
    { partNbr: 'R5AQDVU', partDescr: 'Halbendozer', aisle: 'B3', qty: 14 },
    { partNbr: 'LJBKC0M', partDescr: 'Knudleknorp', aisle: 'H1', qty: 12},
    { partNbr: 'HUS51DE', partDescr: 'Knudlescheiffer', aisle: 'H1', qty: 12},
    { partNbr: 'M0XORFH', partDescr: 'Borgom Oil', aisle: 'B2', qty: 3},
    { partNbr: '35X7AP8', partDescr: 'Glundelscharf', aisle: 'C3', qty: 1},
    { partNbr: 'C1AYCAI', partDescr: 'Tschoffle', aisle: 'A4', qty: 5},
    { partNbr: 'E9IEYLS', partDescr: 'Karmandloch', aisle: 'C2', qty: 2},
    { partNbr: 'IW2I0TG', partDescr: 'Shreckendwammer', aisle: 'J4', qty: 2},
    { partNbr: '95OJTV6', partDescr: 'Dimpenaus', aisle: 'B1', qty: 16},
    { partNbr: 'LYII1MJ', partDescr: 'Lumpenknorp', aisle: 'H1', qty: 12},
    { partNbr: 'VQIL7AO', partDescr: 'Lumpenschieffer', aisle: 'H1', qty: 12},
    { partNbr: 'XF0MPS9', partDescr: 'Ratklampen', aisle: 'N2', qty: 7},
    { partNbr: 'AFU9OUG', partDescr: 'Dulpo Fittings', aisle: 'J2', qty: 4},
    { partNbr: 'E7XWGGO', partDescr: 'Flugtrimsammler', aisle: 'B3', qty:3 },
    { partNbr: '981FNC9', partDescr: 'Grosstramle', aisle: 'A1', qty: 1},
    { partNbr: 'AGSXYVZ', partDescr: 'Skirpenflatch', aisle: 'B2', qty: 2},
    { partNbr: 'V0SK0UX', partDescr: 'Lumpenmagler', aisle: 'H1', qty: 12},
    { partNbr: 'CTL40Z1', partDescr: 'Lumpenflempest', aisle: 'H1', qty: 24},
    { partNbr: 'POO9ZPM', partDescr: 'Eumonklippen', aisle: 'D2', qty: 7},
    { partNbr: 'WEYPU3Z', partDescr: 'Mumpenflipper', aisle: 'E3', qty: 1}

]

// list of each part number and qty for check-off in the "detailsList" element
let listDetails = document.querySelector("#detailsList");

parts.forEach(function(e, i) {
    let partContainer = document.createElement("div");
    let addCheckbox = document.createElement("input");
    let addText = document.createElement("label");
    addCheckbox.setAttribute("type", "checkbox");
    addText.textContent = `${parts[i].qty} (${parts[i].partNbr}) - ${parts[i].partDescr}`;
    partContainer.appendChild(addCheckbox);
    partContainer.appendChild(addText);
    listDetails.appendChild(partContainer);
});

// if parts requiring special handling exist (in aisle B3), list of items needing 
// special packaging in the "specialPackaging" element, else remove element
let packagingBox = document.querySelector("#specialPackaging");

let specPackaging = parts.filter(function(e, i) {
    return(parts[i].aisle == 'B3');
});

if (specPackaging.length !== 0)
{
    specPackaging.forEach(function(e, i) {
    let addText = document.createElement("p");
    addText.textContent = `Item: ${specPackaging[i].partNbr} / Qty: ${specPackaging[i].qty}`;
    packagingBox.appendChild(addText);
    });
}
else
{
    packagingBox.remove();
}

// if hazardous parts exist (in aisle J4), let employee know in the "hazardousMaterials"
// element and remind them to get gloves, else remove element
let hazardBox = document.querySelector("#hazardousMaterials");

let hazardousMat = parts.find(function(e, i) {
    return(parts[i].aisle == 'J4')
});

if (hazardousMat !== undefined)
{
    let hazardNote = document.createElement("p");
    hazardNote.textContent = "Get gloves";
    hazardBox.appendChild(hazardNote);
}
else
{
    hazardBox.remove();
}

// if all items in the order are small parts (aisle H1), then let employee know that they should take 
// a basket and go dirctly to aisle H1
let smallBox = document.querySelector("#smallItemsOnly");

let onlySmall = parts.every(function(e, i) {
    return(parts[i].aisle == 'H1');
});

if (onlySmall == true)
{
    let smallNote = document.createElement("p");
    smallNote.textContent = "Get basket and go to H1";
    smallBox.appendChild(smallNote);
}
else
{
    smallBox.remove();
}

// if there are large items (anthing in aisles S, T, or U), then let the employee know in the "forkiftNeeded"
// element that they will need to reserve a forklift, else remove the element
let largeBox = document.querySelector("#forkiftNeeded");

let largeItems = parts.some(function(e, i) {
    return((parts[i].aisle == 'S') || (parts[i].aisle == 'T') || (parts[i].aisle == 'U'));
});

if (largeItems == true)
{
    let largeNote = document.createElement("p");
    largeNote.textContent = "Reserve a forklift";
    largeBox.appendChild(largeNote);
}
else
{
    largeBox.remove();
}

// sum up the total number of parts and append that number to the text already in "totalItems" element
let totalSection = document.querySelector("#totalItems");

let totalParts = parts.reduce(function(p, c) {
    return(p + c.qty);
}, 0);

totalSection.innerHTML += `: ${totalParts}`;
