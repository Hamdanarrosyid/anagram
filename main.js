const myWordArray = ['kita', 'atik', 'tika', 'aku', 'kia', 'makan', 'kua']

let helpObjt = {}

myWordArray.forEach((word) => {
    let wordArray = Array.from(word)

    for (let index = 0; index < wordArray.length; index++) {
        let nextIndex = index + 1
        while (nextIndex < wordArray.length) {
            if (wordArray[nextIndex] < wordArray[index]) {
                let temp = wordArray[index]
                wordArray[index] = wordArray[nextIndex]
                wordArray[nextIndex] = temp
            }
            nextIndex++
        }
    }

    let wordString = wordArray.toString().replaceAll(',', '')

    if (helpObjt[wordString] != null) {
        helpObjt[wordString].push(word)
    } else {
        helpObjt[wordString] = [word]
    }
})

const result = Object.values(helpObjt)
console.log(result)