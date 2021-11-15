
//js literal object
const pointArr = [
    {name:'A', xpos:3 ,ypos:10},
    {name:'B', xpos:7 ,ypos:6},
    {name:'C', xpos:3 ,ypos:2},
    {name:'D', xpos:6 ,ypos:2},
]

// //for문을 사용하여 pointArr을 출력한다
// for (let i = 0; i < pointArr.length; i++) {
//
//     const point = pointArr[i]
//
//     console.log(point)
// }

const target = {xpos:6 ,ypos:3}

pointArr.sort((a, b) => {
    const distanceA = Math.sqrt(Math.pow(a.xpos - target.xpos ,2) + Math.pow(a.ypos - target.ypos ,2))
    const distanceB = Math.sqrt(Math.pow(b.xpos - target.xpos ,2) + Math.pow(b.ypos - target.ypos ,2))

    return distanceA - distanceB

} )

console.log(pointArr)

// //js for of문(위의 for문과 동일한 결과값이 나오게 사용할수 있다)
// for (const pointArrElement of pointArr) {
//
//     console.log(pointArrElement)
//
//     //trarget과 pointArrElemet의 거리 계산
//     //Math.sqrt = 루트 /Math.pow(base, exponent) base=밑 exponent 지수 = 제곱함수
//     const distance = Math.sqrt(Math.pow(pointArrElement.xpos - target.xpos ,2) +
//         Math.pow(pointArrElement.ypos - target.ypos ,2))
//
//         console.log(distance)
// }