<!DOCTYPE html>
<html>
    <p2>Luthfi Ardhika Akbar - 41523010182.</p2>
   <head>
      <meta charset="utf-8">
        <style>
  .nav-buttons {
    display: flex;
    justify-content: center;
    gap: 15px;
    padding: 30px 0;
    background-color: #fff;
  }
  .nav-buttons button {
    padding: 12px 40px;
    font-size: 16px;
    font-weight: bold;
    border: 2px solid #f77f33;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s;
  }
  .btn-previous {
    background-color: #fff;
    color: #f77f33;
  }
  .btn-previous:hover {
    background-color: #f77f33;
    color: #fff;
  }
  .btn-next {
    background-color: #f77f33;
    color: #fff;
  }
  .btn-next:hover {
    background-color: #ff8c47;
  }
</style>

   </head>

   <body id="bd">
      <h1>Soal Essay: Document Object Model</h1>
      <div> 
         <img id="img1" src="images\flo1.jpg"></img>
         <img id="img2" src="images\flo2.jpg"></img>
         <img id="img3" src="images\flo3.jpg"></img>
      </div>

      <div>
         <p id="text1">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>

      <form action="#">
         <input type="button" id="chtext" value="Change Text Color"></input> 
         <input type="button" id="bccol" value="Change Background Color"></input> 
      </form>

      <div id="basket" style="border-style:solid">
         <p id="basketstat">The flower basket currently contains 0 flowers.</p>
      </div>
    <script src="{{ asset('js/dom.js') }}"></script>

<div class="nav-buttons">
  <button type="button" class="btn-previous" onclick="window.location.href='/uts1'">Previous</button>
  <button type="button" class="btn-next" onclick="alert('Ini halaman terakhir!')">Next</button>
</div>

<script>
  function goToPrevious() {
    window.location.href = '/uts1';
  }

  function goToNext() {
    alert("Ini halaman terakhir!");
  }
</script>
</script>
   </body>
</html>
