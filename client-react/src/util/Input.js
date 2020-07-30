export default class Input {

    static ordinal_suffix_of(i) {
        let j = i % 10
        if (j===1) return `${i}st`
                
        if(j===2)  return `${i}nd`
            
        if(j===3) return `${i}rd`
            
        return `${i}th`
    }

    static split_of(value) {
        // split the input and get checked words
        let split_value = value.toLowerCase().split(" ")
        let [first,second,third,fourth,fifth] = split_value
        let twowords = `${first} ${second}`
        let threewords = `${first} ${second} ${third}`
        let fourwords = `${first} ${second} ${third} ${fourth}`
      
        const special = ['first', 'second', 'third', 'fourth', 'fifth', 'sixth', 'seventh', 'eighth', 'ninth', 'tenth', 'eleventh', 'twelfth', 'thirteenth', 'fourteenth', 'fifteenth', 'sixteenth', 'seventeenth', 'eighteenth', 'nineteenth'];
        let index = special.indexOf(split_value[3])
        let indexForDelete = special.indexOf(split_value[2])
        return [first,fifth,twowords,threewords,fourwords,index,indexForDelete]

    }
}