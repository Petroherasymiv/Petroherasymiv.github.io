let masColor = ['red', 'yellow', 'pink', 'black', 'blue', 'brown', 'orange', 'bisque', 'green']
const QS = selector => document.querySelector(selector);
QS('.butEdit').addEventListener('click', () => {
    QS('.editClass').classList.remove('hide')
    QS('.editArea').value = QS('header').innerHTML;
    QS('.styleClass').classList.add('hide')
})
QS('.butStyle').addEventListener('click', () => {
    QS('.styleClass').classList.remove('hide')
    QS('.editClass').classList.add('hide')
})
QS('.butSave').addEventListener('click', () => {
    QS('header').innerHTML = QS('.editArea').value;
    QS('.editClass').classList.add('hide')
})
// Start function font-size
QS('.clickRadio').addEventListener('click', (event) => QS('header').style.fontSize = event.target.value)
// End function font-size
// Start function font-family
QS('.clickOption').addEventListener('click', (event) => QS('header').style.fontFamily = event.target.value)
// End function font-family
// Start function change color
QS('.buttColor').addEventListener('click', () => {
    QS('.changeColor').classList.remove('hide')
    for (let i = 0; i < QS('.changeColor').children.length; i++) {
        QS('.changeColor').children[i].style.backgroundColor = masColor[i];
        QS('.changeColor').children[i].onclick = function () {
            QS('header').style.color = this.style.backgroundColor;
            QS('.changeColor').classList.add('hide')
        }
    }
})
// End function change color
// Start function change Background color
QS('.buttBackgroundColor').addEventListener('click', () => {
    QS('.changeColor').classList.remove('hide')
    for (let i = 0; i < QS('.changeColor').children.length; i++) {
        QS('.changeColor').children[i].style.backgroundColor = masColor[i];
        QS('.changeColor').children[i].onclick = function () {
            QS('header').style.backgroundColor = this.style.backgroundColor;
            QS('.changeColor').classList.add('hide')
        }
    }
})
// Start function change font style bold
QS('.checkBold').addEventListener('click', () => QS('.checkBold').checked ? QS('header').style.fontWeight = 'bold' : QS('header').style.fontWeight = 'normal')
// End function change font style bold
// Start function change font style cursive
QS('.checkCursive').addEventListener('click', () => QS('.checkCursive').checked ? QS('header').style.fontStyle = 'italic' : QS('header').style.fontStyle = 'normal')
// End function change font style cursive

QS('.butAdd').addEventListener('click', () => {
    QS('.firstClass').classList.add('hide')
    QS('.secondClass').classList.remove('hide')
})
QS('.butCreateList').addEventListener('click', () => {
    let countLi = QS('.countLi').value;
    let typeLi = QS('.chooseOption').value;
    console.log(QS('.editArea').value)
    QS('.editArea').value += `<ul style="list-style-type: ${typeLi}">`;
    for (let i = 0; i < countLi; i++) {
        QS('.editArea').value += `<li>item ${i + 1}</li>`;
    }
    QS('.editArea').value += '</ul>';
    QS('.firstClass').classList.remove('hide')
    QS('.secondClass').classList.add('hide')
})
QS('.ChooseWhatYouWant').addEventListener('click', (event) => {
    if (event.target.value === 'list') {
        QS('.createList').classList.remove('hide')
        QS('.createTable').classList.add('hide')
    } else if (event.target.value === 'table') {
        QS('.createList').classList.add('hide')
        QS('.createTable').classList.remove('hide')
    }
})
QS('.buttCreateTable').addEventListener('click', () => {
    let countTD = QS('.countTD').value;
    let countTR = QS('.countTR').value;
    let typeBorder = QS('.chooseTypeBorder').value
    let colorBorder = QS('.chooseColorBorder').value
    let widthBorder = QS('.chooseWidthBorder').value
    let countWidthTD = QS('.countWidthTD').value
    let countHeightTD = QS('.countHeightTD').value

    QS('.editArea').value += '<tbody><table>';
    for (let i = 0; i < countTR; i++) {
        QS('.editArea').value += `<tr></tr>`;
        for (let i = 0; i < countTD; i++) {
            QS('.editArea').value += `<td style="border: ${widthBorder}px ${typeBorder} ${colorBorder}" width="${countWidthTD}" height="${countHeightTD}">TD</td>`;
        }
    }
    QS('.editArea').value += '</tbody></table>';
    QS('.createTable').classList.add('hide')
    QS('.secondClass').classList.add('hide')
    QS('.firstClass').classList.remove('hide')
})

