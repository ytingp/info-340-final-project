export default function SearchBar() {
  return (
    <form id="search">
      <label htmlFor="search">Search</label>
      <input type="text" placeholder="Search for games.." name="search"></input>
      <button type="submit"><i className="fa fa-search"></i></button>
    </form>
  );
}