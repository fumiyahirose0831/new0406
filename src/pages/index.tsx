import Link from 'next/link';
import Router from 'next/router'
import  styles  from "../styles/Home.module.css";

const login = () => {

return (  
<>
<main className={styles.main}>
<form action="/send-data-here" method="post">
     <div className="text-gray-700 text-center bg-gray-200 px-4 py-2 ">
      <label className="block text-gray-700 text-sm font-bold mb-2" for="id"></label>
      <input type="text" id="first" name="first" placeholder="メールアドレス/id" />
     </div>

    <div className="text-gray-700 text-center bg-gray-200 px-4 py-2 ">
     <label for="pw"></label>
     <input type="password" id="last" name="pw" placeholder="パスワード" />
    </div>

    <div className="text-gray-700 text-center bg-gray-200 px-4 py-2 ">

     <button className="bg-red-500 hover:bg-red-700  text-white font-bold py-2 px-4 rounded-full">
      <Link href="/user"><a>ログイン</a></Link>
     </button>
     
    </div>
  </form>
</main>

<div className="flex flex-col bg-gray-300">
<div className="box-border h-full w-full p-4 border-1 border-gray-400 bg-gray-200">
  <div className="h-30 w-30 bg-gray-200">
   <div className="text-gray-700 text-center bg-gray-200 px-2 py-1 m-1">
    <h1>ログイン</h1>
   </div>
  
 

  <form action="/send-data-here" method="post">
     <div className="text-gray-700 text-center bg-gray-200 px-4 py-2 m-2">
      <label className="block text-gray-700 text-sm font-bold mb-2" for="id"></label>
      <input type="text" id="first" name="first" placeholder="メールアドレス/id" />
     </div>

    <div className="text-gray-700 text-center bg-gray-200 px-4 py-2 m-2">
     <label for="pw"></label>
     <input type="password" id="last" name="pw" placeholder="パスワード" />
    </div>

    <div className="text-gray-700 text-center bg-gray-200 px-4 py-2 m-2">

     <button className="bg-red-500 hover:bg-red-700  text-white font-bold py-2 px-4 rounded-full">
      <Link href="/user"><a>ログイン</a></Link>
     </button>
     
    </div>
  </form>


</div>

  </div>
</div>
</>
 );
};

export default login;


