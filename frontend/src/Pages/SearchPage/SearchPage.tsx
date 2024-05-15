import Rct, { ChangeEvent, SyntheticEvent, useState } from 'react'
import { searchCompanies } from '../../../api';
import { CompanySearch } from '../../../company';
import CardList from '../../CardList/CardList';
import Navbar from '../../Navbar/Navbar';
import ListPortfolio from '../../Portfolio/ListPortfolio/ListPortfolio';
import Search from '../../Search/Search';


interface Props {}

const SearchPage = (props: Props) => {

const [search, setSearch] = useState<string>("");
  const [portfolioValues, setPortfolioValues] = useState<string[]>([]);
  const [searchResult, setSearchResult] = useState<CompanySearch[]>([])
  const [serverError, setServerError] = useState<string | null>(null);
  

    const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) =>{
        setSearch(e.target.value);
        console.log(e);
    }

    const onPortfolioCreate = (e: any) => {
      e.preventDefault(); //Necessary
      const exists = portfolioValues.find((value) => value === e.target[0].value);
      if (exists) return;
      const updatedPortfolio = [...portfolioValues, e.target[0].value];
      setPortfolioValues(updatedPortfolio);
    };

    const onPortfolioDelete = (e: any) => {
      e.preventDefault();// Page doesn't load when submited so it doesnt blow all the data.
      const removed = portfolioValues.filter((value) => {
        return value !== e.target[0].value; 
      })
      setPortfolioValues(removed);
    };

    const onSearchSubmit = async (e: SyntheticEvent) => {
      e.preventDefault();
      const result = await searchCompanies(search);
      if(typeof result === "string"){
        setServerError(result);
      }else if(Array.isArray(result.data)){
        setSearchResult(result.data);
      }
      console.log(searchResult);
    };

  return (
    <div className="App">
      <Search onSearchSubmit={onSearchSubmit} search={search} handleSearchChange={handleSearchChange}/>
      <ListPortfolio portfolioValues={portfolioValues} onPortfolioDelete={onPortfolioDelete}/>
      <CardList searchResults={searchResult} onPortfolioCreate={onPortfolioCreate}/>
      {serverError && <h1>{serverError}</h1>}
    
    </div>
  )
}

export default SearchPage