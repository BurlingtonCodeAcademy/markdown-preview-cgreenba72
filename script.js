let sourceTextBox = document.getElementById('source')
let preview = document.getElementById('preview')
let markupButton = document.getElementById('render')
let boldButton = document.getElementById('bold')
let italicizeButton = document.getElementById('italicize')
let selection = ""

function markdownText() {
    let sourceText = sourceTextBox.value
    preview.innerHTML = marked(sourceText)
}
function selectedText(event) {
    selection = event.target.value.substring(event.target.selectionStart, event.target.selectionEnd);
    return selection
}


function boldText() {
    let lettersOfSelection = selection.split('')
    if (selection === ("")) {
        return
    }
    else if (lettersOfSelection[0] !== ("*") && lettersOfSelection[lettersOfSelection.length - 1] === ("*")) {
        return
    }
    else if (lettersOfSelection[0] === ("*") && lettersOfSelection[1] !== ("*") && lettersOfSelection[lettersOfSelection.length - 2] !== ("*") && lettersOfSelection[lettersOfSelection.length - 1] === ("*")) {
        lettersOfSelection.unshift("**")
        lettersOfSelection.push("**")
        let solidString = lettersOfSelection.join('')
        sourceTextBox.setRangeText(solidString)
        return
    }
    else if (lettersOfSelection[0] === ("*") && lettersOfSelection[1] === ("*")) {
        lettersOfSelection.shift()
        lettersOfSelection.shift()
        lettersOfSelection.pop()
        lettersOfSelection.pop()
        let solidString = lettersOfSelection.join('')
        sourceTextBox.setRangeText(solidString)
        return
    }
    else if (lettersOfSelection[0] !== ("*") && lettersOfSelection[1] !== ("*")) {
        lettersOfSelection.unshift("**")
        lettersOfSelection.push("**")
        let solidString = lettersOfSelection.join('')
        sourceTextBox.setRangeText(solidString)
        return
    }
    else {
        return
    }
}


function italText() {
    let lettersOfSelection = selection.split('')
    if (selection === ("")) {
        return
    }
    else if (lettersOfSelection[0] !== ("*") && lettersOfSelection[lettersOfSelection.length - 1] === ("*")) {
        return
    }
    else if (lettersOfSelection[0] !== ("*") && lettersOfSelection[lettersOfSelection.length - 1] !== ("*")) {
        lettersOfSelection.unshift("*")
        lettersOfSelection.push("*")
        let solidString = lettersOfSelection.join('')
        sourceTextBox.setRangeText(solidString)
        return
    }
    else if (lettersOfSelection[0] === ("*") && lettersOfSelection[1] !== ("*") && lettersOfSelection[lettersOfSelection.length - 1] === ("*") && lettersOfSelection[lettersOfSelection.length - 2] !== ("*")) {
        lettersOfSelection.shift()
        lettersOfSelection.pop()
        let solidString = lettersOfSelection.join('')
        sourceTextBox.setRangeText(solidString)
        return
    }
    else if (lettersOfSelection[0] === ("*") && lettersOfSelection[1] === ("*") && lettersOfSelection[2] !== ("*") && lettersOfSelection[lettersOfSelection.length - 2] === ("*") && lettersOfSelection[lettersOfSelection.length - 1] === ("*")) {
        lettersOfSelection.unshift("*")
        lettersOfSelection.push("*")
        let solidString = lettersOfSelection.join('')
        sourceTextBox.setRangeText(solidString)
        return
    }
    else if (lettersOfSelection[0] === ("*") && lettersOfSelection[1] === ("*") && lettersOfSelection[2] === ("*")) {
        lettersOfSelection.shift()
        lettersOfSelection.pop()
        let solidString = lettersOfSelection.join('')
        sourceTextBox.setRangeText(solidString)
        return
    }
    else {
        return
    }
}



sourceTextBox.placeholder = ("Type Commands in this box...")
sourceTextBox.addEventListener('input', markdownText)
sourceTextBox.addEventListener('select', selectedText)
markupButton.addEventListener('click', markdownText)
boldButton.addEventListener('click', boldText)
italicizeButton.addEventListener('click', italText)
boldButton.addEventListener('click', markdownText)
italicizeButton.addEventListener('click', markdownText)