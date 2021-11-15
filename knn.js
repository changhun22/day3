//KNN (K-Nearest Neighbor 머신러닝 K-최근접 이웃 알고리즘)을 이용하여 영화 장르 알아보기
//https://bkshin.tistory.com/entry/%EB%A8%B8%EC%8B%A0%EB%9F%AC%EB%8B%9D-6-K-%EC%B5%9C%EA%B7%BC%EC%A0%91%EC%9D%B4%EC%9B%83KNN
const readlineSync = require("readline-sync")

const movies = [
    {action: 12, kiss: 2, category: 'A'}, //암살
    {action: 2, kiss: 14, category: 'M'}, //어바웃 타임
    {action: 7, kiss: 2, category: 'A'}, //토이스토리
    {action: 2, kiss: 10, category: 'M'}, //노팅힐
    {action: 6, kiss: 15, category: 'M'}, //타이타닉
]

const actionCut = parseInt(readlineSync.question("Action Cunt"))
const kissCut = parseInt(readlineSync.question("Kiss Count"))

const target = {action: actionCut, kiss: kissCut} // 반지의 제왕


//두지점 사이의 거리를 구해서 정렬하기
movies.sort((a,b) => {

    const disA = Math.sqrt(Math.pow((a.action - target.action), 2) + Math.pow(a.kiss - target.kiss,2))
    const disB = Math.sqrt(Math.pow((b.action - target.action), 2) + Math.pow(b.kiss - target.kiss,2))


    return disA - disB > 0 ? 1: -1
})

console.log(movies)

const knum = 3

const result = {actionCount:0, kissCount:0 }

for (let i = 0; i < knum; i++) {
    const movie = movies[i]
    if (movie.category === 'A'){
        result.actionCount += 1
    }else if(movie.category === 'M'){
        result.kissCount += 1
    }
}

console.log(result)

const str = result.actionCount > result.kissCount ? '액션':'멜로'

console.log(`이 영화는 ${str}영화인거 같습니다.`)