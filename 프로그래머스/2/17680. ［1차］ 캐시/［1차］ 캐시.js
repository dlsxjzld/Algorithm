function solution(cacheSize, cities) {
    var answer = 0;
    const cache = []; 
    const convertedCities = cities.map((city) => city.toLowerCase());

    for (const city of convertedCities) {
        const indexInCache = cache.indexOf(city);

        if (indexInCache === -1) { 
            answer += 5;
            if (cache.length < cacheSize) {
                cache.push(city);
            } else if (cacheSize > 0) {
                cache.shift();
                cache.push(city);
            }
        } else { 
            answer += 1;
            
            const cachedCity = cache.splice(indexInCache, 1)[0];
            cache.push(cachedCity);
        }
    }

    return answer;
}