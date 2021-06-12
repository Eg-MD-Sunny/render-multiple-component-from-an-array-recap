import './App.css';

function App() {
	const nayoks = ['Jasim','DeepJol','BappRaz','Omar Sani','Alamgir'];
	const nayoks01 = [
		{
			name:'Jasim',
		 	age:'56'
		},
		{
			name:'DeepJol',
		 	age:'61'
		},
		{
			name:'BappRaz',
		 	age:'15'
		},
		{
			name:'Omar Sani',
		 	age:'35'
		}
	];

  return (
	<div className="App">
		<header className="App-header">
			<h1 style={{color:'red'}}>Mapping Part One</h1>
			{
				nayoks.map(item => <Nayoks name={item}></Nayoks>)
			}
			<h1 style={{color:'red'}}>Mapping Part Two</h1>
			{
				nayoks01.map(item => <Nayoks name={item.name} age={item.age}></Nayoks>)
			}

		</header>
	</div>
  );
}

//======>>Create Component [Start]
function Nayoks(props){
	// console.log(props.name);
	const nayoksStyle = {
		border:'2px solid purple',
		margin:'20px',
		borderRadius:'7px'
	}
	return (
		<div style={nayoksStyle}>
			<h1>Ami Nayok- <span style={{color:'purple'}}>{props.name}</span></h1>
			<h3>I have done 5 movies in {props.age} years</h3>
		</div>
	)	
}
//======>>Create Component [End]

export default App;
