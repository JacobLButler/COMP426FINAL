import React from 'react';

export async function init() {
    const result = document.querySelector('#result')
    initEvent(result);
}

 export async function initEvent(result) {
    document.querySelector('#search').addEventListener('submit', function (e) {
      e.preventDefault()
      if (e.target[0].value) {
        result.innerHTML = ''
        changeTextButton(e.target[1], 'SEARCHING...')
        search(e.target,result)
      }
    }, false)
  }


export async function search(form,result) {
    const formData = new FormData(form)

    fetch(`http://localhost:3001/foods/${formData.get('name')}`)
      .then(resp => resp.json())
      .then(resp => {
        if (!resp.error) {
          resp.forEach(hint => {
            insertCard(hint.food,result)
          })
        }
        else {
          changeInput(form[0], 'placeholder', 'We didn\'t found any food.')
          resetInput(form[0])
        }
        changeTextButton(form[1], 'SEARCH')
        changeInput(form[0], 'value', '')
      }).catch(() => {
        changeTextButton(form[1], 'SEARCH')
        changeInput(form[0], 'placeholder', 'An error has occurred. Try again later.')
        resetInput(form[0])
      })

}


export async function buildCard(data,result) {
    const energy = data.nutrients.ENERC_KCAL ? <li><b>Energy: </b><span>${data.nutrients.ENERC_KCAL}kcal</span></li> : ''
    const carbs = data.nutrients.CHOCDF ? <li><b>Carbs: </b><span>${data.nutrients.CHOCDF}g</span></li> : ''
    const protein = data.nutrients.PROCNT ? <li><b>Protein: </b><span>${data.nutrients.PROCNT}g</span></li> : ''
    const fat = data.nutrients.FAT ? <li><b>Fat: </b><span>${data.nutrients.FAT}g</span></li> : ''

    const html = `
    <div class="card">
      <div class="card-header">
        <h3>${data.label}</h3>
        <h4>${data.category}</h4>
      </div>
      <div class="card-body">
        <ul>
          ${energy}
          ${carbs}
          ${protein}
          ${fat}
        </ul>
      </div>
      <div class="card-footer">
        <p><b>Brand: </b><span>${data.brand || 'None 😞'}</span></p>
      </div>
    </div>
    `
    result.insertAdjacentHTML('beforeend', html);
  }

  export async function changeTextButton(button, text) {
    button.textContent = text
  }



export async function resetInput(input) {
    setTimeout(() => {
      changeInput(input, 'placeholder', 'Type a food or a meal...')
    }, 3000)
  }

 export async function changeInput(input, prop, value) {
    input[prop] = value
  }

 export async function insertCard(food,result) {
    console.log(food)
    buildCard(food,result);
  }