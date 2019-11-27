// Given two positive intergers do the numbers have the same frequency of digits 
function sameFrequency(a,b){
    // good luck. Add any arguments you deem necessary.
    a = a.toString().split('').sort()
    a = a.reduce(function(prev, curr){
      return (Number(prev) || 0) + (Number(curr) || 0);
  });
  
    
    b = b.toString().split('').sort()
    b = b.reduce(function(prev, curr){
      return (Number(prev) || 0) + (Number(curr) || 0);
  });
    return a === b;  
  }
  // does a given char appear the same amount of times 
  
  // turn the given values into an array 
  
  // Sort the array 
  
  // compare the arrays 


  function getFrequency(string) {
    var freq = {};
    for (var i=0; i<string.length;i++) {
        var character = string.charAt(i);
        if (freq[character]) {
           freq[character]++;
        } else {
           freq[character] = 1;
        }
    }
    return freq;
};

// Conways Constant 1.303577269 ..

const lookNSay = digits => {
  let result = '';
  let chars = (digits + '').split(''); 
  let lastChar = chars[0];
  let count = 0; 

  chars.forEach(nextChar => {
    if(nextChar === lastChar){
      count ++; 
    } else {
      result += (count + '') + lastChar; 
      lastChar = nextChar; 
      count = 1; 
    }
  });
  return result; 
}

const run = (data,len) => {
  for(let i = 0; i < len; i ++){
    console.log(`
      Iteration ${i + 1}: ${seed.length} Digits Seed: ${seed}
    `); 
    data = lookNSay(data);
  }
}

function lookAndSay(data,len){
  let freq = {};
  let prev = data.toString(); 
  const result = []; 
  for(let h = data; h < len; h ++){
    
    for (let i=0; i < prev.length; i++) {
        let character = prev.charAt(i);
        if (freq[character]) {
           freq[character]++;
        } else {
           freq[character] = 1;
        }
    }
    // turn object to string javascript
   prev = Object.entries(freq).join().replace(/,/g,''); 
  result.push(prev); 
  freq = {};
  }


  return result; 
}


function lookAndSay(data,len){
  
  const conway = []; 
  for(let h = data; h < len; h ++){
    let digits = data.toString(); 
    let result = ''; 
    let chars = (digits + '').split('');
    let lastChar = chars[0];
    let count = 0; 
    
    chars.forEach(nextChar => {
      if(nextChar === lastChar){
        count ++;
      } else {
        result += (count + '') + lastChar;
        lastChar = nextChar; 
        count = 1; 
      }
    }); 
    conway.push(result); 
    
  }
  return conway; 
}

function lookAndSay(data,len){
  let res = '';
  let count = 1;
  function countNum(data) {
    let str = '';
    for(let i = 0; i < data.length;i++) {
       (data[i] === data[i+1]) && count++;  
        if(data[i] !== data[i+1]) {
        str += (count.toString() + data[i]);
        count = 1;
      }
    }
    return str;
  }
  if(len === 1 && data.length === 1) {
      res += (count.toString() + data);
      return res;
  } 
  else if (len === 1) {
    res += countNum(data);
    return res;
  }
  if(len > 1) {
    let countRes = countNum(data);
    res += countRes + ',';
    res += lookAndSay(countRes, len-1);
  }
  return res.split(',');
}

function dirReduc(dirs){
  for(var i=0;i<dirs.length;i++){
    if( dirs[i] === "NORTH" && dirs[i+1] === "SOUTH"){
      dirs.splice(i, 2);
      i-=2;
      continue;
    }
    if( dirs[i] === "EAST" && dirs[i+1] === "WEST"){
      dirs.splice(i, 2);
      i-=2;
      continue;
    }
    if( dirs[i] === "SOUTH" && dirs[i+1] === "NORTH"){
      dirs.splice(i, 2);
      i-=2;
      continue;
    }
    if( dirs[i] === "WEST" && dirs[i+1] === "EAST"){
      dirs.splice(i, 2);
      i-=2;
      continue;
    }
  }
  
  return dirs;
}


