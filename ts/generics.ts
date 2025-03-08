function simpleStrState(initial: string): [()=> string, (v: string) => void] {
  let str: string = initial;
  return [
    ()=> str,
    (v: string) => {
      str = v
    }
  ]
};

function ranking<RankItem>(items: RankItem[], rank: (v:RankItem) => number): RankItem[] {

  const ranks = items.map(item=> ({
    item,
    rank: rank(item)
  }))

  ranks.sort((a,b) => a.rank - b.rank)

  return ranks.map((rank => rank.item))
}


interface Digimon { 
  name: string;
  level: number;
}

const digimon: Digimon[] = [
  {
    name: 'patamon',
    level: 2
  },
  {
    name: 'agumon',
    level: 3
  }
]

console.log(ranking(digimon, ( { level }) => level));