// code your solution here
const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    
  ]

function findRecord(element){
    return element.result === 'W';
}

function superbowlWin(array) {
   const records = array.find(findRecord)
   if(records) {
    return records.year
   } else {
    return undefined;
   }

}

