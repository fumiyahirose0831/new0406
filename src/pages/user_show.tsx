import Router from 'next/router'


export default function user_show (){
  console.log('こんにちは')

return(
<>
 <div className="bg-gray-400">    
 <header className="container mx-auto text-white">
   <div className="flex justify-between items-center">
		<h1 className="text-4xl font-semibold"></h1>
		<div>UserName</div>
   </div>
  </header>
 </div>

<div className="grid grid-rows-2 grid-flow-col ">
  <div className="row-span-3 border border-gray-600 ">
     <ul>
       <li><a href="user" className="block px-8 py-2 hover:bg-gray-600">HOME</a></li>
       <li><a href="user_show" className="block px-8 py-2 hover:bg-gray-600">ユーザー管理</a></li>
     </ul>
  </div>

<div className="row-span-2 col-span-2 border border-gray-600 ...">
 <span>検索</span>
  <div className="flex flex-row ...">
    <div className="text-gray-700 px-4 py-2  ">
	 <span>id</span>	
     <label for="text"></label>
     <input type="text" name="id" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" />
    </div>
    <div className="text-gray-700 px-4 py-2  ">
     <span>名前</span>	
	 <label for="text"></label>
     <input type="text" name="name" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" />
    </div>
    <div className="text-gray-700 px-4 py-2  ">
     <span>メールアドレス</span>			
      <label for="text"></label>
      <input type="email" name="email" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" />
    </div>
    <div className="text-gray-700 px-4 py-2  ">
      <span>権限</span>	
      <label for="text"></label>
      <input type="text" name="class" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"  />
    </div>
</div>
    <div className="text-gray-700 text-center px-4 py-2 ">

     <button className="bg-red-500 hover:bg-red-700  text-white font-bold py-2 px-4 rounded-full"
       >検索
     </button>
     
    </div>

	<span>ユーザー一覧</span>
    <table className="table-15">
     <thead className="border-collapse border border-slate-400 ...">
        <tr>
         <th>id</th>
         <th>名前</th>
         <th>メールアドレス</th>
		 <th>権限</th>
        </tr>
     </thead>
     <tbody className="border-collapse border border-slate-400 ">
        <tr>
         <th>id_1</th>
         <th>user1</th>
         <th>user1@gmail.com</th>
		 <th>管理者</th>
        </tr>
        <tr>
         <th>id_2</th>
         <th>user2</th>
         <th>user2@gmail.com</th>
		 <th>管理者</th>
        </tr>
        <tr>
         <th>id_3</th>
         <th>user3</th>
         <th>user3@gmail.com</th>
		 <th>ユーザー</th>
        </tr>
     </tbody>
   </table>
  </div>
  </div>

		</>
)
}
