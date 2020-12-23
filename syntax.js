let questionIsShown = false;
let categories = new Map();
// Categories list
// Insert categories to Map Object
categories.set("cars", ["Porch", "Ferrari", "Lambo", "Bently", "Rolls-Royce"]);
categories.set("food", ["Pasta", "Falafel", "Hamburger", "Salad", "Kinoa"]);
categories.set("clothes", ["Zara", "Rennuar", "Fendi", "Prada", "Chanel"]);
categories.set("watches", ["Guess", "Rolex", "Seiko", "Cartier", "Pattek-Philippe"]);
categories.set("artists", ["K-dot", "J-Cole", "Kodak-black", "Drake", "The-Game"]);

for (const item of categories.keys()) {
    keyCategoriesContainer.innerHTML+=`<div id="${item}id" class="categories" 
    onmouseover="showValues('${item}')" onmouseout="hideValues('${item}')" onclick="showQuestions('${item}')"><h3>${item}</h3>
    <ul style="opacity:0">${makeList(categories.get(item))}</ul>
    <div class="questionDiv"></div>
    </div>`
}

function showValues(keyCategory){
  document.getElementById(keyCategory+'id').querySelector('ul').style.opacity="1"
}
function hideValues(keyCategory){
    document.getElementById(keyCategory+'id').querySelector('ul').style.opacity="0"
  }
  //  להראות לסימן טוב את בנק המילים
  function showQuestions(category){
switch (category){
  case 'cars':
    document.querySelectorAll('.questionDiv')[0].innerHTML=`<p>Which is the fastest car?</p>`;
    questionIsShown=!questionIsShown
      if(questionIsShown){
        document.querySelectorAll('.questionDiv')[0].style.opacity="0"
      }else{document.querySelectorAll('.questionDiv')[0].style.opacity="1"}
    break;
    case 'food':
      document.querySelectorAll('.questionDiv')[1].innerHTML=`<p>Which is the best food?</p>`;
      break;
      case 'clothes':
        document.querySelectorAll('.questionDiv')[2].innerHTML=`<p>Which brand is represnted by Drake?</p>`;
        break;
        case 'watches':
        document.querySelectorAll('.questionDiv')[3].innerHTML=`<p>Which is the most expensive?</p>`;
        break;
        case 'artists':
        document.querySelectorAll('.questionDiv')[4].innerHTML=`<p>Which one dropped the hottest album?</p>`;
}
  }

function makeList(valueArray){
let string='';
    for (let i = 0; i < valueArray.length; i++) {
    string +=  `<li onclick="checkAnswer('${valueArray[i]}')">${valueArray[i]}</li>`
}
return string
}


function checkAnswer(listItem){
console.log(listItem);
}
