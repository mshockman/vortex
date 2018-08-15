const nill = {};


export function parseBooleanValue(value) {
    if(typeof value === 'boolean') {
        return value;
    } else if(typeof value === 'string') {
        value = value.toLowerCase();

        if(value === 'true') {
            return true;
        } else if(value === 'false') {
            return false;
        }
    }

    throw new TypeError("Could not convert value to boolean.");
}


export function parseIntegerValue(value, radix=10) {
    value = parseInt(value, radix);

    if(!Number.isNaN(value)) {
        return value;
    }

    throw new TypeError("Could not convert value to integer.");
}


export function parseFloatValue(value) {
    value = parseFloat(value);

    if(!Number.isNaN(value)) {
        return value;
    }

    throw new TypeError("Could not convert value to float.");
}


export function choiceType(...choices) {
    return function(value) {
        if(choices.indexOf(value) === -1) {
            throw new TypeError("Invalid choice.");
        } else {
            return value;
        }
    }
}


export function nullValue(value) {
    if(value === null) {
        return value;
    } else {
        throw new TypeError("Value was not null.");
    }
}


export function ifChoiceThen(choices, value) {
    return function(v) {
        if(choices.indexOf(v) !== -1) {
            return value;
        } else {
            throw new TypeError("Was not a choice.");
        }
    }
}


export function castType(value, types, defaultValue) {
    for(let type of types) {
        try {
            return type(value);
        } catch(e) {
            if(!(e instanceof TypeError)) {
                throw e;
            }
        }
    }

    if(defaultValue === nill) {
        throw new TypeError("Could not convert value.");
    } else {
        return defaultValue;
    }
}


export function compoundType(...types) {
    return function(value) {
        for(let t of types) {
            try {
                return t(value);
            } catch(e) {
                if(!(e instanceof TypeError)) {
                    throw e;
                }
            }
        }

        throw new TypeError("Could not convert value to type.");
    }
}
