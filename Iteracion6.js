// Crea una función que reciba por parámetro un array y compruebe si existen elementos duplicados, 
// en caso que existan los elimina para retornar un array sin los elementos duplicados. 
// Puedes usar este array para probar tu función:

const duplicates = [
    'sushi',
    'pizza',
    'burger',
    'potatoe',
    'pasta',
    'ice-cream',
    'pizza',
    'chicken',
    'onion rings',
    'pasta',
    'soda'
    ];
function removeDuplicates(param) {
    for (let i = param.length; i >= 0; i--) {
        if (param.indexOf(param[i]) !== i) {
            param.splice(i,1)
        }
    }
    return param
}
console.log(removeDuplicates(duplicates))