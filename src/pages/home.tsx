import { useRouter } from "next/router"
export default function after (){
console.log(useRouter().query)
 return(
		<>
		

 <div className="bg-gray-400">    
	 <header className="container mx-auto text-white">
		<div className="flex justify-between items-center">
			<h1 className="text-4xl font-semibold"></h1>
			<div>{'UserName ' + useRouter().query.input}</div>
		</div>
	 </header>
</div>

<div className="grid grid-rows-2 grid-flow-col ">
  <div className="row-span-3 border border-gray-600 ">
     <ul>
       <li><a href="home" className="block px-8 py-2 hover:bg-gray-600">HOME</a></li>
       <li><a href="user" className="block px-8 py-2 hover:bg-gray-600">ユーザー管理</a></li>
     </ul>
  </div>
  <div className="row-span-2 col-span-2 border border-gray-600 ...">
    <p>履歴</p>
   <table className="table-15">
     <thead className="border-collapse border border-slate-400 ...">
        <tr>
         <th>日付</th>
         <th>ユーザー</th>
         <th>内容</th>
        </tr>
     </thead>
     <tbody className="border-collapse border border-slate-400 ...">
        <tr>
          <th>2022/3/4</th>
          <th>user1</th>
          <th>ユーザーを作成しました</th>
        </tr>
        <tr>
          <th>2022/3/3</th>
          <th>user2</th>
          <th>ユーザーを作成しました</th>
        </tr>
        <tr>
          <th>2022/3/2</th>
          <th>user3</th>
          <th>ユーザーを作成しました</th>
        </tr>
     </tbody>
   </table>
  </div>
  </div>

 </>




)
}
