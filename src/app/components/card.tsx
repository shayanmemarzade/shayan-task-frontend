import Image from 'next/image'
import { Character } from '../model/character'

type Props = {
  character: Character
}

export default function Card({ character }: Props) {

  const statusColor = (status: string) => {
    if (status === 'Dead') {
      return 'bg-red-600'
    }
    if (status === 'Alive') {
      return 'bg-green-600'
    }
    return 'bg-gray-400'
  }

  return (
    <article className="flex flex-col md:flex-row text-white rounded-lg overflow-hidden">
      <div className="max-h-60 md:w-5/12">
        <Image src={character.image}
          alt={character.name}
          width={500}
          height={500}
          className='w-full h-full object-cover' />
      </div>
      <div className="bg-slate-600 p-4 md:w-7/12">
        <div className="section mb-3">
          <a href={character.url} rel="noopener noreferrer" target="_blank" className="font-bold text-2xl">
            <h2>{character.name}</h2>
          </a>
          <span className="gap-2 flex items-center">
            <div className={`w-2 h-2 rounded-full ${statusColor(character.status)}`}></div>
            {character.status} - {character.species}
          </span>
        </div>
        <div className="section">
          <span className="text-gray-400 block text-sm">Last known location:</span>
          <a href={character.location.url} rel="noopener noreferrer" target="_blank" className=""> {character.location.name}</a>
        </div>
      </div>
    </article>
  )
}
