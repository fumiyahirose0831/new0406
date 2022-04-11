import { useRouter } from "next/router"
export default function after (){
console.log(useRouter().query)
 return(
		<>
		

 <div class="bg-gray-400">    
　<header class="container mx-auto text-white">
     <div class="flex justify-between items-center">
      <h1 class="text-4xl font-semibold"></h1>
      <div>{'UserName ' + useRouter().query.input}</div>
     </div>
　</header>
</div>

<div class="grid grid-rows-2 grid-flow-col ">
 <div class="row-span-3 border border-gray-600 ">
     <ul>
       <li><a href="#" class="block px-8 py-2 hover:bg-gray-600">HOME</a></li>
  　　　<li><a href="#" class="block px-8 py-2 hover:bg-gray-600">ユーザー管理</a></li>
     </ul>
        </div>
        <div class="row-span-2 col-span-2 border border-gray-600 ...">
            <p>履歴</p>
　　　　　　　　　<table class="table-15">
            <thead　class="border-collapse border border-slate-400 ...">
                <tr>
                <th>日付</th>

                <th>ユーザー</th>
                <th>内容</th>
            </tr>
            </thead>

            <tbody　class="border-collapse border border-slate-400 ...">
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



		</>




)
}