function dirReduc(arr){
  for(let i = 0; i <= arr.length; i ++) {
    if(arr[i] === "NORTH" && arr[i + 1] === "SOUTH"){
      arr.splice(i,2); 
      i-=2;
    }
    
    if(arr[i] === "EAST" && arr[i + 1] === "WEST"){
      arr.splice(i,2); 
      i-=2;
    }
    
    if(arr[i] === "SOUTH" && arr[i + 1] === "NORTH"){
      arr.splice(i,2); 
      i-=2; 
    }
    
    if(arr[i] === "WEST" && arr[i + 1] === "EAST"){
      arr.splice(i,2); 
      i-=2;
    }
  }
  
  
  return arr; 
}

function countLetter (str, letter){
  count = 0; 
  for (var c of str) {
    if (c == letter){
      count ++
    }
  }
  return count; 
}
//countLetter('aaabcdd', 'a')

var mix = (s1, s2) => {
  var regexp = /[a-z]/g;
  s1 = s1.match(regexp).sort(''); // only lowercase letters
  s2 = s2.match(regexp).sort('');
  
  let output = []; 
  
  for(var c of s1) {
    let subArr = []; 
    //only compare when both have 
    if (s2.includes(c)) { 
      let countLet_s1 = countLetter(s1,c);
      let countLet_s2 = countLetter(s2,c);
      if (countLet_s1 <2 && countLet_s2 < 2){ // ignore letters not repeated more than once 
        continue; 
      } else {
         if (countLet_s1 > countLet_s2){
           subArr.push('1:');
           subArr.push(c.repeat(countLet_s1))
         } else if (countLet_s2 > countLet_s1) {
           subArr.push('2:');
           subArr.push(c.repeat(countLet_s2))
        } else {
          subArr.push('=:');
          subArr.push(c.repeat(countLet_s1)) // either one since they should be same
        }
      }
    }
    output.push(subArr);
  } // for loop
  
  // remove duplicates
      var newarr = output.filter(function(it){ 
      var result = this.indexOf(it[1]) === -1;
      this.push(it[1]); 
      return result;
    }, []);
    
    // get rid of empty arrays
    let res = []; 
    newarr.forEach(a => {
      if (a.length>1){
        res.push(a)
      }
    });

    res.sort(function(a, b){
  // ASC  -> a.length - b.length
  // DESC -> b.length - a.length
    return b[1].length - a[1].length;
    });
    

    // alphabetize letters with same count ???

  return res; 
}

let s1 = "my&friend&Paul has heavy hats! &"
let s2 = "my friend John has many many friends &"
mix(s1, s2) // --> "2:nnnnn/1:aaaa/1:hhh/2:mmm/2:yyy/2:dd/2:ff/2:ii/2:rr/=:ee/=:ss"


function mix(s1, s2) {
  // create on object with a frequency counter for each string 
s1 =  s1.match(/[a-z]/g).sort('');
s1 = s1.filter((e,i)=> s1.indexOf(e) !== i); 
s2 = s2.match(/[a-z]/g).sort('');  
s2 = s2.filter((e,i)=> s2.indexOf(e) !== i); // add an extra char for thoes apperaing after this
// compare the objects and take the max value for each character

return [s1,s2]; 
// return a string in the order of appereance 
}

function mix(s1, s2) {
  var valid = 'abcdefghijklmnopqrstuvwxyz'.split(''),
      validLength = valid.length,
      grouped = [],
      final = [],
      regEx,
      found,
      toReturn = '';
  for ( var i = 0; i < validLength; i++ ) {
    regEx = new RegExp( valid[i], 'g' );
    // group letters for s1
    found = s1.match( regEx );
    if ( found && found.length > 1 ) {
      if ( ! grouped[ i ] ) {
        grouped[ i ] = [];
      }
      grouped[ i ][0] = found.join('');
    }
    // group letters for s2
    found = s2.match( regEx );
    if ( found && found.length > 1 ) {
      if ( ! grouped[ i ] ) {
        grouped[ i ] = [];
      }
      grouped[ i ][1] = found.join('');
    }
  }
  // Decide which word has more of each letter
  for ( var key in grouped ) {
    if ( ! grouped[ key ][0] ) {
      final.push( [ 2, grouped[ key ][1] ] );
    } else if ( ! grouped[ key ][1] ) {
      final.push( [ 1, grouped[ key ][0] ] );
    } else if ( grouped[ key ][0].length > grouped[ key ][1].length ) {
      final.push( [ 1, grouped[ key ][0] ] );
    } else if ( grouped[ key ][1].length > grouped[ key ][0].length ) {
      final.push( [ 2, grouped[ key ][1] ] );
    } else {
      final.push( [ '=', grouped[ key ][0] ] );
    }
  }

  [2, 'eeeee'], ['=', 'hh'], ['=', 'rr'], [2, 'yy']]

  final.sort(function( a, b ){
    var aLen = a[1].length,
        bLen = b[1].length;
    if ( aLen > bLen  ) {
      // Favor more letters and instances of one word having more
      // letters than the other, i.e., no [0] = '='
      return -1;
    } else if ( aLen < bLen ) {
      return 1;
    } else if ( aLen === bLen ) {
      if ( '=' !== a[0] && '=' === b[0] ) {
        return -1;
      } else if ( '=' !== b[0] && '=' === a[0] ) {
        return 1;
      } else if ( a[0] < b[0] ) {
        return -1;
      } else if ( b[0] < a[0] ) {
        return 1;
      }
      if ( a[1].charCodeAt(0) < b[1].charCodeAt(0) ) {
        return -1;
      } else if ( a[1].charCodeAt(0) > b[1].charCodeAt(0) ) {
        return 1;
      } else {
        return 0;
      }
    }
  });
  return final.map(function(a){
    return a[0] + ':' + a[1];
  }).join('/');
}


