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
		<p>ユーザー画面＞ユーザー詳細</p>
	<table className="table-15">
		<thead className="border-collapse border border-slate-400 ...">
			<tr>
			</tr>
		</thead>
		<tbody className="border-collapse border border-slate-200 ...">
			<tr>
				<td>id</td><td>{useRouter().query.id}</td>
			</tr>
			<tr>
				<td>名前</td><td>{useRouter().query.name}</td>
			</tr>
			<tr>
				<td>メールアドレス</td><td>{useRouter().query.email}</td>
            </tr>
			<tr>
				<td>権限</td><td>{useRouter().query.pass}</td>
			</tr>
		</tbody>
	</table>

		<button className="bg-red-500 hover:bg-red-700  text-white font-bold py-2 px-4 rounded-full">編集 </button>
		<button className=" bg-gray-100 hover:bg-gray-300  text-black font-bold py-2 px-4 rounded-full">戻る </button>
	</div>
	</div>

 </>




)
}
