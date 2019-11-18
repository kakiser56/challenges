function addressMaker(address) {
   const {city, state} = address;
 
    const newAddress = {
        city,
        state,
        country: 'United States'
    };
    console.log(`${newAddress.city}, ${newAddress.state}, ${newAddress.country}`);
   
}
 
addressMaker({city: 'Austin', state: 'Texas'});
 
 
let midpoints = [100,200,300,400];
 
for (const midpoint of midpoints) {
  console.log(midpoint);
}
 
let midpoints2 = [...midpoints];
console.log(midpoints2);
