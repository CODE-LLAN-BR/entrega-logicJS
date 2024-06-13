


let studentList = [{

    name:`Leonardo`,
    firstNote:9.6,
    secondNote:9.8,
},
{
    name:`Luiza`,
    firstNote:5.6,
    secondNote:6.8,
},
{
    name:`Jorge`,
    firstNote:4.2,
    secondNote:4.8,
},
{
    name:`Matheus`,
    firstNote:8.0,
    secondNote:9.4,
}
]

function sumOfNotes(list){
    
    for(let i = 0 ; i < list.length;i++){
        let total= (list[i].firstNote + list[i].secondNote) /2 ;
        total= total.toFixed(1)
        if( total >=7 ){
            alert(`Á média do aluno(a) ${list[i].name} é ${total} 
                Parabéns ${list[i].name},você foi aprovado(a)`)
        }else{
            alert(`Á média do aluno(a) ${list[i].name} é ${total} 
                Que pena ${list[i].name},você foi reprovado(a)`)
        }
    }
}

sumOfNotes(studentList)
