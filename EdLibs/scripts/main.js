let offsetX;
let offsetY;
let currDragItem;

onDragStart = function(ev) {
    const rect = ev.target.getBoundingClientRect();

    offsetX = ev.clientX - rect.x;
    offsetY = ev.clientY - rect.y;

    currDragItem = ev.target;
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
    ev.dataTransfer.dropEffect = "copy";
};
