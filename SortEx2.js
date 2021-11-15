
//js literal object
const pointArr = [
    {name:'A', xpos:3 ,ypos:10},
    {name:'B', xpos:7 ,ypos:6},
    {name:'C', xpos:3 ,ypos:2},
    {name:'D', xpos:6 ,ypos:2},
]


const target = {xpos:6 ,ypos:3}

//sort와 두점사이의 거리 함수를 이용하여 target에 가까운 순으로 pointArr을 정렬한 로직
pointArr.sort((a, b) => {
    const distanceA = Math.sqrt(Math.pow(a.xpos - target.xpos ,2) + Math.pow(a.ypos - target.ypos ,2))
    const distanceB = Math.sqrt(Math.pow(b.xpos - target.xpos ,2) + Math.pow(b.ypos - target.ypos ,2))

    return distanceA - distanceB

} )

console.log(pointArr)