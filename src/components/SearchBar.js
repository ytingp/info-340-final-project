export default function SearchBar() {
  return (
    <form id="search">
      <label htmlFor="search">Search</label>
      <input type="text" placeholder="Search for games.." name="search"></input>
      <button type="submit"><i className="fa fa-search"></i></button>
    </form>
  );
}

const search = () => {
  const searchbox = document.getElementById("search-item").value.toUpperCase();
  const storeitems = document.getElementById("group")
  const game = document.querySelectorAll("group")
  const gname = document.getElementsByTagName("h2")

  for (var i = 0; i < gname.length; i++) {
      let match = game[i].getElementsByTagName('h2')[0];

      if (match) {
          let textvalue = match.textContent || match.innerHTML

          if (textvalue.toUpperCase().indexOf(searchbox) > -1) {
              game[i].style.display = "";
          } else {
              game[i].style.display = "none";
          }
      }
  }
}