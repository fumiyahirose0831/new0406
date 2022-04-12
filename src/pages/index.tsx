import Link from 'next/link';
import Router from 'next/router'
import  styles  from "../styles/Home.module.css";
import React, {useState} from 'react';

const login = () => {
  const [input, setInput] = useState<string>();

return (  
<>

<main className={styles.main}>
  

  <form action="/send-data-here" method="post">
     <div className="text-gray-700 text-center bg-gray-200 px-4 py-2 ">
      <label className="block text-gray-700 text-sm font-bold mb-2" for="id"></label>
      <input type="text" 
      value={input}
        onChange={(e) => setInput(e.target.value)} 


        placeholder="メールアドレス/id" />


     </div>

    <div className="text-gray-700 text-center bg-gray-200 px-4 py-2 ">
     <label for="pw"></label>
     <input type="password" id="last" name="pw" placeholder="パスワード" />
    </div>

    <div className="text-gray-700 text-center bg-gray-200 px-4 py-2 ">

     <button className="bg-red-500 hover:bg-red-700  text-white font-bold py-2 px-4 rounded-full"
       button onClick={() => Router.push({pathname: '/home', query: {input: input}}) }>ログイン
     </button>
     
    </div>
  </form>
</main>




<input>

</input>





</>
 );
};

export default login;


