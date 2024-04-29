let offsetX;
let offsetY;
let currDragItem;

onDragStart = function(ev) {
    const rect = ev.target.getBoundingClientRect();

    offsetX = ev.clientX - rect.x;
    offsetY = ev.clientY - rect.y;

    // check if this item being dragged is a copy
    if (ev.target.classList.contains("isCopy")) {
        // if it's a copy, simply move it
        currDragItem = ev.target;
    } else {
        // dragging from the original, create a copy
        currDragItem = ev.target.cloneNode(true);
        currDragItem.classList.add("isCopy");
    }
};

drop_handler = function(ev) {

    ev.preventDefault();

    const drop_zone_elt = document.getElementById("drop_zone");
    const left          = drop_zone_elt.offsetLeft;
    const top           = drop_zone_elt.offsetTop;
    
    currDragItem.style.position    = 'absolute';
    currDragItem.style.left        = ev.clientX - left - offsetX + 'px';
    currDragItem.style.top         = ev.clientY - top - offsetY + 'px';
    
    drop_zone_elt.appendChild(currDragItem);
};

dragover_handler = function(ev) {
    ev.preventDefault();

    if (currDragItem.classList.contains("isCopy")) {
        ev.dataTransfer.dropEffect = "move";
    } else {
        ev.dataTransfer.dropEffect = "copy";
    }
    
};
