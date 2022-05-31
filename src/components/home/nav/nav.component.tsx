
import { useState } from 'react';
import { NavOptionsWrapper, TravelersLogoText } from '../../../atoms';
import { NavHomeStyles, NavSearchInput, NavSearchWrapper } from '../../../styles';

export function NavHome() {
  const [search, setSearch] = useState('');
  return (
    <nav style={NavHomeStyles}>
      <TravelersLogoText />
      <div style={NavSearchWrapper}>
        <input style={NavSearchInput} type="text" value={search} placeholder="Search" onChange={(e) => setSearch(e.target.value)}/>
      </div>
      <NavOptionsWrapper />
    </nav>
  )
}