function mix(s1, s2) {
  s1 = s1.replace(/ /g,''); 
  s2 = s2.replace(/ /g,'');
  function getFrequency(string) {
    var freq = {};
    for (var i=0; i<string.length;i++) {
        var character = string.charAt(i);
        if (freq[character]) {
           freq[character]++;
        } else {
           freq[character] = 1;
        }
    }
    return freq;
};
  s1 = getFrequency(s1); 
  s1 = Object.entries(s1).filter(e=> e[1] !== 1)
  s2 = getFrequency(s2);
  s2 = Object.entries(s2).filter(e=> e[1] !== 1)
  console.log(s1);
  console.log(s2); 
  return [s1,s2]
}



function mix(s1, s2) {
  s1 = s1.replace(/ /g,''); 
  s2 = s2.replace(/ /g,'');
  function getFrequency(string) {
    var freq = {};
    for (var i=0; i<string.length;i++) {
        var character = string.charAt(i);
        if (freq[character]) {
           freq[character]++;
        } else {
           freq[character] = 1;
        }
    }
    return freq;
};
  s1 = getFrequency(s1); 
  s1 = Object.entries(s1).filter(e=> e[1] !== 1)
  s1 = s1.map(e => { e.unshift('1:');
    return e; 
  })
  s2 = getFrequency(s2);
  s2 = Object.entries(s2).filter(e=> e[1] !== 1)
  s2 = s2.map(e => { e.unshift('2:');
    return e;
  }) 
  let group = s1.concat(s2); 
  for(let i=0; i < group.length; i ++){
    let cur = group[i][1]; 
    for(let j = 0; j < group.length; j ++){
      if(group[j][1] === cur && group[j][0] !==  group[i][0]){
        if(group[j][2] > group[i][2]){
          group[i] = false; 
        } else if(group[i][2] > group[j][2]){
          group[j] = false;
        } else{
          group[i] = false;
          group[j][0] = '=:'; 
        }
        
      }  // keep bigger one or replace with =: 
    }
  }
  group = group.filter(e=> e)
  
  for(let i =0; i < group.length; i ++){
    let char = group[i][1]; 
    for(let j = 1; j < group[i][2]; j++){
      char = char + group[i][1];
    }
    group[i][1] = char; 
    group[i].splice(-1,1) 
  }
  
  console.log(group); 
  
  return group; 
}


function lookAndSay(firstElement,n){
  let res = '';
  let count = 1;
  function countNum(firstElement) {
    let str = '';
    for(let i = 0; i < firstElement.length;i++) {
       (firstElement[i] === firstElement[i+1]) && count++;  
        if(firstElement[i] !== firstElement[i+1]) {
        str += (count.toString() + firstElement[i]);
        count = 1;
      }
    }
    return str;
  }
  if(n === 1 && firstElement.length === 1) {
      res += (count.toString() + firstElement);
      return res;
  } 
  else if (n === 1) {
    res += countNum(firstElement);
    return res;
  }
  if(n > 1) {
    let countRes = countNum(firstElement);
    res += countRes + ',';
    res += lookAndSay(countRes, n -1);
  }
  return res.split(',');
}
