
export function pivotRow(row) {
    let r = [];

    for(let i = 0; i < row.length; i++) {
        r.push([row[i]]);
    }

    return r;
}


export function matrixAdd(m1, m2) {
    let r = [];

    for(let m = 0; m < m1.length; m++) {
        r.push([]);

        for(let n = 0; n < m1[m].length; n++) {
            r[m].push(
                m1[m][n] + m2[m][n]
            );
        }
    }

    return r;
}


export function matrixSub(m1, m2) {
    let r = [];

    for(let m = 0; m < m1.length; m++) {
        r.push([]);

        for(let n = 0; n < m1[m].length; n++) {
            r[m].push(
                m1[m][n] - m2[m][n]
            );
        }
    }

    return r;
}


export function dotProduct(v1, v2) {
    let r = 0;

    for(let i = 0; i < v1.length; i++) {
        r += v1[i] * v2[i];
    }

    return r;
}


export function getRowVertex(m, index) {
    return m[index];
}


export function getColumnVertex(m, index) {
    let r = [];

    for(let i = 0; i < m.length; i++) {
        r.push(m[i][index]);
    }

    return r;
}


export function matrixProduct(m1, m2) {
    let r = [];

    for(let i = 0; i < m2.length; i++) {
        r.push([]);

        for(let j = 0; j < m2[0].length; j++) {
            r[i].push(dotProduct(
                getRowVertex(m1, i),
                getColumnVertex(m2, j)
            ));
        }
    }

    return r;
}
