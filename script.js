const listOfGrades = [
  {
    name: "Jim",
    firstTest: 6,
    secondTest: 6.5
  },
  {
    name: "Pam",
    firstTest: 8,
    secondTest: 7.5
  },
  {
    name: "Oscar",
    firstTest: 9,
    secondTest: 9.5
  },
]

function average(firstTest, secondTest) {
  return((firstTest + secondTest) / 2).toFixed(2)
}

function printStudentsResults(student) {
  if(average(student.firstTest, student.secondTest) >= 7) {
  return(` 
  Parabéns ${student.name}, sua média foi de ${average(student.firstTest, student.secondTest)} e você foi APROVADO!
  `)
} else {
  return(`${student.name}, sua média foi de ${average(student.firstTest, student.secondTest)}. Não foi dessa vez :( Tente novamente!`)
  }
}

for(let student of listOfGrades){
  let results = printStudentsResults(student)
  alert(results)
}



