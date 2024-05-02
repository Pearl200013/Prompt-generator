function generateRandomNum(num) {
    return Math.floor(Math.random() * num)
};

const storyIdeas = {
    category: ['fantasy', 'horror', 'romance', 'adventure'],
    promptResult: ['an enchated rose', 'a cursed gem', 'crushing on a vampire', 'hunting down a serial killer', 'protecting a loved one'],
    rules: ['two hours to complete this', 'a three-thousand word limit', 'less than 24 hours', 'forty-five minutes']
}

let taleIdeas = []

for(let column in storyIdeas) {
    let propIdx = generateRandomNum(storyIdeas[column].length)
    switch(column) {
        case 'category':
            taleIdeas.push(`Your genre is "${storyIdeas[column][propIdx]}".`)
            break
        case 'promptResult':
            taleIdeas.push(`Now write about "${storyIdeas[column][propIdx]}".`)
            break
        case 'rules': 
            taleIdeas.push(`You have "${storyIdeas[column][propIdx]}".`)
            break
        default:
            taleIdeas.push('Error info incomplete.')
    }
}

function formatIdeas(ideas) {
    const formatted = taleIdeas.join('\n')
    console.log(formatted)
}

formatIdeas(taleIdeas);