function makeCourse(ALL_COURSE,maxCourseLength,orders,start,currentCourse){
    if(currentCourse.length === maxCourseLength){
        ALL_COURSE.set(currentCourse.sort().join(''), (ALL_COURSE.get(currentCourse.sort().join('')) ?? 0) +1)
        return
    }
    for(let i=start;i<orders.length;i+=1){
        makeCourse(ALL_COURSE,maxCourseLength,orders,i+1,[...currentCourse,orders[i]])   
    }
    
}

function solution(orders, course) {
    var answer = [];
    const ALL_COURSE = new Map()
    for(let c of course){
        for(let ord of orders){
            if(ord.length < c){
                // 만들어야 할 코스에 필요한 메뉴 수 보다 주문한 단품메뉴 조합의 수가 작으면 못 만듬
                continue
            }
            makeCourse(ALL_COURSE,c,ord,0,[])   
            
        }
    }
    const newCourses = Array.from(ALL_COURSE).filter(([val,cnt])=>cnt !== 1).sort((a,b)=> b[1]-a[1])
    for(let c of course){
        const filteredCourses = newCourses.filter(([val,cnt])=>val.length === c)
        const MAX_COUNT = Math.max(...filteredCourses.map(([val,cnt])=>cnt))
        const myCourse = filteredCourses.filter(([val,cnt])=>cnt===MAX_COUNT)
        answer.push(...myCourse.map(([val])=>val))
    }
    // 각 손님이 주문한 단품메뉴 조합에서 course를 순회하며 course 원소만큼 메뉴조합해야함
    // 알파벳 오름차순 정렬
    // 만들어진 각 메뉴조합마다 개수
    return answer.sort();
}