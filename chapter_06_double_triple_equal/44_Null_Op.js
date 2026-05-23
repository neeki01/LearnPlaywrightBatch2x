console.log( null >= 0 );
console.log( null === 0 );

// ?? Nullish

let amul = null;
let milk_required = amul ?? "Nanadani Milk"
console.log( milk_required );

//what it does is, that if aul value is null then
// the given value that is Nanadani's Milk  will
//get stored in milk_required value.
// This is only done for storing the other value if the given value is null
