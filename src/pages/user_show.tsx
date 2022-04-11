// user
const user1 = () => {


return (  
<div >

<label class="relative block">
  <span class="sr-only">Search</span>
  <span class="absolute inset-y-0 left-0 flex items-center pl-2">
    <svg class="h-5 w-5 fill-slate-300" viewBox="0 0 20 20"><!-- ... --></svg>
  </span>
  <input class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Search for anything..." type="text" name="search"/>
</label>

<div class="bg-gray-400">
　<header class="container mx-auto text-white">
     <div class="flex justify-between items-center">
      <h1 class="text-4xl font-semibold"></h1>
	  <div>
       <h1>ユーザー名</h1>
	  </div>
	 </div>
　</header>
</div>


 <div class="grid grid-rows-3 grid-flow-col gap-4">
 <div class="row-span-3 border border-gray-600 ">
	 <ul>
       <li><a href="#" class="block px-8 py-2 hover:bg-gray-600">HOME</a></li>
  　　　<li><a href="#" class="block px-8 py-2 hover:bg-gray-600">ユーザー管理</a></li>
     </ul>
		</div>
		<div class="row-span-2 col-span-2 border border-gray-600 ...">
			<h1>履歴</h1>
			<table>
			<thead>
				<tr>
				<th>日付</th>
				<th>ユーザー</th>
				<th>内容</th>
			</tr>
			</thead>

			<tbody>
			<tr>
			<th>2022/3/４</th>
			<th>user１</th>
			<th>ユーザーを作成しました</th>
			</tr>
			<tr>
			<th>2022/3/３</th>
			<th>user２</th>
			<th>ユーザーを作成しました</th>
			</tr>
			<tr>
			<th>2022/3/2</th>
			<th>user３</th>
			<th>ユーザーを作成しました</th>
			</tr>

			</tbody>
		</table>

			</div>
		</div>





</div>
 );
};

export default user1;


