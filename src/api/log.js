export default class LogModel {

    static ordinal_suffix_of(i) {
    let j = i % 10
    if (j ==1) return `${i}st`
            
    if(j==2)  return `${i}nd`
           
    if(j==3) return `${i}rd`
           
    return `${i}th`
    }
}