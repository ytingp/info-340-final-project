export default function SearchBar(props) {
  function handleInput(evt) {
    let lowerCase = evt.target.value.toLowerCase();
    props.setTerm(lowerCase);
  }
  return (
    <form id="search">
      <label htmlFor="search">Search</label>
      <input type="text" placeholder="Search for games.." name="search" onChange={handleInput}></input>
    </form>
  );
}