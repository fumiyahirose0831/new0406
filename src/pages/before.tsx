import Router from 'next/router'


export default function before (){
  console.log('こんにちは')

return(
		<>
		<div>こんにちは</div>
		<button onClick={() => Router.push({pathname: '/after', query: {name: '廣瀬'}}) }>Afterへ</button>
		</>
)
}
