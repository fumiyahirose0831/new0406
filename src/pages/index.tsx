
const Home = () => {


return (  
<div class="flex flex-col bg-gray-300">
<div class="box-border h-full w-full p-4 border-1 border-gray-400 bg-gray-200">
  <div class="h-30 w-30 bg-gray-200">
   <div class="text-gray-700 text-center bg-gray-200 px-2 py-1 m-1">
    <h1>ログイン</h1>
   </div>

  <form action="/send-data-here" method="post">



     <div class="text-gray-700 text-center bg-gray-200 px-4 py-2 m-2">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="id"></label>
      <input type="text" id="first" name="first" placeholder="メールアドレス/id" />
     </div>



    <div class="text-gray-700 text-center bg-gray-200 px-4 py-2 m-2">
     <label for="last"></label>
     <input type="password" id="last" name="last" placeholder="パスワード" />
    </div>

    <div class="text-gray-700 text-center bg-gray-200 px-4 py-2 m-2">
     <button class="bg-red-500 hover:bg-red-700  text-white font-bold py-2 px-4 rounded-full">
      ログイン
     </button>
    </div>

  </form>


</div>

  </div>
</div>







 );
};

export default Home;


