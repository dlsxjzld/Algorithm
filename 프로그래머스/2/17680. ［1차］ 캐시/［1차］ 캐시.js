

function solution(cacheSize, cities) {
    var answer = 0;
    let cache = []
    const convertedCities = cities.map((city)=>city.toLowerCase())

    for(let city of convertedCities){
        if(!cache.includes(city)){
            const currentSize = cache.length
            if(currentSize < cacheSize){
                cache.push(city)
            }else{
                if(cacheSize !==0){
                    cache.shift()
                    cache.push(city)   
                }
            }
            answer += 5
        }else{
            let targetIdx = cache.indexOf(city)
            const targetCity = cache[targetIdx]
            const newCache = [...cache.slice(0,targetIdx), ...cache.slice(targetIdx+1)]
            newCache.push(targetCity)
            cache = newCache
            answer +=1
        }
    }
    
    return answer;
}