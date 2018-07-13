const nill = {};


export function clamp(value, minValue=null, maxValue=null) {
    if(minValue !== null) {
        value = Math.max(value, minValue);
    }

    if(maxValue !== null) {
        value = Math.min(value, maxValue);
    }

    return value;
}


export function firstValue(args) {
    for(let item of args) {
        if(item !== null && item !== undefined) {
            return item;
        }
    }
}


export function parseInteger(value, defaultValue=null, radix=10) {
    value = parseInt(value, radix);

    if(Number.isNaN(value)) {
        return defaultValue;
    } else {
        return value;
    }
}


export function parseBoolean(value, defaultValue=null) {
    if(typeof value === 'string') {
        if(value === 'true') {
            return true;
        } else if(value === 'false') {
            return false;
        } else {
            return defaultValue;
        }
    } else {
        return !!value;
    }
}


export function parseBooleanString(value) {
    if(value === 'true') {
        return true;
    } else if(value === 'false') {
        return false;
    } else {
        return value;
    }
}


export function parseBooleanOrNumber(value, defaultValue=null, radix=10) {
    if(value === 'true' || value === 'false') {
        return value === 'true';
    } else if(typeof value === 'boolean') {
        return value;
    } else {
        return parseInteger(value, defaultValue, radix);
    }
}


export function setDefaultValues(target, defaults) {
    for(let key in defaults) {
        if(defaults.hasOwnProperty(key) && (!target.hasOwnProperty(key) || target[key] === undefined)) {
            target[key] = defaults[key];
        }
    }
}


export function randomChoice(list) {
    return list[Math.floor(Math.random() * list.length)];
}
