type EventNames = 'click' | 'scroll' | 'mouseover';

function handleEvent(ele: Element, event: EventNames) {
    // dosomething;
}

handleEvent(document.createElement("a"), 'click');