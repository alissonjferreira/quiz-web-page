const perguntas = [
    {
      pergunta: "Qual é o nome da cidade onde a série 'Stranger Things' se passa?",
      respostas: [
        "Hawkins",
        "Springfield",
        "Mill Valley"
      ],
      correta: 0
    },
    {
      pergunta: "Quem é o chefe de polícia em Hawkins?",
      respostas: [
        "Jim Hopper",
        "Mike Wheeler",
        "Jonathan Byers"
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o nome do mundo alternativo em 'Stranger Things'?",
      respostas: [
        "Mundo Invertido",
        "Terra Paralela",
        "Dimensão Sombria"
      ],
      correta: 0
    },
    {
        pergunta: "Qual é o nome do cientista que trabalhou no laboratório em Hawkins?",
        respostas: [
          "Dr. Brenner",
          "Dr. Cooper",
          "Dr. Smith"
        ],
        correta: 0
      },
    {
      pergunta: "Qual atriz interpreta Eleven em 'Stranger Things'?",
      respostas: [
        "Millie Bobby Brown",
        "Winona Ryder",
        "Finn Wolfhard"
      ],
      correta: 0
    },
    {
      pergunta: "Que jogo de RPG os meninos costumam jogar na série?",
      respostas: [
        "Dungeons & Dragons",
        "Magic: The Gathering",
        "Warhammer 40,000"
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o apelido dado ao monstro que habita o Mundo Invertido?",
      respostas: [
        "Demogorgon",
        "Kraken",
        "Beholder"
      ],
      correta: 0
    },
    {
        pergunta: "Qual é o nome do estranho ser de estimação de Dustin?",
        respostas: [
          "Mews",
          "Dart",
          "Max"
        ],
        correta: 1
      },
    {
      pergunta: "Que bebida é a favorita de Eleven?",
      respostas: [
        "Pepsi",
        "Fanta",
        "Coca-Cola"
      ],
      correta: 2
    },
    {
      pergunta: "Quem é o irmão mais velho de Will?",
      respostas: [
        "Jonathan",
        "Steve",
        "Billy"
      ],
      correta: 0
    }
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  const corretas = new Set()
  const totalPerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalPerguntas
  
  for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
  
    for(let resposta of item.respostas) {
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
      
      dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta
        corretas.delete(item)
        if (estaCorreta) {
          corretas.add(item)
        }
        mostrarTotal.textContent = corretas.size + ' de ' + totalPerguntas
      }
      
      quizItem.querySelector('dl').appendChild(dt)
    }
    quizItem.querySelector('dl dt').remove()
    quiz.appendChild(quizItem)
  }
