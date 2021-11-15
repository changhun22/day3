//분기별 최고매출 구하기

const arr = [
    [90, 87, 140], //1분기
    [120, 130, 150], //2분기
    [180, 240, 200], //3분기
    [180, 140, 190], //4분기
]
//분기별 평균데이터를 보관할수 있는 배열
const parr = []

//각 분기별로 매출 평균을 만든다
for (let i = 0; i < arr.length; i++) {
    const tempArr = arr[i]
    console.log(tempArr)

    let sum = 0
    for (let j = 0; j < tempArr.length; j++) {
        sum += tempArr[j]
    }
    const tempAvg = (sum/tempArr.length).toFixed(2)
    //console.log(tempAvg)
    parr.push(parseFloat(tempAvg))

}

console.log(parr)

// 최고 매출 금액 과 분기 찾기
let max = 0
let period = 0

for (let i = 0; i <parr.length; i++) {

    if(parr[i] > max){
        max = parr[i]
        period = i
    }
}

console.log("max:" + max)
console.log("period:" + (period + 1)+" 분기입니다.")