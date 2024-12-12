import Card from "./components/card";
import Dropdown from "./components/dropdown";
import { genders, statuses } from "./lib/constants";
import { Character } from './model/character';

export const dynamic = 'force-dynamic';

interface PageProps {
  searchParams: { status?: string, gender?: string };
}

export default async function Home({ searchParams }: PageProps) {
  const { status = '', gender = '' } = searchParams;

  const response = await fetch(`https://rickandmortyapi.com/api/character?status=${status}&gender=${gender}`);

  if (!response.ok) {
    throw new Error('Failed to fetch characters');
  }

  const { results }: { results: Character[] } = await response.json();

  return (
    <div className="pt-10">
      <div className="max-w-7xl mx-auto mb-10 px-5">
        <form className="flex gap-10">
          <Dropdown value={status} label="Status" queryParam="status" options={statuses} />
          <Dropdown value={gender} label="Gender" queryParam="gender" options={genders} />
        </form>
      </div>
      <div className="py-10 bg-slate-800">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-5">
          {results?.map((character: Character) => (
            <Card key={character.id} character={character} />
          ))}
        </div>
      </div>
    </div>
  );
}
