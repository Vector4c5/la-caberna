import React from 'react';
import Link from 'next/link';


export default function Personaje (){
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-2xl font-bold mb-4">D&D Character Creation</h1>
      <nav className="space-y-4">
        <Link href="/ability-scores"
          className="px-4 py-2 bg-blue-500 text-white rounded-md">Ability Scores
        </Link>
        <Link href="/classes"
      className="px-4 py-2 bg-blue-500 text-white rounded-md">Classes
        </Link>
        <Link href="/races"
       className="px-4 py-2 bg-blue-500 text-white rounded-md">Races
        </Link>
        <Link href="/skills"
      className="px-4 py-2 bg-blue-500 text-white rounded-md">Skills
        </Link>
        <Link href="/backgrounds"
        className="px-4 py-2 bg-blue-500 text-white rounded-md">Backgrounds
        </Link>
      </nav> 
      
    </div>
  );
}


